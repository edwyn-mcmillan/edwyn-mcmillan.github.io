uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform vec4 resolution;
uniform float pixelSize;
uniform int toonSteps;
uniform float toonSoftness;
uniform float cloudTime;
uniform float bloomIntensity;
uniform float bloomThreshold;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;

varying vec2 vUv;

// --- Noise / FBM / Cloud Shadow (inlined from noise.glsl + cloudShadow.glsl) ---

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p, float octaves, float persistence) {
    float value = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    float maxValue = 0.0;

    for (float i = 0.0; i < 8.0; i++) {
        if (i >= octaves) break;
        value += noise(p * frequency) * amplitude;
        maxValue += amplitude;
        amplitude *= persistence;
        frequency *= 2.0;
    }

    return value / maxValue;
}

float cloudShadow(vec2 worldXZ, float t) {
    vec2 uv = worldXZ * 0.02 + vec2(t * 0.04 + 3.7, t * 0.015 + 9.2);
    float n = fbm(uv, 4.0, 0.5);
    return mix(0.55, 1.0, smoothstep(0.35, 0.55, n));
}

// --- World position reconstruction from depth ---

vec3 reconstructWorldPos(vec2 uv, float depth) {
    // Screen UV to NDC
    vec4 ndc = vec4(uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    // NDC to view space
    vec4 viewPos = inverseProjectionMatrix * ndc;
    viewPos /= viewPos.w;
    // View space to world space
    vec4 worldPos = inverseViewMatrix * viewPos;
    return worldPos.xyz;
}

// Toon shading functions
float getLuminance(vec3 color) {
    return dot(color, vec3(0.2126, 0.7152, 0.0722));
}

vec3 applyToonShading(vec3 color, int steps, float softness) {
    float lum = getLuminance(color);

    // For very dark pixels, blend back to original to avoid crushing to black
    float darkBlend = smoothstep(0.0, 0.15, lum);

    float numSteps = max(float(steps), 2.0);
    float stepSize = 1.0 / numSteps;

    float stepIndex = floor(lum / stepSize);
    float lowerStep = stepIndex * stepSize;
    float upperStep = (stepIndex + 1.0) * stepSize;

    float stepPos = (lum - lowerStep) / stepSize;

    float smoothRange = clamp(softness, 0.0, 1.0);
    float smoothed = smoothstep(0.5 - smoothRange * 0.5, 0.5 + smoothRange * 0.5, stepPos);

    float finalLum = mix(lowerStep, upperStep, smoothed);
    finalLum = max(finalLum, stepSize * 0.5);

    vec3 steppedColor = color * (finalLum / max(lum, 0.001));

    float colorPreservation = 0.3;
    vec3 toonResult = mix(steppedColor, color, colorPreservation * stepPos);

    // Blend: dark areas pass through original color, bright areas get toon shading
    return mix(color, toonResult, darkBlend);
}

// Edge detection
float getDepth(int x, int y) {
    return texture2D(tDepth, vUv + vec2(x, y) * resolution.zw).r;
}

vec3 getNormal(int x, int y) {
    return texture2D(tNormal, vUv + vec2(x, y) * resolution.zw).rgb * 2.0 - 1.0;
}

float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {
    float depthDiff = getDepth(x, y) - depth;
    vec3 normalEdgeBias = vec3(1., 1., 1.);
    float normalDiff = dot(normal - getNormal(x, y), normalEdgeBias);
    float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);
    float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);
    return distance(normal, getNormal(x, y)) * depthIndicator * normalIndicator;
}

float depthEdgeIndicator() {
    float depth = getDepth(0, 0);
    float diff = 0.0;
    diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
    diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
    diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
    diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
    return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;
}

float normalEdgeIndicator() {
    float depth = getDepth(0, 0);
    vec3 normal = getNormal(0, 0);
    float indicator = 0.0;
    indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
    indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
    indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
    indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);
    return step(0.1, indicator);
}

float lum(vec4 color) {
    vec4 weights = vec4(.2126, .7152, .0722, .0);
    return dot(color, weights);
}

void main() {
    vec4 texel = texture2D(tDiffuse, vUv);

    // Reconstruct world position and apply cloud shadow before toon shading
    float depth = getDepth(0, 0);
    if (depth < 1.0) { // only shadow actual geometry, not sky
        vec3 worldPos = reconstructWorldPos(vUv, depth);
        float shadow = cloudShadow(worldPos.xz, cloudTime);
        texel.rgb *= shadow;
    }

    // Apply toon shading to the shadowed color
    vec3 toonColor = applyToonShading(texel.rgb, toonSteps, toonSoftness);

    // Calculate edge detection
    float normalEdgeCoefficient = .3;
    float depthEdgeCoefficient = .4;
    float dei = depthEdgeIndicator();
    float nei = normalEdgeIndicator();

    // Apply edges as darkening - edges should be pure black
    float coefficient = dei > 0.0 ? (1.0 - depthEdgeCoefficient * dei) : (1.0 + normalEdgeCoefficient * nei);

    // Mix between toon color and black based on edge strength
    vec3 finalColor = toonColor * coefficient;

    // Bloom: sample bright pixels in a cross pattern and add glow
    vec3 bloom = vec3(0.0);
    float totalWeight = 0.0;
    vec2 texelSize = resolution.zw;

    for (int x = -2; x <= 2; x++) {
        for (int y = -2; y <= 2; y++) {
            if (x == 0 && y == 0) continue;
            // Cross pattern: skip corners of the 5x5 grid
            if (abs(x) == 2 && abs(y) == 2) continue;
            if (abs(x) == 1 && abs(y) == 2) continue;
            if (abs(x) == 2 && abs(y) == 1) continue;

            float dist = length(vec2(float(x), float(y)));
            float weight = 1.0 / (1.0 + dist * dist);

            vec3 sampleColor = texture2D(tDiffuse, vUv + vec2(float(x), float(y)) * texelSize).rgb;
            float sampleLum = getLuminance(sampleColor);
            vec3 bright = sampleColor * max(0.0, sampleLum - bloomThreshold);
            bloom += bright * weight;
            totalWeight += weight;
        }
    }
    bloom /= totalWeight;
    finalColor += bloom * bloomIntensity;

    gl_FragColor = vec4(finalColor, texel.a);
}
