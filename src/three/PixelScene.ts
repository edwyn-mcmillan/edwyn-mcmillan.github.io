import * as THREE from "three";
import { RenderPixelatedPass } from "./renderer/RenderPixelatedPass";
import { ModelLoader } from "./scene/ModelLoader";
import { GrassSystem } from "./scene/GrassSystem";
import { LightningParticleSystem } from "./scene/LightningParticleSystem";
import { PixelCamera } from "./scene/PixelCamera";
import { GroundMaterial } from "./scene/GroundMaterial";

export class PixelScene {
  scene!: THREE.Scene;
  pixelCamera!: PixelCamera;
  renderer!: THREE.WebGLRenderer;
  pixelPass!: RenderPixelatedPass;

  shape!: THREE.Mesh;
  shapeLight!: THREE.PointLight;
  ground!: THREE.Mesh;
  grassSystem!: GrassSystem;
  lightningSystem!: LightningParticleSystem;
  pillar!: THREE.Object3D;

  /**
   * Scene Parameters
   */
  private pixelResolution = new THREE.Vector2(320, 180);
  private pixelSize = 0.45;
  private toonSoftness = 0.05;
  private toonSteps = 8;

  private crystalColor = new THREE.Color(0x0000ff);
  private pillarColor = new THREE.Color(0xa0a0a0);
  private boltColor = new THREE.Color(0x00aaff);
  private boltGlowColor = new THREE.Color(0xccf0ff);

  private groundColor1 = new THREE.Color(0x4a7c2e); // Darkest
  private groundColor2 = new THREE.Color(0x64b830); // Medium
  private groundColor3 = new THREE.Color(0x7dd12e); // Lightest
  private accentColor = new THREE.Color(0x22b522);
  private grassCount = 25000;
  private grassArea = 65;
  private noiseScale = 0.05;
  private octaves = 4;
  private persistence = 0.5;

  clock = new THREE.Clock();
  frameId = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.setupScene();
    this.setupRenderer(canvas);
    this.setupCamera(canvas);
    this.setupSceneLights();
    this.setupGround();
    this.setupShape();
    this.setupShapeLights();
    this.setupLightning();
    this.setupPillar();

    this.setupPixelPass();
    window.addEventListener("resize", () => this.onResize());
  }

  start(): void {
    const loop = () => {
      const delta = this.clock.getDelta();
      this.animateShape(delta);

      this.pixelCamera.update();
      this.pixelCamera.controls.autoRotate = true;
      this.pixelCamera.controls.autoRotateSpeed = 0.2;
      this.pixelCamera.controls.enabled = false;

      this.grassSystem.update(this.pixelCamera.camera, delta);

      this.lightningSystem.setEmissionSource(this.shape.position);
      this.lightningSystem.update(delta);

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
    this.lightningSystem.dispose();
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
      distance: 40,
      target: new THREE.Vector3(0, 0, 0),
    });
  }

  private setupPixelPass(): void {
    const pixelatedPassParams = {
      pixelSize: this.pixelSize,
      toonSoftness: this.toonSoftness,
      toonSteps: this.toonSteps,
    };

    this.pixelPass = new RenderPixelatedPass(
      this.pixelResolution,
      this.scene,
      this.pixelCamera.camera,
      pixelatedPassParams,
    );
    this.pixelPass.renderToScreen = true;

    // this.pixelPass.createGUI(); // TODO: Dev flag
  }

  private setupShape(): void {
    this.shape = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8),
      new THREE.MeshPhongMaterial({
        color: this.crystalColor,
        emissive: 0x7d0000,
        shininess: 10,
        specular: 0x007dff,
      }),
    );
    this.shape.receiveShadow = true;
    this.shape.castShadow = true;
    this.scene.add(this.shape);
  }

  private animateShape(time: number): void {
    const cycleSpeed = 1;
    const envelope = Math.sin(this.clock.elapsedTime * cycleSpeed) * 0.5 + 0.5;
    const easedEnvelope = THREE.MathUtils.smoothstep(envelope, 0.1, 0.9);
    const fastSpin = 2;
    const slowSpin = 0.5;
    const rotSpeed = THREE.MathUtils.lerp(slowSpin, fastSpin, easedEnvelope);
    this.shape.rotation.y += rotSpeed * time;
    this.shape.rotation.x += rotSpeed * 0.5 * time;
    this.shape.rotation.z += rotSpeed * 1.5 * time;

    const bounceHeight = 1;
    const bounceSpeed = 1;
    this.shape.position.y =
      4.5 + Math.sin(this.clock.elapsedTime * bounceSpeed) * bounceHeight;

    const groundY = -1.5;
    const distanceToGround = Math.max(this.shape.position.y - groundY, 0.1);
    this.shapeLight.position.copy(this.shape.position);
    this.shapeLight.intensity = THREE.MathUtils.clamp(
      (1 / distanceToGround) * 0.5,
      50,
      150,
    );
  }

  private setupGround(): void {
    const groundGeo = new THREE.PlaneGeometry(450, 450);

    const groundMat = new GroundMaterial({
      color1: this.groundColor1,
      color2: this.groundColor2,
      color3: this.groundColor3,
      noiseScale: this.noiseScale,
      octaves: this.octaves,
      persistence: this.persistence,
    });

    this.ground = new THREE.Mesh(groundGeo, groundMat);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.position.y = -1.5;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);

    this.setupGrass();
  }

  private setupGrass(): void {
    this.grassSystem = new GrassSystem({
      count: this.grassCount,
      areaSize: this.grassArea,
      groundY: -1.5,
      grassTexturePath: "src/assets/grass_leaf.png",
      accentGrassTexturePath: "src/assets/accent_leaf.png",
      accentGrassRatio: 0.05,
      minHeight: 0.3,
      maxHeight: 0.5,
      windStrength: 0.2,
      windDirection: new THREE.Vector2(0.8, 0.15),
      groundMesh: this.ground,
      groundColors: [this.groundColor1, this.groundColor2, this.groundColor3],
      accentColor: this.accentColor,
    });

    // this.grassSystem.setGroundColors(

    const grassMeshes = this.grassSystem.getMeshes();
    grassMeshes.forEach((mesh) => this.scene.add(mesh));
  }

  private setupSceneLights(): void {
    this.scene.add(new THREE.AmbientLight(0x29364d, 0.5));

    const keyLight = new THREE.DirectionalLight(0xfffc9c, 3);
    keyLight.position.set(9, 4, 3);
    keyLight.castShadow = true;

    keyLight.shadow.camera.left = -30;
    keyLight.shadow.camera.right = 30;
    keyLight.shadow.camera.top = 30;
    keyLight.shadow.camera.bottom = -30;
    keyLight.shadow.camera.near = 0.1;
    keyLight.shadow.camera.far = 50;

    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;

    keyLight.shadow.bias = -0.0001;

    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x88aaff, 2.5);
    fillLight.position.set(-6, 2, 4);
    this.scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(0x88aaff, 1.25);
    this.scene.add(ambientLight);
  }

  private setupShapeLights(): void {
    this.shapeLight = new THREE.PointLight(0x00aaff, 0.5, 5, 1);
    this.shapeLight.position.copy(this.shape.position);
    this.scene.add(this.shapeLight);
  }

  private async setupPillar(): Promise<void> {
    const pillarsLoader = new ModelLoader();
    await pillarsLoader.load("src/assets/stone_arch_pillars.glb");
    const pillar = pillarsLoader.getChildModel(5);

    ModelLoader.convertToToonMaterial(pillar, this.pillarColor);
    pillar.castShadow = true;
    pillar.receiveShadow = false;
    pillar.position.set(3, -1.5, -2);
    pillar.scale.setScalar(3);
    pillar.rotation.y = Math.PI / 4;

    this.pillar = pillar;
    this.scene.add(pillar);
  }

  private setupLightning(): void {
    this.lightningSystem = new LightningParticleSystem({
      boltsPerSecond: 9,
      boltLifetime: 0.8,
      maxBolts: 15,
      color: this.boltColor,
      glowColor: this.boltGlowColor,
      boltLength: 2,
      segmentsPerBolt: 5,
      branchProbability: 0.9,
      animationSpeed: 5,
    });

    this.scene.add(this.lightningSystem.getGroup());
  }
}
