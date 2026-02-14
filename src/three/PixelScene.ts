import * as THREE from "three";
import { RenderPixelatedPass } from "./renderer/RenderPixelatedPass";
import { ModelLoader } from "./scene/ModelLoader";
import { GrassSystem } from "./scene/GrassSystem";
import { LightningParticleSystem } from "./scene/LightningParticleSystem";
import { PixelCamera } from "./scene/PixelCamera";
import { GroundMaterial } from "./scene/GroundMaterial";
import { sceneConfig, LAYER_NO_EDGE_DETECTION } from "./sceneConfig";

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

  clock = new THREE.Clock();
  frameId = 0;

  private originalCameraPos = new THREE.Vector3();
  private originalTarget = new THREE.Vector3();
  private zoomed = false;
  private zoomBlend = 0;
  private zoomBlendTarget = 0;

  private pixelSizeAnim: {
    from: number;
    to: number;
    duration: number;
    elapsed: number;
  } | null = null;

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
    this.pixelCamera.controls.enabled = true;
    this.pixelCamera.controls.enableZoom = false;
    this.pixelCamera.controls.enablePan = false;

    // Lock vertical tilt so user can only pan horizontally
    const polarAngle = this.pixelCamera.controls.getPolarAngle();
    this.pixelCamera.controls.minPolarAngle = polarAngle;
    this.pixelCamera.controls.maxPolarAngle = polarAngle;

    // Store original camera state for zoom out
    this.originalCameraPos.copy(this.pixelCamera.camera.position);
    this.originalTarget.copy(this.pixelCamera.controls.target);

    // Enable camera to see both default and no-edge-detection layers
    this.pixelCamera.camera.layers.enable(LAYER_NO_EDGE_DETECTION);

    const loop = () => {
      const delta = this.clock.getDelta();

      // Smoothly blend zoom damping (matched to 1.5s camera transition)
      const blendSpeed = 0.67;
      if (this.zoomBlend < this.zoomBlendTarget) {
        this.zoomBlend = Math.min(
          this.zoomBlend + delta * blendSpeed,
          this.zoomBlendTarget,
        );
      } else if (this.zoomBlend > this.zoomBlendTarget) {
        this.zoomBlend = Math.max(
          this.zoomBlend - delta * blendSpeed,
          this.zoomBlendTarget,
        );
      }

      this.animateShape(delta);

      // While zoomed, keep the controls target tracking the crystal
      if (this.zoomed && !this.pixelCamera.isTransitioning) {
        this.pixelCamera.controls.target.copy(this.shape.position);
      }

      this.pixelCamera.update(delta);
      this.updatePixelSize(delta);

      this.grassSystem.update(this.pixelCamera.camera, delta);

      const elapsed = this.clock.elapsedTime;
      if (this.ground.material instanceof THREE.Material) {
        const groundShader = (this.ground.material as THREE.MeshToonMaterial).userData.shader;
        if (groundShader?.uniforms.cloudTime) {
          groundShader.uniforms.cloudTime.value = elapsed;
        }
      }
      this.grassSystem.updateCloudTime(elapsed);

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

  zoomToShape(): void {
    this.zoomed = true;
    this.zoomBlendTarget = 1;
    const offset = new THREE.Vector3(2, 1, 3).normalize().multiplyScalar(1.5);
    const target = this.shape.position.clone();
    const position = target.clone().add(offset);
    this.pixelCamera.transitionTo(position, target, 1.5, {
      liveEndTarget: () => this.shape.position,
      liveEndPos: () => this.shape.position.clone().add(offset),
    });
    this.animatePixelSize(
      sceneConfig.render.pixelSize,
      sceneConfig.render.zoomedPixelSize,
      1.5,
    );
  }

  zoomOut(): void {
    this.zoomed = false;
    this.zoomBlendTarget = 0;
    this.pixelCamera.transitionTo(
      this.originalCameraPos,
      this.originalTarget,
      1.5,
    );
    this.animatePixelSize(
      sceneConfig.render.zoomedPixelSize,
      sceneConfig.render.pixelSize,
      1.5,
    );
    // Re-enable orbit after transition completes (controls re-enabled isn't automatic)
    setTimeout(() => {
      this.pixelCamera.controls.enabled = true;
    }, 1600);
  }

  private animatePixelSize(from: number, to: number, duration: number): void {
    this.pixelSizeAnim = { from, to, duration, elapsed: 0 };
  }

  private updatePixelSize(delta: number): void {
    if (!this.pixelSizeAnim) return;
    this.pixelSizeAnim.elapsed += delta;
    const t = Math.min(
      this.pixelSizeAnim.elapsed / this.pixelSizeAnim.duration,
      1,
    );
    const eased = t * t * (3 - 2 * t); // smoothstep
    this.pixelPass.pixelSize = THREE.MathUtils.lerp(
      this.pixelSizeAnim.from,
      this.pixelSizeAnim.to,
      eased,
    );
    if (t >= 1) this.pixelSizeAnim = null;
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
    this.pixelCamera = new PixelCamera(canvas, sceneConfig.camera);
  }

  private setupPixelPass(): void {
    this.pixelPass = new RenderPixelatedPass(
      sceneConfig.render.pixelResolution,
      this.scene,
      this.pixelCamera.camera,
      {
        pixelSize: sceneConfig.render.pixelSize,
        toonSoftness: sceneConfig.render.toonSoftness,
        toonSteps: sceneConfig.render.toonSteps,
      },
    );
    this.pixelPass.renderToScreen = true;
  }

  private setupShape(): void {
    this.shape = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8),
      new THREE.MeshPhongMaterial({
        color: sceneConfig.colors.crystal,
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
    const b = this.zoomBlend;
    const cycleSpeed = 1;
    const envelope = Math.sin(this.clock.elapsedTime * cycleSpeed) * 0.5 + 0.5;
    const easedEnvelope = THREE.MathUtils.smoothstep(envelope, 0.1, 0.9);
    const fastSpin = 2;
    const slowSpin = 0.5;
    const baseRotSpeed = THREE.MathUtils.lerp(
      slowSpin,
      fastSpin,
      easedEnvelope,
    );
    const rotSpeed = THREE.MathUtils.lerp(baseRotSpeed, baseRotSpeed * 0.08, b);
    this.shape.rotation.y += rotSpeed * time;
    this.shape.rotation.x += rotSpeed * 0.5 * time;
    this.shape.rotation.z += rotSpeed * 1.5 * time;

    const bounceHeight = THREE.MathUtils.lerp(1, 0.1, b);
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
      color1: sceneConfig.colors.ground1,
      color2: sceneConfig.colors.ground2,
      color3: sceneConfig.colors.ground3,
      noiseScale: sceneConfig.grass.noiseScale,
      octaves: sceneConfig.grass.octaves,
      persistence: sceneConfig.grass.persistence,
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
      count: sceneConfig.grass.count,
      areaSize: sceneConfig.grass.areaSize,
      groundY: -1.5,
      grassTexturePath: "assets/grass_leaf.png",
      accentGrassTexturePath: "assets/accent_leaf.png",
      accentGrassRatio: 0.05,
      minHeight: 0.3,
      maxHeight: 0.5,
      windStrength: 0.2,
      windDirection: new THREE.Vector2(0.8, 0.15),
      groundMesh: this.ground,
      groundColors: [
        sceneConfig.colors.ground1,
        sceneConfig.colors.ground2,
        sceneConfig.colors.ground3,
      ],
      accentColor: sceneConfig.colors.grassAccent,
    });

    const grassMeshes = this.grassSystem.getMeshes();
    grassMeshes.forEach((mesh) => this.scene.add(mesh));
  }

  private setupSceneLights(): void {
    const { lighting } = sceneConfig;

    this.scene.add(
      new THREE.AmbientLight(lighting.ambient.color, lighting.ambient.intensity),
    );

    const keyLight = new THREE.DirectionalLight(
      lighting.key.color,
      lighting.key.intensity,
    );
    keyLight.position.copy(lighting.key.position);
    keyLight.castShadow = true;

    keyLight.shadow.camera.left = -lighting.key.shadow.bounds;
    keyLight.shadow.camera.right = lighting.key.shadow.bounds;
    keyLight.shadow.camera.top = lighting.key.shadow.bounds;
    keyLight.shadow.camera.bottom = -lighting.key.shadow.bounds;
    keyLight.shadow.camera.near = lighting.key.shadow.near;
    keyLight.shadow.camera.far = lighting.key.shadow.far;

    keyLight.shadow.mapSize.width = lighting.key.shadow.mapSize;
    keyLight.shadow.mapSize.height = lighting.key.shadow.mapSize;

    keyLight.shadow.bias = lighting.key.shadow.bias;

    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(
      lighting.fill.color,
      lighting.fill.intensity,
    );
    fillLight.position.copy(lighting.fill.position);
    this.scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(
      lighting.ambient2.color,
      lighting.ambient2.intensity,
    );
    this.scene.add(ambientLight);
  }

  private setupShapeLights(): void {
    const { shape } = sceneConfig.lighting;
    this.shapeLight = new THREE.PointLight(
      shape.color,
      shape.intensity,
      shape.distance,
      shape.decay,
    );
    this.shapeLight.position.copy(this.shape.position);
    this.scene.add(this.shapeLight);
  }

  private async setupPillar(): Promise<void> {
    const pillarsLoader = new ModelLoader();
    await pillarsLoader.load("assets/stone_arch_pillars.glb");
    const pillar = pillarsLoader.getChildModel(5);

    ModelLoader.convertToToonMaterial(pillar, sceneConfig.colors.pillar);
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
      boltsPerSecond: 15,
      boltLifetime: 0.8,
      maxBolts: 15,
      color: sceneConfig.colors.bolt,
      glowColor: sceneConfig.colors.boltGlow,
      boltLength: 2,
      segmentsPerBolt: 5,
      branchProbability: 0.9,
      animationSpeed: 5,
      targets: sceneConfig.lightning.targets,
    });

    this.scene.add(this.lightningSystem.getGroup());
  }
}
