// Get instance world position (base of grass)
vec3 instanceWorldPos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;

float distFromCenter = length(instanceWorldPos.xz);
vEdgeFade = 1.0 - smoothstep(30.0, 48.0, distFromCenter);

// Sample ground color
vec3 groundColor = sampleGroundColor(instanceWorldPos.xz, noiseScale, octaves, persistence, color1, color2, color3);

// For accent grass, apply a color shift to make it stand out
if (isAccent > 0.5) {
    vec3 accentShift = vec3(0.3, 0.3, -0.1);
    groundColor = clamp(groundColor + accentShift, 0.0, 1.0);
    groundColor *= 1.2;
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

// Wind animation
float normalizedHeight = position.y / 1.5;
float heightFactor = normalizedHeight * normalizedHeight;

float windPhase = instanceWorldPos.x * 0.5 + instanceWorldPos.z * 0.3;
float windTime = time + windPhase;

float windWave1 = sin(windTime * 2.0 + instanceWorldPos.x * 0.5 + instanceWorldPos.z * 0.3);
float windWave2 = sin(windTime * 3.0 + instanceWorldPos.x * 0.8 + instanceWorldPos.z * 0.6) * 0.5;
float windWave3 = sin(windTime * 5.0 + instanceWorldPos.x * 1.2) * 0.3;

float windAmount = (windWave1 + windWave2 + windWave3) * windStrength * heightFactor;

// Accent grass moves slightly more in the wind
if (isAccent > 0.5) {
    windAmount *= 1.3;
}

// Apply wind displacement
vec3 windDisplacement = vec3(
    windDirection.x * windAmount,
    -abs(windAmount) * 0.15 * heightFactor,
    windDirection.y * windAmount
);

// Apply wind to position, then scale, then billboard
vec3 displacedPosition = position + windDisplacement;
vec3 scaledPosition = displacedPosition * vec3(instanceScale.x, instanceScale.y, instanceScale.x);
vec3 billboardedPos = billboardBasis * scaledPosition;

// Final world position
vec3 finalWorldPos = instanceWorldPos + billboardedPos;

// Transform to view space
vec4 mvPosition = viewMatrix * vec4(finalWorldPos, 1.0);
gl_Position = projectionMatrix * mvPosition;
