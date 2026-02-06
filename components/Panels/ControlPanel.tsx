
// Add missing React import to fix namespace error
import React, { useRef } from 'react';
import { Panel, Slider, Toggle, Button, Section, Icons } from '../UIComponents';
import { GlitchParams } from '../../types';

interface ControlPanelProps {
  params: GlitchParams;
  onChange: (params: GlitchParams) => void;
  onRandomize: () => void;
  onReset: () => void;
  onImportMusic: (file: File) => void;
  onStopAudio: () => void;
  onToggleAudioPause: () => void;
  audioPauseLabel: string;
  audioPauseDisabled: boolean;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  params,
  onChange,
  onRandomize,
  onReset,
  onImportMusic,
  onStopAudio,
  onToggleAudioPause,
  audioPauseLabel,
  audioPauseDisabled
}) => {
  const musicInputRef = useRef<HTMLInputElement>(null);

  const update = (key: keyof GlitchParams, value: number | boolean | string) => {
    onChange({ ...params, [key]: value });
  };

  return (
    <Panel title="CONTROLS" className="h-full flex flex-col">
      <div className="h-full flex flex-col">
        <div className="p-2 border-b border-zinc-800 flex gap-2">
          <Button variant="secondary" size="sm" className="flex-1" onClick={onRandomize} icon={<Icons.Refresh />}>
            RND
          </Button>
          <Button variant="secondary" size="sm" className="flex-1" onClick={onReset} icon={<Icons.Undo />}>
            RESET
          </Button>
        </div>
        
        <div className="overflow-y-auto flex-1 custom-scrollbar">
        
        {/* TIME & EROSION CONTROL */}
        <Section title="TIME & EROSION" defaultOpen={true}>
           <div className="mb-4">
              <Slider label="MASTER SPEED (GLOBAL)" value={params.masterSpeed} min={0} max={5} step={0.1} onChange={(e) => update('masterSpeed', Number(e.target.value))} />
              
              <div className="flex gap-2 my-2">
                  <button 
                     className={`flex-1 text-[10px] border py-1 font-bold ${params.videoSpeedMode === 'normal' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                     onClick={() => update('videoSpeedMode', 'normal')}>
                     NORMAL PLAY
                  </button>
                  <button 
                     className={`flex-1 text-[10px] border py-1 font-bold ${params.videoSpeedMode === 'timeWarp' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                     onClick={() => update('videoSpeedMode', 'timeWarp')}>
                     TIME WARP
                  </button>
              </div>

              {params.videoSpeedMode === 'timeWarp' && (
                  <div className="animate-in fade-in">
                     <Slider label="TARGET DURATION (SEC)" value={params.targetDurationSec} min={10} max={3600} onChange={(e) => update('targetDurationSec', Number(e.target.value))} />
                  </div>
              )}
           </div>

           <div className="p-2 bg-zinc-900/40 border border-zinc-800 mb-4">
               <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase">Input Hold & Injection</div>
               <Toggle label="HOLD MODE (FREEZE INPUT)" checked={params.holdMode} onChange={(v) => update('holdMode', v)} />
               
               <div className={params.holdMode ? "opacity-100" : "opacity-50 pointer-events-none"}>
                   <Slider label="INJECT INTERVAL (SEC)" value={params.injectIntervalSec} min={0.5} max={60} step={0.5} onChange={(e) => update('injectIntervalSec', Number(e.target.value))} />
                   <Slider label="INJECT FRAMES" value={params.injectFrames} min={1} max={5} step={1} onChange={(e) => update('injectFrames', Number(e.target.value))} />
               </div>
           </div>
        </Section>

        {/* AUDIO REACTIVITY SECTION */}
        <Section title="AUDIO MODULATION" defaultOpen={true}>
          <div className="p-2 bg-black/40 mb-4 border border-zinc-800">
               <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase flex items-center gap-2">
                  <Icons.Zap /> SIGNAL ENGINE
               </div>
               <Toggle 
                  label="ENABLE MODULATION" 
                  checked={params.audioEnabled} 
                  onChange={(v) => update('audioEnabled', v)} 
               />
               <div className="mt-2">
                 <div className="flex gap-2">
                   <Button
                     size="sm"
                     variant="secondary"
                     className="flex-1 text-[10px]"
                     onClick={onToggleAudioPause}
                     icon={audioPauseLabel.toUpperCase().includes('PAUSE') ? <Icons.Pause /> : <Icons.Play />}
                     disabled={audioPauseDisabled}
                   >
                     {audioPauseLabel}
                   </Button>
                   <Button size="sm" variant="secondary" className="flex-1 text-[10px]" onClick={onStopAudio} icon={<Icons.Stop />}>
                     STOP AUDIO
                   </Button>
                 </div>
               </div>
               
               {params.audioEnabled && (
                 <div className="mt-3 space-y-3 animate-in fade-in slide-in-from-top-1">
                    <div className="flex flex-col gap-1">
                       <label className="text-[10px] text-zinc-500 font-bold uppercase">Signal Source</label>
                       <div className="flex gap-1">
                          {(['mic', 'video', 'music'] as const).map(src => (
                             <button
                                key={src}
                                className={`flex-1 text-[9px] border py-1 font-bold uppercase transition-all ${params.audioSource === src ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-800 text-zinc-500 hover:text-zinc-300'}`}
                                onClick={() => update('audioSource', src)}
                             >
                                {src}
                             </button>
                          ))}
                       </div>
                    </div>

                    {params.audioSource === 'music' && (
                       <div className="border border-dashed border-zinc-700 p-2 text-center">
                          <input 
                             type="file" 
                             ref={musicInputRef} 
                             className="hidden" 
                             accept="audio/*" 
                             onChange={(e) => e.target.files && onImportMusic(e.target.files[0])}
                          />
                          <Button size="sm" variant="secondary" className="w-full text-[10px]" onClick={() => musicInputRef.current?.click()} icon={<Icons.Folder />}>
                             {params.musicUrl ? "SWAP MUSIC" : "SELECT MUSIC FILE"}
                          </Button>
                          {params.musicUrl && <div className="text-[9px] text-cyan-600 mt-1 truncate">TRACK LOADED</div>}
                       </div>
                    )}

                    <div className="flex flex-col gap-1">
                       <label className="text-[10px] text-zinc-500 font-bold uppercase">Feature Signal</label>
                       <select
                          value={params.audioFeature}
                          onChange={(e) => update('audioFeature', e.target.value as any)}
                          className="w-full text-[10px] bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1 font-mono"
                       >
                          <option value="amplitude">AMPLITUDE (raw)</option>
                          <option value="envelope">ENVELOPE (smoothed)</option>
                          <option value="low">LOW (20-250 Hz bass)</option>
                          <option value="mid">MID (250-4k Hz vocal)</option>
                          <option value="high">HIGH (4k-20k Hz treble)</option>
                          <option value="transient">TRANSIENT (percussive hits)</option>
                          <option value="beat">BEAT (rhythmic pulse)</option>
                       </select>
                    </div>

                    <Slider label="INPUT GAIN" value={params.audioGain} min={0} max={200} onChange={(e) => update('audioGain', Number(e.target.value))} />
                    <Slider label="GATE THRESHOLD" value={params.audioGate} min={0} max={100} onChange={(e) => update('audioGate', Number(e.target.value))} />
                    <Slider label="SMOOTHING" value={params.audioSmooth} min={0} max={100} onChange={(e) => update('audioSmooth', Number(e.target.value))} />
                    
                    <div className="flex gap-2 items-center">
                       <Toggle label="INVERT SIGNAL" checked={!!params.audioInvert} onChange={(v) => update('audioInvert', v)} />
                    </div>
                    <Slider label="QUANTIZE (STEPS)" value={params.audioQuantize || 0} min={0} max={16} step={1} onChange={(e) => update('audioQuantize', Number(e.target.value))} />

                    <div className="pt-2 border-t border-zinc-800/50">
                       <div className="text-[10px] text-cyan-600 font-bold mb-2 uppercase">Modulation Targets</div>
                       <Slider label="RGB SHIFT TARGET" value={params.audioTargetRgb} min={0} max={100} onChange={(e) => update('audioTargetRgb', Number(e.target.value))} />
                       <Slider label="GLITCH AMOUNT TARGET" value={params.audioTargetAmount} min={0} max={100} onChange={(e) => update('audioTargetAmount', Number(e.target.value))} />
                       <Slider label="MOSH WARP TARGET" value={params.audioTargetWarp} min={0} max={200} onChange={(e) => update('audioTargetWarp', Number(e.target.value))} />
                       <Slider label="FEEDBACK TARGET" value={params.audioTargetFeedback || 0} min={0} max={100} onChange={(e) => update('audioTargetFeedback', Number(e.target.value))} />
                       <Slider label="BLOCKS TARGET" value={params.audioTargetBlocks || 0} min={0} max={100} onChange={(e) => update('audioTargetBlocks', Number(e.target.value))} />
                       <Slider label="MELT TARGET" value={params.audioTargetMelt || 0} min={0} max={100} onChange={(e) => update('audioTargetMelt', Number(e.target.value))} />
                       <Slider label="SHAKE TARGET" value={params.audioTargetShake || 0} min={0} max={100} onChange={(e) => update('audioTargetShake', Number(e.target.value))} />
                       <Slider label="NOISE TARGET" value={params.audioTargetNoise || 0} min={0} max={100} onChange={(e) => update('audioTargetNoise', Number(e.target.value))} />
                    </div>
                 </div>
               )}
          </div>
        </Section>

        <Section title="Advanced Datamosh" defaultOpen={false}>
          <div className="mb-4 p-2 bg-zinc-900/50 border border-zinc-800">
            <Toggle 
              label="ENABLE MOSH ENGINE" 
              checked={params.moshEnabled} 
              onChange={(v) => update('moshEnabled', v)} 
            />
          </div>
          
          <div className={params.moshEnabled ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity"}>
            <div className="flex gap-2 mb-4">
                  <button 
                     className={`flex-1 text-[10px] border py-1 font-bold ${params.moshMode === '2d' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                     onClick={() => update('moshMode', '2d')}>
                     CANVAS 2D
                  </button>
                  <button 
                     className={`flex-1 text-[10px] border py-1 font-bold ${params.moshMode === 'webgl' ? 'bg-purple-900 border-purple-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                     onClick={() => update('moshMode', 'webgl')}>
                     WEBGL2 SCULPT
                  </button>
            </div>
            {/* True MV Abuse */}
            <div className="p-2 bg-zinc-900/40 border border-zinc-800 mb-3">
               <Toggle label="MOTION VECTOR ABUSE (BLOCK MATCH)" checked={!!params.mvAbuse} onChange={(v) => update('mvAbuse', v)} />
               <div className={params.mvAbuse ? '' : 'opacity-50 pointer-events-none'}>
                 <Slider label="MV BLOCK SIZE" value={params.mvBlockSize || 32} min={8} max={128} step={8} onChange={(e) => update('mvBlockSize', Number(e.target.value))} />
                 <Slider label="MV SEARCH RADIUS (BLOCKS)" value={params.mvSearchRadius || 2} min={0} max={8} step={1} onChange={(e) => update('mvSearchRadius', Number(e.target.value))} />
               </div>
            </div>

            {/* I/P Frame & Feedback */}
            <Slider label="ACCUMULATION (FEEDBACK)" value={params.feedback} min={0} max={100} onChange={(e) => update('feedback', Number(e.target.value))} />
          </div>
        </Section>

        <Section title="Standard Glitch">
          <Slider label="AMOUNT" value={params.amount} min={0} max={100} onChange={(e) => update('amount', Number(e.target.value))} />
          <Slider label="QUALITY" value={params.quality} min={1} max={100} onChange={(e) => update('quality', Number(e.target.value))} />
        </Section>

        <Section title="Analog Sync Distortion" defaultOpen={false}>
          <div className="mb-3 p-2 bg-zinc-900/40 border border-zinc-800">
            <label className="flex items-center justify-between mb-2 cursor-pointer group">
              <span className="text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors">ENABLE ANALOG SYNC DISTORTION</span>
              <span className={`relative w-8 h-4 border transition-colors ${params.phaseEnabled ? 'border-cyan-500 bg-cyan-900/30' : 'border-zinc-700 bg-zinc-900'}`}>
                <input
                  type="checkbox"
                  aria-label="Enable Analog Sync Distortion"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  checked={!!params.phaseEnabled}
                  onChange={(e) => {
                    const enabled = e.target.checked;
                    onChange({
                      ...params,
                      phaseEnabled: enabled,
                      vSyncEnabled: enabled ? params.vSyncEnabled : false
                    });
                  }}
                />
                <span className={`absolute top-0.5 bottom-0.5 w-2.5 transition-all ${params.phaseEnabled ? 'right-0.5 bg-cyan-400' : 'left-0.5 bg-zinc-600'}`}></span>
              </span>
            </label>
          </div>

          <div className={params.phaseEnabled ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity"}>
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Phase Slip</div>
            <Slider 
              label="PHASE SPEED" 
              value={params.phaseSpeed ?? 0} 
              min={0} 
              max={10} 
              step={0.1} 
              onChange={(e) => update('phaseSpeed', Number(e.target.value))} 
            />
            <Slider 
              label="PHASE OFFSET" 
              value={params.phaseOffset ?? 0} 
              min={0} 
              max={200} 
              step={1} 
              onChange={(e) => update('phaseOffset', Number(e.target.value))} 
            />
            <Slider 
              label="PHASE JITTER" 
              value={params.phaseJitter ?? 0} 
              min={0} 
              max={20} 
              step={0.5} 
              onChange={(e) => update('phaseJitter', Number(e.target.value))} 
            />
            <div className="flex gap-2 mb-3">
              <button 
                className={`flex-1 text-[10px] border py-1 font-bold ${params.wrapMode === 'hard' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                onClick={() => update('wrapMode', 'hard')}
              >
                HARD WRAP
              </button>
              <button 
                className={`flex-1 text-[10px] border py-1 font-bold ${params.wrapMode === 'soft' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                onClick={() => update('wrapMode', 'soft')}
              >
                SOFT WRAP
              </button>
            </div>
            <div className="flex gap-2 mb-3">
              <button 
                className={`flex-1 text-[10px] border py-1 font-bold ${params.banding === 'line' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                onClick={() => update('banding', 'line')}
              >
                LINE BANDING
              </button>
              <button 
                className={`flex-1 text-[10px] border py-1 font-bold ${params.banding === 'block' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                onClick={() => update('banding', 'block')}
              >
                BLOCK BANDING
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/50">
              <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Horizontal Drift</div>
              <Slider 
                label="H OFFSET" 
                value={params.hOffset ?? 0} 
                min={-50} 
                max={50} 
                step={0.5} 
                onChange={(e) => update('hOffset', Number(e.target.value))} 
              />
              <Slider 
                label="H SPEED" 
                value={params.hSpeed ?? 0} 
                min={0} 
                max={1} 
                step={0.01} 
                onChange={(e) => update('hSpeed', Number(e.target.value))} 
              />
              <Slider 
                label="H AMOUNT" 
                value={params.hAmount ?? 0} 
                min={0} 
                max={30} 
                step={0.5} 
                onChange={(e) => update('hAmount', Number(e.target.value))} 
              />
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/50">
              <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Wave Distortion</div>
              <Slider 
                label="WAVE AMOUNT" 
                value={params.waveAmount ?? 0} 
                min={0} 
                max={30} 
                step={0.5} 
                onChange={(e) => update('waveAmount', Number(e.target.value))} 
              />
              <Slider 
                label="WAVE FREQUENCY" 
                value={params.waveFrequency ?? 0} 
                min={0} 
                max={0.1} 
                step={0.001} 
                onChange={(e) => update('waveFrequency', Number(e.target.value))} 
              />
              <Slider 
                label="WAVE SPEED" 
                value={params.waveSpeed ?? 0} 
                min={0} 
                max={1} 
                step={0.01} 
                onChange={(e) => update('waveSpeed', Number(e.target.value))} 
              />
              <Slider 
                label="WAVE PHASE" 
                value={params.wavePhase ?? 0} 
                min={0} 
                max={6.28} 
                step={0.01} 
                onChange={(e) => update('wavePhase', Number(e.target.value))} 
              />
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/50">
              <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Sync Collapse</div>
              <label className="flex items-center justify-between mb-2 cursor-pointer group">
                <span className="text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors">ENABLE SYNC COLLAPSE</span>
                <span className={`relative w-8 h-4 border transition-colors ${params.vSyncEnabled ? 'border-cyan-500 bg-cyan-900/30' : 'border-zinc-700 bg-zinc-900'}`}>
                  <input
                    type="checkbox"
                    aria-label="Enable Sync Collapse"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    checked={!!params.vSyncEnabled}
                    onChange={(e) => update('vSyncEnabled', e.target.checked)}
                  />
                  <span className={`absolute top-0.5 bottom-0.5 w-2.5 transition-all ${params.vSyncEnabled ? 'right-0.5 bg-cyan-400' : 'left-0.5 bg-zinc-600'}`}></span>
                </span>
              </label>
              <div className={params.vSyncEnabled ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity"}>
                <Slider 
                  label="BAND COUNT" 
                  value={params.vSyncBandCount ?? 8} 
                  min={1} 
                  max={32} 
                  step={1} 
                  onChange={(e) => update('vSyncBandCount', Number(e.target.value))} 
                />
                <Slider 
                  label="BASE SPEED" 
                  value={params.vSyncBaseSpeed ?? 0} 
                  min={0} 
                  max={10} 
                  step={0.1} 
                  onChange={(e) => update('vSyncBaseSpeed', Number(e.target.value))} 
                />
                <Slider 
                  label="BAND VARIANCE" 
                  value={params.vSyncBandVariance ?? 0} 
                  min={0} 
                  max={10} 
                  step={0.1} 
                  onChange={(e) => update('vSyncBandVariance', Number(e.target.value))} 
                />
                <Slider 
                  label="JITTER" 
                  value={params.vSyncJitter ?? 0} 
                  min={0} 
                  max={10} 
                  step={0.1} 
                  onChange={(e) => update('vSyncJitter', Number(e.target.value))} 
                />
                <div className="flex gap-2">
                  <button 
                    className={`flex-1 text-[10px] border py-1 font-bold ${params.vSyncWrapMode === 'hard' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                    onClick={() => update('vSyncWrapMode', 'hard')}
                  >
                    HARD WRAP
                  </button>
                  <button 
                    className={`flex-1 text-[10px] border py-1 font-bold ${params.vSyncWrapMode === 'soft' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                    onClick={() => update('vSyncWrapMode', 'soft')}
                  >
                    SOFT WRAP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Professional Glitch" defaultOpen={false}>
          <div className="p-2 bg-zinc-900/40 border border-zinc-800 mb-3">
            <div className="text-[10px] text-purple-400 font-bold mb-2 uppercase">Pixel Sorting</div>
            <Slider label="INTENSITY" value={params.pixelSort || 0} min={0} max={100} onChange={(e) => update('pixelSort', Number(e.target.value))} />
            <div className="flex gap-2 mt-2">
              <button className={`flex-1 text-[9px] border py-1 font-bold ${params.pixelSortMode === 'brightness' ? 'bg-purple-900 border-purple-600 text-white' : 'border-zinc-700 text-zinc-400'}`} onClick={() => update('pixelSortMode', 'brightness')}>BRIGHT</button>
              <button className={`flex-1 text-[9px] border py-1 font-bold ${params.pixelSortMode === 'hue' ? 'bg-purple-900 border-purple-600 text-white' : 'border-zinc-700 text-zinc-400'}`} onClick={() => update('pixelSortMode', 'hue')}>HUE</button>
              <button className={`flex-1 text-[9px] border py-1 font-bold ${params.pixelSortMode === 'random' ? 'bg-purple-900 border-purple-600 text-white' : 'border-zinc-700 text-zinc-400'}`} onClick={() => update('pixelSortMode', 'random')}>RANDOM</button>
            </div>
          </div>
          
          <div className="p-2 bg-zinc-900/40 border border-zinc-800">
            <div className="text-[10px] text-purple-400 font-bold mb-2 uppercase">Channel Separation</div>
            <Slider label="INTENSITY" value={params.channelSep || 0} min={0} max={100} onChange={(e) => update('channelSep', Number(e.target.value))} />
            <Slider label="OFFSET X" value={params.channelSepX || 10} min={-50} max={50} onChange={(e) => update('channelSepX', Number(e.target.value))} />
            <Slider label="OFFSET Y" value={params.channelSepY || 0} min={-50} max={50} onChange={(e) => update('channelSepY', Number(e.target.value))} />
          </div>
        </Section>

        <Section title="Compression">
          <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase">Byte Corruption Mode</div>
          <div className="flex gap-2">
            <button className={`flex-1 text-[10px] border py-1 font-bold ${params.corruptMode === 'safe' ? 'bg-emerald-900 border-emerald-600 text-white' : 'border-zinc-700 text-zinc-400'}`} onClick={() => update('corruptMode', 'safe' as any)}>SAFE</button>
            <button className={`flex-1 text-[10px] border py-1 font-bold ${params.corruptMode === 'unsafe' ? 'bg-red-900 border-red-600 text-white' : 'border-zinc-700 text-zinc-400'}`} onClick={() => update('corruptMode', 'unsafe' as any)}>UNSAFE</button>
          </div>
        </Section>

        <Section title="Display">
          <Toggle label="CRT SCANLINES" checked={params.scanlines} onChange={(v) => update('scanlines', v)} />
          <Slider label="NOISE" value={params.noise} min={0} max={100} onChange={(e) => update('noise', Number(e.target.value))} />
          <div className="mt-2 p-2 bg-zinc-900/40 border border-zinc-800">
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Debug</div>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" onClick={() => { (window as any).__ERRORHEAD_DEBUG__ = !(window as any).__ERRORHEAD_DEBUG__; }}>
                TOGGLE OVERLAY
              </Button>
              <Button size="sm" variant="secondary" onClick={() => { (window as any).__ERRORHEAD_FIXED_DT = (window as any).__ERRORHEAD_FIXED_DT ? undefined : 1/30; }}>
                FIXED 30 FPS
              </Button>
            </div>
          </div>
        </Section>
        </div>
      </div>
    </Panel>
  );
};
