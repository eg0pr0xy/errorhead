
export enum Tab {
  FILES = 'FILES',
  PREVIEW = 'PREVIEW',
  CONTROLS = 'CONTROLS'
}

export interface GlitchParams {
  // Core
  amount: number;      // 0-100
  seed: number;        // 0-100
  iterations: number;  // 0-40
  quality: number;     // 0-100
  
  // Geometry & Destruction
  simpleSlice: boolean;
  scatter: number;     // 0-100
  shred: number;       // 0-100
  burn: number;        // 0-100
  melt: number;        // 0-100
  shake: number;       // 0-100
  
  // Professional Glitch Effects
  pixelSort?: number;         // 0-100: Pixel sorting intensity
  pixelSortMode?: 'brightness' | 'hue' | 'random';  // Sorting algorithm
  channelSep?: number;        // 0-100: Channel separation intensity
  channelSepX?: number;       // -50 to 50: Horizontal channel offset
  channelSepY?: number;       // -50 to 50: Vertical channel offset
  
  // Color
  colorOffset: number; // 0-50
  
  // New Effects for Motion
  pixelation: number; // 0-20
  rgbShift: number; // 0-50
  
  // Independent RGB Split
  redShift: number;   // -50 to 50
  greenShift: number; // -50 to 50
  blueShift: number;  // -50 to 50
  
  // Display/Post-processing
  scanlines: boolean;
  scanlineIntensity: number; // 0-100
  noise: number; // 0-100
  brightness: number; // 100 default

  // Time & Erosion
  masterSpeed: number;
  videoSpeedMode: 'normal' | 'timeWarp'; 
  targetDurationSec: number;
  timeScaleMosh: number;
  timeScaleDisp: number;
  timeScaleBlocks: number;
  timeScaleChroma: number;

  // Input Injection
  holdMode: boolean;
  injectIntervalSec: number;
  injectFrames: number;

  // Datamosh Engine
  moshEnabled: boolean;
  moshMode: '2d' | 'webgl';
  moshInjection?: number;
  moshDiffusion?: number;
  // Advanced Motion Vector / True Mosh Controls
  mvAbuse?: boolean;         // enable block-matching MV abuse
  mvBlockSize?: number;      // block size in pixels
  mvSearchRadius?: number;   // search radius in blocks
  
  // I-Frame / GOP
  iframeInterval: number;
  iframeBloom: number;
  iframeSoftReset: number;

  // Motion Vector
  flowX: number;
  flowY: number;
  flowRotate: number;
  flowZoom: number;
  
  // Macroblock Corruption
  blockList: number;
  blockSize: number;
  
  // Temporal
  feedback: number;
  refSwap: number;
  historyCaptureInterval?: number; // Frames between history captures (1=every frame, 5=every 5 frames)
  motionResidue?: number; // 0-100: Accumulate motion errors over time (true datamosh)
  
  // Advanced Temporal Effects
  temporalEcho?: number;           // 0-100: Echo intensity
  temporalEchoDecay?: number;      // 0-100: Echo decay rate
  temporalEchoOffset?: number;     // 1-60: Frames back to echo from
  timeSmear?: number;              // 0-100: Time smear intensity
  timeSmearFrames?: number;        // 2-10: Frames to blend
  timeSmearNonLinear?: number;     // 0-100: Non-linear weight distribution
  reverseBurst?: number;           // 0-100: Reverse burst probability
  reverseBurstDuration?: number;   // 2-30: Reverse burst duration in frames
  stutterLock?: number;            // 0-100: Stutter lock probability
  stutterLockMin?: number;         // 1-10: Min stutter duration
  stutterLockMax?: number;         // 2-30: Max stutter duration
  temporalDisplace?: number;       // 0-100: Temporal displacement intensity
  temporalDisplaceRegions?: number;// 1-20: Number of displaced regions
  temporalDisplaceOffset?: number; // 1-30: Max frame offset for displacement
  
  // Phase 1 Core Effects
  partialReplace?: number;         // 0-100: Partial frame replacement intensity
  partialReplacePattern?: 'random' | 'bands' | 'blocks' | 'gradient'; // Replacement pattern
  partialReplaceOffset?: number;   // 1-60: Frames back to source from
  audioEventEnable?: boolean;      // Enable audio-triggered frame events
  audioEventThreshold?: number;    // 0-100: Event trigger sensitivity
  audioEventAction?: 'inject' | 'reverse' | 'freeze' | 'swap'; // Event action type
  audioEventDuration?: number;     // 1-30: Event duration in frames
  chaosAmount?: number;            // 0-100: Controlled unpredictability amount
  chaosEvolve?: boolean;           // Seed evolves over time

  // WebGL Shader Mosh
  shaderMoshEnabled: boolean;
  moshFeedback: number;
  moshDecay: number;
  moshWarp: number;
  moshBlockSize: number;
  moshRGBOffset: number;
  
  // Displacement Noise
  moshDispStrength: number;
  moshDispScale: number;
  moshDispSpeed: number;
  moshDispQuantize: number;

  // Audio Reactivity — Control Voltage System
  audioEnabled: boolean;
  audioSource: 'mic' | 'video' | 'music';
  audioGain: number;          // Master gain multiplier (0-200)
  audioGate: number;          // Noise gate threshold (0-100)
  audioSmooth: number;        // Modulation smoothing (0-100)
  
  // Feature Selection for Modulation
  audioFeature: 'amplitude' | 'envelope' | 'low' | 'mid' | 'high' | 'transient' | 'beat';
  
  // Modulation Targets with Depth Control
  audioTargetRgb: number;         // RGB shift modulation depth (0-100)
  audioTargetAmount: number;      // Glitch amount modulation depth (0-100)
  audioTargetWarp: number;        // Mosh warp modulation depth (0-100)
  audioTargetFeedback?: number;   // Temporal feedback modulation depth (0-100)
  audioTargetBlocks?: number;     // Macroblock modulation depth (0-100)
  audioTargetMelt?: number;       // Melt intensity modulation depth (0-100)
  audioTargetShake?: number;      // Shake/instability modulation depth (0-100)
  audioTargetNoise?: number;      // Noise modulation depth (0-100)
  
  // Advanced Modulation Options
  audioInvert?: boolean;          // Invert modulation signal
  audioQuantize?: number;         // Step quantization (0 = smooth, higher = stepped)
  
  musicUrl?: string;              // Blob URL for separate music track

  // Compression Corruption Mode
  corruptMode?: 'safe' | 'unsafe';

  // Optional strict effects layer (post-processing)
  strictEffectsEnabled?: boolean;

  // Analog Phase Slip (optional)
  phaseEnabled?: boolean;
  phaseOffset?: number;
  phaseSpeed?: number;
  phaseJitter?: number;
  wrapMode?: 'hard' | 'soft';
  banding?: 'line' | 'block';
  // Horizontal Drift + Wave (Analog Sync Distortion extension)
  hOffset?: number;
  hSpeed?: number;
  hAmount?: number;
  waveAmount?: number;
  waveFrequency?: number;
  waveSpeed?: number;
  wavePhase?: number;

  // Vertical Sync Collapse (optional)
  vSyncEnabled?: boolean;
  vSyncBandCount?: number;
  vSyncBaseSpeed?: number;
  vSyncBandVariance?: number;
  vSyncJitter?: number;
  vSyncWrapMode?: 'hard' | 'soft';
}

export interface Preset {
  id: string;
  name: string;
  params: GlitchParams;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warn' | 'error';
}

export interface Keyframe {
  id: string;
  time: number;
  params: GlitchParams;
}

export interface AnimationState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  keyframes: Keyframe[];
  fps: number;
}

export interface AppState {
  originalImage: string | null;
  glitchedImage: string | null;
  filename: string;
  params: GlitchParams;
  history: string[];
  isProcessing: boolean;
  activeTab: Tab;
  logs: LogEntry[];
  animation: AnimationState;
}
