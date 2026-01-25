import * as THREE from "three";
import { PixelPass } from "./PixelPass";

export class PixelRenderer {
  renderer: THREE.WebGLRenderer;
  target: THREE.WebGLRenderTarget;
  pixelPass: PixelPass;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: "high-performance",
    });

    this.target = new THREE.WebGLRenderTarget(320, 180, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      depthBuffer: true,
    });

    this.pixelPass = new PixelPass(this.target);
  }

  render(scene: THREE.Scene, camera: THREE.Camera) {
    this.renderer.setRenderTarget(this.target);
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);
    this.pixelPass.render(this.renderer);
  }
}
