import * as THREE from "three";
import { RenderPixelatedPass } from "./renderer/RenderPixelatedPass";

// --- Cloud shadow sampler (mirrors pixelated.frag) ---
function _hash(px: number, py: number): number {
  return (((Math.sin(px * 127.1 + py * 311.7) * 43758.5453) % 1) + 1) % 1;
}
function _valueNoise(px: number, py: number): number {
  const ix = Math.floor(px), iy = Math.floor(py);
  const fx = px - ix, fy = py - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = _hash(ix, iy), b = _hash(ix + 1, iy);
  const c = _hash(ix, iy + 1), d = _hash(ix + 1, iy + 1);
  return a + (b - a) * ux + (c - a + (a - b - c + d) * ux) * uy;
}
function _fbm(px: number, py: number): number {
  let v = 0, amp = 1, freq = 1, max = 0;
  for (let i = 0; i < 4; i++) {
    v += _valueNoise(px * freq, py * freq) * amp;
    max += amp; amp *= 0.5; freq *= 2;
  }
  return v / max;
}
function sampleCloudShadow(wx: number, wz: number, t: number): number {
  const ux = wx * 0.02 + t * 0.04 + 3.7;
  const uy = wz * 0.02 + t * 0.015 + 9.2;
  const n = _fbm(ux, uy);
  const s = Math.max(0, Math.min(1, (n - 0.35) / 0.2));
  return 0.55 + s * s * (3 - 2 * s) * 0.45; // mix(0.55, 1.0, smoothstep)
}
import { ModelLoader } from "./scene/ModelLoader";
import { GrassSystem } from "./scene/GrassSystem";
import { LightningParticleSystem } from "./scene/LightningParticleSystem";
import { PixelCamera } from "./scene/PixelCamera";
import { GroundMaterial } from "./scene/GroundMaterial";
import { sceneConfig, LAYER_NO_EDGE_DETECTION } from "./sceneConfig";
import {
  type QualityTier,
  type QualitySettings,
  detectQualityTier,
  getQualitySettings,
} from "./QualityTier";

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

  private qualityTier!: QualityTier;
  private qualitySettings!: QualitySettings;
  private frameTimes: number[] = [];
  private tierDowngraded = false;

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

    // Detect quality tier and apply settings
    this.qualityTier = detectQualityTier(this.renderer);
    this.qualitySettings = getQualitySettings(this.qualityTier);
    this.applyQualitySettings();
    console.log(
      `[PixelScene] Quality tier: ${this.qualityTier}`,
      this.qualitySettings,
    );

    this.setupCamera(canvas);
    this.setupSceneLights();
    this.setupGround();
    this.setupShape();
    this.setupShapeLights();
    this.setupLightning();
    this.setupPillar();
    this.setupRocks();
    this.setupTrees();

    this.setupPixelPass();
    window.addEventListener("resize", () => this.onResize());
  }

  start(): void {
    this.pixelCamera.controls.enabled = true;
    this.pixelCamera.controls.enableZoom = false;
    this.pixelCamera.controls.enablePan = false;

    // Allow panning upward but never lower than the starting angle
    const polarAngle = this.pixelCamera.controls.getPolarAngle();
    this.pixelCamera.controls.minPolarAngle = 0;
    this.pixelCamera.controls.maxPolarAngle = polarAngle;

    // Store original camera state for zoom out
    this.originalCameraPos.copy(this.pixelCamera.camera.position);
    this.originalTarget.copy(this.pixelCamera.controls.target);

    this.pixelCamera.camera.layers.enable(LAYER_NO_EDGE_DETECTION);

    const loop = () => {
      const delta = this.clock.getDelta();

      if (this.zoomBlend < this.zoomBlendTarget) {
        this.zoomBlend = Math.min(
          this.zoomBlend + delta * sceneConfig.zoom.blendSpeed,
          this.zoomBlendTarget,
        );
      } else if (this.zoomBlend > this.zoomBlendTarget) {
        this.zoomBlend = Math.max(
          this.zoomBlend - delta * sceneConfig.zoom.blendSpeed,
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

      this.pixelPass.updateCloudTime(this.clock.elapsedTime);

      this.lightningSystem.setEmissionSource(this.shape.position);
      this.lightningSystem.update(delta);

      this.pixelPass.render(this.renderer);

      // Frame-time fallback: measure first 60 frames, downgrade if < 30 FPS
      if (!this.tierDowngraded && this.frameTimes.length < 60) {
        this.frameTimes.push(delta);
        if (this.frameTimes.length === 60) {
          const avg =
            this.frameTimes.reduce((a, b) => a + b, 0) /
            this.frameTimes.length;
          if (avg > 0.033) {
            this.downgradeTier();
          }
        }
      }

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
    const offset = sceneConfig.zoom.offsetDirection
      .clone()
      .normalize()
      .multiplyScalar(sceneConfig.zoom.offsetDistance);
    const target = this.shape.position.clone();
    const position = target.clone().add(offset);
    this.pixelCamera.transitionTo(
      position,
      target,
      sceneConfig.zoom.transitionDuration,
      {
        liveEndTarget: () => this.shape.position,
        liveEndPos: () => this.shape.position.clone().add(offset),
      },
    );
    this.animatePixelSize(
      sceneConfig.render.pixelSize,
      sceneConfig.render.zoomedPixelSize,
      sceneConfig.zoom.transitionDuration,
    );
  }

  zoomToGrass(): void {
    this.zoomed = false;
    this.zoomBlendTarget = 0;
    const { grassView } = sceneConfig;
    this.pixelCamera.transitionTo(
      grassView.cameraPosition.clone(),
      grassView.target.clone(),
      grassView.transitionDuration,
    );
  }

  zoomOut(): void {
    this.zoomed = false;
    this.zoomBlendTarget = 0;
    this.pixelCamera.transitionTo(
      this.originalCameraPos,
      this.originalTarget,
      sceneConfig.zoom.transitionDuration,
    );
    this.animatePixelSize(
      sceneConfig.render.zoomedPixelSize,
      sceneConfig.render.pixelSize,
      sceneConfig.zoom.transitionDuration,
    );
    // Re-enable orbit after transition completes
    setTimeout(() => {
      this.pixelCamera.controls.enabled = true;
    }, sceneConfig.zoom.reEnableDelay);
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

  private downgradeTier(): void {
    const tierOrder: QualityTier[] = ["high", "medium", "low"];
    const currentIdx = tierOrder.indexOf(this.qualityTier);
    if (currentIdx >= tierOrder.length - 1) return; // already at lowest

    this.tierDowngraded = true;
    this.qualityTier = tierOrder[currentIdx + 1];
    this.qualitySettings = getQualitySettings(this.qualityTier);
    console.warn(
      `[PixelScene] Performance below 30 FPS — downgrading to "${this.qualityTier}" tier`,
    );

    // Re-apply runtime-adjustable settings
    this.applyQualitySettings();
    this.pixelPass.edgeDetectionEnabled =
      this.qualitySettings.edgeDetectionEnabled;
    this.pixelPass.bloomEnabled = this.qualitySettings.bloomEnabled;
  }

  private applyQualitySettings(): void {
    const s = this.qualitySettings;
    this.renderer.shadowMap.type = s.shadowMapType;

    // Update shadow map size on all directional lights already in the scene
    this.scene.traverse((child) => {
      if (child instanceof THREE.DirectionalLight && child.shadow) {
        child.shadow.mapSize.set(s.shadowMapSize, s.shadowMapSize);
        if (child.shadow.map) {
          child.shadow.map.dispose();
          child.shadow.map = null!;
        }
      }
    });
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
    // Shadow map type is set by applyQualitySettings() after tier detection
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // DPR capped to 1 for all tiers: render targets are 320x180, higher DPR
    // only inflates the final fullscreen quad blit with zero visual benefit.
    this.renderer.setPixelRatio(1);
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
        bloomIntensity: sceneConfig.render.bloom.intensity,
        bloomThreshold: sceneConfig.render.bloom.threshold,
        edgeDetectionEnabled: this.qualitySettings.edgeDetectionEnabled,
        bloomEnabled: this.qualitySettings.bloomEnabled,
      },
    );
    this.pixelPass.renderToScreen = true;
  }

  private setupShape(): void {
    const { crystal, colors } = sceneConfig;
    this.shape = new THREE.Mesh(
      new THREE.IcosahedronGeometry(crystal.radius),
      new THREE.MeshPhongMaterial({
        color: colors.crystal,
        emissive: crystal.emissive,
        emissiveIntensity: crystal.emissiveIntensity,
        shininess: crystal.shininess,
        specular: crystal.specular,
      }),
    );
    this.shape.receiveShadow = true;
    this.shape.castShadow = true;
    this.scene.add(this.shape);
  }

  private animateShape(time: number): void {
    const { animation, baseY, light } = sceneConfig.crystal;
    const b = this.zoomBlend;

    const envelope =
      Math.sin(this.clock.elapsedTime * animation.cycleSpeed) * 0.5 + 0.5;
    const easedEnvelope = THREE.MathUtils.smoothstep(envelope, 0.1, 0.9);
    const baseRotSpeed = THREE.MathUtils.lerp(
      animation.slowSpin,
      animation.fastSpin,
      easedEnvelope,
    );
    const rotSpeed = THREE.MathUtils.lerp(
      baseRotSpeed,
      baseRotSpeed * animation.zoomedSpinDamping,
      b,
    );
    this.shape.rotation.y += rotSpeed * time;
    this.shape.rotation.x += rotSpeed * animation.rotationX * time;
    this.shape.rotation.z += rotSpeed * animation.rotationZ * time;

    const bounceHeight = THREE.MathUtils.lerp(
      animation.bounceHeight,
      animation.zoomedBounceHeight,
      b,
    );
    this.shape.position.y =
      baseY +
      Math.sin(this.clock.elapsedTime * animation.bounceSpeed) * bounceHeight;

    const distanceToGround = Math.max(
      this.shape.position.y - sceneConfig.ground.y,
      0.1,
    );
    this.shapeLight.position.copy(this.shape.position);

    const glowPulse =
      Math.sin(this.clock.elapsedTime * sceneConfig.crystal.glow.pulseSpeed) *
        0.5 +
      0.5;

    // shadowness: 0 = fully lit, 1 = fully in cloud shadow
    const shadow = sampleCloudShadow(
      this.shape.position.x,
      this.shape.position.z,
      this.clock.elapsedTime,
    );
    const shadowness = 1.0 - (shadow - 0.55) / 0.45;

    const { glow } = sceneConfig.crystal;
    const mat = this.shape.material as THREE.MeshPhongMaterial;
    mat.emissiveIntensity =
      sceneConfig.crystal.emissiveIntensity *
      (1.0 + glowPulse * glow.pulseAmount) *
      (1.0 + shadowness * glow.shadowEmissiveBoost);

    const baseLightIntensity = THREE.MathUtils.clamp(
      (1 / distanceToGround) * light.intensityScale,
      light.intensityMin,
      light.intensityMax,
    );
    this.shapeLight.intensity =
      baseLightIntensity * (1.0 + shadowness * light.shadowBoost);
  }

  private setupGround(): void {
    const { ground, colors, grass } = sceneConfig;
    const groundGeo = new THREE.PlaneGeometry(ground.size, ground.size);

    const groundMat = new GroundMaterial({
      color1: colors.ground1,
      color2: colors.ground2,
      color3: colors.ground3,
      noiseScale: grass.noiseScale,
      octaves: grass.octaves,
      persistence: grass.persistence,
    });

    this.ground = new THREE.Mesh(groundGeo, groundMat);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.position.y = ground.y;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);

    this.setupGrass();
  }

  private setupGrass(): void {
    const { grass, colors, ground } = sceneConfig;
    this.grassSystem = new GrassSystem({
      count: this.qualitySettings.grassCount,
      areaSize: grass.areaSize,
      groundY: ground.y,
      grassTexturePath: grass.texturePath,
      accentGrassTexturePath: grass.accentTexturePath,
      accentGrassRatio: grass.accentRatio,
      minHeight: grass.minHeight,
      maxHeight: grass.maxHeight,
      windStrength: grass.windStrength,
      windDirection: grass.windDirection,
      groundMesh: this.ground,
      groundColors: [colors.ground1, colors.ground2, colors.ground3],
      accentColor: colors.grassAccent,
    });

    const grassMeshes = this.grassSystem.getMeshes();
    grassMeshes.forEach((mesh) => this.scene.add(mesh));
  }

  private setupSceneLights(): void {
    const { lighting } = sceneConfig;

    this.scene.add(
      new THREE.AmbientLight(
        lighting.ambient.color,
        lighting.ambient.intensity,
      ),
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

    keyLight.shadow.mapSize.width = this.qualitySettings.shadowMapSize;
    keyLight.shadow.mapSize.height = this.qualitySettings.shadowMapSize;

    keyLight.shadow.bias = lighting.key.shadow.bias;
    keyLight.shadow.normalBias = 0.5;

    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(
      lighting.fill.color,
      lighting.fill.intensity,
    );
    fillLight.position.copy(lighting.fill.position);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(
      lighting.rim.color,
      lighting.rim.intensity,
    );
    rimLight.position.copy(lighting.rim.position);
    this.scene.add(rimLight);
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
    const { pillar: cfg } = sceneConfig;
    const pillarsLoader = new ModelLoader();
    await pillarsLoader.load(cfg.modelPath);
    const pillar = pillarsLoader.getChildModel(cfg.childIndex);

    ModelLoader.convertToToonMaterial(pillar, sceneConfig.colors.pillar);
    pillar.castShadow = true;
    pillar.receiveShadow = true;
    pillar.position.copy(cfg.position);
    pillar.scale.setScalar(cfg.scale);
    pillar.rotation.y = cfg.rotationY;

    this.pillar = pillar;
    this.scene.add(pillar);
  }

  private async setupRocks(): Promise<void> {
    const { rocks, ground } = sceneConfig;
    const loader = new ModelLoader();
    await loader.load(rocks.modelPath);
    const baseRock = loader.getChildModel(0);
    ModelLoader.setMaterial(
      baseRock,
      new THREE.MeshToonMaterial({ color: rocks.color }),
    );

    this.scatterInRing([baseRock], {
      count: rocks.count,
      radius: rocks.radius,
      radiusJitter: rocks.radiusJitter,
      angleJitter: rocks.angleJitter,
      scaleMin: rocks.scaleMin,
      scaleMax: rocks.scaleMax,
      groundY: ground.y,
    });
  }

  private async setupTrees(): Promise<void> {
    const { trees, ground } = sceneConfig;
    const loader = new ModelLoader();
    await loader.load(trees.modelPath);

    const baseMeshes = loader.getBakedMeshes(2, trees.meshCount);
    for (const mesh of baseMeshes) {
      ModelLoader.applyToMaterials(mesh, (mat) => {
        mat.side = THREE.DoubleSide;
        mat.transparent = false;
        mat.opacity = 1;
        if (mat.map) mat.map.premultiplyAlpha = false;
        if (mat.emissive) {
          mat.emissiveMap = mat.map;
          mat.emissive.set(0xffffff);
          mat.emissiveIntensity = 0.6;
        }
        mat.needsUpdate = true;
      });
    }

    this.scatterInRing(baseMeshes, {
      count: this.qualitySettings.treeCount,
      radius: trees.radius,
      radiusJitter: trees.radiusJitter,
      scaleMin: trees.scaleMin,
      scaleMax: trees.scaleMax,
      groundY: ground.y,
      minSpacing: 3,
      castShadow: this.qualitySettings.treesCastShadow,
    });
  }

  /** Scatter clones of base meshes in a ring around the origin. */
  private scatterInRing(
    bases: THREE.Object3D[],
    opts: {
      count: number;
      radius: number;
      radiusJitter: number;
      scaleMin: number;
      scaleMax: number;
      groundY: number;
      angleJitter?: number;
      minSpacing?: number;
      castShadow?: boolean;
    },
  ): void {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const placed: { x: number; z: number }[] = [];
    let attempts = 0;

    for (let i = 0; i < opts.count && attempts < opts.count * 3; attempts++) {
      const baseAngle = opts.minSpacing
        ? i * goldenAngle
        : (i / opts.count) * Math.PI * 2;
      const angle =
        baseAngle + (Math.random() - 0.5) * (opts.angleJitter ?? 0.4);
      const r = opts.radius + (Math.random() - 0.5) * 2 * opts.radiusJitter;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;

      if (opts.minSpacing) {
        const tooClose = placed.some(
          (p) => (p.x - x) ** 2 + (p.z - z) ** 2 < opts.minSpacing! ** 2,
        );
        if (tooClose) continue;
      }

      placed.push({ x, z });

      const clone = bases[i % bases.length].clone();
      const shouldCastShadow = opts.castShadow !== false;
      clone.traverse((child) => {
        child.castShadow = shouldCastShadow;
        child.receiveShadow = true;
      });
      clone.position.set(x, opts.groundY, z);
      clone.scale.setScalar(
        opts.scaleMin + Math.random() * (opts.scaleMax - opts.scaleMin),
      );
      clone.rotation.y = Math.random() * Math.PI * 2;
      this.scene.add(clone);
      i++;
    }
  }

  private setupLightning(): void {
    const { lightning, colors } = sceneConfig;
    this.lightningSystem = new LightningParticleSystem({
      boltsPerSecond: lightning.boltsPerSecond,
      boltLifetime: lightning.boltLifetime,
      maxBolts: lightning.maxBolts,
      color: colors.bolt,
      glowColor: colors.boltGlow,
      boltLength: lightning.boltLength,
      segmentsPerBolt: lightning.segmentsPerBolt,
      branchProbability: lightning.branchProbability,
      animationSpeed: lightning.animationSpeed,
      targets: lightning.targets,
      restrikeProbability: lightning.restrikeProbability,
      restrikeInterval: lightning.restrikeInterval,
    });

    this.scene.add(this.lightningSystem.getGroup());
  }
}
