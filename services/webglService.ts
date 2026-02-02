
import * as THREE from 'three';
import { GlitchParams } from '../types';

/**
 * DATAMOSH FRAGMENT SHADER
 * 
 * Features:
 * 1. Stepped Time (Quantization) to prevent rapid jitter on static images.
 * 2. UV Tearing / Mapping Destruction.
 * 3. Temporal Feedback Loop.
 */
const FRAGMENT_SHADER = `
varying vec2 vUv;
uniform sampler2D tOld; // Previous Frame
uniform sampler2D tNew; // Current Incoming Frame
uniform float uFeedback; // 0.0 - 1.0
uniform float uDecay;    // 0.0 - 1.0 (Darkening)
uniform float uWarp;     // Strength of Luma displacement
uniform float uBlockSize; // Quantization for macroblock look
uniform float uRGBOffset; // Chroma separation strength
uniform vec2 uResolution;
uniform bool uReset;      // Hard I-Frame reset

// Displacement Uniforms
uniform float uTime;
uniform float uDispStrength; // Noise warp strength
uniform float uDispScale;    // Noise frequency
uniform float uDispSpeed;    // Noise animation speed
uniform float uDispQuantize; // Quantization of noise UVs

// --- RANDOM & NOISE ---
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main() {
    // If reset is triggered (I-Frame), just output the new frame
    if (uReset) {
        gl_FragColor = texture2D(tNew, vUv);
        return;
    }

    // --- TIME STEPPING ---
    // Quantize time to create a "stop motion" stutter effect
    // This prevents static images from vibrating uncontrollably
    float speed = max(1.0, uDispSpeed);
    float steppedTime = floor(uTime * speed); 

    vec2 uv = vUv;
    
    // --- 1. UV TEARING (Map & Destroy) ---
    // Instead of liquid noise, we displace strips of the image horizontally
    
    // Create random strips based on Y coordinate and Stepped Time
    float stripSize = max(0.01, 1.0 / uDispScale);
    float stripId = floor(uv.y / stripSize);
    
    // Determine shift amount for this strip
    float shift = (noise(vec2(stripId, steppedTime)) - 0.5) * 2.0;
    
    // Apply Strength
    float strength = uDispStrength * 0.01;
    
    // Threshold - only move some strips
    float threshold = 0.4; // 40% of strips might move
    if (abs(shift) < threshold) shift = 0.0;
    
    vec2 tornUv = uv;
    tornUv.x += shift * strength;

    // --- 2. LUMA WARP (From Input) ---
    // Use the brightness of the NEW image to warp the OLD image
    // This makes the glitch react to the image content
    vec4 currentPixel = texture2D(tNew, vUv);
    float luma = dot(currentPixel.rgb, vec3(0.299, 0.587, 0.114));
    
    vec2 lumaOffset = vec2(
        (luma - 0.5) * (uWarp * 0.005),
        (luma - 0.5) * (uWarp * 0.005) 
    );
    
    vec2 finalReadUv = tornUv + lumaOffset;

    // --- 3. FEEDBACK SAMPLE ---
    vec4 oldCol;
    
    if (uRGBOffset > 0.0) {
        float off = uRGBOffset * 0.002;
        float r = texture2D(tOld, finalReadUv + vec2(off, 0.0)).r;
        float g = texture2D(tOld, finalReadUv).g;
        float b = texture2D(tOld, finalReadUv - vec2(off, 0.0)).b;
        oldCol = vec4(r, g, b, 1.0);
    } else {
        oldCol = texture2D(tOld, finalReadUv);
    }

    // --- 4. MIX & OUTPUT ---
    vec4 newCol = texture2D(tNew, vUv);

    // Temporal Blend
    vec4 mixedCol = mix(newCol, oldCol, uFeedback);
    
    // Decay
    mixedCol.rgb -= (uDecay * 0.01);
    mixedCol = max(vec4(0.0), mixedCol); // Clamp to black

    gl_FragColor = vec4(mixedCol.rgb, 1.0);
}
`;

const VERTEX_SHADER = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export class WebGLMosh {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    
    // Ping-Pong Buffers
    targetA: THREE.WebGLRenderTarget;
    targetB: THREE.WebGLRenderTarget;
    
    material: THREE.ShaderMaterial;
    quad: THREE.Mesh;
    
    width: number = 0;
    height: number = 0;
    
    // To detect I-Frames from outside
    frameCounter: number = 0;

    // Reusable source texture to avoid per-frame allocations
    private _sourceTexture: THREE.CanvasTexture | null = null;

    constructor() {
        this.renderer = new THREE.WebGLRenderer({ alpha: true, preserveDrawingBuffer: true });
        this.renderer.autoClear = false;
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        
        const options: THREE.RenderTargetOptions = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: THREE.UnsignedByteType,
        };
        
        this.targetA = new THREE.WebGLRenderTarget(1, 1, options);
        this.targetB = new THREE.WebGLRenderTarget(1, 1, options);
        
        this.material = new THREE.ShaderMaterial({
            uniforms: {
                tOld: { value: null },
                tNew: { value: null },
                uTime: { value: 0.0 },
                uFeedback: { value: 0.9 },
                uDecay: { value: 0.0 },
                uWarp: { value: 10.0 },
                uBlockSize: { value: 32.0 },
                uRGBOffset: { value: 0.0 },
                
                uDispStrength: { value: 0.0 },
                uDispScale: { value: 20.0 },
                uDispSpeed: { value: 10.0 },
                uDispQuantize: { value: 0.0 },
                
                uResolution: { value: new THREE.Vector2(1, 1) },
                uReset: { value: false }
            },
            vertexShader: VERTEX_SHADER,
            fragmentShader: FRAGMENT_SHADER
        });
        
        this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
        this.scene.add(this.quad);
    }

    resize(w: number, h: number) {
        if (this.width !== w || this.height !== h) {
            this.width = w;
            this.height = h;
            this.renderer.setSize(w, h);
            this.targetA.setSize(w, h);
            this.targetB.setSize(w, h);
            this.material.uniforms.uResolution.value.set(w, h);
        }
    }

    clear() {
        // Hard reset of feedback buffers
        // Ensure we are clearing to a transparent/black state
        this.renderer.setClearColor(0x000000, 0);

        this.renderer.setRenderTarget(this.targetA);
        this.renderer.clear();

        this.renderer.setRenderTarget(this.targetB);
        this.renderer.clear();

        this.renderer.setRenderTarget(null);
        this.frameCounter = 0;

        if (this._sourceTexture) {
            this._sourceTexture.dispose();
            this._sourceTexture = null;
        }
    }

    render(sourceCanvas: HTMLCanvasElement, params: GlitchParams, time: number): HTMLCanvasElement {
        this.resize(sourceCanvas.width, sourceCanvas.height);
        
        this.frameCounter++;
        
        // Update Uniforms
        const uniforms = this.material.uniforms;
        
        // Create or Update Texture from Source (reuse to avoid churn)
        if (!this._sourceTexture) {
            this._sourceTexture = new THREE.CanvasTexture(sourceCanvas);
            this._sourceTexture.minFilter = THREE.LinearFilter;
            this._sourceTexture.magFilter = THREE.LinearFilter;
        } else {
            this._sourceTexture.image = sourceCanvas as any;
            this._sourceTexture.needsUpdate = true;
        }

        uniforms.tNew.value = this._sourceTexture;
        uniforms.tOld.value = this.targetA.texture;
        
        // Pass the raw global time - stepping is now handled in fragment shader via uDispSpeed
        uniforms.uTime.value = time;
        
        uniforms.uFeedback.value = params.moshFeedback / 100;
        uniforms.uDecay.value = params.moshDecay;
        uniforms.uWarp.value = params.moshWarp;
        // Map block size 1-100 to sensible pixel values (e.g. 1 to 200)
        uniforms.uBlockSize.value = Math.max(1.0, (params.moshBlockSize * 2)); 
        uniforms.uRGBOffset.value = params.moshRGBOffset;
        
        // Displacement Params
        uniforms.uDispStrength.value = params.moshDispStrength;
        uniforms.uDispScale.value = params.moshDispScale;
        uniforms.uDispSpeed.value = params.moshDispSpeed;
        uniforms.uDispQuantize.value = params.moshDispQuantize;
        
        // I-Frame Logic for Shader
        // Explicitly set I-Frame if it's the first frame after a clear (frameCounter === 1)
        // This prevents mixing with the black buffer on a hard reset.
        const isFirstFrame = this.frameCounter === 1;
        const autoReset = isFirstFrame || (params.iframeInterval > 0 && (this.frameCounter % params.iframeInterval === 0));
        uniforms.uReset.value = autoReset;

        // Render to Target B (The "Next" Frame)
        this.renderer.setRenderTarget(this.targetB);
        this.renderer.render(this.scene, this.camera);
        
        // Ping-Pong: Swap A and B
        const temp = this.targetA;
        this.targetA = this.targetB;
        this.targetB = temp;
        
        this.renderer.setRenderTarget(null);
        
        // Keep reusable texture alive; do not dispose per-frame
        
        // Render A to default framebuffer (the canvas) for output
        this.material.uniforms.tNew.value = this.targetA.texture; // Draw the feedback result
        this.material.uniforms.uReset.value = true; // Just copy pass
        this.renderer.render(this.scene, this.camera);
        
        return this.renderer.domElement;
    }
}

export const webglMoshService = new WebGLMosh();
