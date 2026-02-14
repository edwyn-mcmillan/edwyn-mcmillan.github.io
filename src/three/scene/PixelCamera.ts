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

interface CameraTransition {
  startPos: THREE.Vector3;
  endPos: THREE.Vector3;
  startTarget: THREE.Vector3;
  endTarget: THREE.Vector3;
  /** Optional live-tracking functions — called each frame to update end values */
  liveEndPos?: () => THREE.Vector3;
  liveEndTarget?: () => THREE.Vector3;
  duration: number;
  elapsed: number;
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

export class PixelCamera {
  public camera: THREE.PerspectiveCamera;
  public controls!: OrbitControls;

  private horizontalAngle: number;
  private verticalAngle: number;
  private distance: number;
  private target: THREE.Vector3;
  private baseFov: number;
  private maxHFov: number;

  private transition: CameraTransition | null = null;

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

    this.baseFov = fov;
    // Lock max horizontal FOV to what 16:9 would produce at the base vertical FOV
    const referenceAspect = 16 / 9;
    this.maxHFov =
      2 *
      Math.atan(Math.tan((fov * Math.PI) / 360) * referenceAspect);

    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.horizontalAngle = horizontalAngle;
    this.verticalAngle = verticalAngle;
    this.distance = distance;
    this.target = target;

    this.clampFov(aspect);

    this.updatePosition();
    this.camera.lookAt(this.target);

    this.setupOrbitControls(canvas);
  }

  get isTransitioning(): boolean {
    return this.transition !== null;
  }

  transitionTo(
    position: THREE.Vector3,
    target: THREE.Vector3,
    duration = 1.5,
    options?: {
      liveEndPos?: () => THREE.Vector3;
      liveEndTarget?: () => THREE.Vector3;
    },
  ): void {
    this.transition = {
      startPos: this.camera.position.clone(),
      endPos: position.clone(),
      startTarget: this.controls.target.clone(),
      endTarget: target.clone(),
      liveEndPos: options?.liveEndPos,
      liveEndTarget: options?.liveEndTarget,
      duration,
      elapsed: 0,
    };
    this.controls.enabled = false;
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

  update(delta?: number): void {
    if (this.transition && delta) {
      // Update values from live trackers if provided
      if (this.transition.liveEndPos) {
        this.transition.endPos.copy(this.transition.liveEndPos());
      }
      if (this.transition.liveEndTarget) {
        this.transition.endTarget.copy(this.transition.liveEndTarget());
      }


      this.transition.elapsed += delta;
      const t = Math.min(this.transition.elapsed / this.transition.duration, 1);
      const eased = smoothstep(t);

      this.camera.position.lerpVectors(
        this.transition.startPos,
        this.transition.endPos,
        eased,
      );
      this.controls.target.lerpVectors(
        this.transition.startTarget,
        this.transition.endTarget,
        eased,
      );

      if (t >= 1) {
        this.camera.position.copy(this.transition.endPos);
        this.controls.target.copy(this.transition.endTarget);
        this.transition = null;
      }
    }

    this.controls.update();
  }

  onResize(width: number, height: number): void {
    const aspect = width / height;
    this.camera.aspect = aspect;
    this.clampFov(aspect);
    this.camera.updateProjectionMatrix();
  }

  private clampFov(aspect: number): void {
    const hFov =
      2 * Math.atan(Math.tan((this.baseFov * Math.PI) / 360) * aspect);
    if (hFov > this.maxHFov) {
      // Derive a smaller vertical FOV that keeps horizontal FOV at the cap
      this.camera.fov =
        (2 * Math.atan(Math.tan(this.maxHFov / 2) / aspect) * 180) / Math.PI;
    } else {
      this.camera.fov = this.baseFov;
    }
  }

  dispose(): void {
    this.controls.dispose();
  }
}
