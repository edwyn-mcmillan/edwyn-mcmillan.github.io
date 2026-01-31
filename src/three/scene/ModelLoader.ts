import * as THREE from "three";
import {
  GLTFLoader,
  type GLTF,
} from "three/examples/jsm/loaders/GLTFLoader.js";

export class ModelLoader {
  private loader: GLTFLoader;
  private gltf?: any;

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
    const meshes: THREE.Mesh[] = [];
    this.gltf.scene.traverse((child: any) => {
      if (child.isMesh) {
        meshes.push(child);
      }
    });
    return meshes[index].clone();
  }

  static convertToToonMaterial(
    model: THREE.Object3D,
    color: THREE.Color,
  ): void {
    model.traverse((child: THREE.Object3D) => {
      if (!(child instanceof THREE.Mesh)) return;

      if (child.isMesh) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        const newMaterials = materials.map((oldMat) => {
          const toonMat = new THREE.MeshToonMaterial({
            color,
            map: oldMat.map || null,
          });

          oldMat.dispose();
          return toonMat;
        });

        child.material = Array.isArray(child.material)
          ? newMaterials
          : newMaterials[0];
      }
    });
  }
}
