import * as THREE from "three";

export type QualityTier = "low" | "medium" | "high";

export interface QualitySettings {
  shadowMapSize: number;
  shadowMapType: THREE.ShadowMapType;
  grassCount: number;
  treeCount: number;
  treesCastShadow: boolean;
  bloomEnabled: boolean;
  edgeDetectionEnabled: boolean;
}

const TIER_SETTINGS: Record<QualityTier, QualitySettings> = {
  low: {
    shadowMapSize: 1024,
    shadowMapType: THREE.BasicShadowMap,
    grassCount: 5000,
    treeCount: 80,
    treesCastShadow: true,
    bloomEnabled: true,
    edgeDetectionEnabled: true,
  },
  medium: {
    shadowMapSize: 2048,
    shadowMapType: THREE.PCFShadowMap,
    grassCount: 15000,
    treeCount: 100,
    treesCastShadow: true,
    bloomEnabled: true,
    edgeDetectionEnabled: true,
  },
  high: {
    shadowMapSize: 4096,
    shadowMapType: THREE.PCFSoftShadowMap,
    grassCount: 25000,
    treeCount: 120,
    treesCastShadow: true,
    bloomEnabled: true,
    edgeDetectionEnabled: true,
  },
};

export function getQualitySettings(tier: QualityTier): QualitySettings {
  return { ...TIER_SETTINGS[tier] };
}

export function detectQualityTier(renderer: THREE.WebGLRenderer): QualityTier {
  let score = 0;

  // GPU capability signals
  const gl = renderer.getContext();
  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  const gpuRenderer = debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    : "";

  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  if (maxTextureSize >= 16384) score += 2;
  else if (maxTextureSize >= 8192) score += 1;

  // CPU core count
  const cores = navigator.hardwareConcurrency ?? 2;
  if (cores >= 8) score += 2;
  else if (cores >= 4) score += 1;

  // Device pixel ratio as a proxy for device class
  if (window.devicePixelRatio <= 1) score += 0;
  else if (window.devicePixelRatio <= 2) score += 1;
  else score += 0; // 3x+ DPR often means mobile with limited GPU

  // Mobile detection
  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    ("ontouchstart" in window && cores <= 4);
  if (isMobile) score -= 2;

  // Known weak GPUs
  const gpuLower = gpuRenderer.toLowerCase();
  if (
    gpuLower.includes("mali") ||
    gpuLower.includes("adreno 5") ||
    gpuLower.includes("powervr") ||
    gpuLower.includes("intel hd")
  ) {
    score -= 1;
  }
  if (score <= 1) return "low";
  if (score <= 3) return "medium";
  return "high";
}
