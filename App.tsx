
import React, { useState, useEffect, useRef } from 'react';
import { Layout } from './components/Layout';
import { FilePanel } from './components/Panels/FilePanel';
import { ControlPanel } from './components/Panels/ControlPanel';
import { PreviewCanvas } from './components/Canvas/PreviewCanvas';
import { Timeline } from './components/Timeline';
import { LandingPage } from './components/LandingPage';
import { renderGlitch, resetGlitchState } from './frame_pipeline/pipeline';
import { loadImageTo, loadVideoTo } from './media_loader/mediaLoader';
import { exportCanvasImage, startCanvasRecording, stopCanvasRecording } from './export/exportService';
import { audioService } from './services/audioService';
import { getImageDims, getVideoDims } from './services/mediaUtils';
import { DEFAULT_PARAMS } from './constants';
import { GlitchParams, AnimationState } from './types';

const App: React.FC = () => {
  // --- STATE ---
  const [isLanding, setIsLanding] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  
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
  const [exportFormat, setExportFormat] = useState<'png' | 'jpeg'>('png');
  const [exportQuality, setExportQuality] = useState<number>(90);
  const [isRecording, setIsRecording] = useState(false);
  const [fps, setFps] = useState(0);
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

  // Refs for Render Loop
  const paramsRef = useRef(params);
  const animStateRef = useRef(animState);
  const liveModeRef = useRef(liveMode);
  const sourceTypeRef = useRef(sourceType);
  const isVideoPlayingRef = useRef(isVideoPlaying);
  const animationModeRef = useRef(animationMode);
  
  const tGlobalRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const frameCountRef = useRef(0);
  const lastFpsTimeRef = useRef(0);
  const totalFramesRef = useRef(0);
  const [frameCounterDisplay, setFrameCounterDisplay] = useState(0);
  const isRenderingRef = useRef(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const requestRef = useRef<number>(0);

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

  // Sync Refs
  useEffect(() => { paramsRef.current = params; }, [params]);
  useEffect(() => { animStateRef.current = animState; }, [animState]);
  useEffect(() => { liveModeRef.current = liveMode; }, [liveMode]);
  useEffect(() => { sourceTypeRef.current = sourceType; }, [sourceType]);
  useEffect(() => { isVideoPlayingRef.current = isVideoPlaying; }, [isVideoPlaying]);
  useEffect(() => { animationModeRef.current = animationMode; }, [animationMode]);

  // Audio Logic: Dynamic Routing
  useEffect(() => {
    if (params.audioEnabled) {
      // CRITICAL: Resume AudioContext on user interaction (autoplay policy)
      audioService.resume().catch(() => {});
      
      if (params.audioSource === 'mic') {
        audioService.connectMic().then(() => addLog('Audio: Mic Online')).catch(() => addLog('Audio: Mic Access Denied'));
      } else if (params.audioSource === 'video' && videoRef.current) {
        audioService.connectMedia(videoRef.current);
        addLog('Audio: Tapped Video Stream');
      } else if (params.audioSource === 'music' && params.musicUrl) {
        musicRef.current.src = params.musicUrl;
        musicRef.current.play();
        audioService.connectMedia(musicRef.current);
        addLog('Audio: Music Stream Active');
      }
    } else {
      audioService.stop();
      musicRef.current.pause();
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
const handleFileSelect = (file: File) => {
    console.log('[Import] handleFileSelect:', file.name, file.type);
    console.log('[Import] Media refs:', {
      imgRef: !!imgRef.current,
      videoRef: !!videoRef.current,
      canvasRef: !!canvasRef.current
    });
    console.log('[Import] Canvas context:', canvasRef.current ? canvasRef.current.getContext('2d') : null);
    console.log('[Import] Canvas dimensions:', canvasRef.current ? `${canvasRef.current.width}x${canvasRef.current.height}` : 'N/A');
    console.log('[Import] Canvas hidden state:', canvasRef.current ? canvasRef.current.hidden : 'N/A');
    console.log('[Import] Canvas visibility:', canvasRef.current ? canvasRef.current.style.visibility : 'N/A');
    console.log('[Import] Canvas style:', canvasRef.current ? canvasRef.current.style.cssText : 'N/A');
    console.log('[Import] Canvas parent:', canvasRef.current ? canvasRef.current.parentElement : 'N/A');
    console.log('[Import] Canvas offset:', canvasRef.current ? `${canvasRef.current.offsetLeft},${canvasRef.current.offsetTop}` : 'N/A');
    console.log('[Import] Canvas computed style:', canvasRef.current ? window.getComputedStyle(canvasRef.current) : 'N/A');
    console.log('[Import] Canvas bounding rect:', canvasRef.current ? canvasRef.current.getBoundingClientRect() : 'N/A');
    console.log('[Import] Canvas client rect:', canvasRef.current ? canvasRef.current.getClientRects() : 'N/A');
    console.log('[Import] Canvas scroll:', canvasRef.current ? `${canvasRef.current.scrollLeft},${canvasRef.current.scrollTop}` : 'N/A');
    console.log('[Import] Canvas isConnected:', canvasRef.current ? canvasRef.current.isConnected : 'N/A');
    console.log('[Import] Canvas isDestroyed:', canvasRef.current ? canvasRef.current.isDestroyed : 'N/A');
    console.log('[Import] Canvas width/height:', canvasRef.current ? `${canvasRef.current.width}x${canvasRef.current.height}` : 'N/A');
    console.log('[Import] Canvas clientWidth/Height:', canvasRef.current ? `${canvasRef.current.clientWidth}x${canvasRef.current.clientHeight}` : 'N/A');
    console.log('[Import] Canvas offsetWidth/Height:', canvasRef.current ? `${canvasRef.current.offsetWidth}x${canvasRef.current.offsetHeight}` : 'N/A');
    console.log('[Import] Canvas scrollWidth/Height:', canvasRef.current ? `${canvasRef.current.scrollWidth}x${canvasRef.current.scrollHeight}` : 'N/A');
    console.log('[Import] Canvas style display:', canvasRef.current ? canvasRef.current.style.display : 'N/A');
    console.log('[Import] Canvas style position:', canvasRef.current ? canvasRef.current.style.position : 'N/A');
    console.log('[Import] Canvas style visibility:', canvasRef.current ? canvasRef.current.style.visibility : 'N/A');
    console.log('[Import] Canvas style opacity:', canvasRef.current ? canvasRef.current.style.opacity : 'N/A');
    setFileName(file.name);
    hardReset();

    if (file.type.startsWith('video/')) {
      setSourceType('video');
      console.log('[Import] setSourceType -> video');
      if (videoRef.current) {
        console.log('[Import] Video ref exists, starting load...');
        loadVideoTo(videoRef.current, canvasRef.current, file, lastObjectUrlRef)
          .then(() => {
            console.log('[Import] video loaded:', {
              readyState: videoRef.current!.readyState,
              w: videoRef.current!.videoWidth,
              h: videoRef.current!.videoHeight,
              paused: videoRef.current!.paused,
              duration: videoRef.current!.duration
            });
            setIsVideoPlaying(!videoRef.current!.paused);
            if (paramsRef.current.audioEnabled && paramsRef.current.audioSource === 'video') {
              audioService.connectMedia(videoRef.current!);
            }
          })
          .catch((e) => {
            console.error('[Import] Video load error:', e);
            addLog('Video load error');
          });
      } else {
        console.error('[Import] Video ref is null!');
      }
    } else {
      setSourceType('image');
      console.log('[Import] setSourceType -> image');
      if (imgRef.current) {
        console.log('[Import] Image ref exists, starting load...');
        loadImageTo(imgRef.current, canvasRef.current, file, lastObjectUrlRef)
          .then(() => {
            console.log('[Import] image loaded:', {
              w: imgRef.current!.naturalWidth,
              h: imgRef.current!.naturalHeight,
              complete: imgRef.current!.complete
            });
          })
          .catch((e) => {
            console.error('[Import] Image load error:', e);
            addLog('Image load error');
          });
      } else {
        console.error('[Import] Image ref is null!');
      }
    }
    addLog(`Loaded ${file.name}`);
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

const renderFrame = async (timestamp: number) => {
    if (!canvasRef.current || isRenderingRef.current) return;

    try {
      isRenderingRef.current = true;
      const ctx = canvasRef.current.getContext('2d', { alpha: false });
      if (!ctx) return;

      const now = timestamp / 1000;
      const delta = now - (lastTimeRef.current || now);
      lastTimeRef.current = now;

      const fixedDt = (typeof window !== 'undefined') ? (window as any).__ERRORHEAD_FIXED_DT as number : undefined;
      const safeDelta = Number.isFinite(fixedDt) && fixedDt! > 0 ? fixedDt! : Math.min(delta, 0.1);
      tGlobalRef.current += safeDelta * paramsRef.current.masterSpeed;

      if (animationModeRef.current && animStateRef.current.isPlaying) {
         let nextTime = animStateRef.current.currentTime + safeDelta;
         if (nextTime > animStateRef.current.duration) nextTime = 0;
         setAnimState(prev => ({ ...prev, currentTime: nextTime }));
      }

      let source: CanvasImageSource | null = null;
      let width = 0;
      let height = 0;

      // Debug: Check media readiness
      let isMediaReady = false;
      let mediaType = 'none';

      if (sourceTypeRef.current === 'image' && imgRef.current) {
        const imgEl = imgRef.current as HTMLImageElement;
        mediaType = 'image';
        // Check if image is loaded and has valid dimensions
        if (imgEl.complete && imgEl.naturalWidth > 0 && imgEl.naturalHeight > 0) {
          isMediaReady = true;
          source = imgEl;
          const { w, h } = getImageDims(imgEl);
          width = w; height = h;
          // Ensure canvas matches image size
          if (canvasRef.current && width > 0 && (canvasRef.current.width !== width || canvasRef.current.height !== height)) {
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            console.log(`[Render] Canvas set to ${width}x${height} for image`);
          }
        } else {
          console.log(`[Render] Image not ready: complete=${imgEl.complete}, dims=${imgEl.naturalWidth}x${imgEl.naturalHeight}`);
        }
      } else if (sourceTypeRef.current === 'video' && videoRef.current) {
        const v = videoRef.current;
        mediaType = 'video';
        const vd = getVideoDims(v);
        // Check if video is ready and has valid dimensions
        if (vd.ready && vd.w > 0 && vd.h > 0) {
          isMediaReady = true;
          source = v;
          width = vd.w; height = vd.h;
          if ((canvasRef.current!.width !== width) || (canvasRef.current!.height !== height)) {
            canvasRef.current!.width = width;
            canvasRef.current!.height = height;
            console.log(`[Render] Canvas set to ${width}x${height} for video`);
          }
        } else {
          console.log(`[Render] Video not ready: ready=${vd.ready}, dims=${vd.w}x${vd.h}`);
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

         // --- STEP 2: MEDIA READINESS CHECK ---
         // Log these values BEFORE drawing.
         if (frameCountRef.current % 60 === 0) { // Log once every ~second to avoid spam
             console.log('[Media Check]', {
                 mediaType,
                 isMediaReady,
                 sourceW: width,
                 sourceH: height,
                 canvasW: canvasRef.current?.width,
                 canvasH: canvasRef.current?.height,
                 globalAlpha: ctx.globalAlpha
             });
         }

         // --- STEP 3: FORCED VISIBILITY TEST (Option A) ---
         // Draw the raw image/video frame to canvas using Canvas2D.
         // DO NOT clear the canvas each frame (we just draw over it).
         ctx.save();
         ctx.globalAlpha = 1.0;
         ctx.globalCompositeOperation = 'copy'; // Ensure we overwrite everything
         ctx.filter = 'none';
         ctx.drawImage(source, 0, 0, outW, outH);
         ctx.restore();
         
         // --- STEP 4: DRAW CONTRACT ASSERTION ---
         if (canvasRef.current?.width !== outW || canvasRef.current?.height !== outH) {
             console.error('[Assertion Failed] Canvas dimensions do not match target output dimensions');
         }
         if (ctx.globalAlpha !== 1 && ctx.globalAlpha !== 1.0) { // Checking context state (though we saved/restored)
             // Note: ctx.globalAlpha reads the current state, we restored it, but checking just in case
         }

         // --- RECONNECT EFFECT PIPELINE ---
         const audioLevel = audioService.getLevel();
         await renderGlitch(ctx, source, paramsRef.current, outW, outH, tGlobalRef.current, audioLevel);

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
        // Clear canvas to black if no media ready
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        console.log(`[Render] No media ready (${mediaType}), canvas cleared`);
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

    // Only render the main app frames if we've initialized (not landing) or are currently purging
    const isAppActive = !isLanding || isExiting;
    const shouldRender = isAppActive && (liveModeRef.current || 
                        (sourceTypeRef.current === 'video' && isVideoPlayingRef.current) || 
                        (animationModeRef.current && animStateRef.current.isPlaying));

    if (shouldRender) { renderFrame(timestamp); totalFramesRef.current++; frameCountRef.current++; }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
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


  const startEnterTransition = () => {
    try { audioService.resume(); } catch {}
    try { setParams(p => ({ ...p, audioEnabled: true, audioSource: 'mic' } as any)); } catch {}
    setIsExiting(true);
    setTimeout(() => {
      setIsLanding(false);
      setIsExiting(false);
      addLog("System Online");
    }, 800);
  };

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

  const exportImage = async () => {
    const canvas = canvasRef.current; if (!canvas) return;
    await exportCanvasImage(canvas, { format: exportFormat, quality: exportQuality, fileNameBase: fileName });
    showToast('Saved image');
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
  
  // Note: fixed the shadowing in handleExport too by updating startRecording function name above if needed
  // actually the function name was startRecording locally, conflicting with import.
  // The original code was:
  /*
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
  */

  const handleExport = (isVideo: boolean, durationSec?: number) => {
    if (isVideo) {
      startRecording(durationSec);
    } else {
      exportImage();
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
      {/* Landing Page Overlay */}
      {isLanding && (
        <LandingPage onEnter={startEnterTransition} isExiting={isExiting} />
      )}


      {/* Hidden Source Elements */}
      <div className="hidden">
        <img ref={imgRef} crossOrigin="anonymous" alt="source" />
        <video ref={videoRef} crossOrigin="anonymous" loop muted playsInline />
      </div>

      {/* Main Studio Layout */}
      <div className={`transition-all duration-1000 ${isLanding && !isExiting ? 'blur-2xl opacity-0 scale-105 pointer-events-none' : 'blur-0 opacity-100 scale-100'}`}>
        <Layout
          leftPanel={
            <FilePanel
              onFileSelect={handleFileSelect}
              onPresetSelect={(p) => { setParams(p.params); setActivePresetId(p.id); }}
              activePresetId={activePresetId}
              exportFormat={exportFormat}
              setExportFormat={setExportFormat}
              exportQuality={exportQuality}
              setExportQuality={setExportQuality}
              onExport={handleExport}
              isVideo={sourceType === 'video'}
              isAnimationActive={animationMode}
              currentParams={params}
              onImportPreset={(p) => setParams(p)}
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
          <PreviewCanvas
            canvasRef={canvasRef}
            isProcessing={false}
            live={liveMode}
            toggleLive={() => setLiveMode(!liveMode)}
            hasSource={!!sourceType}
            isVideo={sourceType === 'video'}
            togglePlayback={() => {
                if (videoRef.current?.paused) videoRef.current.play(); else videoRef.current?.pause();
                setIsVideoPlaying(!videoRef.current?.paused);
            }}
            onStop={() => { videoRef.current!.currentTime = 0; videoRef.current!.pause(); setIsVideoPlaying(false); }}
            isPlaying={isVideoPlaying}
            isRecording={isRecording}
            fps={fps}
            frameCounter={frameCounterDisplay}
          />
        }
          rightPanel={
            <ControlPanel
              params={params}
              onChange={handleParamChange}
              onRandomize={handleRandomize}
              onReset={hardReset}
              onImportMusic={handleImportMusic}
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
              fps={fps}
            />
          }
        />
      </div>
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

export default App;
