
import { GlitchParams } from '../../../types';
import { createProgram, getSupportedFormat, createTexture, createFBO } from './glUtils';
import { fullscreenVert, moshFrag, postFrag } from './shaders';

export class WebGLMoshEngine {
  gl: WebGL2RenderingContext;
  canvas: HTMLCanvasElement;
  
  moshProgram: WebGLProgram;
  postProgram: WebGLProgram;
  
  pingTex!: WebGLTexture;
  pongTex!: WebGLTexture;
  pingFbo!: WebGLFramebuffer;
  pongFbo!: WebGLFramebuffer;
  sourceTex!: WebGLTexture;
  
  width: number = 0;
  height: number = 0;
  isPing: boolean = true;
  
  private quadBuffer: WebGLBuffer;
  private _lastUploadOk: boolean = false;
  private _lastGLError: number = 0;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.gl = this.canvas.getContext('webgl2', { 
      preserveDrawingBuffer: true, 
      alpha: false,
      antialias: false 
    })!;
    
    if (!this.gl) throw new Error('WebGL2 not supported');

    this.moshProgram = createProgram(this.gl, fullscreenVert, moshFrag);
    this.postProgram = createProgram(this.gl, fullscreenVert, postFrag);
    
    // Fullscreen quad [-1, 1]
    this.quadBuffer = this.gl.createBuffer()!;
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.quadBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), this.gl.STATIC_DRAW);
  }

  init(w: number, h: number) {
    if (this.width === w && this.height === h) return;
    this.width = w;
    this.height = h;
    this.canvas.width = w;
    this.canvas.height = h;
    
    const gl = this.gl;
    const formatInfo = getSupportedFormat(gl);
    
    // Dispose old
    if (this.pingTex) gl.deleteTexture(this.pingTex);
    if (this.pongTex) gl.deleteTexture(this.pongTex);
    if (this.pingFbo) gl.deleteFramebuffer(this.pingFbo);
    if (this.pongFbo) gl.deleteFramebuffer(this.pongFbo);
    if (this.sourceTex) gl.deleteTexture(this.sourceTex);

    this.pingTex = createTexture(gl, w, h, formatInfo);
    this.pongTex = createTexture(gl, w, h, formatInfo);
    this.pingFbo = createFBO(gl, this.pingTex);
    this.pongFbo = createFBO(gl, this.pongTex);
    
    // Source texture is always RGBA8
    this.sourceTex = createTexture(gl, w, h, { internal: gl.RGBA8, format: gl.RGBA, type: gl.UNSIGNED_BYTE });
    
    gl.viewport(0, 0, w, h);
    gl.clearColor(0, 0, 0, 1);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.pingFbo);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.pongFbo);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  render(params: GlitchParams, tMosh: number, source: CanvasImageSource): HTMLCanvasElement {
    this.init(Number(source instanceof HTMLVideoElement ? source.videoWidth : (source as any).width), 
              Number(source instanceof HTMLVideoElement ? source.videoHeight : (source as any).height));
    
    const gl = this.gl;
    const { moshProgram, postProgram } = this;
    
    // 1. Update Source Texture
    gl.bindTexture(gl.TEXTURE_2D, this.sourceTex);
    // Fix: Cast CanvasImageSource to TexImageSource for WebGL compatibility
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, source as TexImageSource);
    // Debug: capture texture upload status
    this._lastGLError = gl.getError?.() ?? 0;
    this._lastUploadOk = this._lastGLError === 0;

    // 2. Mosh Pass (Ping-Pong Feedback)
    const destFbo = this.isPing ? this.pongFbo : this.pingFbo;
    const prevTex = this.isPing ? this.pingTex : this.pongTex;
    
    gl.bindFramebuffer(gl.FRAMEBUFFER, destFbo);
    gl.useProgram(moshProgram);
    
    const persistence = Math.max(0, Math.min(1, params.feedback / 100));
    const injection = params.moshInjection ?? (0.05 + (1 - persistence) * 0.2);
    
    const loc = (name: string) => gl.getUniformLocation(moshProgram, name);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, prevTex);
    gl.uniform1i(loc('u_prev'), 0);
    
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.sourceTex);
    gl.uniform1i(loc('u_source'), 1);
    
    gl.uniform2f(loc('u_resolution'), this.width, this.height);
    gl.uniform1f(loc('u_time'), tMosh);
    gl.uniform1f(loc('u_persistence'), persistence);
    gl.uniform1f(loc('u_injection'), injection);
    gl.uniform1f(loc('u_flowAmp'), (params.moshWarp || 0) * 0.0005);
    gl.uniform1f(loc('u_flowScale'), 2.0);
    gl.uniform1f(loc('u_flowSpeed'), 1.0);
    gl.uniform2f(loc('u_drift'), params.flowX / this.width, -params.flowY / this.height);
    gl.uniform1f(loc('u_globalRot'), (params.flowRotate * Math.PI) / 180);
    gl.uniform1f(loc('u_globalZoom'), params.flowZoom);
    gl.uniform1f(loc('u_diffusion'), params.moshDiffusion || 0);
    gl.uniform1f(loc('u_sculptMask'), params.sculptMask ?? 0);
    gl.uniform1f(loc('u_sculptThreshold'), params.sculptThreshold ?? 0.5);
    gl.uniform1f(loc('u_sculptSoftness'), params.sculptSoftness ?? 0.2);

    const posLoc = gl.getAttribLocation(moshProgram, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuffer);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    // 3. Post Pass (to screen/internal canvas)
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.useProgram(postProgram);
    
    const nextTex = this.isPing ? this.pongTex : this.pingTex;
    const ploc = (name: string) => gl.getUniformLocation(postProgram, name);
    
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, nextTex);
    gl.uniform1i(ploc('u_texture'), 0);
    gl.uniform1f(ploc('u_time'), tMosh);
    gl.uniform1f(ploc('u_grain'), (params.noise / 100) * 0.15);
    gl.uniform1f(ploc('u_chroma'), (params.rgbShift / this.width) * 0.5);
    gl.uniform1f(ploc('u_vignette'), 1.2);

    const pPosLoc = gl.getAttribLocation(postProgram, 'position');
    gl.enableVertexAttribArray(pPosLoc);
    gl.vertexAttribPointer(pPosLoc, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    this.isPing = !this.isPing;
    return this.canvas;
  }

  dispose() {
    const gl = this.gl;
    gl.deleteTexture(this.pingTex);
    gl.deleteTexture(this.pongTex);
    gl.deleteFramebuffer(this.pingFbo);
    gl.deleteFramebuffer(this.pongFbo);
    gl.deleteTexture(this.sourceTex);
    gl.deleteBuffer(this.quadBuffer);
    gl.deleteProgram(this.moshProgram);
    gl.deleteProgram(this.postProgram);
  }

  // Debug helper
  getDebug() {
    return {
      width: this.width,
      height: this.height,
      lastUploadOk: this._lastUploadOk,
      lastError: this._lastGLError,
    };
  }
}
