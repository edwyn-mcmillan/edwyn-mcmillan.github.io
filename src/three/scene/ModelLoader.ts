import * as THREE from "three";
import {
  GLTFLoader,
  type GLTF,
} from "three/examples/jsm/loaders/GLTFLoader.js";

export class ModelLoader {
  private loader: GLTFLoader;
  private gltf?: GLTF;

  constructor() {
    this.loader = new GLTFLoader();
  }

  async load(path: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.loader.load(
        path,
        (gltf: GLTF) => {
          this.gltf = gltf;
          resolve();
        },
        (_progress) => {},
        (error) => {
          console.error("Error loading model:", error);
          reject(error);
        },
      );
    });
  }

  getChildModel(index: number = 0): THREE.Object3D {
    const meshes = this.collectMeshes();
    return meshes[index].clone();
  }

  /** Returns cloned meshes with all ancestor transforms baked into geometry, centered at origin. */
  getBakedMeshes(skip = 0, count?: number): THREE.Mesh[] {
    const scene: THREE.Object3D = this.gltf!.scene;
    scene.updateWorldMatrix(true, true);

    const sourceMeshes = this.collectMeshes();
    const selected = sourceMeshes.slice(skip, count ? skip + count : undefined);

    return selected.map((child) => {
      const clone = child.clone();
      clone.geometry = child.geometry.clone();
      clone.geometry.applyMatrix4(child.matrixWorld);

      // Center X/Z at origin, align bottom of geometry to y=0
      clone.geometry.computeBoundingBox();
      const box = clone.geometry.boundingBox!;
      const center = new THREE.Vector3();
      box.getCenter(center);
      clone.geometry.translate(-center.x, -box.min.y, -center.z);

      clone.position.set(0, 0, 0);
      clone.rotation.set(0, 0, 0);
      clone.scale.set(1, 1, 1);
      return clone;
    });
  }

  private collectMeshes(): THREE.Mesh[] {
    const meshes: THREE.Mesh[] = [];
    this.gltf!.scene.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        meshes.push(child);
      }
    });
    return meshes;
  }

  /** Replace all materials on a model with MeshToonMaterial of the given colour. */
  static convertToToonMaterial(
    model: THREE.Object3D,
    color: THREE.Color,
  ): void {
    ModelLoader.applyToMaterials(model, (oldMat) => {
      const toonMat = new THREE.MeshToonMaterial({
        color,
        map: oldMat.map || null,
      });
      oldMat.dispose();
      return toonMat;
    });
  }

  /** Assign a single material to every mesh in a model. */
  static setMaterial(model: THREE.Object3D, material: THREE.Material): void {
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
  }

  /** Apply a callback to every material on every mesh in a model. */
  static applyToMaterials(
    model: THREE.Object3D,
    fn: (mat: THREE.MeshStandardMaterial) => THREE.Material | void,
  ): void {
    model.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      const result = materials.map((mat) => fn(mat) ?? mat);
      child.material = Array.isArray(child.material) ? result : result[0];
    });
  }
}
