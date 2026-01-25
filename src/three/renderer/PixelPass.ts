import * as THREE from "three";

export class PixelPass {
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  quad: THREE.Mesh;
  material: THREE.ShaderMaterial;

  constructor(target: THREE.WebGLRenderTarget) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: target.texture },
        resolution: {
          value: new THREE.Vector4(
            target.width,
            target.height,
            1 / target.width,
            1 / target.height,
          ),
        },
      },
      vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                }
                `,
      fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform vec4 resolution;
                varying vec2 vUv;
                void main() {
                    vec2 iuv = (floor(resolution.xy * vUv) + .5) * resolution.zw;
                    vec4 texel = texture2D( tDiffuse, iuv );
                    gl_FragColor = texel;
                }
                `,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    this.quad = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.quad);
  }

  render(renderer: THREE.WebGLRenderer) {
    renderer.render(this.scene, this.camera);
  }
}
