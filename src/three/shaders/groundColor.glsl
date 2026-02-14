vec3 sampleGroundColor(vec2 worldXZ, float noiseScale, float octaves, float persistence, vec3 c1, vec3 c2, vec3 c3) {
    float noiseValue = fbm(worldXZ * noiseScale, octaves, persistence);

    float detailNoise = noise(worldXZ * noiseScale * 5.0) * 0.1;
    noiseValue = clamp(noiseValue + detailNoise, 0.0, 1.0);

    float adjustedNoise = pow(noiseValue, 0.9);

    vec3 result;
    if (adjustedNoise < 0.4) {
        float t = adjustedNoise / 0.4;
        result = mix(c1, c2, smoothstep(0.0, 1.0, t));
    } else if (adjustedNoise < 0.7) {
        float t = (adjustedNoise - 0.4) / 0.3;
        result = mix(c2, c3, smoothstep(0.0, 1.0, t));
    } else {
        float t = (adjustedNoise - 0.7) / 0.3;
        vec3 highlight = mix(c3, c2 * 1.15, t * 0.2);
        result = highlight;
    }

    return result;
}
