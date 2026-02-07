
export const fullscreenVert = `#version 300 es
in vec2 position;
out vec2 vUv;
void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

export const moshFrag = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D u_prev;
uniform sampler2D u_source;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_persistence;
uniform float u_injection;
uniform float u_flowAmp;
uniform float u_flowScale;
uniform float u_flowSpeed;
uniform vec2 u_drift;
uniform float u_globalRot;
uniform float u_globalZoom;
uniform float u_diffusion;
uniform float u_sculptMask;
uniform float u_sculptThreshold;
uniform float u_sculptSoftness;

// Simple hash for noise
float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

// 2D Noise
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Curl-ish noise flow
vec2 getFlow(vec2 p, float time) {
    float n1 = noise(p * u_flowScale + time * u_flowSpeed);
    float n2 = noise(p * u_flowScale + time * u_flowSpeed + 5.0);
    return vec2(n1 - 0.5, n2 - 0.5) * u_flowAmp;
}

void main() {
    vec2 uv = vUv;
    vec4 src = texture(u_source, uv);
    float luma = dot(src.rgb, vec3(0.299, 0.587, 0.114));
    float t0 = clamp(u_sculptThreshold - u_sculptSoftness, 0.0, 1.0);
    float t1 = clamp(u_sculptThreshold + u_sculptSoftness, 0.0, 1.0);
    float sculpt = smoothstep(t0, t1, luma) * clamp(u_sculptMask, 0.0, 1.0);
    
    // 1. Calculate Flow
    vec2 flow = getFlow(uv, u_time) * sculpt;
    
    // 2. Apply Global Transforms (Drift, Rot, Zoom)
    vec2 center = vec2(0.5);
    vec2 toCenter = uv - center;
    
    // Zoom
    toCenter /= (1.0 + u_globalZoom * 0.01);
    
    // Rotate
    float s = sin(u_globalRot);
    float c = cos(u_globalRot);
    toCenter = vec2(toCenter.x * c - toCenter.y * s, toCenter.x * s + toCenter.y * c);
    
    vec2 warpedUv = center + toCenter + flow + (u_drift * sculpt);
    vec2 finalUv = mix(uv, warpedUv, sculpt);
    
    // 3. Accumulate with Diffusion
    vec4 prev;
    if (u_diffusion > 0.0) {
        vec2 off = u_diffusion / u_resolution;
        prev = texture(u_prev, finalUv) * 0.4;
        prev += texture(u_prev, finalUv + vec2(off.x, 0.0)) * 0.15;
        prev += texture(u_prev, finalUv - vec2(off.x, 0.0)) * 0.15;
        prev += texture(u_prev, finalUv + vec2(0.0, off.y)) * 0.15;
        prev += texture(u_prev, finalUv - vec2(0.0, off.y)) * 0.15;
    } else {
        prev = texture(u_prev, finalUv);
    }
    
    // 5. Blend
    vec4 merged = mix(prev * u_persistence, src, u_injection);
    vec4 final = mix(src, merged, sculpt);
    
    fragColor = vec4(final.rgb, 1.0);
}
`;

export const postFrag = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D u_texture;
uniform float u_time;
uniform float u_grain;
uniform float u_chroma;
uniform float u_vignette;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    // 1. Chromatic Aberration
    float r = texture(u_texture, vUv + vec2(u_chroma, 0.0)).r;
    float g = texture(u_texture, vUv).g;
    float b = texture(u_texture, vUv - vec2(u_chroma, 0.0)).b;
    vec3 color = vec3(r, g, b);
    
    // 2. Film Grain
    float noise = hash(vUv + u_time);
    color += (noise - 0.5) * u_grain;
    
    // 3. Vignette
    float d = distance(vUv, vec2(0.5));
    color *= smoothstep(0.8, 0.5, d * u_vignette);
    
    // 4. Contrast Curve (Simple Gamma/S-Curve)
    color = pow(color, vec3(1.1)); 
    
    fragColor = vec4(color, 1.0);
}
`;
