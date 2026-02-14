float cloudShadow(vec2 worldXZ, float cloudTime) {
    vec2 uv = worldXZ * 0.02 + vec2(cloudTime * 0.04 + 7.3, cloudTime * 0.015 + 13.1);
    float n = fbm(uv, 4.0, 0.5);
    return mix(0.55, 1.0, smoothstep(0.35, 0.55, n));
}
