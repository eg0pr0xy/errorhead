import { GlitchParams } from '../types';
import { audioService as defaultAudio } from '../services/audioService';

export type ExportFormat = 'png' | 'jpeg';

export interface ExportImageOptions {
  format: ExportFormat;
  quality?: number; // 0..100 for jpeg
  fileNameBase?: string;
}

export function exportCanvasImage(canvas: HTMLCanvasElement, opts: ExportImageOptions): Promise<void> {
  const format = opts.format === 'jpeg' ? 'image/jpeg' : 'image/png';
  const ext = opts.format === 'jpeg' ? 'jpg' : 'png';
  const quality = opts.format === 'jpeg' ? Math.max(0.1, Math.min(1, (opts.quality ?? 90) / 100)) : undefined;
  const base = (opts.fileNameBase ?? 'errorhead_frame').replace(/\.[^/.]+$/, '');
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const out = `${base}_${ts}.${ext}`;

  return new Promise<void>((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return resolve();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = out; document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
      resolve();
    }, format, quality as any);
  });
}

export interface RecordContext {
  recorderRef: React.MutableRefObject<MediaRecorder | null>;
  recordChunksRef: React.MutableRefObject<Blob[]>;
  recordStreamRef: React.MutableRefObject<MediaStream | null>;
  recordTimerRef: React.MutableRefObject<number | null>;
  setIsRecording: (v: boolean) => void;
}

export interface RecordingOptions {
  fps?: number; // desired capture fps
  bitsPerSecond?: number; // target bitrate for MediaRecorder
  deterministicFps?: number; // if provided, set window.__ERRORHEAD_FIXED_DT during recording
  container?: 'auto' | 'webm' | 'mp4';
}

export async function startCanvasRecording(
  canvas: HTMLCanvasElement,
  params: GlitchParams,
  fileNameBase: string,
  ctx: RecordContext,
  durationSec?: number,
  audio = defaultAudio,
  options: RecordingOptions = {}
) {
  const desiredFps = options.fps ?? 30;
  const canvasStream = canvas.captureStream(desiredFps);
  let mixedStream: MediaStream;
  if (params.audioEnabled) {
    const audioStream = audio.getMixedStream();
    const audioTracks = audioStream.getAudioTracks();
    mixedStream = new MediaStream([
      ...canvasStream.getVideoTracks(),
      ...audioTracks
    ]);
  } else {
    mixedStream = new MediaStream([...canvasStream.getVideoTracks()]);
  }

  ctx.recordStreamRef.current = mixedStream;
  ctx.recordChunksRef.current = [];

  let mimeCandidates: string[];
  const want = options.container ?? 'auto';
  if (want === 'mp4') {
    mimeCandidates = [
      'video/mp4;codecs=h264',
      'video/mp4'
    ];
  } else if (want === 'webm') {
    mimeCandidates = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm'
    ];
  } else {
    mimeCandidates = [
      'video/mp4;codecs=h264',
      'video/mp4',
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm'
    ];
  }
  const mimeType = mimeCandidates.find(t => (window as any).MediaRecorder && (window as any).MediaRecorder.isTypeSupported && (window as any).MediaRecorder.isTypeSupported(t)) || 'video/webm';
  if (!(window as any).MediaRecorder) {
    alert('MediaRecorder is not supported in this browser.');
    return;
  }

  const rec = new MediaRecorder(mixedStream, { mimeType, bitsPerSecond: options.bitsPerSecond });
  ctx.recorderRef.current = rec;

  const prevFixed = (typeof window !== 'undefined') ? (window as any).__ERRORHEAD_FIXED_DT : undefined;
  if (options.deterministicFps && options.deterministicFps > 0) {
    (window as any).__ERRORHEAD_FIXED_DT = 1 / options.deterministicFps;
  }

  rec.ondataavailable = (ev: BlobEvent) => {
    if (ev.data && ev.data.size > 0) ctx.recordChunksRef.current.push(ev.data);
  };
  rec.onstop = () => {
    ctx.setIsRecording(false);
    const blob = new Blob(ctx.recordChunksRef.current, { type: mimeType });
    const base = fileNameBase ? fileNameBase.replace(/\.[^/.]+$/, '') : 'errorhead_recording';
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const out = `${base}_${ts}.webm`;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = out; document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);

    // Cleanup
    ctx.recordStreamRef.current?.getTracks().forEach(t => t.stop());
    ctx.recordStreamRef.current = null;
    ctx.recorderRef.current = null;
    ctx.recordChunksRef.current = [];
    if (options.deterministicFps) {
      if (prevFixed === undefined) delete (window as any).__ERRORHEAD_FIXED_DT; else (window as any).__ERRORHEAD_FIXED_DT = prevFixed;
    }
  };

  try {
    rec.start(250);
    ctx.setIsRecording(true);
    if (durationSec && durationSec > 0) {
      ctx.recordTimerRef.current = window.setTimeout(() => stopCanvasRecording(ctx), durationSec * 1000) as any;
    }
  } catch (e) {
    console.error('Failed to start recording', e);
    ctx.setIsRecording(false);
    ctx.recordStreamRef.current?.getTracks().forEach(t => t.stop());
    ctx.recordStreamRef.current = null;
    ctx.recorderRef.current = null;
  }
}

export function stopCanvasRecording(ctx: RecordContext) {
  if (!ctx.recorderRef.current) return;
  try { ctx.recorderRef.current.stop(); } catch (e) {}
  if (ctx.recordTimerRef.current) {
    clearTimeout(ctx.recordTimerRef.current as any);
    ctx.recordTimerRef.current = null;
  }
}

