import * as THREE from "three";
import { RenderPixelatedPass } from "./renderer/RenderPixelatedPass";
import { GrassSystem } from "./scene/GrassSystem";
import { PixelCamera } from "./scene/PixelCamera";

export class PixelScene {
  scene!: THREE.Scene;
  pixelCamera!: PixelCamera;
  renderer!: THREE.WebGLRenderer;
  pixelPass!: RenderPixelatedPass;

  shape!: THREE.Mesh;
  shapeLight!: THREE.PointLight;
  grassSystem!: GrassSystem;

  clock = new THREE.Clock();
  frameId = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.setupScene();
    this.setupRenderer(canvas);
    this.setupCamera(canvas);
    this.setupSceneLights();
    this.setupGround();
    this.setupGrass();
    this.setupShape();
    this.setupShapeLights();

    this.applyPixelPass();

    window.addEventListener("resize", () => this.onResize());
  }

  start(): void {
    const loop = () => {
      const delta = this.clock.getDelta();
      this.animateShape(delta);
      this.pixelCamera.update();
      this.grassSystem.update(this.pixelCamera.camera);
      this.pixelPass.render(this.renderer);
      this.frameId = requestAnimationFrame(loop);
    };
    loop();
  }

  dispose(): void {
    cancelAnimationFrame(this.frameId);
    this.pixelCamera.dispose();
    this.pixelPass.dispose();
    this.grassSystem.dispose();
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.pixelCamera.onResize(width, height);
    this.renderer.setSize(width, height);
  }

  private setupScene(): void {
    this.scene = new THREE.Scene();
  }

  private setupRenderer(canvas: HTMLCanvasElement): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  private setupCamera(canvas: HTMLCanvasElement): void {
    this.pixelCamera = new PixelCamera(canvas, {
      fov: 50,
      horizontalAngle: 45,
      verticalAngle: 30,
      distance: 20,
      target: new THREE.Vector3(0, 0, 0),
    });
  }

  private applyPixelPass(): void {
    const pixelResolution = new THREE.Vector2(320, 180);
    this.pixelPass = new RenderPixelatedPass(
      pixelResolution,
      this.scene,
      this.pixelCamera.camera,
    );
    this.pixelPass.renderToScreen = true;
    this.pixelPass.createGUI();
  }

  private setupShape(): void {
    this.shape = new THREE.Mesh(
      new THREE.IcosahedronGeometry(),
      new THREE.MeshPhongMaterial({
        color: 0xff0000,
        emissive: 0x7d0000,
        shininess: 100,
        specular: 0xffffff,
      }),
    );
    this.shape.receiveShadow = true;
    this.shape.castShadow = true;
    this.scene.add(this.shape);
  }

  private animateShape(time: number): void {
    if (!this.shape) return;

    this.shape.rotation.y += 0.3 * time;
    this.shape.rotation.x += 0.15 * time;

    const bounceHeight = 1.5;
    const bounceSpeed = 1.5;
    this.shape.position.y =
      1.5 + Math.sin(this.clock.elapsedTime * bounceSpeed) * bounceHeight;

    const groundY = -1.5;
    const distanceToGround = Math.max(this.shape.position.y - groundY, 0.1);

    this.shapeLight.position.copy(this.shape.position);
    this.shapeLight.intensity = THREE.MathUtils.clamp(
      (1 / distanceToGround) * 0.5,
      100,
      500,
    );
  }

  private setupGround(): void {
    const groundGeo = new THREE.PlaneGeometry(500, 500);
    const groundMat = new THREE.MeshToonMaterial({
      color: 0x5b943d,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.5;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  private setupSceneLights(): void {
    this.scene.add(new THREE.AmbientLight(0x29364d, 0.5));

    const keyLight = new THREE.DirectionalLight(0xfffc9c, 3);
    keyLight.position.set(8, 3, 2);
    keyLight.castShadow = true;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x88aaff, 2.5);
    fillLight.position.set(-6, 2, 4);
    this.scene.add(fillLight);
  }

  private setupShapeLights(): void {
    this.shapeLight = new THREE.PointLight(0xffaa00, 0.5, 2, 2);
    this.shapeLight.position.copy(this.shape.position);
    this.scene.add(this.shapeLight);
  }

  private setupGrass(): void {
    this.grassSystem = new GrassSystem({
      count: 9000,
      areaSize: 40,
      groundY: -1.5,
      grassColor: new THREE.Color(0x5b943d),
      minHeight: 0.5,
      maxHeight: 0.8,
    });

    this.scene.add(this.grassSystem.getMesh());
  }
}
