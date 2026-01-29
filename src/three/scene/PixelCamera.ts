import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export interface CameraConfig {
  fov?: number;
  aspect?: number;
  near?: number;
  far?: number;
  horizontalAngle?: number;
  verticalAngle?: number;
  distance?: number;
  target?: THREE.Vector3;
}

export class PixelCamera {
  public camera: THREE.PerspectiveCamera;
  public controls!: OrbitControls;

  private horizontalAngle: number;
  private verticalAngle: number;
  private distance: number;
  private target: THREE.Vector3;

  constructor(canvas: HTMLCanvasElement, config: CameraConfig = {}) {
    const {
      fov = 50,
      aspect = window.innerWidth / window.innerHeight,
      near = 0.1,
      far = 5000,
      horizontalAngle = 45,
      verticalAngle = 35,
      distance = 10,
      target = new THREE.Vector3(0, 0, 0),
    } = config;

    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.horizontalAngle = horizontalAngle;
    this.verticalAngle = verticalAngle;
    this.distance = distance;
    this.target = target;

    this.updatePosition();
    this.camera.lookAt(this.target);

    this.setupOrbitControls(canvas);
  }

  setAngle(horizontalDeg: number, verticalDeg: number): void {
    this.horizontalAngle = horizontalDeg;
    this.verticalAngle = verticalDeg;
    this.updatePosition();
  }

  setDistance(distance: number): void {
    this.distance = distance;
    this.updatePosition();
  }

  setTarget(target: THREE.Vector3): void {
    this.target.copy(target);
    this.camera.lookAt(this.target);
    this.controls.target.copy(this.target);
  }

  private setupOrbitControls(canvas: HTMLCanvasElement): void {
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = true;
    this.controls.enablePan = true;
    this.controls.target.copy(this.target);
  }

  private updatePosition(): void {
    const h = this.horizontalAngle * (Math.PI / 180);
    const v = this.verticalAngle * (Math.PI / 180);

    this.camera.position.set(
      this.distance * Math.cos(v) * Math.cos(h),
      this.distance * Math.sin(v),
      this.distance * Math.cos(v) * Math.sin(h),
    );

    this.camera.lookAt(this.target);
  }

  update(): void {
    this.controls.update();
  }

  onResize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  dispose(): void {
    this.controls.dispose();
  }
}
