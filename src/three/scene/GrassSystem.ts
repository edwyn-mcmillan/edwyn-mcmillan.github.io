import * as THREE from "three";

export interface GrassSystemParams {
  count: number;
  areaSize: number;
  groundY?: number;
  grassColor?: THREE.Color;
  grassTexture?: string;
  minHeight?: number;
  maxHeight?: number;
}

export class GrassSystem {
  private instancedMesh: THREE.InstancedMesh;
  private material: THREE.MeshToonMaterial;
  private dummy = new THREE.Object3D();

  constructor(params: GrassSystemParams) {
    const {
      count,
      areaSize,
      groundY = -1.5,
      grassColor = new THREE.Color(0x5a8a3a),
      minHeight = 0.3,
      maxHeight = 0.6,
    } = params;

    const geometry = new THREE.PlaneGeometry(0.3, 1);
    geometry.translate(0, 0.5, 0);

    const loader = new THREE.TextureLoader();
    const alphaMap = loader.load("src/assets/grass_leaf.png", (texture) => {
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      this.material.needsUpdate = true;
    });
    alphaMap.magFilter = THREE.NearestFilter;
    alphaMap.minFilter = THREE.NearestFilter;
    alphaMap.generateMipmaps = false;

    this.material = new THREE.MeshToonMaterial({
      color: grassColor,
      alphaMap: alphaMap,
      transparent: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    });

    this.material.onBeforeCompile = (shader) => {
      shader.uniforms.cameraPos = { value: new THREE.Vector3() };
      this.material.userData.shader = shader;

      // Add uniform to vertex shader
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        `
        uniform vec3 cameraPos;
        void main() {
        `,
      );

      // Replace the entire transform process
      shader.vertexShader = shader.vertexShader.replace(
        "#include <project_vertex>",
        `
        // Get instance world position (base of grass)
        vec3 instanceWorldPos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        
        // Calculate billboard vectors
        vec3 lookDir = normalize(cameraPos - instanceWorldPos);
        vec3 upDir = vec3(0.0, 1.0, 0.0);
        vec3 rightDir = normalize(cross(upDir, lookDir));
        vec3 forwardDir = cross(rightDir, upDir);
        
        // Build billboard basis
        mat3 billboardBasis = mat3(rightDir, upDir, forwardDir);
        
        // Get instance scale from matrix
        vec3 instanceScale = vec3(
          length(instanceMatrix[0].xyz),
          length(instanceMatrix[1].xyz),
          length(instanceMatrix[2].xyz)
        );
        
        // Apply billboard rotation to local position
        vec3 billboardedPos = billboardBasis * (position * vec3(instanceScale.x, instanceScale.y, instanceScale.x));
        
        // Final world position
        vec3 finalWorldPos = instanceWorldPos + billboardedPos;
        
        // Transform to view space
        vec4 mvPosition = viewMatrix * vec4(finalWorldPos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        `,
      );

      // Force flat normals to prevent edge detection
      shader.vertexShader = shader.vertexShader.replace(
        "#include <defaultnormal_vertex>",
        `
        // Force flat upward normal
        vec3 transformedNormal = normalMatrix * vec3(0.0, 1.0, 0.0);
        `,
      );

      // Override normals in beginnormal too
      shader.vertexShader = shader.vertexShader.replace(
        "#include <beginnormal_vertex>",
        `
        vec3 objectNormal = vec3(0.0, 1.0, 0.0);
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(1.0, 0.0, 0.0);
        #endif
        `,
      );

      // Shadow from instance origin (Discord user's advice)
      shader.vertexShader = shader.vertexShader.replace(
        "#include <shadowmap_vertex>",
        `
        #ifdef USE_SHADOWMAP
          #if NUM_DIR_LIGHT_SHADOWS > 0
            // Use instance origin for shadow calculation
            vec4 worldOrigin = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
            vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * worldOrigin;
          #endif
        #endif
        `,
      );
    };

    this.instancedMesh = new THREE.InstancedMesh(
      geometry,
      this.material,
      count,
    );
    this.instancedMesh.castShadow = false;
    this.instancedMesh.receiveShadow = true;

    (this.instancedMesh as any).isGrass = true;

    this.setupInstances(count, areaSize, groundY, minHeight, maxHeight);
  }

  private setupInstances(
    count: number,
    areaSize: number,
    groundY: number,
    minHeight: number,
    maxHeight: number,
  ): void {
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * areaSize;
      const z = (Math.random() - 0.5) * areaSize;
      const height = minHeight + Math.random() * (maxHeight - minHeight);
      const rotation = Math.random() * Math.PI * 2;

      this.dummy.position.set(x, groundY, z);
      this.dummy.rotation.y = rotation;
      this.dummy.scale.set(1, height, 1);
      this.dummy.updateMatrix();

      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
    }

    this.instancedMesh.instanceMatrix.needsUpdate = true;
  }

  update(camera: THREE.Camera): void {
    const shader = this.material.userData.shader;
    if (shader && shader.uniforms.cameraPos) {
      shader.uniforms.cameraPos.value.copy(camera.position);
    }
  }

  getMesh(): THREE.InstancedMesh {
    return this.instancedMesh;
  }

  dispose(): void {
    this.instancedMesh.geometry.dispose();
    this.material.dispose();
  }
}
