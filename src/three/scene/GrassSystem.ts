import * as THREE from "three";
import { LAYER_NO_EDGE_DETECTION } from "../sceneConfig";
import noiseGlsl from "../shaders/noise.glsl?raw";
import groundColorGlsl from "../shaders/groundColor.glsl?raw";
import grassVertexUniforms from "../shaders/grassVertex.glsl?raw";
import grassProjectVertex from "../shaders/grassProjectVertex.glsl?raw";
import grassFragmentHeader from "../shaders/grassFragment.glsl?raw";

export interface GrassSystemParams {
  count: number;
  areaSize: number;
  groundY: number;
  grassTexturePath: string;
  accentGrassTexturePath: string;
  accentGrassRatio: number;
  minHeight: number;
  maxHeight: number;
  windStrength: number;
  windDirection: THREE.Vector2;
  groundMesh: THREE.Mesh;
  groundColors: THREE.Color[];
  accentColor: THREE.Color;
}

export class GrassSystem {
  private instancedMesh: THREE.InstancedMesh;
  private accentMesh?: THREE.InstancedMesh;
  private material: THREE.MeshToonMaterial;
  private accentMaterial?: THREE.MeshToonMaterial;
  private dummy = new THREE.Object3D();
  private loader = new THREE.TextureLoader();
  private params: GrassSystemParams;
  private time = 0;

  constructor(params: GrassSystemParams) {
    this.params = params;

    const geometry = new THREE.PlaneGeometry(0.6, 1.5);
    geometry.translate(0, 0.5, 0);

    this.material = this.createGrassMaterial(params.grassTexturePath);
    this.setupMaterialShader(this.material, false);

    const accentCount = Math.floor(params.count * params.accentGrassRatio);
    const mainCount = params.count - accentCount;

    this.instancedMesh = new THREE.InstancedMesh(
      geometry,
      this.material,
      mainCount,
    );
    this.instancedMesh.castShadow = false;
    this.instancedMesh.receiveShadow = true;
    this.instancedMesh.layers.set(LAYER_NO_EDGE_DETECTION);

    this.setupInstances(
      this.instancedMesh,
      mainCount,
      params.minHeight,
      params.maxHeight,
    );

    this.setupAccentGrass(accentCount, geometry);
  }

  private createGrassMaterial(
    texturePath: string,
    color?: THREE.Color,
  ): THREE.MeshToonMaterial {
    const alphaMap = this.loader.load(texturePath, (texture) => {
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
    });
    alphaMap.magFilter = THREE.NearestFilter;
    alphaMap.minFilter = THREE.NearestFilter;
    alphaMap.generateMipmaps = false;

    return new THREE.MeshToonMaterial({
      color,
      alphaMap,
      transparent: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    });
  }

  private setupAccentGrass(accentCount: number, geometry: THREE.PlaneGeometry) {
    this.accentMaterial = this.createGrassMaterial(
      this.params.accentGrassTexturePath,
      this.params.accentColor,
    );
    this.setupMaterialShader(this.accentMaterial, true);

    this.accentMesh = new THREE.InstancedMesh(
      geometry,
      this.accentMaterial,
      accentCount,
    );
    this.accentMesh.castShadow = false;
    this.accentMesh.receiveShadow = true;
    this.accentMesh.layers.set(LAYER_NO_EDGE_DETECTION);

    this.setupInstances(
      this.accentMesh,
      accentCount,
      this.params.minHeight * 1,
      this.params.maxHeight * 2,
    );
  }

  private setupMaterialShader(
    material: THREE.MeshToonMaterial,
    isAccent: boolean,
  ): void {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.cameraPos = { value: new THREE.Vector3() };
      shader.uniforms.time = { value: 0 };
      shader.uniforms.windStrength = { value: this.params.windStrength };
      shader.uniforms.windDirection = { value: this.params.windDirection };
      shader.uniforms.isAccent = { value: isAccent ? 1.0 : 0.0 };
      shader.uniforms.noiseScale = { value: 0.05 };
      shader.uniforms.octaves = { value: 4.0 };
      shader.uniforms.persistence = { value: 0.5 };
      shader.uniforms.color1 = { value: this.params.groundColors[0] };
      shader.uniforms.color2 = { value: this.params.groundColors[1] };
      shader.uniforms.color3 = { value: this.params.groundColors[2] };
      material.userData.shader = shader;

      // Inject uniforms, noise functions, ground color, and cloud shadow before main()
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        `${grassVertexUniforms}\n${noiseGlsl}\n${groundColorGlsl}\nvoid main() {`,
      );

      // Replace projection with wind animation + billboarding + ground color sampling
      shader.vertexShader = shader.vertexShader.replace(
        "#include <project_vertex>",
        grassProjectVertex,
      );

      // Add ground color varying to fragment shader
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `${grassFragmentHeader}`,
      );

      // Modulate grass color with ground color
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `
        #include <color_fragment>
        diffuseColor.rgb *= vGroundColor;
        diffuseColor.a *= vEdgeFade;
        `,
      );

      // Force flat normals to prevent edge detection
      shader.vertexShader = shader.vertexShader.replace(
        "#include <defaultnormal_vertex>",
        `
        vec3 transformedNormal = normalMatrix * vec3(0.0, 1.0, 0.0);
        `,
      );

      shader.vertexShader = shader.vertexShader.replace(
        "#include <beginnormal_vertex>",
        `
        vec3 objectNormal = vec3(0.0, 1.0, 0.0);
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(1.0, 0.0, 0.0);
        #endif
        `,
      );

      // Shadow from instance origin
      shader.vertexShader = shader.vertexShader.replace(
        "#include <shadowmap_vertex>",
        `
        #ifdef USE_SHADOWMAP
          #if NUM_DIR_LIGHT_SHADOWS > 0
            vec4 worldOrigin = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
            vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * worldOrigin;
          #endif
        #endif
        `,
      );
    };
  }

  private setupInstances(
    mesh: THREE.InstancedMesh,
    count: number,
    minHeight: number,
    maxHeight: number,
  ): void {
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * this.params.areaSize;
      const z = (Math.random() - 0.5) * this.params.areaSize;
      const height = minHeight + Math.random() * (maxHeight - minHeight);
      const rotation = Math.random() * Math.PI * 2;

      this.dummy.position.set(x, this.params.groundY, z);
      this.dummy.rotation.y = rotation;
      this.dummy.scale.set(1, height, 1);
      this.dummy.updateMatrix();

      mesh.setMatrixAt(i, this.dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  }

  private updateShaderUniforms(
    material: THREE.MeshToonMaterial,
    camera: THREE.Camera,
  ): void {
    const shader = material.userData.shader;
    if (!shader) return;
    if (shader.uniforms.cameraPos) {
      shader.uniforms.cameraPos.value.copy(camera.position);
    }
    if (shader.uniforms.time) {
      shader.uniforms.time.value = this.time;
    }
  }

  update(camera: THREE.Camera, deltaTime?: number): void {
    if (deltaTime !== undefined) {
      this.time += deltaTime;
    }

    this.updateShaderUniforms(this.material, camera);
    if (this.accentMaterial) {
      this.updateShaderUniforms(this.accentMaterial, camera);
    }
  }

  setWindStrength(strength: number): void {
    this.params.windStrength = strength;
    for (const mat of this.getMaterials()) {
      const shader = mat.userData.shader;
      if (shader?.uniforms.windStrength) {
        shader.uniforms.windStrength.value = strength;
      }
    }
  }

  setWindDirection(direction: THREE.Vector2): void {
    this.params.windDirection.copy(direction);
    for (const mat of this.getMaterials()) {
      const shader = mat.userData.shader;
      if (shader?.uniforms.windDirection) {
        shader.uniforms.windDirection.value.copy(direction);
      }
    }
  }

  private getMaterials(): THREE.MeshToonMaterial[] {
    const mats = [this.material];
    if (this.accentMaterial) mats.push(this.accentMaterial);
    return mats;
  }

  getMesh(): THREE.InstancedMesh {
    return this.instancedMesh;
  }

  getMeshes(): THREE.InstancedMesh[] {
    const meshes = [this.instancedMesh];
    if (this.accentMesh) {
      meshes.push(this.accentMesh);
    }
    return meshes;
  }

  dispose(): void {
    this.instancedMesh.geometry.dispose();
    this.material.dispose();

    if (this.accentMesh) {
      this.accentMesh.geometry.dispose();
    }
    if (this.accentMaterial) {
      this.accentMaterial.dispose();
    }
  }
}
