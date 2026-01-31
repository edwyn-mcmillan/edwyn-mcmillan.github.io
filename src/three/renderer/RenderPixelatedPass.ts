import * as THREE from "three";
import { WebGLRenderer, WebGLRenderTarget } from "three";
import { Pass, FullScreenQuad } from "three/addons";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import fragmentShader from "../shaders/pixelated.frag?raw";
import vertexShader from "../shaders/pixelated.vert?raw";

/**
 * RenderPixelatedPass
 *
 * Based on "hello-threejs" by Kody J. King
 * https://github.com/KodyJKing/hello-threejs
 *
 * Original license: MIT
 *
 * Modifications:
 * - Integrated into React architecture
 * - Added additional shader logic for toon lighting effect
 * - Simplified render pipeline (no EffectComposer)
 * - TypeScript adjustments
 * - Added GUI controls for pixelSize, toonSteps, toonSoftness
 */

export interface PixelatedPassParams {
  pixelSize: number;
  toonSteps: number;
  toonSoftness: number;
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
  public toonSteps: number;
  public toonSoftness: number;
  gui?: GUI;

  constructor(
    resolution: THREE.Vector2,
    scene: THREE.Scene,
    camera: THREE.Camera,
    params: PixelatedPassParams,
  ) {
    super();

    this.resolution = resolution;
    this.pixelSize = params.pixelSize;
    this.toonSteps = params.toonSteps;
    this.toonSoftness = params.toonSoftness;

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
    const gui = parentGUI ? parentGUI.addFolder("Pixelated + Toon") : new GUI();

    gui
      .add(this as any, "pixelSize", 0.1, 2, 0.01)
      .name("Pixel Size")
      .onChange(() => this.updateUniforms());

    gui
      .add(this as any, "toonSteps", 2, 10, 1)
      .name("Toon Steps")
      .onChange(() => this.updateUniforms());

    gui
      .add(this as any, "toonSoftness", 0.0, 0.3, 0.01)
      .name("Toon Softness")
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
    uniforms.toonSteps.value = this.toonSteps;
    uniforms.toonSoftness.value = this.toonSoftness;
  }

  render(renderer: WebGLRenderer) {
    this.updateRenderTargets();

    renderer.setRenderTarget(this.rgbRenderTarget);
    renderer.render(this.scene, this.camera);
    renderer.setRenderTarget(this.normalRenderTarget);

    const grassObjects: any[] = [];
    const lightningObjects: any[] = [];
    this.scene.traverse((obj: any) => {
      if (obj.isGrass) {
        grassObjects.push(obj);
        obj.visible = false;
      }
      if (obj.isLightning) {
        lightningObjects.push(obj);
        obj.visible = false;
      }
    });

    // Render normals for everything except grass and lightning
    const overrideMaterial_old = this.scene.overrideMaterial;
    this.scene.overrideMaterial = this.normalMaterial;
    renderer.render(this.scene, this.camera);
    this.scene.overrideMaterial = overrideMaterial_old;

    // Restore grass and lightning visibility
    grassObjects.forEach((obj) => (obj.visible = true));
    lightningObjects.forEach((obj) => (obj.visible = true));

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
        toonSteps: { value: this.toonSteps },
        toonSoftness: { value: this.toonSoftness },
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
