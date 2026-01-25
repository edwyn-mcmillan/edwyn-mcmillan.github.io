import * as THREE from "three";
import { PixelRenderer } from "./renderer/PixelRenderer";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export class PixelScene {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  controls!: OrbitControls;
  renderer: PixelRenderer;

  frameId = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.setupScene();
    this.setupCamera();
    this.setupCameraControls(canvas);

    this.renderer = new PixelRenderer(canvas);

    /**
     * DEBUG Object
     */
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    );
    this.scene.add(cube);

    this.setupSceneLights();
  }

  start() {
    const loop = () => {
      this.controls.update();

      this.renderer.render(this.scene, this.camera);
      this.frameId = requestAnimationFrame(loop);
    };
    loop();
  }

  dispose() {
    cancelAnimationFrame(this.frameId);
  }

  private setupScene(): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x202020);
  }

  private setupCamera(): void {
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    this.camera.position.set(3, 3, 3);
    this.camera.lookAt(0, 0, 0);
  }

  private setupCameraControls(canvas: HTMLCanvasElement): void {
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = true;
    this.controls.enablePan = true;
  }

  private setupSceneLights() {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    this.scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(ambient);
  }
}
