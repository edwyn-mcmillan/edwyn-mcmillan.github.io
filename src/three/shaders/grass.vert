uniform vec3 cameraPosition;
uniform sampler2D groundColorMap;
uniform vec2 groundSize;
uniform vec3 groundPosition;

varying vec2 vUv;
varying vec3 vColor;
varying vec3 vWorldPosition;

// Instance attributes
attribute vec3 instanceOffset;
attribute float instanceScale;
attribute float instanceRotation;

void main() {
    vUv = uv;
    
    // Billboard rotation to face camera
    vec3 worldPos = instanceOffset;
    vec3 toCamera = normalize(cameraPosition - worldPos);
    
    // Calculate billboard basis vectors
    vec3 up = vec3(0.0, 1.0, 0.0);
    vec3 right = normalize(cross(up, toCamera));
    vec3 forward = cross(right, up);
    
    // Apply random rotation around Y axis
    float s = sin(instanceRotation);
    float c = cos(instanceRotation);
    vec3 rotatedRight = right * c + forward * s;
    vec3 rotatedForward = forward * c - right * s;
    
    // Build billboard matrix
    mat3 billboardMatrix = mat3(
        rotatedRight,
        up,
        rotatedForward
    );
    
    // Apply billboard transformation
    vec3 billboardedPos = billboardMatrix * (position * instanceScale);
    vec3 finalWorldPos = worldPos + billboardedPos;
    vWorldPosition = finalWorldPos;
    
    // Sample ground color at grass base position (not the billboarded position)
    vec2 groundUV = (worldPos.xz - groundPosition.xz + groundSize * 0.5) / groundSize;
    groundUV = clamp(groundUV, 0.0, 1.0);
    
    vColor = texture2D(groundColorMap, groundUV).rgb;
    
    gl_Position = projectionMatrix * viewMatrix * vec4(finalWorldPos, 1.0);
}