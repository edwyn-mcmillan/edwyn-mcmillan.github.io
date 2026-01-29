import * as THREE from "three";
import fragmentShader from "../shaders/grass.frag?raw";
import vertexShader from "../shaders/grass.vert?raw";

export interface GrassShaderMaterialParams {
  grassTexture: THREE.Texture;
  groundColorMap: THREE.Texture;
  groundSize: THREE.Vector2;
  groundPosition: THREE.Vector3;
  emissiveColor?: THREE.Color;
  emissiveIntensity?: number;
}

/**
 * Custom shader material for grass that:
 * 1. Billboards quads to face camera
 * 2. Samples ground lighting
 * 3. Outputs flat normals to avoid edge highlighting in pixel pass
 */
export class GrassShaderMaterial extends THREE.ShaderMaterial {
  constructor(params: GrassShaderMaterialParams) {
    super({
      uniforms: {
        grassTexture: { value: params.grassTexture },
        groundColorMap: { value: params.groundColorMap },
        groundSize: { value: params.groundSize },
        groundPosition: { value: params.groundPosition },
        emissiveColor: {
          value: params.emissiveColor || new THREE.Color(0x1a3a1a),
        },
        emissiveIntensity: { value: params.emissiveIntensity ?? 0.05 },
        cameraPosition: { value: new THREE.Vector3() },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: true,
      alphaTest: 0.1,
    });

    this.onBeforeRender = (_renderer, _scene, camera) => {
      this.uniforms.cameraPosition.value.copy(camera.position);
    };
  }
}
