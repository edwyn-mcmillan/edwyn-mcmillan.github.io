import * as THREE from "three";
import fragmentShader from "./shaders/pixel.frag?raw";
import vertexShader from "./shaders/pixel.vert?raw";

export class PixelPass {
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  quad: THREE.Mesh;
  material: THREE.ShaderMaterial;

  constructor(target: THREE.WebGLRenderTarget) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: target.texture },
        resolution: {
          value: new THREE.Vector4(
            target.width,
            target.height,
            1 / target.width,
            1 / target.height,
          ),
        },
      },
      vertexShader,
      fragmentShader,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    this.quad = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.quad);
  }

  render(renderer: THREE.WebGLRenderer) {
    renderer.render(this.scene, this.camera);
  }
}
