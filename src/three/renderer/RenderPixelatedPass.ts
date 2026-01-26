import * as THREE from "three";
import { WebGLRenderer, WebGLRenderTarget } from "three";
import { Pass, FullScreenQuad } from "three/addons";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import fragmentShader from "./shaders/pixelated.frag?raw";
import vertexShader from "./shaders/pixelated.vert?raw";

/**
 * RenderPixelatedPass
 *
 * Based on "hello-threejs" by Kody J. King
 * https://github.com/KodyJKing/hello-threejs
 *
 * Original license: MIT
 *
 * Modifications:
 * - Integrated into Vite + React architecture
 * - Simplified render pipeline (no EffectComposer)
 * - TypeScript adjustments
 * - Added GUI controls for pixelSize, normalEdgeStrength, depthEdgeStrength
 */

export interface PixelatedPassParams {
  pixelSize?: number;
  normalEdgeStrength?: number;
  depthEdgeStrength?: number;
}

export class RenderPixelatedPass extends Pass {
  fsQuad: FullScreenQuad;
  resolution: THREE.Vector2;
  scene: THREE.Scene;
  camera: THREE.Camera;
  rgbRenderTarget: WebGLRenderTarget;
  normalRenderTarget: WebGLRenderTarget;
  normalMaterial: THREE.Material;

  public pixelSize: number;
  gui?: GUI;

  constructor(
    resolution: THREE.Vector2,
    scene: THREE.Scene,
    camera: THREE.Camera,
    params: PixelatedPassParams = {},
  ) {
    super();

    this.resolution = resolution;
    this.pixelSize = params.pixelSize ?? 1;

    this.fsQuad = new FullScreenQuad(this.material());
    this.scene = scene;
    this.camera = camera;

    this.rgbRenderTarget = pixelRenderTarget(
      resolution,
      THREE.RGBAFormat,
      true,
    );
    this.normalRenderTarget = pixelRenderTarget(
      resolution,
      THREE.RGBFormat,
      false,
    );
    this.normalMaterial = new THREE.MeshNormalMaterial();
  }

  createGUI(parentGUI?: GUI): GUI {
    const gui = parentGUI ? parentGUI.addFolder("Pixelated Pass") : new GUI();

    gui
      .add(this as any, "pixelSize", 0.5, 1.5, 0.01)
      .name("Pixel Size")
      .onChange(() => this.updateUniforms());

    if (!parentGUI) {
      gui.open();
    }

    this.gui = gui;
    return gui;
  }

  updateUniforms() {
    // @ts-ignore
    const uniforms = this.fsQuad.material.uniforms;

    uniforms.pixelSize.value = this.pixelSize;
  }

  render(renderer: WebGLRenderer) {
    this.updateRenderTargets();

    renderer.setRenderTarget(this.rgbRenderTarget);
    renderer.render(this.scene, this.camera);

    const overrideMaterial_old = this.scene.overrideMaterial;
    renderer.setRenderTarget(this.normalRenderTarget);
    this.scene.overrideMaterial = this.normalMaterial;
    renderer.render(this.scene, this.camera);
    this.scene.overrideMaterial = overrideMaterial_old;

    // @ts-ignore
    const uniforms = this.fsQuad.material.uniforms;
    uniforms.tDiffuse.value = this.rgbRenderTarget.texture;
    uniforms.tDepth.value = this.rgbRenderTarget.depthTexture;
    uniforms.tNormal.value = this.normalRenderTarget.texture;

    this.updateUniforms();

    renderer.setRenderTarget(null);
    this.fsQuad.render(renderer);
  }

  private lastPixelSize: number = 0;

  updateRenderTargets() {
    if (this.lastPixelSize === this.pixelSize) return;

    this.lastPixelSize = this.pixelSize;

    const pixelatedResolution = new THREE.Vector2(
      Math.floor(this.resolution.x / this.pixelSize),
      Math.floor(this.resolution.y / this.pixelSize),
    );

    this.rgbRenderTarget.dispose();
    this.normalRenderTarget.dispose();

    this.rgbRenderTarget = pixelRenderTarget(
      pixelatedResolution,
      THREE.RGBAFormat,
      true,
    );
    this.normalRenderTarget = pixelRenderTarget(
      pixelatedResolution,
      THREE.RGBFormat,
      false,
    );

    // @ts-ignore
    const uniforms = this.fsQuad.material.uniforms;
    uniforms.resolution.value.set(
      pixelatedResolution.x,
      pixelatedResolution.y,
      1 / pixelatedResolution.x,
      1 / pixelatedResolution.y,
    );
  }

  material() {
    return new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        tDepth: { value: null },
        tNormal: { value: null },
        resolution: {
          value: new THREE.Vector4(
            this.resolution.x,
            this.resolution.y,
            1 / this.resolution.x,
            1 / this.resolution.y,
          ),
        },
        pixelSize: { value: this.pixelSize },
      },
      vertexShader,
      fragmentShader,
    });
  }

  dispose() {
    this.gui?.destroy();
    this.rgbRenderTarget.dispose();
    this.normalRenderTarget.dispose();
    this.fsQuad.dispose();
  }
}

function pixelRenderTarget(
  resolution: THREE.Vector2,
  pixelFormat: THREE.PixelFormat,
  depthTexture: boolean,
) {
  const renderTarget = new WebGLRenderTarget(
    resolution.x,
    resolution.y,
    !depthTexture
      ? undefined
      : {
          depthTexture: new THREE.DepthTexture(resolution.x, resolution.y),
          depthBuffer: true,
        },
  );
  renderTarget.texture.format = pixelFormat;
  renderTarget.texture.minFilter = THREE.NearestFilter;
  renderTarget.texture.magFilter = THREE.NearestFilter;
  renderTarget.texture.generateMipmaps = false;
  renderTarget.stencilBuffer = false;
  return renderTarget;
}
