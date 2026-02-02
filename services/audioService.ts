/**
 * ERRORHEAD Audio Service — Control Voltage System
 * 
 * Audio behaves as CONTROL VOLTAGE, not noise.
 * Features:
 * - RMS amplitude with envelope following
 * - Multi-band frequency analysis (LOW / MID / HIGH)
 * - Transient/beat detection
 * - Stable 0-1 normalization with smoothing
 */

export interface AudioFeatures {
  // Global amplitude (RMS normalized 0-1)
  amplitude: number;
  
  // Envelope follower (attack/release smoothed amplitude)
  envelope: number;
  
  // Frequency band energies (0-1 normalized)
  low: number;      // 20-250 Hz (bass, kick, sub)
  mid: number;      // 250-4000 Hz (vocals, melody)
  high: number;     // 4000-20000 Hz (cymbals, transients)
  
  // Transient detection (0-1, spikes on percussive hits)
  transient: number;
  
  // Beat confidence (0-1, smooth pulse on rhythmic content)
  beat: number;
}

export class AudioAnalyzer {
  ctx: AudioContext;
  analyser: AnalyserNode;
  dataArray: Uint8Array;
  frequencyData: Uint8Array;
  micSource: MediaStreamAudioSourceNode | null = null;
  mediaSource: MediaElementAudioSourceNode | null = null;
  destination: MediaStreamAudioDestinationNode;
  isActive: boolean = false;
  currentElement: HTMLMediaElement | null = null;
  elementNodes: WeakMap<HTMLMediaElement, MediaElementAudioSourceNode> = new WeakMap();

  // Feature extraction state
  private prevRMS: number = 0;
  private envelope: number = 0;
  private prevAmplitude: number = 0;
  private transientAccum: number = 0;
  private beatPhase: number = 0;
  private beatSmooth: number = 0;
  
  // Smoothing constants (exponential moving average)
  private readonly ATTACK_COEF = 0.3;    // Fast rise
  private readonly RELEASE_COEF = 0.05;  // Slow fall
  private readonly TRANSIENT_DECAY = 0.85;
  private readonly BEAT_SMOOTH = 0.1;

  constructor() {
    this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Optimized FFT settings for feature extraction
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 2048; // Higher resolution for better frequency separation
    this.analyser.smoothingTimeConstant = 0.4; // Moderate smoothing for stability
    this.analyser.minDecibels = -90;
    this.analyser.maxDecibels = -10;
    
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
    
    // Mixed audio stream destination for recording/export
    this.destination = this.ctx.createMediaStreamDestination();
  }

  async resume() {
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
  }

  async connectMic() {
    await this.resume();
    this.stop(); // Clear existing
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.micSource = this.ctx.createMediaStreamSource(stream);
      // Route to analyser for metering
      this.micSource.connect(this.analyser);
      // Route to mixed destination for recording
      this.micSource.connect(this.destination);
      this.isActive = true;
      console.info("ERRORHEAD // Mic Source Connected [CV Mode]");
    } catch (e) {
      console.error("Audio access denied", e);
      this.isActive = false;
    }
  }

  connectMedia(element: HTMLMediaElement) {
    // Resume context for autoplay policies
    this.resume();
    if (this.currentElement === element && this.mediaSource) {
      this.isActive = true;
      console.info("ERRORHEAD // Media Source Reused [CV Mode]:", element.tagName);
      return;
    }

    // Disconnect previous media node (but keep mic if present)
    if (this.mediaSource) {
      try {
        this.mediaSource.disconnect();
      } catch {}
    }
    this.currentElement = element;
    
    try {
      // Note: createMediaElementSource can only be called once per element in its lifetime
      const existing = this.elementNodes.get(element);
      this.mediaSource = existing ?? this.ctx.createMediaElementSource(element);
      if (!existing) this.elementNodes.set(element, this.mediaSource);
      // Route to analyser for metering
      this.mediaSource.connect(this.analyser);
      // Route to mixed destination for recording
      this.mediaSource.connect(this.destination);
      // Route to speakers for monitoring
      this.mediaSource.connect(this.ctx.destination);
      this.isActive = true;
      console.info("ERRORHEAD // Media Source Connected [CV Mode]:", element.tagName);
    } catch (e) {
      console.warn("Could not connect media source (might already be connected):", e);
      this.isActive = true; // Still active if it failed because it's already connected
    }
  }

  stop() {
    if (this.micSource) {
      this.micSource.disconnect();
      this.micSource = null;
    }
    if (this.mediaSource) {
      try { this.mediaSource.disconnect(); } catch {}
      // Keep the node in WeakMap for this element to reuse later
    }
    // Keep destination alive; it provides the mixed stream
    this.isActive = false;
    
    // Reset state
    this.prevRMS = 0;
    this.envelope = 0;
    this.prevAmplitude = 0;
    this.transientAccum = 0;
    this.beatPhase = 0;
    this.beatSmooth = 0;
  }

  /**
   * Legacy method for backward compatibility
   * Returns simple amplitude 0-1
   */
  getLevel(): number {
    if (!this.isActive) return 0;
    return this.getFeatures().amplitude;
  }

  /**
   * MAIN FEATURE EXTRACTION
   * Returns comprehensive audio features for expressive modulation
   */
  getFeatures(): AudioFeatures {
    if (!this.isActive) {
      return {
        amplitude: 0,
        envelope: 0,
        low: 0,
        mid: 0,
        high: 0,
        transient: 0,
        beat: 0
      };
    }

    // Get frequency data
    // @ts-ignore - TypeScript ArrayBuffer type compatibility
    this.analyser.getByteFrequencyData(this.frequencyData);
    
    const sampleRate = this.ctx.sampleRate;
    const binCount = this.analyser.frequencyBinCount;
    const binWidth = (sampleRate / 2) / binCount;
    
    // Calculate frequency bin ranges
    const lowEnd = Math.floor(250 / binWidth);    // 20-250 Hz
    const midEnd = Math.floor(4000 / binWidth);   // 250-4000 Hz
    const highEnd = binCount;                      // 4000-20000 Hz
    
    // Calculate RMS amplitude across all frequencies
    let sumSquares = 0;
    for (let i = 0; i < binCount; i++) {
      const normalized = this.frequencyData[i] / 255;
      sumSquares += normalized * normalized;
    }
    const rms = Math.sqrt(sumSquares / binCount);
    
    // Smooth amplitude with attack/release envelope
    const amplitude = Math.min(1.0, rms * 1.5); // Boost sensitivity
    if (amplitude > this.envelope) {
      this.envelope += (amplitude - this.envelope) * this.ATTACK_COEF;
    } else {
      this.envelope += (amplitude - this.envelope) * this.RELEASE_COEF;
    }
    
    // Calculate band energies with normalization
    const calcBandEnergy = (start: number, end: number): number => {
      let sum = 0;
      let count = 0;
      for (let i = start; i < Math.min(end, binCount); i++) {
        sum += this.frequencyData[i];
        count++;
      }
      return count > 0 ? Math.min(1.0, (sum / count / 255) * 1.8) : 0;
    };
    
    const low = calcBandEnergy(0, lowEnd);
    const mid = calcBandEnergy(lowEnd, midEnd);
    const high = calcBandEnergy(midEnd, highEnd);
    
    // Transient detection (sudden amplitude increases)
    const amplitudeDelta = amplitude - this.prevAmplitude;
    if (amplitudeDelta > 0.15) { // Threshold for transient detection
      this.transientAccum = Math.min(1.0, this.transientAccum + amplitudeDelta * 3.0);
    }
    this.transientAccum *= this.TRANSIENT_DECAY; // Decay transient signal
    const transient = Math.min(1.0, this.transientAccum);
    
    // Beat detection (low frequency energy combined with transients)
    const beatRaw = low * 0.7 + transient * 0.3;
    this.beatSmooth += (beatRaw - this.beatSmooth) * this.BEAT_SMOOTH;
    const beat = Math.min(1.0, this.beatSmooth);
    
    // Update state for next frame
    this.prevAmplitude = amplitude;
    this.prevRMS = rms;
    
    return {
      amplitude,
      envelope: Math.min(1.0, this.envelope),
      low: Math.min(1.0, low),
      mid: Math.min(1.0, mid),
      high: Math.min(1.0, high),
      transient: Math.min(1.0, transient),
      beat: Math.min(1.0, beat)
    };
  }

  /**
   * Returns a mixed MediaStream of all active sources for capture/recording.
   */
  getMixedStream(): MediaStream {
    return this.destination.stream;
  }
}

export const audioService = new AudioAnalyzer();
