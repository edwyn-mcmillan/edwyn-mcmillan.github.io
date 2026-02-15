uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform sampler2D tNormal;
uniform vec4 resolution;
uniform float pixelSize;
uniform int toonSteps;
uniform float toonSoftness;

varying vec2 vUv;

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
    
    // Apply toon shading to the original color first
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
    
    gl_FragColor = vec4(finalColor, texel.a);
}