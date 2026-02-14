import * as THREE from "three";
import { LAYER_NO_EDGE_DETECTION } from "../sceneConfig";

export interface LightningParticleSystemParams {
  boltsPerSecond: number;
  boltLifetime: number;
  maxBolts: number;
  color: THREE.Color;
  glowColor: THREE.Color;
  boltLength: number;
  segmentsPerBolt: number;
  branchProbability: number;
  animationSpeed: number;
  targets: readonly THREE.Vector3[];
}

interface LightningBolt {
  segments: THREE.Vector3[];
  branches: THREE.Vector3[][];
  age: number;
  lifetime: number;
  progress: number;
  line: THREE.LineSegments;
}

export class LightningParticleSystem {
  private bolts: LightningBolt[] = [];
  private group = new THREE.Group();
  private params: LightningParticleSystemParams;
  private emissionSource = new THREE.Vector3();
  private emissionAccumulator = 0;

  constructor(params: LightningParticleSystemParams) {
    this.params = params;
    this.group = new THREE.Group();
    this.group.layers.set(LAYER_NO_EDGE_DETECTION);
  }

  setEmissionSource(position: THREE.Vector3) {
    this.emissionSource.copy(position);
  }

  update(delta: number) {
    this.emissionAccumulator += delta * this.params.boltsPerSecond;
    const emitCount = Math.floor(this.emissionAccumulator);
    this.emissionAccumulator -= emitCount;

    for (let i = 0; i < emitCount; i++) {
      if (this.bolts.length < this.params.maxBolts) {
        this.emitBolt();
      }
    }

    for (let i = this.bolts.length - 1; i >= 0; i--) {
      const bolt = this.bolts[i];
      bolt.age += delta;
      bolt.progress += (delta / bolt.lifetime) * this.params.animationSpeed;

      if (bolt.age >= bolt.lifetime) {
        this.group.remove(bolt.line);
        bolt.line.geometry.dispose();
        (bolt.line.material as THREE.Material).dispose();
        this.bolts.splice(i, 1);
        continue;
      }

      this.updateBoltGeometry(bolt);
    }
  }

  private emitBolt() {
    const segments: THREE.Vector3[] = [];
    const branches: THREE.Vector3[][] = [];

    let current = this.emissionSource.clone();
    segments.push(current.clone());

    const target: THREE.Vector3 =
      this.params.targets[
        Math.floor(Math.random() * this.params.targets.length)
      ];
    const direction: THREE.Vector3 = target.clone().sub(current).normalize();

    const totalDistance = target
      ? current.distanceTo(target)
      : this.params.boltLength;

    const segmentLength = totalDistance / this.params.segmentsPerBolt;

    for (let i = 0; i < this.params.segmentsPerBolt; i++) {
      if (target && i === this.params.segmentsPerBolt - 1) {
        current = target.clone();
      } else {
        const jitter = new THREE.Vector3(
          (Math.random() - 0.5) * segmentLength * 1.2,
          (Math.random() - 0.5) * segmentLength * 0.6,
          (Math.random() - 0.5) * segmentLength * 1.2,
        );

        current = current
          .clone()
          .add(direction.clone().multiplyScalar(segmentLength))
          .add(jitter);
      }

      segments.push(current.clone());

      if (
        Math.random() < this.params.branchProbability &&
        i > 1 &&
        i < this.params.segmentsPerBolt - 2
      ) {
        branches.push(this.createBranch(current, direction, segmentLength));
      }
    }

    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({
      color: this.params.color,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const line = new THREE.LineSegments(geometry, material);
    line.layers.set(LAYER_NO_EDGE_DETECTION);
    this.group.add(line);

    this.bolts.push({
      segments,
      branches,
      age: 0,
      lifetime: this.params.boltLifetime * (0.8 + Math.random() * 0.4),
      progress: 0,
      line,
    });
  }

  private updateBoltGeometry(bolt: LightningBolt) {
    const visibleCount = Math.floor(bolt.progress * bolt.segments.length);

    const positions: number[] = [];

    const pushSegments = (pts: THREE.Vector3[]) => {
      for (let i = 0; i < pts.length - 1; i++) {
        positions.push(
          pts[i].x,
          pts[i].y,
          pts[i].z,
          pts[i + 1].x,
          pts[i + 1].y,
          pts[i + 1].z,
        );
      }
    };

    pushSegments(bolt.segments.slice(0, visibleCount));

    for (const branch of bolt.branches) {
      pushSegments(branch);
    }

    bolt.line.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );

    bolt.line.geometry.computeBoundingSphere();

    const time = bolt.age / bolt.lifetime;
    const flash = Math.max(0, 1 - time * 2);

    const color = this.params.glowColor.clone().lerp(this.params.color, time);
    const mat = bolt.line.material as THREE.LineBasicMaterial;
    mat.color.copy(color);
    mat.opacity = 1 - time + flash * 0.5;
  }

  private createBranch(
    start: THREE.Vector3,
    direction: THREE.Vector3,
    segmentLength: number,
  ): THREE.Vector3[] {
    const points: THREE.Vector3[] = [start.clone()];
    let current = start.clone();

    const branchDir = direction
      .clone()
      .applyAxisAngle(
        new THREE.Vector3(0, 1, 0),
        (Math.random() - 0.5) * Math.PI * 0.6,
      )
      .normalize();

    const segments = Math.floor(this.params.segmentsPerBolt * 0.3);

    for (let i = 0; i < segments; i++) {
      const jitter = new THREE.Vector3(
        (Math.random() - 0.5) * segmentLength,
        (Math.random() - 0.5) * segmentLength,
        (Math.random() - 0.5) * segmentLength,
      );

      current = current
        .clone()
        .add(branchDir.clone().multiplyScalar(segmentLength * 0.8))
        .add(jitter);

      points.push(current.clone());
    }

    return points;
  }

  getGroup(): THREE.Group {
    return this.group;
  }

  dispose() {
    this.bolts.forEach((b) => {
      b.line.geometry.dispose();
      (b.line.material as THREE.Material).dispose();
    });
    this.bolts.length = 0;
  }
}
