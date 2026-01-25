import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { RenderPixelatedPass } from "./renderer/RenderPixelatedPass";

export class PixelScene {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  controls!: OrbitControls;

  pixelPass!: RenderPixelatedPass;

  shape!: THREE.Mesh;
  shapeLight!: THREE.PointLight;

  clock = new THREE.Clock();
  frameId = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.setupScene();
    this.setupRenderer(canvas);
    this.setupCamera();
    this.setupCameraControls(canvas);

    this.setupSceneLights();
    this.setupShape();
    this.setupGround();
    this.setupShapeLights();

    this.applyPixelPass();
    window.addEventListener("resize", () => this.onResize());
  }

  start(): void {
    const loop = () => {
      const delta = this.clock.getDelta();
      this.animateShape(delta);
      this.controls.update();
      this.pixelPass.render(this.renderer);
      this.frameId = requestAnimationFrame(loop);
    };
    loop();
  }

  dispose(): void {
    cancelAnimationFrame(this.frameId);
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private setupScene(): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x151729);
  }

  private setupRenderer(canvas: HTMLCanvasElement): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  private setupCamera(): void {
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    this.camera.position.set(5, 2.5, 3);
    this.camera.lookAt(0, 0, 0);
  }

  private setupCameraControls(canvas: HTMLCanvasElement): void {
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = true;
    this.controls.enablePan = true;
  }

  private applyPixelPass(): void {
    const pixelResolution = new THREE.Vector2(320, 180);
    this.pixelPass = new RenderPixelatedPass(
      pixelResolution,
      this.scene,
      this.camera,
    );
    this.pixelPass.renderToScreen = true;
  }

  private setupShape(): void {
    this.shape = new THREE.Mesh(
      new THREE.DodecahedronGeometry(),
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

    const bounceHeight = 0.15;
    const bounceSpeed = 1.5;
    this.shape.position.y =
      Math.sin(this.clock.elapsedTime * bounceSpeed) * bounceHeight;

    const groundY = -1;
    const distanceToGround = Math.max(this.shape.position.y - groundY, 0.1);

    this.shapeLight.position.copy(this.shape.position);
    this.shapeLight.intensity = THREE.MathUtils.clamp(
      0.5 + (1 / distanceToGround) * 0.5,
      10,
      100,
    );
  }

  private setupGround(): void {
    const texLoader = new THREE.TextureLoader();
    const tex_checker = this.pixelTexture(
      texLoader.load(
        "https://threejsfundamentals.org/threejs/resources/images/checker.png",
      ),
    );
    tex_checker.repeat.set(10, 10);

    const groundGeo = new THREE.PlaneGeometry(50, 50);
    const groundMat = new THREE.MeshStandardMaterial({
      map: tex_checker,
      roughness: 0.2,
      metalness: 0.05,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.5;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  private setupSceneLights(): void {
    this.scene.add(new THREE.AmbientLight(0x29364d, 1.5));

    const directionalLight = new THREE.DirectionalLight(0xfffc9c, 0.5);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(2048, 2048);
    this.scene.add(directionalLight);
  }

  private setupShapeLights(): void {
    this.shapeLight = new THREE.PointLight(0xffaa00, 0.5, 2, 2);
    this.shapeLight.position.copy(this.shape.position);
    this.scene.add(this.shapeLight);
  }

  private pixelTexture(tex: THREE.Texture): THREE.Texture {
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }
}
