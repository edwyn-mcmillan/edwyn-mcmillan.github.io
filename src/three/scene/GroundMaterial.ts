import * as THREE from "three";
import noiseGlsl from "../shaders/noise.glsl?raw";
import groundColorGlsl from "../shaders/groundColor.glsl?raw";
import cloudShadowGlsl from "../shaders/cloudShadow.glsl?raw";

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
    super({ color: params.color2 });

    this.onBeforeCompile = (shader) => {
      shader.uniforms.color1 = { value: params.color1 };
      shader.uniforms.color2 = { value: params.color2 };
      shader.uniforms.color3 = { value: params.color3 };
      shader.uniforms.noiseScale = { value: params.noiseScale };
      shader.uniforms.octaves = { value: params.octaves };
      shader.uniforms.persistence = { value: params.persistence };
      shader.uniforms.cloudTime = { value: 0 };

      // Add varying to pass world position from vertex to fragment shader
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        `
        varying vec3 vWorldPosition;
        void main() {
        `,
      );

      shader.vertexShader = shader.vertexShader.replace(
        "#include <worldpos_vertex>",
        `
        #include <worldpos_vertex>
        vWorldPosition = worldPosition.xyz;
        `,
      );

      // Add noise functions and ground color blending to fragment shader
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float noiseScale;
        uniform float octaves;
        uniform float persistence;
        uniform float cloudTime;
        varying vec3 vWorldPosition;

        ${noiseGlsl}
        ${groundColorGlsl}
        ${cloudShadowGlsl}

        void main() {
        `,
      );

      // Replace the diffuse color with ground color blending
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `
        #include <color_fragment>

        vec3 toneColor = sampleGroundColor(vWorldPosition.xz, noiseScale, octaves, persistence, color1, color2, color3);
        diffuseColor.rgb *= toneColor / color2;
        diffuseColor.rgb *= cloudShadow(vWorldPosition.xz, cloudTime);
        `,
      );

      this.userData.shader = shader;
    };
  }
}
