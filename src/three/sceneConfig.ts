import * as THREE from "three";

export const LAYER_DEFAULT = 0;
export const LAYER_NO_EDGE_DETECTION = 1;

export const sceneConfig = {
  render: {
    pixelResolution: new THREE.Vector2(320, 180),
    pixelSize: 0.45,
    zoomedPixelSize: 1.2,
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

  grass: {
    count: 25000,
    areaSize: 100,
    noiseScale: 0.05,
    octaves: 4,
    persistence: 0.5,
  },

  camera: {
    fov: 50,
    horizontalAngle: 65,
    verticalAngle: 36,
    distance: 40,
    target: new THREE.Vector3(0, 2, 0),
  },

  lighting: {
    ambient: { color: 0x29364d, intensity: 0.5 },
    key: {
      color: 0xfffc9c,
      intensity: 3,
      position: new THREE.Vector3(9, 4, 3),
      shadow: {
        bounds: 30,
        near: 0.1,
        far: 50,
        mapSize: 2048,
        bias: -0.0001,
      },
    },
    fill: {
      color: 0x88aaff,
      intensity: 2.5,
      position: new THREE.Vector3(-6, 2, 4),
    },
    ambient2: { color: 0x88aaff, intensity: 1.25 },
    shape: { color: 0x00aaff, intensity: 0.5, distance: 5, decay: 1 },
  },

  lightning: {
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
} as const;
