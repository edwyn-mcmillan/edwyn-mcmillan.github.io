import * as THREE from "three";
import { WebGLRenderer, WebGLRenderTarget } from "three";
import { Pass, FullScreenQuad } from "three/addons";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import fragmentShader from "../shaders/pixelated.frag?raw";
import vertexShader from "../shaders/pixelated.vert?raw";
import { LAYER_DEFAULT } from "../sceneConfig";

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
  bloomIntensity: number;
  bloomThreshold: number;
  edgeDetectionEnabled?: boolean;
  bloomEnabled?: boolean;
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
  public bloomIntensity: number;
  public bloomThreshold: number;
  public edgeDetectionEnabled: boolean;
  public bloomEnabled: boolean;
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
    this.bloomIntensity = params.bloomIntensity;
    this.bloomThreshold = params.bloomThreshold;
    this.edgeDetectionEnabled = params.edgeDetectionEnabled ?? true;
    this.bloomEnabled = params.bloomEnabled ?? true;

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

  private getUniforms() {
    return (this.fsQuad.material as THREE.ShaderMaterial).uniforms;
  }

  updateUniforms() {
    const uniforms = this.getUniforms();

    uniforms.pixelSize.value = this.pixelSize;
    uniforms.toonSteps.value = this.toonSteps;
    uniforms.toonSoftness.value = this.toonSoftness;
    uniforms.bloomIntensity.value = this.bloomIntensity;
    uniforms.bloomThreshold.value = this.bloomThreshold;
    uniforms.edgeDetectionEnabled.value = this.edgeDetectionEnabled;
    uniforms.bloomEnabled.value = this.bloomEnabled;
  }

  updateCloudTime(time: number) {
    this.getUniforms().cloudTime.value = time;
  }

  render(renderer: WebGLRenderer) {
    this.updateRenderTargets();

    // Render full scene (all layers) for color
    renderer.setRenderTarget(this.rgbRenderTarget);
    renderer.render(this.scene, this.camera);

    // Render normals for edge detection — only default layer (excludes grass/lightning)
    // Skip entirely when edge detection is disabled (saves a full scene render)
    if (this.edgeDetectionEnabled) {
      renderer.setRenderTarget(this.normalRenderTarget);
      const savedLayers = this.camera.layers.mask;
      this.camera.layers.set(LAYER_DEFAULT);

      const savedShadowEnabled = renderer.shadowMap.enabled;
      renderer.shadowMap.enabled = false;

      const overrideMaterial_old = this.scene.overrideMaterial;
      this.scene.overrideMaterial = this.normalMaterial;
      renderer.render(this.scene, this.camera);
      this.scene.overrideMaterial = overrideMaterial_old;

      renderer.shadowMap.enabled = savedShadowEnabled;

      // Restore camera layers to see all objects
      this.camera.layers.mask = savedLayers;
    }

    const uniforms = this.getUniforms();
    uniforms.tDiffuse.value = this.rgbRenderTarget.texture;
    uniforms.tDepth.value = this.rgbRenderTarget.depthTexture;
    uniforms.tNormal.value = this.normalRenderTarget.texture;

    // Pass camera matrices for world-space reconstruction
    const cam = this.camera as THREE.PerspectiveCamera;
    uniforms.inverseProjectionMatrix.value.copy(cam.projectionMatrixInverse);
    uniforms.inverseViewMatrix.value.copy(cam.matrixWorld);

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

    const uniforms = this.getUniforms();
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
        bloomIntensity: { value: this.bloomIntensity },
        bloomThreshold: { value: this.bloomThreshold },
        edgeDetectionEnabled: { value: this.edgeDetectionEnabled },
        bloomEnabled: { value: this.bloomEnabled },
        cloudTime: { value: 0 },
        inverseProjectionMatrix: { value: new THREE.Matrix4() },
        inverseViewMatrix: { value: new THREE.Matrix4() },
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
