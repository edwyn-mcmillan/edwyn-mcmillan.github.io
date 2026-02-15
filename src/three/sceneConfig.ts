import * as THREE from "three";

export const LAYER_DEFAULT = 0;
export const LAYER_NO_EDGE_DETECTION = 1;

export const sceneConfig = {
  render: {
    pixelResolution: new THREE.Vector2(320, 180),
    pixelSize: 0.6,
    zoomedPixelSize: 1.5,
    toonSoftness: 0.05,
    toonSteps: 8,
  },

  colors: {
    crystal: new THREE.Color(0x0000ff),
    pillar: new THREE.Color(0xa0a0a0),
    bolt: new THREE.Color(0x00aaff),
    boltGlow: new THREE.Color(0xccf0ff),
    ground1: new THREE.Color(0x4a7c2e),
    ground2: new THREE.Color(0x64b830),
    ground3: new THREE.Color(0x7dd12e),
    grassAccent: new THREE.Color(0x22b522),
  },

  ground: {
    size: 450,
    y: -1.5,
  },

  crystal: {
    radius: 0.8,
    emissive: 0x1a0a66,
    emissiveIntensity: 0.8,
    shininess: 10,
    specular: 0x007dff,
    baseY: 4.5,
    animation: {
      cycleSpeed: 1,
      fastSpin: 2,
      slowSpin: 0.5,
      zoomedSpinDamping: 0.08,
      rotationX: 0.5,
      rotationZ: 1.5,
      bounceHeight: 1,
      zoomedBounceHeight: 0.1,
      bounceSpeed: 1,
    },
    light: {
      intensityScale: 0.5,
      intensityMin: 50,
      intensityMax: 150,
    },
  },

  grass: {
    count: 25000,
    areaSize: 100,
    noiseScale: 0.05,
    octaves: 4,
    persistence: 0.5,
    texturePath: "assets/grass_leaf.png",
    accentTexturePath: "assets/accent_leaf.png",
    accentRatio: 0.05,
    minHeight: 0.3,
    maxHeight: 0.5,
    windStrength: 0.2,
    windDirection: new THREE.Vector2(0.8, 0.15),
  },

  camera: {
    fov: 50,
    horizontalAngle: 65,
    verticalAngle: 36,
    distance: 40,
    target: new THREE.Vector3(0, 2, 0),
  },

  zoom: {
    blendSpeed: 0.67,
    offsetDirection: new THREE.Vector3(2, 1, 3),
    offsetDistance: 1.5,
    transitionDuration: 1.5,
    reEnableDelay: 1600,
  },

  lighting: {
    ambient: { color: 0x1a1a2e, intensity: 0.6 },
    key: {
      color: 0xffeabc,
      intensity: 2.5,
      position: new THREE.Vector3(15, 20, 10),
      shadow: {
        bounds: 50,
        near: 0.1,
        far: 80,
        mapSize: 2048,
        bias: -0.0001,
      },
    },
    fill: {
      color: 0x6688cc,
      intensity: 1.5,
      position: new THREE.Vector3(-10, 3, 8),
    },
    rim: {
      color: 0xffd4a0,
      intensity: 1.8,
      position: new THREE.Vector3(-8, 12, -15),
    },
    shape: { color: 0x4488ff, intensity: 1.2, distance: 8, decay: 1.5 },
  },

  lightning: {
    boltsPerSecond: 15,
    boltLifetime: 0.8,
    maxBolts: 15,
    boltLength: 2,
    segmentsPerBolt: 5,
    branchProbability: 0.9,
    animationSpeed: 5,
    targets: [
      new THREE.Vector3(3, 8, -2),
      new THREE.Vector3(3, 6, -2),
      new THREE.Vector3(3, 2, -2),
      new THREE.Vector3(-2, 9, 3),
      new THREE.Vector3(-2, 7, 3),
      new THREE.Vector3(-2, 3, 3),
      new THREE.Vector3(0, -2, 0),
      new THREE.Vector3(-2, -2, 2),
      new THREE.Vector3(2, -2, -2),
    ],
  },

  pillar: {
    modelPath: "assets/stone_arch_pillars.glb",
    childIndex: 5,
    position: new THREE.Vector3(3, -1.5, -2),
    scale: 3,
    rotationY: Math.PI / 4,
  },

  rocks: {
    modelPath: "assets/low_poly_rocks.glb",
    color: new THREE.Color(0x857e7e),
    count: 9,
    radius: 17,
    radiusJitter: 2,
    scaleMin: 4,
    scaleMax: 9,
    angleJitter: 0.25,
  },

  trees: {
    modelPath: "assets/low_poly_trees.glb",
    meshCount: 2,
    count: 120,
    radius: 45,
    radiusJitter: 20,
    scaleMin: 9,
    scaleMax: 12,
  },
} as const;
