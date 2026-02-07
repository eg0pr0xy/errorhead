
import { Preset, GlitchParams } from './types';

export const DEFAULT_PARAMS: GlitchParams = {
  amount: 0,
  seed: 25,
  iterations: 5,
  quality: 60,
  simpleSlice: true,
  scatter: 0,
  shred: 0, 
  burn: 0,
  melt: 0,
  shake: 0,
  
  // Professional Glitch Effects
  pixelSort: 0,
  pixelSortMode: 'brightness',
  channelSep: 0,
  channelSepX: 10,
  channelSepY: 0,
  colorOffset: 0,
  pixelation: 0,
  rgbShift: 0,
  redShift: 0,
  greenShift: 0,
  blueShift: 0,
  scanlines: false,
  scanlineIntensity: 20,
  noise: 0,
  brightness: 100,

  // Time & Erosion
  masterSpeed: 0.5, 
  videoSpeedMode: 'normal',
  targetDurationSec: 60,
  timeScaleMosh: 0.5,
  timeScaleDisp: 0.5,
  timeScaleBlocks: 0.5,
  timeScaleChroma: 0.5,
  
  holdMode: false,
  injectIntervalSec: 5.0,
  injectFrames: 1,

  // Datamosh Defaults
  moshEnabled: false,
  moshMode: '2d',
  moshInjection: 0.1,
  moshDiffusion: 0,
  iframeInterval: 30, 
  iframeBloom: 0,
  iframeSoftReset: 0,
  flowX: 0,
  flowY: 0,
  flowRotate: 0,
  flowZoom: 0,
  blockList: 0,
  blockSize: 32,
  feedback: 0,
  refSwap: 0,
  historyCaptureInterval: 1, // Capture every frame for maximum temporal depth
  motionResidue: 0, // 0-100: Motion error accumulation (true temporal datamosh)
  
  // Advanced Temporal Effects
  temporalEcho: 0,
  temporalEchoDecay: 50,
  temporalEchoOffset: 10,
  timeSmear: 0,
  timeSmearFrames: 5,
  timeSmearNonLinear: 50,
  reverseBurst: 0,
  reverseBurstDuration: 10,
  stutterLock: 0,
  stutterLockMin: 2,
  stutterLockMax: 10,
  temporalDisplace: 0,
  temporalDisplaceRegions: 8,
  temporalDisplaceOffset: 15,
  
  // No-Signal Snow Burst (off by default)
  snowBurstEnabled: false,
  snowBurstDurationFrames: 6,
  snowBurstChance: 0,
  snowBurstIntensity: 60,
  
  // Phase 1 Core Effects
  partialReplace: 0,
  partialReplacePattern: 'random',
  partialReplaceOffset: 10,
  audioEventEnable: false,
  audioEventThreshold: 70,
  audioEventAction: 'freeze',
  audioEventDuration: 10,
  chaosAmount: 0,
  chaosEvolve: false,
  // Advanced MV Abuse
  mvAbuse: false,
  mvBlockSize: 32,
  mvSearchRadius: 2,
  
  // WebGL Shader Mosh Defaults
  shaderMoshEnabled: false,
  moshFeedback: 85,
  moshDecay: 2,
  moshWarp: 10,
  moshBlockSize: 30,
  moshRGBOffset: 5,
  // Motion Sculpture Mask (off by default)
  sculptMask: 0,
  sculptThreshold: 0.5,
  sculptSoftness: 0.2,
  
  // Displacement Defaults
  moshDispStrength: 0,
  moshDispScale: 10, 
  moshDispSpeed: 5, 
  moshDispQuantize: 0,

  // Chroma Drift / Delay (off by default)
  chromaDelayFrames: 0,
  chromaDriftAmount: 0,
  chromaWobbleSpeed: 0,

  // Slice / Stripe Displacement (off by default)
  sliceEnabled: false,
  sliceCount: 0,
  sliceThickness: 0,
  sliceOffsetMax: 0,
  sliceDirection: 'h',
  sliceHoldFrames: 0,

  // Audio Reactivity — Control Voltage System
  audioEnabled: false,
  audioSource: 'mic',
  audioGain: 50,
  audioGate: 10,
  audioSmooth: 30,
  audioFeature: 'envelope',
  audioTargetRgb: 50,
  audioTargetAmount: 30,
  audioTargetWarp: 60,
  audioTargetFeedback: 0,
  audioTargetBlocks: 0,
  audioTargetMelt: 0,
  audioTargetShake: 0,
  audioTargetNoise: 0,
  audioInvert: false,
  audioQuantize: 0,
  audioModulationBypass: false,
  // Compression safety
  corruptMode: 'safe',
  // Optional strict effects layer (post-processing)
  strictEffectsEnabled: false,

  // Analog Phase Slip (off by default)
  phaseEnabled: false,
  phaseOffset: 0,
  phaseSpeed: 0,
  phaseOffsetX: 0,
  phaseSpeedX: 0,
  phaseJitter: 0,
  analogInertia: 0.85,
  wrapMode: 'hard',
  banding: 'line',
  // Horizontal Drift + Wave (off by default)
  hOffset: 0,
  hSpeed: 0,
  hAmount: 0,
  waveAmount: 0,
  waveFrequency: 0,
  waveSpeed: 0,
  wavePhase: 0,

  // Vertical Sync Collapse (off by default)
  vSyncEnabled: false,
  vSyncBandCount: 8,
  vSyncBaseSpeed: 0,
  vSyncBandVariance: 0,
  vSyncJitter: 0,
  vSyncWrapMode: 'hard',

  // VHS Tracking Noise Band (off by default)
  trackingEnabled: false,
  trackingStrength: 0,
  trackingBandHeight: 0,
  trackingSpeed: 0,
  trackingPosition: 'auto',
  trackingTearAmount: 0,
};

export const APP_VERSION = 'v2.1.0';

// WARNING:
// Presets are creative surface definitions.
// They must never be removed, replaced, normalized, or adapted
// to audio modulation or engine changes.
// Only additive changes are allowed.
export const PRESETS: Preset[] = [
  {
    id: 'default',
    name: 'INITIALIZE',
    params: { ...DEFAULT_PARAMS }
  },
  {
    id: 'audio-reactive-glitch',
    name: 'SONIC ENTROPY (AUDIO)',
    params: {
      ...DEFAULT_PARAMS,
      audioEnabled: true,
      audioSource: 'mic',
      audioGain: 120,
      audioGate: 5,
      audioSmooth: 25,
      audioFeature: 'low',
      amount: 5,
      rgbShift: 4,
      moshEnabled: true,
      moshMode: 'webgl',
      feedback: 95,
      moshWarp: 10,
      audioTargetWarp: 150,
      audioTargetRgb: 60,
      audioTargetAmount: 60,
      audioTargetNoise: 20
    }
  },
  {
    id: 'motion-sculpture',
    name: 'MOTION SCULPTURE (GL)',
    params: {
        ...DEFAULT_PARAMS,
        moshEnabled: true,
        moshMode: 'webgl',
        feedback: 92,
        moshInjection: 0.12,
        moshWarp: 40,
        flowX: 2,
        flowRotate: 1,
        noise: 20,
        rgbShift: 10,
        sculptMask: 1,
        sculptThreshold: 0.45,
        sculptSoftness: 0.2
    }
  },
  {
    id: 'deconstructed-paper',
    name: 'PAPER SHREDDER',
    params: {
        ...DEFAULT_PARAMS,
        scatter: 60,
        shred: 80,
        burn: 20,
        amount: 5,
        scanlines: true,
        scanlineIntensity: 10,
        timeScaleBlocks: 0.2 
    }
  },
  {
    id: 'burnt-film',
    name: 'ACID BURN',
    params: {
        ...DEFAULT_PARAMS,
        melt: 50,
        burn: 100,
        scatter: 20,
        colorOffset: 20,
        redShift: 30,
        brightness: 120,
        noise: 40
    }
  },
  {
    id: 'erosion-sculpture-30min',
    name: 'EROSION SCULPTURE (30m)',
    params: {
      ...DEFAULT_PARAMS,
      shaderMoshEnabled: true,
      masterSpeed: 0.5,
      videoSpeedMode: 'timeWarp',
      targetDurationSec: 1800, 
      holdMode: true,
      injectIntervalSec: 10,
      injectFrames: 2,
      moshFeedback: 99,
      moshDecay: 0.1,
      moshWarp: 5,
      moshDispStrength: 10,
      moshDispScale: 10,
      moshDispSpeed: 2,
      timeScaleDisp: 0.2,
      amount: 0,
    }
  },
  {
    id: 'slow-drift',
    name: 'SLOW DRIFT',
    params: {
      ...DEFAULT_PARAMS,
      phaseEnabled: true,
      phaseSpeed: 0.08,
      phaseOffset: 2,
      phaseJitter: 0.4,
      wrapMode: 'soft',
      banding: 'line',
      hAmount: 2,
      hSpeed: 0.04,
      waveAmount: 2,
      waveFrequency: 0.008,
      waveSpeed: 0.03,
      scanlines: true,
      scanlineIntensity: 12,
      noise: 5,
      amount: 0
    }
  },
  {
    id: 'hard-meltdown',
    name: 'HARD MELTDOWN',
    params: {
      ...DEFAULT_PARAMS,
      shaderMoshEnabled: true,
      masterSpeed: 2.0,
      moshFeedback: 80,
      moshDecay: 5,
      moshWarp: 60,
      moshDispStrength: 50,
      moshDispScale: 15,
      moshDispSpeed: 30,
      timeScaleDisp: 3.0,
      amount: 10,
      melt: 30
    }
  },
  {
    id: 'vhs-tape-loop',
    name: 'VHS TAPE LOOP',
    params: {
      ...DEFAULT_PARAMS,
      moshEnabled: false,
      amount: 25,
      quality: 40,
      noise: 60,
      scanlines: true,
      scanlineIntensity: 65,
      shake: 70, 
      melt: 20,
      rgbShift: 15,
      colorOffset: 10,
      brightness: 115
    }
  },
  {
    id: 'liquid-noise',
    name: 'LIQUID NOISE',
    params: {
      ...DEFAULT_PARAMS,
      moshEnabled: true,
      moshMode: 'webgl',
      feedback: 98,
      moshWarp: 0, 
      moshDiffusion: 2.0,
      moshInjection: 0.1,
      amount: 0,
      rgbShift: 5,
      shaderMoshEnabled: true,
      moshDispStrength: 40,
      moshDispScale: 15,
      moshDispSpeed: 10
    }
  },
  {
    id: 'datamosh-burst',
    name: 'DATAMOSH BURST',
    params: {
      ...DEFAULT_PARAMS,
      moshEnabled: true,
      iframeInterval: 45,
      iframeBloom: 60,
      flowZoom: -20,
      flowRotate: 4,
      blockList: 60,
      blockSize: 32,
      feedback: 20,
      amount: 10
    }
  },
  {
    id: 'temporal-echo',
    name: 'TEMPORAL ECHO',
    params: {
      ...DEFAULT_PARAMS,
      moshEnabled: true,
      moshMode: '2d',
      iframeInterval: 0,
      feedback: 96,
      refSwap: 85,
      flowX: 2,
      flowY: 0,
      rgbShift: 5,
      brightness: 110
    }
  },
  {
    id: 'digital-sludge',
    name: 'DIGITAL SLUDGE',
    params: {
      ...DEFAULT_PARAMS,
      shaderMoshEnabled: true,
      moshFeedback: 90,
      moshDecay: 1,
      moshDispStrength: 80,
      moshDispScale: 80,
      moshDispSpeed: 2,
      moshDispQuantize: 80, 
      moshRGBOffset: 30,
      pixelation: 5
    }
  },
  {
    id: 'fleisch-airsatz',
    name: 'FLEISCH AIRSATZ',
    params: {
      ...DEFAULT_PARAMS,
      amount: 12,
      quality: 35,
      noise: 45,
      rgbShift: 4,
      colorOffset: 3,
      pixelation: 3,
      iterations: 2,
      brightness: 110,
      scanlines: true,
      scanlineIntensity: 10
    }
  },
  {
    id: 'bates-motel-tv',
    name: 'BATES MOTEL TV',
    params: {
      ...DEFAULT_PARAMS,
      // Analog Sync Distortion
      phaseEnabled: true,
      phaseSpeed: 0.12,
      phaseOffset: 5,
      phaseSpeedX: 0.03,
      phaseOffsetX: 0,
      phaseJitter: 0.2,
      wrapMode: 'soft',
      banding: 'line',

      // Sync Collapse (band-based drift)
      vSyncEnabled: true,
      vSyncBandCount: 8,
      vSyncBaseSpeed: 0.05,
      vSyncBandVariance: 0.08,
      vSyncJitter: 0.15,
      vSyncWrapMode: 'soft',

      // Horizontal / Wave motion
      hAmount: 3,
      hSpeed: 0.05,
      hOffset: 0,
      waveAmount: 4,
      waveFrequency: 0.01,
      waveSpeed: 0.05,
      wavePhase: 0,

      // Subtle CRT character
      scanlines: true,
      scanlineIntensity: 12,
      noise: 2,

      // Avoid digital glitching
      amount: 0,
      pixelSort: 0,
      channelSep: 0
    }
  },
  // --- added presets (non-destructive extension) ---
  {
    id: 'culprit-pixel',
    name: 'CULPRIT PIXEL',
    params: {
      ...DEFAULT_PARAMS,
      // Pixel sorting + chroma drift character
      pixelSort: 55,
      pixelSortMode: 'brightness',
      channelSep: 20,
      channelSepX: 12,
      channelSepY: 2,
      pixelation: 2,

      // Chroma drift / delay
      chromaDelayFrames: 2,
      chromaDriftAmount: 6,
      chromaWobbleSpeed: 0.8,

      // Slice displacement (subtle)
      sliceEnabled: true,
      sliceCount: 8,
      sliceThickness: 12,
      sliceOffsetMax: 40,
      sliceDirection: 'h',
      sliceHoldFrames: 2,

      // Display texture
      scanlines: true,
      scanlineIntensity: 12,
      noise: 6
    }
  },
  {
    id: 'sickfried',
    name: 'SICKFRIED',
    params: {
      ...DEFAULT_PARAMS,
      // 2D mosh core
      moshEnabled: true,
      moshMode: '2d',
      iframeInterval: 30,
      feedback: 92,
      flowX: 2,
      flowY: 1,
      flowRotate: 0,
      flowZoom: 0,
      blockList: 55,
      blockSize: 32,
      refSwap: 20,
      motionResidue: 20,

      // Temporal layering
      temporalEcho: 35,
      temporalEchoDecay: 30,
      temporalEchoOffset: 6,
      timeSmear: 25,
      timeSmearFrames: 4,
      timeSmearNonLinear: 50,
      temporalDisplace: 25,
      temporalDisplaceRegions: 6,
      temporalDisplaceOffset: 8,

      // Subtle display grit
      scanlines: true,
      scanlineIntensity: 10,
      noise: 10
    }
  }
];

