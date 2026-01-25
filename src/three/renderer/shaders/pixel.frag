uniform sampler2D tDiffuse;
uniform vec4 resolution;
varying vec2 vUv;
void main() {
    vec2 iuv = (floor(resolution.xy * vUv) + .5) * resolution.zw;
    vec4 texel = texture2D( tDiffuse, iuv );
    gl_FragColor = texel;
}