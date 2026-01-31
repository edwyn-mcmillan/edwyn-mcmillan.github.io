import * as THREE from "three";

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

  private time = 0;

  private grassTexturePath!: string;
  private accentGrassTexturePath!: string;
  private count!: number;
  private areaSize!: number;
  private groundY!: number;
  private minHeight!: number;
  private maxHeight!: number;
  private accentGrassRatio!: number;
  private windStrength!: number;
  private windDirection!: THREE.Vector2;
  private groundColors!: THREE.Color[];
  private accentColor!: THREE.Color;

  constructor(params: GrassSystemParams) {
    this.assignParams(params);

    const geometry = new THREE.PlaneGeometry(0.6, 1.5);
    geometry.translate(0, 0.5, 0);

    // Load main grass texture
    const alphaMap = this.loader.load(this.grassTexturePath, (texture) => {
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      this.material.needsUpdate = true;
    });
    alphaMap.magFilter = THREE.NearestFilter;
    alphaMap.minFilter = THREE.NearestFilter;
    alphaMap.generateMipmaps = false;

    // Create main grass material
    this.material = new THREE.MeshToonMaterial({
      alphaMap: alphaMap,
      transparent: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    });

    this.setupMaterialShader(this.material, false);

    const accentCount = Math.floor(this.count * this.accentGrassRatio);
    const mainCount = this.count - accentCount;

    // Create main grass instances
    this.instancedMesh = new THREE.InstancedMesh(
      geometry,
      this.material,
      mainCount,
    );
    this.instancedMesh.castShadow = false;
    this.instancedMesh.receiveShadow = true;
    (this.instancedMesh as any).isGrass = true;

    this.setupInstances(
      this.instancedMesh,
      mainCount,
      this.areaSize,
      this.groundY,
      this.minHeight,
      this.maxHeight,
    );

    this.setupAccentGrass(accentCount, geometry);
  }

  private assignParams(params: GrassSystemParams) {
    this.grassTexturePath = params.grassTexturePath;
    this.accentGrassTexturePath = params.accentGrassTexturePath;
    this.count = params.count;
    this.areaSize = params.areaSize;
    this.groundY = params.groundY;
    this.minHeight = params.minHeight;
    this.maxHeight = params.maxHeight;
    this.accentGrassRatio = params.accentGrassRatio;
    this.windStrength = params.windStrength;
    this.windDirection = params.windDirection;
    this.groundColors = params.groundColors;
    this.accentColor = params.accentColor;
  }

  private setupAccentGrass(accentCount: number, geometry: THREE.PlaneGeometry) {
    const accentAlphaMap = this.loader.load(
      this.accentGrassTexturePath,
      (texture) => {
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        texture.generateMipmaps = false;
        if (this.accentMaterial) {
          this.accentMaterial.needsUpdate = true;
        }
      },
    );
    accentAlphaMap.magFilter = THREE.NearestFilter;
    accentAlphaMap.minFilter = THREE.NearestFilter;
    accentAlphaMap.generateMipmaps = false;

    this.accentMaterial = new THREE.MeshToonMaterial({
      color: this.accentColor,
      alphaMap: accentAlphaMap,
      transparent: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    });

    this.setupMaterialShader(this.accentMaterial, true);

    this.accentMesh = new THREE.InstancedMesh(
      geometry,
      this.accentMaterial,
      accentCount,
    );
    this.accentMesh.castShadow = false;
    this.accentMesh.receiveShadow = true;
    (this.accentMesh as any).isGrass = true;

    this.setupInstances(
      this.accentMesh,
      accentCount,
      this.areaSize,
      this.groundY,
      this.minHeight * 1,
      this.maxHeight * 2,
    );
  }

  private setupMaterialShader(
    material: THREE.MeshToonMaterial,
    isAccent: boolean,
  ): void {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.cameraPos = { value: new THREE.Vector3() };
      shader.uniforms.time = { value: 0 };
      shader.uniforms.windStrength = { value: this.windStrength };
      shader.uniforms.windDirection = { value: this.windDirection };
      shader.uniforms.isAccent = { value: isAccent ? 1.0 : 0.0 };

      // Add uniforms for ground color sampling
      shader.uniforms.noiseScale = { value: 0.05 };
      shader.uniforms.octaves = { value: 4.0 };
      shader.uniforms.persistence = { value: 0.5 };
      shader.uniforms.color1 = { value: this.groundColors[0] };
      shader.uniforms.color2 = { value: this.groundColors[1] };
      shader.uniforms.color3 = { value: this.groundColors[2] };

      material.userData.shader = shader;

      // Add uniforms and functions to vertex shader
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        `
        uniform vec3 cameraPos;
        uniform float time;
        uniform float windStrength;
        uniform vec2 windDirection;
        uniform float noiseScale;
        uniform float octaves;
        uniform float persistence;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float isAccent;
        
        varying vec3 vGroundColor;
        
        // Hash function for noise
        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        // Single octave noise
        float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        
        // Multi-octave fractal noise
        float fbm(vec2 p, float octaves, float persistence) {
            float value = 0.0;
            float amplitude = 1.0;
            float frequency = 1.0;
            float maxValue = 0.0;
            
            for (float i = 0.0; i < 8.0; i++) {
                if (i >= octaves) break;
                
                value += noise(p * frequency) * amplitude;
                maxValue += amplitude;
                
                amplitude *= persistence;
                frequency *= 2.0;
            }
            
            return value / maxValue;
        }
        
        void main() {
        `,
      );

      // Replace the entire transform process with wind animation
      shader.vertexShader = shader.vertexShader.replace(
        "#include <project_vertex>",
        `
        // Get instance world position (base of grass)
        vec3 instanceWorldPos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        
        // Sample ground color using multi-octave noise (same as ground)
        float noiseValue = fbm(instanceWorldPos.xz * noiseScale, octaves, persistence);
        
        // Add detail noise
        float detailNoise = noise(instanceWorldPos.xz * noiseScale * 5.0) * 0.1;
        noiseValue = clamp(noiseValue + detailNoise, 0.0, 1.0);
        
        // Apply power curve
        float adjustedNoise = pow(noiseValue, 0.9);
        
        // Blend between 3 colors (same logic as ground)
        vec3 groundColor;
        if (adjustedNoise < 0.4) {
            float t = adjustedNoise / 0.4;
            groundColor = mix(color1, color2, smoothstep(0.0, 1.0, t));
        } else if (adjustedNoise < 0.7) {
            float t = (adjustedNoise - 0.4) / 0.3;
            groundColor = mix(color2, color3, smoothstep(0.0, 1.0, t));
        } else {
            float t = (adjustedNoise - 0.7) / 0.3;
            vec3 highlight = mix(color3, color2 * 1.15, t * 0.2);
            groundColor = highlight;
        }
        
        // For accent grass, apply a color shift to make it stand out
        if (isAccent > 0.5) {
            // Make accent grass more yellow/golden with higher saturation
            vec3 accentShift = vec3(0.3, 0.3, -0.1); // More yellow, less blue
            groundColor = clamp(groundColor + accentShift, 0.0, 1.0);
            groundColor *= 1.2; // Slightly brighter
        }
        
        vGroundColor = groundColor;
        
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
        
        // Wind animation - Calculate wind displacement based on height
        // Height factor: 0 at base (y=0), 1 at top (y=1.5 after scaling)
        float normalizedHeight = position.y / 1.5;
        float heightFactor = normalizedHeight * normalizedHeight; // Square for more natural bend
        
        // Use instance position as phase offset for variation
        float windPhase = instanceWorldPos.x * 0.5 + instanceWorldPos.z * 0.3;
        float windTime = time + windPhase;
        
        // Multi-octave wind waves for natural movement
        float windWave1 = sin(windTime * 2.0 + instanceWorldPos.x * 0.5 + instanceWorldPos.z * 0.3);
        float windWave2 = sin(windTime * 3.0 + instanceWorldPos.x * 0.8 + instanceWorldPos.z * 0.6) * 0.5;
        float windWave3 = sin(windTime * 5.0 + instanceWorldPos.x * 1.2) * 0.3;
        
        float windAmount = (windWave1 + windWave2 + windWave3) * windStrength * heightFactor;
        
        // Accent grass moves slightly more in the wind
        if (isAccent > 0.5) {
            windAmount *= 1.3;
        }
        
        // Apply wind displacement to LOCAL position BEFORE billboarding
        // This makes the grass bend from the base like a real blade of grass
        vec3 windDisplacement = vec3(
            windDirection.x * windAmount,
            -abs(windAmount) * 0.15 * heightFactor, // Slight droop when bending
            windDirection.y * windAmount
        );
        
        // Apply wind to position, then scale, THEN billboard
        vec3 displacedPosition = position + windDisplacement;
        vec3 scaledPosition = displacedPosition * vec3(instanceScale.x, instanceScale.y, instanceScale.x);
        vec3 billboardedPos = billboardBasis * scaledPosition;
        
        // Final world position
        vec3 finalWorldPos = instanceWorldPos + billboardedPos;
        
        // Transform to view space
        vec4 mvPosition = viewMatrix * vec4(finalWorldPos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        `,
      );

      // Add the varying to fragment shader and apply ground color
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
        varying vec3 vGroundColor;
        void main() {
        `,
      );

      // Apply ground color to the grass
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `
        #include <color_fragment>
        // Modulate grass color with ground color beneath it
        diffuseColor.rgb *= vGroundColor;
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

      // Shadow from instance origin
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
  }

  private setupInstances(
    mesh: THREE.InstancedMesh,
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

      mesh.setMatrixAt(i, this.dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  }

  update(camera: THREE.Camera, deltaTime?: number): void {
    // Update time for wind animation
    if (deltaTime !== undefined) {
      this.time += deltaTime;
    }

    // Update main grass
    const shader = this.material.userData.shader;
    if (shader) {
      if (shader.uniforms.cameraPos) {
        shader.uniforms.cameraPos.value.copy(camera.position);
      }
      if (shader.uniforms.time) {
        shader.uniforms.time.value = this.time;
      }
    }

    // Update accent grass
    if (this.accentMaterial) {
      const accentShader = this.accentMaterial.userData.shader;
      if (accentShader) {
        if (accentShader.uniforms.cameraPos) {
          accentShader.uniforms.cameraPos.value.copy(camera.position);
        }
        if (accentShader.uniforms.time) {
          accentShader.uniforms.time.value = this.time;
        }
      }
    }
  }

  setWindStrength(strength: number): void {
    this.windStrength = strength;
    const updateWind = (shader: any) => {
      if (shader && shader.uniforms.windStrength) {
        shader.uniforms.windStrength.value = strength;
      }
    };

    updateWind(this.material.userData.shader);
    if (this.accentMaterial) {
      updateWind(this.accentMaterial.userData.shader);
    }
  }

  setWindDirection(direction: THREE.Vector2): void {
    this.windDirection.copy(direction);
    const updateWind = (shader: any) => {
      if (shader && shader.uniforms.windDirection) {
        shader.uniforms.windDirection.value.copy(direction);
      }
    };

    updateWind(this.material.userData.shader);
    if (this.accentMaterial) {
      updateWind(this.accentMaterial.userData.shader);
    }
  }

  getMesh(): THREE.InstancedMesh {
    return this.instancedMesh;
  }

  /**
   * Get all grass meshes (main + accent)
   */
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
