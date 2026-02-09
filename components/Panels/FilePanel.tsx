
import React, { useRef, useState, useEffect } from 'react';
import { Panel, Button, Icons, Slider } from '../UIComponents';
import { PRESETS } from '../../constants';
import { Preset, GlitchParams } from '../../types';

interface FilePanelProps {
  onFileSelect: (file: File) => void;
  onImportLink: (url: string, mediaType: 'auto' | 'image' | 'video') => void;
  onWebcamStart: () => void;
  onWebcamStop: () => void;
  isWebcamActive: boolean;
  onPresetSelect: (preset: Preset) => void;
  activePresetId?: string;
  exportQuality: number;
  setExportQuality: (q: number) => void;
  onExportImage: (format: 'png' | 'jpeg') => void;
  onExport: (isVideo: boolean, durationSec?: number) => void;
  isVideo?: boolean;
  isAnimationActive: boolean;
  currentParams: GlitchParams;
  onImportPreset: (params: GlitchParams, name?: string) => void;
  onSharePreset: () => void;
  isRecording: boolean;
  recordFormat: 'auto' | 'webm' | 'mp4';
  setRecordFormat: (f: 'auto' | 'webm' | 'mp4') => void;
  recordFps: number;
  setRecordFps: (v: number) => void;
  // PNG sequence controls
  isSeqActive: boolean;
  seqFps: number;
  setSeqFps: (v: number) => void;
  seqFrames: number;
  setSeqFrames: (v: number) => void;
  onStartPngSeq: (fps: number, frames: number) => void;
  onStopPngSeq: () => void;
  // Resolution lock
  lockRes: boolean;
  setLockRes: (v: boolean) => void;
  lockWidth: number;
  lockHeight: number;
  setLockWidth: (v: number) => void;
  setLockHeight: (v: number) => void;
}

export const FilePanel: React.FC<FilePanelProps> = ({ 
  onFileSelect, 
  onImportLink: _onImportLink,
  onWebcamStart,
  onWebcamStop,
  isWebcamActive,
  onPresetSelect, 
  activePresetId,
  exportQuality,
  setExportQuality,
  onExportImage,
  onExport,
  isVideo,
  isAnimationActive,
  currentParams,
  onImportPreset,
  onSharePreset,
  isRecording,
  recordFormat,
  setRecordFormat,
  recordFps,
  setRecordFps,
  isSeqActive,
  seqFps,
  setSeqFps,
  seqFrames,
  setSeqFrames,
  onStartPngSeq,
  onStopPngSeq,
  lockRes,
  setLockRes,
  lockWidth,
  lockHeight,
  setLockWidth,
  setLockHeight
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const presetInputRef = useRef<HTMLInputElement>(null);
  const linkNoticeTimerRef = useRef<number | null>(null);
  const [exportMode, setExportMode] = useState<'image' | 'video'>('image');
  const [recordDuration, setRecordDuration] = useState<number>(0);
  const [showLinkImportNotice, setShowLinkImportNotice] = useState(false);

    

  // Auto-switch export mode based on context
  useEffect(() => {
    if (isVideo || isAnimationActive) {
      setExportMode('video');
    } else {
      setExportMode('image');
    }
  }, [isVideo, isAnimationActive]);

  useEffect(() => {
    return () => {
      if (linkNoticeTimerRef.current !== null) {
        window.clearTimeout(linkNoticeTimerRef.current);
      }
    };
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const f = e.dataTransfer.files[0];
      console.log('[Import] drop:', f.name, f.type);
      try { window.dispatchEvent(new CustomEvent('eh-diag', { detail: { type: 'file-drop', file: f } })); } catch (e) {}
      onFileSelect(f);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // --- PRESET SAVE LOGIC ---
  const handleSavePreset = () => {
    const name = prompt("Enter Preset Name:", "Custom Glitch");
    if (!name) return;
    
    const presetData: Preset = {
      id: crypto.randomUUID(),
      name: name,
      params: currentParams
    };
    
    const jsonStr = JSON.stringify(presetData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.replace(/\s+/g, '_').toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // --- PRESET LOAD LOGIC ---
  const handleLoadPreset = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = ev.target?.result as string;
        const data = JSON.parse(text);
        
        // Basic Validation
        if (data && typeof data.params === 'object' && 'amount' in data.params) {
          onImportPreset(data.params, data.name);
        } else {
           alert("Invalid preset file format.");
        }
      } catch (err) {
        console.error("Failed to parse preset", err);
        alert("Error loading preset.");
      }
      // Reset input
      if (presetInputRef.current) presetInputRef.current.value = '';
    };
    reader.readAsText(file);
  };

  const getRecordLabel = () => {
    if (isRecording) return "STOP RECORDING";
    if (recordDuration > 0) return `REC ${recordDuration}s CLIP`;
    return "START/STOP RECORDING";
  };

  const handleImportLinkUnavailable = () => {
    if (linkNoticeTimerRef.current !== null) {
      window.clearTimeout(linkNoticeTimerRef.current);
    }
    setShowLinkImportNotice(true);
    linkNoticeTimerRef.current = window.setTimeout(() => {
      setShowLinkImportNotice(false);
      linkNoticeTimerRef.current = null;
    }, 2200);
  };

  return (
    <div className="h-full flex flex-col gap-2">
      <Panel title="INPUT SOURCE" className="h-auto min-h-[140px] flex-shrink-0">
        <div className="p-2 flex flex-col gap-2">
          <div 
            className="border-2 border-dashed border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-900/30 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer group min-h-[92px]"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className={`p-2 rounded-full transition-all ${isVideo ? 'bg-cyan-900/50 text-cyan-400' : 'bg-zinc-900 text-zinc-500 group-hover:text-cyan-400 group-hover:scale-110'}`}>
              {isVideo ? <Icons.Video /> : <Icons.Upload />}
            </div>
            <div className="text-center leading-tight">
              <p className="text-xs font-bold text-zinc-400 group-hover:text-white">
                 DROP FILE OR CLICK TO BROWSE
              </p>
              <p className="text-[10px] text-zinc-600 mt-1">PNG, JPG, GIF, MP4, MOV</p>
              <p className="text-[10px] mt-1 text-cyan-400/80">
                {isWebcamActive ? 'LIVE SOURCE: WEBCAM' : (isVideo ? 'SOURCE: VIDEO FILE' : 'SOURCE: NONE')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="secondary"
              size="sm"
              icon={<Icons.Link />}
              className="border-zinc-800 text-zinc-600 opacity-55 saturate-0 hover:border-zinc-800 hover:text-zinc-600"
              aria-disabled="true"
              title="Not available in this version without a backend"
              onClick={handleImportLinkUnavailable}
            >
              IMPORT LINK
            </Button>
            {isWebcamActive ? (
              <Button
                variant="danger"
                size="sm"
                icon={<Icons.Stop />}
                onClick={onWebcamStop}
              >
                STOP WEBCAM
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                icon={<Icons.Video />}
                onClick={onWebcamStart}
              >
                START WEBCAM
              </Button>
            )}
          </div>
          {showLinkImportNotice && (
            <p className="text-[10px] text-zinc-500 border border-zinc-800 bg-zinc-950/60 px-2 py-1">
              Link import is not available in this version without a backend.
            </p>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*,video/mp4,video/quicktime,video/webm"
            onChange={(e) => {
              const f = e.target.files?.[0];
              console.log('[Import] input onChange:', f?.name, f?.type);
              if (f) { try { window.dispatchEvent(new CustomEvent('eh-diag', { detail: { type: 'file-change', file: f } })); } catch (e) {} }
              if (f) onFileSelect(f);
            }}
          />
        </div>
      </Panel>

      <Panel 
        title="PRESETS" 
        className="flex-1 min-h-0"
        action={
          <div className="flex gap-1">
            <input 
              type="file" 
              ref={presetInputRef} 
              className="hidden" 
              accept="application/json"
              onChange={handleLoadPreset}
            />
            <button 
              className="p-1 hover:text-cyan-400 text-zinc-500 transition-colors" 
              title="Import JSON Preset"
              onClick={() => presetInputRef.current?.click()}
            >
              <Icons.Folder />
            </button>
            <button 
              className="p-1 hover:text-cyan-400 text-zinc-500 transition-colors" 
              title="Share Preset Link"
              onClick={onSharePreset}
            >
              <Icons.Link />
            </button>
            <button 
              className="p-1 hover:text-cyan-400 text-zinc-500 transition-colors" 
              title="Save Preset as JSON"
              onClick={handleSavePreset}
            >
              <Icons.Save />
            </button>
          </div>
        }
      >
        <div className="absolute inset-0 overflow-y-auto p-2 space-y-2 custom-scrollbar">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onPresetSelect(preset)}
              className={`w-full text-left p-3 border transition-all duration-200 relative overflow-hidden group ${
                activePresetId === preset.id 
                  ? 'border-cyan-500 bg-cyan-950/30' 
                  : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-600'
              }`}
            >
              <div className="flex justify-between items-center relative z-10">
                <span className={`text-xs font-bold tracking-wider font-display ${activePresetId === preset.id ? 'text-cyan-400' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                  {preset.name}
                </span>
                {activePresetId === preset.id && <div className="w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_5px_#22d3ee]"></div>}
              </div>
              {(activePresetId === preset.id) && (
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none"></div>
              )}
            </button>
          ))}
        </div>
      </Panel>

      <Panel title="OUTPUT" className="flex-shrink-0 h-auto">
        <div className="p-3 flex flex-col gap-3">
           {/* Resolution Lock */}
           <div className="flex items-center gap-2 text-[11px]">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={lockRes} onChange={e => setLockRes(e.target.checked)} />
                <span className="text-zinc-400">LOCK RESOLUTION</span>
              </label>
              <input type="number" className="w-16 bg-zinc-900 border border-zinc-800 px-1 text-xs text-zinc-200" value={lockWidth}
                onChange={e => setLockWidth(Number(e.target.value))} placeholder="W" />
              <span className="text-zinc-600">×</span>
              <input type="number" className="w-16 bg-zinc-900 border border-zinc-800 px-1 text-xs text-zinc-200" value={lockHeight}
                onChange={e => setLockHeight(Number(e.target.value))} placeholder="H" />
           </div>
           {/* Mode Tabs */}
           <div className="flex bg-zinc-900 p-1 border border-zinc-800 select-none">
              <button
                className={`flex-1 text-[10px] font-bold py-1 px-2 transition-colors ${exportMode === 'image' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                onClick={() => setExportMode('image')}
              >
                IMAGE
              </button>
              <button
                className={`flex-1 text-[10px] font-bold py-1 px-2 transition-colors ${exportMode === 'video' ? 'bg-cyan-900 text-cyan-100' : 'text-zinc-500 hover:text-zinc-300'}`}
                onClick={() => setExportMode('video')}
              >
                RECORD
              </button>
           </div>

           {exportMode === 'image' && (
             <div className="flex flex-col gap-3 animate-in fade-in duration-200">
                <div className="flex gap-2">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => onExportImage('png')}
                      icon={<Icons.Camera />}
                    >
                      EXPORT PNG
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => onExportImage('jpeg')}
                      icon={<Icons.Camera />}
                    >
                      EXPORT JPG
                    </Button>
                </div>

                <div className="animate-in fade-in duration-200">
                    <Slider 
                      label="JPG QUALITY" 
                      value={exportQuality} 
                      min={10} 
                      max={100} 
                      onChange={(e) => setExportQuality(Number(e.target.value))}
                    />
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant={isSeqActive ? 'danger' : 'secondary'}
                    onClick={() => (isSeqActive ? onStopPngSeq() : onStartPngSeq(seqFps, seqFrames))}
                    icon={isSeqActive ? <Icons.Stop /> : <Icons.Record />}
                  >
                    {isSeqActive ? 'STOP SEQUENCE' : 'PNG SEQUENCE'}
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-400">
                  <div>
                    <label className="block mb-1">SEQ FPS</label>
                    <input type="number" className="w-full bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200" value={seqFps}
                      onChange={e => setSeqFps(Number(e.target.value))} />
                  </div>
                  <div>
                    <label className="block mb-1">FRAMES</label>
                    <input type="number" className="w-full bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200" value={seqFrames}
                      onChange={e => setSeqFrames(Number(e.target.value))} />
                  </div>
                </div>
             </div>
           )}

           {exportMode === 'video' && (
             <div className="flex flex-col gap-3 animate-in fade-in duration-200">
                 <div className="grid grid-cols-3 gap-2 items-center text-[11px]">
                    <span className="text-zinc-400">FORMAT</span>
                    <select className="col-span-2 bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200"
                      value={recordFormat} onChange={e => setRecordFormat(e.target.value as any)}>
                      <option value="auto">AUTO (MP4/WEBM)</option>
                      <option value="mp4">MP4 (H264)</option>
                      <option value="webm">WEBM (VP8/9)</option>
                    </select>
                 </div>
                 <div className="grid grid-cols-3 gap-2 items-center text-[11px]">
                    <span className="text-zinc-400">FPS</span>
                    <input type="number" className="col-span-2 bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200"
                      value={recordFps} onChange={e => setRecordFps(Number(e.target.value))} />
                 </div>
                 
                 <div className="text-[10px] text-zinc-500 font-mono border border-zinc-800 bg-zinc-900/50 p-2">
                    DURATION (SEC, 0=MANUAL)
                    <input type="number" className="w-full mt-1 bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200" value={recordDuration}
                      onChange={e => setRecordDuration(Number(e.target.value))} />
                 </div>

                 <Button 
                    variant={isRecording ? 'danger' : 'primary'} 
                    className={isRecording ? 'animate-pulse' : ''}
                    onClick={() => onExport(true, recordDuration)} 
                    icon={isRecording ? <Icons.Stop /> : <Icons.Record />}
                 >
                    {isRecording ? 'STOP' : 'RECORD'}
                 </Button>
             </div>
           )}
        </div>
      </Panel>
    </div>
  );
};

