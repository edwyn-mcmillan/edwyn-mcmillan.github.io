uniform sampler2D grassTexture;
uniform vec3 emissiveColor;
uniform float emissiveIntensity;

varying vec2 vUv;
varying vec3 vColor;
varying vec3 vWorldPosition;

void main() {
    vec4 grassSample = texture2D(grassTexture, vUv);
    
    if (grassSample.a < 0.1) {
        discard;
    }
    
    // Blend grass sprite with ground lighting
    vec3 finalColor = grassSample.rgb * vColor;
    finalColor += emissiveColor * emissiveIntensity;
    
    gl_FragColor = vec4(finalColor, grassSample.a);
}