import React, { useState, useEffect, useRef } from 'react';
import { Layout } from './components/Layout';
import { FilePanel } from './components/Panels/FilePanel';
import { ControlPanel } from './components/Panels/ControlPanel';
import { Timeline } from './components/Timeline';
import { renderGlitch, resetGlitchState } from './frame_pipeline/pipeline';
import { loadImageTo, loadVideoTo } from './media_loader/mediaLoader';
import { exportCanvasImage, startCanvasRecording, stopCanvasRecording } from './export/exportService';
import { audioService } from './services/audioService';
import { getVideoDims } from './services/mediaUtils';
import { DEFAULT_PARAMS } from './constants';
import { GlitchParams, AnimationState, Preset } from './types';


// TEMP toggle for effect pipeline during verification
const EFFECTS_ENABLED = true;

// Debug: Add test pattern function
const drawTestPattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Draw gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#000000');
  gradient.addColorStop(0.5, '#00ff00');
  gradient.addColorStop(1, '#0000ff');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Draw a white rectangle
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(width * 0.25, height * 0.25, width * 0.5, height * 0.5);
  
  // Draw text
  ctx.fillStyle = '#ff0000';
  ctx.font = '48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CANVAS TEST', width / 2, height / 2);
  
  console.log(`[Debug] Test pattern drawn: ${width}x${height}`);
};

const EditorApp: React.FC = () => {
  // --- STATE ---
  const [params, setParams] = useState<GlitchParams>(DEFAULT_PARAMS);
  const [liveMode, setLiveMode] = useState(true);
  const [activePresetId, setActivePresetId] = useState<string>('default');
  const [logs, setLogs] = useState<string[]>([]);
  
  const [animationMode, setAnimationMode] = useState(false);
  const [animState, setAnimState] = useState<AnimationState>({
    isPlaying: false,
    currentTime: 0,
    duration: 5,
    keyframes: [],
    fps: 30
  });

  const [sourceType, setSourceType] = useState<'image' | 'video' | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [fileName, setFileName] = useState<string>('');
  const [exportQuality, setExportQuality] = useState<number>(90);
  const [isRecording, setIsRecording] = useState(false);
  const [fps, setFps] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const lastObjectUrlRef = useRef<string | null>(null);
  // Recording options
  const [recordFormat, setRecordFormat] = useState<'auto' | 'webm' | 'mp4'>('auto');
  const [recordFps, setRecordFps] = useState<number>(30);
  // PNG sequence capture
  const [isSeqActive, setIsSeqActive] = useState(false);
  const [seqFps, setSeqFps] = useState<number>(30);
  const [seqFrames, setSeqFrames] = useState<number>(0);
  const pngSeqRef = useRef<{ active: boolean; fps: number; framesTotal: number; frameIndex: number; baseName: string }>(
    { active: false, fps: 30, framesTotal: 0, frameIndex: 0, baseName: 'errorhead_seq' }
  );
  // Resolution lock
  const [lockRes, setLockRes] = useState(false);
  const [lockWidth, setLockWidth] = useState<number>(0);
  const [lockHeight, setLockHeight] = useState<number>(0);

  // Audio Music Ref
  const musicRef = useRef<HTMLAudioElement>(new Audio());

  // Track music element playback state for UI
  useEffect(() => {
    const el = musicRef.current;
    const onPlay = () => setIsMusicPlaying(true);
    const onPause = () => setIsMusicPlaying(false);
    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('ended', onPause);
    return () => {
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('ended', onPause);
    };
  }, []);

  // Refs for Render Loop
  const paramsRef = useRef(params);
  const animStateRef = useRef(animState);
  const liveModeRef = useRef(liveMode);
  const sourceTypeRef = useRef(sourceType);
  const isVideoPlayingRef = useRef(isVideoPlaying);
  const animationModeRef = useRef(animationMode);
  const isPlayingRef = useRef(isPlaying);
  const wasVideoPlayingRef = useRef(false);
  const videoAudioStateRef = useRef<{ muted: boolean; volume: number } | null>(null);
  
  const tGlobalRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const frameCountRef = useRef(0);
  const lastFpsTimeRef = useRef(0);
  const totalFramesRef = useRef(0);
  const [frameCounterDisplay, setFrameCounterDisplay] = useState(0);
  const isRenderingRef = useRef(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const requestRef = useRef<number>(0);

  // Initialize media refs and playback state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handlePause);
    };
  }, []);

  // Recording Refs
  const recorderRef = useRef<MediaRecorder | null>(null);
  const recordChunksRef = useRef<Blob[]>([]);
  const recordStreamRef = useRef<MediaStream | null>(null);
  const recordTimerRef = useRef<number | null>(null);

  // Toast UI
  const [toast, setToast] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(null), 3000);
  };

  const setPlaying = (next: boolean) => {
    isPlayingRef.current = next;
    setIsPlaying(next);
  };

  // Sync Refs
  useEffect(() => { paramsRef.current = params; }, [params]);
  useEffect(() => { animStateRef.current = animState; }, [animState]);
  useEffect(() => { liveModeRef.current = liveMode; }, [liveMode]);
  useEffect(() => { sourceTypeRef.current = sourceType; }, [sourceType]);
  useEffect(() => { isVideoPlayingRef.current = isVideoPlaying; }, [isVideoPlaying]);
  useEffect(() => { animationModeRef.current = animationMode; }, [animationMode]);
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);

  // Pause/resume video element when global playback is toggled
  useEffect(() => {
    const video = videoRef.current;
    if (!video || sourceTypeRef.current !== 'video') return;
    if (!isPlaying) {
      wasVideoPlayingRef.current = !video.paused;
      if (!video.paused) video.pause();
    } else if (wasVideoPlayingRef.current) {
      video.play().catch(() => {});
      wasVideoPlayingRef.current = false;
    }
  }, [isPlaying, sourceType]);

  // Audio Logic: Dynamic Routing (playback persists across preset/effect changes)
  useEffect(() => {
    if (!params.audioEnabled) {
      // Restore video audio state if we changed it for analysis
      const video = videoRef.current;
      if (video && videoAudioStateRef.current) {
        video.muted = videoAudioStateRef.current.muted;
        video.volume = videoAudioStateRef.current.volume;
        videoAudioStateRef.current = null;
      }
      // Do not stop playback here; modulation can be disabled independently.
      return;
    }
    // CRITICAL: Resume AudioContext on user interaction (autoplay policy)
    audioService.resume().catch(() => {});

    if (params.audioSource === 'mic') {
      audioService.connectMic().then(() => addLog('Audio: Mic Online')).catch(() => addLog('Audio: Mic Access Denied'));
    } else if (params.audioSource === 'video' && videoRef.current) {
      const video = videoRef.current;
      if (video && !videoAudioStateRef.current) {
        videoAudioStateRef.current = { muted: video.muted, volume: video.volume };
      }
      if (video) {
        video.muted = false;
        if (video.volume < 0.2) video.volume = 0.4;
      }
      audioService.connectMedia(videoRef.current);
      addLog('Audio: Tapped Video Stream');
    } else if (params.audioSource === 'music' && params.musicUrl) {
      if (musicRef.current.src !== params.musicUrl) {
        musicRef.current.src = params.musicUrl;
      }
      musicRef.current.play().catch(() => {});
      audioService.connectMedia(musicRef.current);
      addLog('Audio: Music Stream Active');
    }
  }, [params.audioEnabled, params.audioSource, params.musicUrl]);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLogs(prev => [`[${time}] ${msg}`, ...prev].slice(0, 5));
  };

  const hardReset = () => {
      tGlobalRef.current = 0;
      resetGlitchState();
      if (videoRef.current) {
          videoRef.current.currentTime = 0;
          if (sourceTypeRef.current === 'video') {
             videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
          }
      }
  };
  
  // Simple media handler using the shared media loader
  const handleFileSelect = async (file: File) => {
    console.log('[Import] handleFileSelect:', file.name, file.type);
    setFileName(file.name);
    addLog(`Loading ${file.name}...`);

    // Reset temporal state and effect engine without forcing playback
    tGlobalRef.current = 0;
    resetGlitchState();

    const isVideo = file.type.startsWith('video/');
    const nextType: 'image' | 'video' = isVideo ? 'video' : 'image';
    setSourceType(nextType);
    sourceTypeRef.current = nextType;
    setIsVideoPlaying(false);

    if (isVideo) {
      const video = videoRef.current;
      if (!video) {
        addLog('Video element missing');
        return;
      }
      try {
        const result = await loadVideoTo(video, canvasRef.current, file, lastObjectUrlRef);
        addLog(`Video ready: ${result.width}x${result.height}`);
        if (!isPlayingRef.current) {
          try { video.pause(); } catch {}
        }
        if (paramsRef.current.audioEnabled && paramsRef.current.audioSource === 'video') {
          if (!videoAudioStateRef.current) {
            videoAudioStateRef.current = { muted: video.muted, volume: video.volume };
          }
          video.muted = false;
          if (video.volume < 0.2) video.volume = 0.4;
          audioService.connectMedia(video);
          addLog('Audio: Tapped Video Stream');
        }
      } catch (err) {
        console.error('[Import] Video load error:', err);
        addLog('Video load error');
      }
      return;
    }

    const img = imgRef.current;
    if (!img) {
      addLog('Image element missing');
      return;
    }
    try {
      const result = await loadImageTo(img, canvasRef.current, file, lastObjectUrlRef);
      addLog(`Image ready: ${result.width}x${result.height}`);
    } catch (err) {
      console.error('[Import] Image load error:', err);
      addLog('Image load error');
    }
  };


  const handleImportMusic = (file: File) => {
     const url = URL.createObjectURL(file);
     setParams(p => ({ ...p, musicUrl: url, audioSource: 'music', audioEnabled: true }));
     addLog(`Imported Audio: ${file.name}`);
  };

  const handleParamChange = (newParams: GlitchParams) => {
    setParams(newParams);
    if (activePresetId !== 'custom') setActivePresetId('custom');
  };

  const handleStopAudio = () => {
    audioService.stop();
    if (paramsRef.current.audioSource === 'music') {
      musicRef.current.pause();
    }
    setParams(prev => ({ ...prev, audioEnabled: false }));
    addLog('Audio: Stopped');
  };

  const handleToggleAudioPause = () => {
    if (paramsRef.current.audioSource !== 'music') {
      addLog('Audio: Pause/Resume only applies to music source');
      return;
    }
    const el = musicRef.current;
    if (el.paused) {
      el.play().catch(() => {});
      addLog('Audio: Resumed');
    } else {
      el.pause();
      addLog('Audio: Paused');
    }
  };

  const applyPreset = (preset: Preset) => {
    setParams(prev => ({
      ...DEFAULT_PARAMS,
      ...preset.params,
      // Preserve playback state across preset changes
      audioEnabled: prev.audioEnabled,
      audioSource: prev.audioSource,
      musicUrl: prev.musicUrl
    }));
    setActivePresetId(preset.id);
  };

  const applyImportedPreset = (presetParams: GlitchParams) => {
    setParams(prev => ({
      ...DEFAULT_PARAMS,
      ...presetParams,
      // Preserve playback state across preset changes
      audioEnabled: prev.audioEnabled,
      audioSource: prev.audioSource,
      musicUrl: prev.musicUrl
    }));
  };

  // --- RANDOMIZE / KEYFRAMES ---
  const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
  const rnd = (min: number, max: number, step = 1) => Math.round((Math.random() * (max - min) + min) / step) * step;
  const randomizeParams = (p: GlitchParams): GlitchParams => {
    return {
      ...p,
      amount: rnd(0, 60),
      quality: rnd(30, 100),
      iterations: rnd(1, 20),
      rgbShift: rnd(0, 25),
      redShift: rnd(-10, 10),
      greenShift: rnd(-10, 10),
      blueShift: rnd(-10, 10),
      pixelation: rnd(0, 6),
      noise: rnd(0, 40),
      melt: rnd(0, 40),
      shred: rnd(0, 50),
      scatter: rnd(0, 50),
      brightness: clamp(rnd(90, 120), 50, 200),
      scanlines: Math.random() < 0.4 ? !p.scanlines : p.scanlines,
      scanlineIntensity: rnd(10, 80),

      // Temporal & mosh
      masterSpeed: Math.random() < 0.5 ? p.masterSpeed : Math.round((Math.random() * 2 + 0.3) * 10) / 10,
      moshEnabled: Math.random() < 0.5 ? true : p.moshEnabled,
      moshMode: Math.random() < 0.5 ? 'webgl' : '2d',
      feedback: rnd(60, 98),
      moshWarp: rnd(0, 60),
      moshDiffusion: rnd(0, 3),
      blockList: rnd(0, 80),
      blockSize: rnd(16, 48, 2),

      // Displacement
      moshDispStrength: rnd(0, 60),
      moshDispScale: rnd(5, 30),
      moshDispSpeed: rnd(5, 30),
      moshDispQuantize: rnd(0, 80),

      // Keep audio config unchanged to avoid surprise prompts
      audioEnabled: p.audioEnabled,
      audioSource: p.audioSource,
      audioGain: p.audioGain,
      audioGate: p.audioGate,
      audioTargetRgb: p.audioTargetRgb,
      audioTargetAmount: p.audioTargetAmount,
      audioTargetWarp: p.audioTargetWarp,
      musicUrl: p.musicUrl,
    };
  };

  const handleRandomize = () => {
    setParams(prev => randomizeParams(prev));
    setActivePresetId('custom');
    addLog('Randomized parameters');
  };

  const handleAddKeyframe = () => {
    const id = crypto.randomUUID();
    const kf = { id, time: animStateRef.current.currentTime, params: paramsRef.current };
    setAnimState(prev => ({ ...prev, keyframes: [...prev.keyframes, kf].sort((a, b) => a.time - b.time) }));
    addLog(`Added keyframe @ ${animStateRef.current.currentTime.toFixed(2)}s`);
  };

  const handleDeleteKeyframe = (id: string) => {
    setAnimState(prev => ({ ...prev, keyframes: prev.keyframes.filter(k => k.id !== id) }));
    addLog('Deleted keyframe');
  };

  // Render frame function (simplified)
  const renderFrame = async (timestamp: number) => {
    if (!canvasRef.current || isRenderingRef.current) {
      return;
    }

    try {
      isRenderingRef.current = true;
      const ctx = canvasRef.current.getContext('2d', { alpha: false });
      if (!ctx) {
        console.error('[Render] Failed to get 2D context');
        return;
      }

      const now = timestamp / 1000;
      const delta = now - (lastTimeRef.current || now);
      lastTimeRef.current = now;

      const fixedDt = (typeof window !== 'undefined') ? (window as any).__ERRORHEAD_FIXED_DT as number : undefined;
      const safeDelta = Number.isFinite(fixedDt) && fixedDt! > 0 ? fixedDt! : Math.min(delta, 0.1);
      const paused = !isPlayingRef.current;
      const effectiveDelta = paused ? 0 : safeDelta;
      tGlobalRef.current += effectiveDelta * paramsRef.current.masterSpeed;

      if (!paused && animationModeRef.current && animStateRef.current.isPlaying) {
         let nextTime = animStateRef.current.currentTime + safeDelta;
         if (nextTime > animStateRef.current.duration) nextTime = 0;
         setAnimState(prev => ({ ...prev, currentTime: nextTime }));
      }

      // Single render entry point: one CanvasImageSource for both media kinds
      let source: CanvasImageSource | null = null;
      let width = 0;
      let height = 0;

      // Check media readiness
      let isMediaReady = false;

      const activeType = sourceTypeRef.current;

      if (activeType === 'image' && imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0 && imgRef.current.naturalHeight > 0) {
        isMediaReady = true;
        source = imgRef.current;
        width = imgRef.current.naturalWidth;
        height = imgRef.current.naturalHeight;

        // Ensure canvas matches image size
        if (canvasRef.current && (canvasRef.current.width !== width || canvasRef.current.height !== height)) {
          canvasRef.current.width = width;
          canvasRef.current.height = height;
          console.log(`[Render] Canvas resized to ${width}x${height} for image`);
        }
      } else if (activeType === 'video' && videoRef.current) {
        const v = videoRef.current;
        const vd = getVideoDims(v);
        if (vd.ready && vd.w > 0 && vd.h > 0) {
          isMediaReady = true;
          source = v;
          width = vd.w;
          height = vd.h;
          if ((canvasRef.current!.width !== width) || (canvasRef.current!.height !== height)) {
            canvasRef.current!.width = width;
            canvasRef.current!.height = height;
            console.log(`[Render] Canvas resized to ${width}x${height} for video`);
          }
        }
      }


      if (isMediaReady && source && width > 0 && height > 0) {
        // Resolution lock override
        let outW = width, outH = height;
        if (lockRes && lockWidth > 0 && lockHeight > 0) {
          outW = lockWidth; outH = lockHeight;
          if (canvasRef.current && (canvasRef.current.width !== outW || canvasRef.current.height !== outH)) {
            canvasRef.current.width = outW; canvasRef.current.height = outH;
            console.log(`[Render] Resolution lock: ${outW}x${outH}`);
          }
        }

        // BASE RENDERING: Draw raw image/video frame to canvas
        ctx.clearRect(0, 0, outW, outH);
        ctx.save();
        ctx.globalAlpha = 1.0;
        ctx.globalCompositeOperation = 'copy'; // Ensure we overwrite everything
        ctx.filter = 'none';
        ctx.drawImage(source, 0, 0, outW, outH);
        ctx.restore();
        
        // EFFECT PIPELINE (currently disabled for stability)
        const audioLevel = audioService.getLevel();
        if (EFFECTS_ENABLED) { 
          await renderGlitch(ctx, source, paramsRef.current, outW, outH, tGlobalRef.current, audioLevel, undefined, isPlayingRef.current); 
        }

        // PNG sequence capture
        if (pngSeqRef.current.active) {
          await new Promise<void>(resolve => {
            canvasRef.current!.toBlob((blob) => {
              if (blob) {
                const idx = pngSeqRef.current.frameIndex;
                const total = pngSeqRef.current.framesTotal;
                const pad = String(total).length;
                const base = pngSeqRef.current.baseName;
                const name = `${base}_${String(idx).padStart(pad,'0')}.png`;
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
                pngSeqRef.current.frameIndex++;
                if (pngSeqRef.current.frameIndex >= pngSeqRef.current.framesTotal) {
                  pngSeqRef.current.active = false;
                  setIsSeqActive(false);
                  // restore fixed dt
                  delete (window as any).__ERRORHEAD_FIXED_DT;
                }
              }
              resolve();
            }, 'image/png');
          });
        }
      } else {
        // No media ready yet. Keep canvas empty; do not show test pattern.
        if (!sourceTypeRef.current) {
          const width = 800;
          const height = 600;

          if (canvasRef.current!.width !== width || canvasRef.current!.height !== height) {
            canvasRef.current!.width = width;
            canvasRef.current!.height = height;
          }

          ctx.clearRect(0, 0, width, height);
        }
        // If a source was selected but isn't ready yet, keep the last frame to avoid flicker.
      }
    } finally {
      isRenderingRef.current = false;
    }
  };

  const animate = (timestamp: number) => {
    if (lastFpsTimeRef.current === 0) lastFpsTimeRef.current = timestamp;
    const elapsed = timestamp - lastFpsTimeRef.current;
    frameCountRef.current++;
    if (elapsed >= 1000) {
        setFps(Math.round((frameCountRef.current * 1000) / elapsed));
        setFrameCounterDisplay(totalFramesRef.current);
        lastFpsTimeRef.current = timestamp;
    }

    renderFrame(timestamp);
    totalFramesRef.current++;
    frameCountRef.current++;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    console.log('App: Setting up render loop');
    const startLoop = () => {
      console.log('App: Starting animate loop');
      requestRef.current = requestAnimationFrame(animate);
    };
    startLoop();
    return () => { 
      if (requestRef.current) cancelAnimationFrame(requestRef.current); 
      console.log('App: Render loop cleaned up');
    };
  }, []); // Run loop always, gating is inside 'animate'

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      if (lastObjectUrlRef.current) {
        try { URL.revokeObjectURL(lastObjectUrlRef.current); } catch {}
        lastObjectUrlRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);
  // ---------- EXPORT HELPERS ----------
  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const withPlaybackPaused = async (fn: () => Promise<void>) => {
    const wasPaused = !isPlayingRef.current;
    if (!wasPaused) setPlaying(false);
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
    await fn();
    if (!wasPaused) setPlaying(true);
  };

  const renderOnce = async () => {
    // Wait for any in-flight render to finish
    for (let i = 0; i < 3 && isRenderingRef.current; i++) {
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
    }
    await renderFrame(performance.now());
  };

  const exportImage = async (format: 'png' | 'jpeg') => {
    const canvas = canvasRef.current; if (!canvas) return;
    await withPlaybackPaused(async () => {
      await renderOnce();
      await exportCanvasImage(canvas, { format, quality: exportQuality, fileNameBase: fileName });
    });
    showToast(`Saved ${format.toUpperCase()}`);
  };

  const stopRecording = () => stopCanvasRecording({ recorderRef, recordChunksRef, recordStreamRef, recordTimerRef, setIsRecording });

  const startRecording = async (durationSec?: number) => {
    if (!canvasRef.current) return;
    if (isRecording) { stopRecording(); return; }
    await startCanvasRecording(
      canvasRef.current,
      paramsRef.current,
      fileName,
      { recorderRef, recordChunksRef, recordStreamRef, recordTimerRef, setIsRecording },
      durationSec,
      audioService,
      { fps: recordFps, bitsPerSecond: 8_000_000, deterministicFps: recordFps, container: recordFormat }
    );
  };
  
  const handleExport = (isVideo: boolean, durationSec?: number) => {
    if (isVideo) {
      startRecording(durationSec);
    }
  };

  const startPngSequence = (fps: number, framesTotal: number) => {
    if (!canvasRef.current) return;
    if (framesTotal <= 0 || fps <= 0) return;
    pngSeqRef.current.active = true;
    pngSeqRef.current.fps = fps;
    pngSeqRef.current.framesTotal = framesTotal;
    pngSeqRef.current.frameIndex = 0;
    pngSeqRef.current.baseName = (fileName ? fileName.replace(/\.[^/.]+$/, '') : 'errorhead_seq');
    (window as any).__ERRORHEAD_FIXED_DT = 1 / fps;
    setIsSeqActive(true);
  };

  const stopPngSequence = () => {
    pngSeqRef.current.active = false;
    setIsSeqActive(false);
    delete (window as any).__ERRORHEAD_FIXED_DT;
  };

  return (
    <>
      {/* Hidden Source Elements REQUIRED for the shared media contract.
          The renderer reads from these refs as a single CanvasImageSource.
          DO NOT SPLIT IMAGE AND VIDEO PIPELINES.
          Do not remove or create parallel sources. */}
      <div className="absolute top-0 left-0 w-0 h-0 overflow-hidden">
        <img ref={imgRef} crossOrigin="anonymous" alt="source" />
        <video ref={videoRef} crossOrigin="anonymous" loop muted playsInline />
      </div>

      {/* Main Studio Layout */}
      <Layout
        leftPanel={
          <FilePanel
            onFileSelect={handleFileSelect}
            onPresetSelect={applyPreset}
            activePresetId={activePresetId}
            exportQuality={exportQuality}
            setExportQuality={setExportQuality}
            onExportImage={exportImage}
            onExport={handleExport}
            isVideo={sourceType === 'video'}
            isAnimationActive={animationMode}
            currentParams={params}
            onImportPreset={(p) => applyImportedPreset(p)}
            onSharePreset={() => { }}
            isRecording={isRecording}
            recordFormat={recordFormat}
            setRecordFormat={setRecordFormat}
            recordFps={recordFps}
            setRecordFps={setRecordFps}
            isSeqActive={isSeqActive}
            seqFps={seqFps}
            setSeqFps={setSeqFps}
            seqFrames={seqFrames}
            setSeqFrames={setSeqFrames}
            onStartPngSeq={(f, n) => startPngSequence(f, n)}
            onStopPngSeq={stopPngSequence}
            lockRes={lockRes}
            setLockRes={setLockRes}
            lockWidth={lockWidth}
            lockHeight={lockHeight}
            setLockWidth={setLockWidth}
            setLockHeight={setLockHeight}
          />
        }
        centerPanel={
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <canvas ref={canvasRef} style={{ border: '2px solid #333', maxWidth: '100%', maxHeight: '100%' }} />
          </div>
        }
        rightPanel={
          <ControlPanel
            params={params}
            onChange={handleParamChange}
            onRandomize={handleRandomize}
            onReset={hardReset}
            onImportMusic={handleImportMusic}
            onStopAudio={handleStopAudio}
            onToggleAudioPause={handleToggleAudioPause}
            audioPauseLabel={
              params.audioSource === 'music'
                ? (isMusicPlaying ? 'PAUSE AUDIO' : 'RESUME AUDIO')
                : 'PAUSE/RESUME'
            }
            audioPauseDisabled={params.audioSource !== 'music' || !params.musicUrl}
          />
        }
        bottomBar={
          <Timeline
            animation={animState}
            isActive={animationMode}
            onToggleActive={() => setAnimationMode(!animationMode)}
            onPlayPause={() => setAnimState(p => ({ ...p, isPlaying: !p.isPlaying }))}
            onSeek={(t) => setAnimState(p => ({ ...p, currentTime: t }))}
            onAddKeyframe={handleAddKeyframe}
            onDeleteKeyframe={handleDeleteKeyframe}
            onDurationChange={(d) => setAnimState(p => ({ ...p, duration: d }))}
            isPlaying={isPlaying}
            onTogglePlayback={() => setPlaying(!isPlayingRef.current)}
            fps={fps}
          />
        }
      />
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-[200]">
          <div className="bg-zinc-900/90 border border-zinc-700 text-zinc-200 px-3 py-2 text-xs font-mono shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </>
  );
};

export default EditorApp;
