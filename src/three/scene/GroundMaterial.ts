import * as THREE from "three";

interface GroundParams {
  color1: THREE.Color;
  color2: THREE.Color;
  color3: THREE.Color;
  noiseScale: number;
  octaves: number;
  persistence: number;
}

export class GroundMaterial extends THREE.MeshToonMaterial {
  constructor(params: GroundParams) {
    const color1 = params.color1;
    const color2 = params.color2;
    const color3 = params.color3;
    const noiseScale = params.noiseScale;
    const octaves = params.octaves;
    const persistence = params.persistence;

    super({ color: color2 });

    this.onBeforeCompile = (shader) => {
      // Add uniforms
      shader.uniforms.color1 = { value: color1 };
      shader.uniforms.color2 = { value: color2 };
      shader.uniforms.color3 = { value: color3 };
      shader.uniforms.noiseScale = { value: noiseScale };
      shader.uniforms.octaves = { value: octaves };
      shader.uniforms.persistence = { value: persistence };

      // Add varying to pass world position from vertex to fragment shader
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        `
        varying vec3 vWorldPosition;
        void main() {
        `,
      );

      // Calculate and pass world position
      shader.vertexShader = shader.vertexShader.replace(
        "#include <worldpos_vertex>",
        `
        #include <worldpos_vertex>
        vWorldPosition = worldPosition.xyz;
        `,
      );

      // Add improved multi-octave noise to fragment shader
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float noiseScale;
        uniform float octaves;
        uniform float persistence;
        varying vec3 vWorldPosition;
        
        // Hash function for noise
        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        // Single octave noise
        float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            
            // Smooth interpolation
            f = f * f * (3.0 - 2.0 * f);
            
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        
        // Multi-octave fractal noise (FBM - Fractional Brownian Motion)
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
        
        void main() {
        `,
      );

      // Replace the diffuse color with improved 3-tone variation
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `
        #include <color_fragment>
        
        // Sample multi-octave noise
        float noiseValue = fbm(vWorldPosition.xz * noiseScale, octaves, persistence);
        
        // Add some variation to break up patterns
        float detailNoise = noise(vWorldPosition.xz * noiseScale * 5.0) * 0.1;
        noiseValue = clamp(noiseValue + detailNoise, 0.0, 1.0);
        
        // Blend between 3 colors with smoother transitions
        vec3 toneColor;
        
        // Use power curve for more natural distribution
        float adjustedNoise = pow(noiseValue, 0.9);
        
        if (adjustedNoise < 0.4) {
            // Darker regions
            float t = adjustedNoise / 0.4;
            toneColor = mix(color1, color2, smoothstep(0.0, 1.0, t));
        } else if (adjustedNoise < 0.7) {
            // Medium regions
            float t = (adjustedNoise - 0.4) / 0.3;
            toneColor = mix(color2, color3, smoothstep(0.0, 1.0, t));
        } else {
            // Lighter regions with subtle darkening at extremes
            float t = (adjustedNoise - 0.7) / 0.3;
            vec3 highlight = mix(color3, color2 * 1.15, t * 0.2);
            toneColor = highlight;
        }
        
        // Apply the tone variation to diffuse color
        diffuseColor.rgb *= toneColor / color2;
        `,
      );

      this.userData.shader = shader;
    };
  }
}
