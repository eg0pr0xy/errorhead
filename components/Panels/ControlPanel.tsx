
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
      <div className="h-full flex flex-col min-h-0">
        <div className="p-2 border-b border-zinc-800 flex gap-2">
          <Button variant="secondary" size="sm" className="flex-1" onClick={onRandomize} icon={<Icons.Refresh />}>
            RND
          </Button>
          <Button variant="secondary" size="sm" className="flex-1" onClick={onReset} icon={<Icons.Undo />}>
            RESET
          </Button>
        </div>
        
        <div className="overflow-y-auto flex-1 min-h-0 custom-scrollbar">
        
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
                  label="AUDIO DRIVES EFFECTS" 
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

                    <div className="pt-2 border-t border-zinc-800/50">
                       <div className="text-[10px] text-cyan-600 font-bold mb-2 uppercase">Audio Events (Trigger)</div>
                       <Toggle label="ENABLE AUDIO EVENTS" checked={!!params.audioEventEnable} onChange={(v) => update('audioEventEnable', v)} />
                       <div className={params.audioEventEnable ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity"}>
                         <Slider label="EVENT THRESHOLD" value={params.audioEventThreshold || 70} min={0} max={100} onChange={(e) => update('audioEventThreshold', Number(e.target.value))} />
                         <Slider label="EVENT DURATION (FRAMES)" value={params.audioEventDuration || 10} min={1} max={60} step={1} onChange={(e) => update('audioEventDuration', Number(e.target.value))} />
                       </div>
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

            <div className="p-2 bg-zinc-900/40 border border-zinc-800 mb-3">
               <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase">Timing</div>
               <Slider label="MOSH TIME SCALE" value={params.timeScaleMosh ?? 0.5} min={0} max={2} step={0.05} onChange={(e) => update('timeScaleMosh', Number(e.target.value))} />
               <Slider label="BLOCKS TIME SCALE" value={params.timeScaleBlocks ?? 0.5} min={0} max={2} step={0.05} onChange={(e) => update('timeScaleBlocks', Number(e.target.value))} />
               <Slider label="HISTORY CAPTURE (FRAMES)" value={params.historyCaptureInterval ?? 1} min={1} max={10} step={1} onChange={(e) => update('historyCaptureInterval', Number(e.target.value))} />
            </div>

            <div className="p-2 bg-zinc-900/40 border border-zinc-800 mb-3">
               <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase">I-Frame / GOP</div>
               <Slider label="I-FRAME INTERVAL" value={params.iframeInterval ?? 30} min={0} max={120} step={1} onChange={(e) => update('iframeInterval', Number(e.target.value))} />
               <Slider label="I-FRAME BLOOM" value={params.iframeBloom ?? 0} min={0} max={100} step={1} onChange={(e) => update('iframeBloom', Number(e.target.value))} />
               <Slider label="I-FRAME SOFT RESET" value={params.iframeSoftReset ?? 0} min={0} max={100} step={1} onChange={(e) => update('iframeSoftReset', Number(e.target.value))} />
            </div>

            <div className="p-2 bg-zinc-900/40 border border-zinc-800 mb-3">
               <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase">Motion Vector Field</div>
               <Slider label="FLOW X" value={params.flowX ?? 0} min={-50} max={50} step={0.5} onChange={(e) => update('flowX', Number(e.target.value))} />
               <Slider label="FLOW Y" value={params.flowY ?? 0} min={-50} max={50} step={0.5} onChange={(e) => update('flowY', Number(e.target.value))} />
               <Slider label="FLOW ROTATE" value={params.flowRotate ?? 0} min={-30} max={30} step={0.5} onChange={(e) => update('flowRotate', Number(e.target.value))} />
               <Slider label="FLOW ZOOM" value={params.flowZoom ?? 0} min={-50} max={50} step={0.5} onChange={(e) => update('flowZoom', Number(e.target.value))} />
               <Slider label="REF SWAP" value={params.refSwap ?? 0} min={0} max={100} step={1} onChange={(e) => update('refSwap', Number(e.target.value))} />
               <Slider label="MOTION RESIDUE" value={params.motionResidue ?? 0} min={0} max={100} step={1} onChange={(e) => update('motionResidue', Number(e.target.value))} />
            </div>

            <div className="p-2 bg-zinc-900/40 border border-zinc-800 mb-3">
               <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase">Macroblocks</div>
               <Slider label="BLOCK LIST" value={params.blockList ?? 0} min={0} max={100} step={1} onChange={(e) => update('blockList', Number(e.target.value))} />
               <Slider label="BLOCK SIZE" value={params.blockSize ?? 32} min={8} max={128} step={8} onChange={(e) => update('blockSize', Number(e.target.value))} />
            </div>

            <div className="p-2 bg-zinc-900/40 border border-zinc-800 mb-3">
               <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase">WebGL Mosh (Injection/Diffusion)</div>
               <Slider label="MOSH INJECTION" value={params.moshInjection ?? 0.1} min={0} max={1} step={0.01} onChange={(e) => update('moshInjection', Number(e.target.value))} />
               <Slider label="MOSH DIFFUSION" value={params.moshDiffusion ?? 0} min={0} max={3} step={0.1} onChange={(e) => update('moshDiffusion', Number(e.target.value))} />
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

          <div className="p-2 bg-zinc-900/40 border border-zinc-800 mb-3">
            <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase">Shader Mosh (Post)</div>
            <Toggle
              label="ENABLE SHADER MOSH"
              checked={!!params.shaderMoshEnabled}
              onChange={(v) => update('shaderMoshEnabled', v)}
            />
            <div className={params.shaderMoshEnabled ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity"}>
              <Slider label="DISP TIME SCALE" value={params.timeScaleDisp ?? 0.5} min={0} max={5} step={0.05} onChange={(e) => update('timeScaleDisp', Number(e.target.value))} />
              <Slider label="SHADER FEEDBACK" value={params.moshFeedback ?? 85} min={0} max={100} onChange={(e) => update('moshFeedback', Number(e.target.value))} />
              <Slider label="SHADER DECAY" value={params.moshDecay ?? 2} min={0} max={10} step={0.1} onChange={(e) => update('moshDecay', Number(e.target.value))} />
              <Slider label="SHADER WARP" value={params.moshWarp ?? 0} min={0} max={100} step={1} onChange={(e) => update('moshWarp', Number(e.target.value))} />
              <Slider label="SHADER BLOCK SIZE" value={params.moshBlockSize ?? 30} min={4} max={128} step={2} onChange={(e) => update('moshBlockSize', Number(e.target.value))} />
              <Slider label="SHADER RGB OFFSET" value={params.moshRGBOffset ?? 0} min={0} max={50} step={1} onChange={(e) => update('moshRGBOffset', Number(e.target.value))} />
              <Slider label="DISP STRENGTH" value={params.moshDispStrength ?? 0} min={0} max={100} step={1} onChange={(e) => update('moshDispStrength', Number(e.target.value))} />
              <Slider label="DISP SCALE" value={params.moshDispScale ?? 10} min={1} max={50} step={1} onChange={(e) => update('moshDispScale', Number(e.target.value))} />
              <Slider label="DISP SPEED" value={params.moshDispSpeed ?? 0} min={0} max={50} step={1} onChange={(e) => update('moshDispSpeed', Number(e.target.value))} />
              <Slider label="DISP QUANTIZE" value={params.moshDispQuantize ?? 0} min={0} max={100} step={1} onChange={(e) => update('moshDispQuantize', Number(e.target.value))} />
            </div>
          </div>
        </Section>

        <Section title="Standard Glitch">
          <Slider label="AMOUNT" value={params.amount} min={0} max={100} onChange={(e) => update('amount', Number(e.target.value))} />
          <Slider label="QUALITY" value={params.quality} min={1} max={100} onChange={(e) => update('quality', Number(e.target.value))} />
          <Slider label="ITERATIONS" value={params.iterations} min={0} max={40} step={1} onChange={(e) => update('iterations', Number(e.target.value))} />
          <Slider label="SEED" value={params.seed} min={0} max={100} step={1} onChange={(e) => update('seed', Number(e.target.value))} />
        </Section>

        <Section title="Destruction" defaultOpen={false}>
          <Slider label="MELT" value={params.melt} min={0} max={100} onChange={(e) => update('melt', Number(e.target.value))} />
          <Slider label="BURN" value={params.burn} min={0} max={100} onChange={(e) => update('burn', Number(e.target.value))} />
          <Slider label="SHRED" value={params.shred} min={0} max={100} onChange={(e) => update('shred', Number(e.target.value))} />
          <Slider label="SCATTER" value={params.scatter} min={0} max={100} onChange={(e) => update('scatter', Number(e.target.value))} />
          <Slider label="SHAKE" value={params.shake} min={0} max={100} onChange={(e) => update('shake', Number(e.target.value))} />
        </Section>

        <Section title="Color & RGB" defaultOpen={false}>
          <Slider label="BRIGHTNESS" value={params.brightness} min={50} max={200} step={1} onChange={(e) => update('brightness', Number(e.target.value))} />
          <Slider label="RGB SHIFT" value={params.rgbShift} min={0} max={50} step={1} onChange={(e) => update('rgbShift', Number(e.target.value))} />
          <Slider label="COLOR OFFSET" value={params.colorOffset} min={0} max={50} step={1} onChange={(e) => update('colorOffset', Number(e.target.value))} />
          <Slider label="PIXELATION" value={params.pixelation} min={0} max={20} step={0.5} onChange={(e) => update('pixelation', Number(e.target.value))} />
          <div className="mt-4 pt-3 border-t border-zinc-800/50">
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Channel Offsets</div>
            <Slider label="RED SHIFT" value={params.redShift} min={-50} max={50} step={1} onChange={(e) => update('redShift', Number(e.target.value))} />
            <Slider label="GREEN SHIFT" value={params.greenShift} min={-50} max={50} step={1} onChange={(e) => update('greenShift', Number(e.target.value))} />
            <Slider label="BLUE SHIFT" value={params.blueShift} min={-50} max={50} step={1} onChange={(e) => update('blueShift', Number(e.target.value))} />
          </div>
        </Section>

        <Section title="Temporal" defaultOpen={false}>
          <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Temporal Echo</div>
          <Slider label="ECHO INTENSITY" value={params.temporalEcho ?? 0} min={0} max={100} onChange={(e) => update('temporalEcho', Number(e.target.value))} />
          <Slider label="ECHO DECAY" value={params.temporalEchoDecay ?? 50} min={0} max={100} onChange={(e) => update('temporalEchoDecay', Number(e.target.value))} />
          <Slider label="ECHO OFFSET (FRAMES)" value={params.temporalEchoOffset ?? 10} min={1} max={60} step={1} onChange={(e) => update('temporalEchoOffset', Number(e.target.value))} />

          <div className="mt-4 pt-3 border-t border-zinc-800/50">
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Time Smear</div>
            <Slider label="SMEAR INTENSITY" value={params.timeSmear ?? 0} min={0} max={100} onChange={(e) => update('timeSmear', Number(e.target.value))} />
            <Slider label="SMEAR FRAMES" value={params.timeSmearFrames ?? 5} min={2} max={10} step={1} onChange={(e) => update('timeSmearFrames', Number(e.target.value))} />
            <Slider label="NON-LINEARITY" value={params.timeSmearNonLinear ?? 50} min={0} max={100} onChange={(e) => update('timeSmearNonLinear', Number(e.target.value))} />
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/50">
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Reverse Burst</div>
            <Slider label="BURST PROBABILITY" value={params.reverseBurst ?? 0} min={0} max={100} onChange={(e) => update('reverseBurst', Number(e.target.value))} />
            <Slider label="BURST DURATION (FRAMES)" value={params.reverseBurstDuration ?? 10} min={2} max={30} step={1} onChange={(e) => update('reverseBurstDuration', Number(e.target.value))} />
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/50">
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Stutter Lock</div>
            <Slider label="STUTTER PROBABILITY" value={params.stutterLock ?? 0} min={0} max={100} onChange={(e) => update('stutterLock', Number(e.target.value))} />
            <Slider label="STUTTER MIN (FRAMES)" value={params.stutterLockMin ?? 2} min={1} max={10} step={1} onChange={(e) => update('stutterLockMin', Number(e.target.value))} />
            <Slider label="STUTTER MAX (FRAMES)" value={params.stutterLockMax ?? 10} min={2} max={30} step={1} onChange={(e) => update('stutterLockMax', Number(e.target.value))} />
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/50">
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Temporal Displace</div>
            <Slider label="DISPLACE INTENSITY" value={params.temporalDisplace ?? 0} min={0} max={100} onChange={(e) => update('temporalDisplace', Number(e.target.value))} />
            <Slider label="REGION COUNT" value={params.temporalDisplaceRegions ?? 8} min={1} max={20} step={1} onChange={(e) => update('temporalDisplaceRegions', Number(e.target.value))} />
            <Slider label="MAX OFFSET (FRAMES)" value={params.temporalDisplaceOffset ?? 15} min={1} max={30} step={1} onChange={(e) => update('temporalDisplaceOffset', Number(e.target.value))} />
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/50">
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Partial Replace</div>
            <Slider label="REPLACE INTENSITY" value={params.partialReplace ?? 0} min={0} max={100} onChange={(e) => update('partialReplace', Number(e.target.value))} />
            <Slider label="REPLACE OFFSET (FRAMES)" value={params.partialReplaceOffset ?? 10} min={1} max={60} step={1} onChange={(e) => update('partialReplaceOffset', Number(e.target.value))} />
            <div className="flex gap-2">
              {(['random', 'bands', 'blocks', 'gradient'] as const).map(mode => (
                <button
                  key={mode}
                  className={`flex-1 text-[10px] border py-1 font-bold ${params.partialReplacePattern === mode ? 'bg-zinc-800 border-zinc-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                  onClick={() => update('partialReplacePattern', mode)}
                >
                  {mode.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/50">
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">Chaos</div>
            <Slider label="CHAOS AMOUNT" value={params.chaosAmount ?? 0} min={0} max={100} onChange={(e) => update('chaosAmount', Number(e.target.value))} />
            <Toggle label="CHAOS EVOLVE" checked={!!params.chaosEvolve} onChange={(v) => update('chaosEvolve', v)} />
          </div>
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
              label="PHASE SPEED Y" 
              value={params.phaseSpeed ?? 0} 
              min={0} 
              max={10} 
              step={0.1} 
              onChange={(e) => update('phaseSpeed', Number(e.target.value))} 
            />
            <Slider 
              label="PHASE SPEED X" 
              value={params.phaseSpeedX ?? 0} 
              min={0} 
              max={10} 
              step={0.1} 
              onChange={(e) => update('phaseSpeedX', Number(e.target.value))} 
            />
            <Slider 
              label="PHASE OFFSET Y" 
              value={params.phaseOffset ?? 0} 
              min={0} 
              max={200} 
              step={1} 
              onChange={(e) => update('phaseOffset', Number(e.target.value))} 
            />
            <Slider 
              label="PHASE OFFSET X" 
              value={params.phaseOffsetX ?? 0} 
              min={0} 
              max={200} 
              step={1} 
              onChange={(e) => update('phaseOffsetX', Number(e.target.value))} 
            />
            <Slider 
              label="PHASE JITTER Y" 
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

            <div className="mt-4 pt-3 border-t border-zinc-800/50">
              <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">VHS Tracking Band</div>
              <label className="flex items-center justify-between mb-2 cursor-pointer group">
                <span className="text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors">ENABLE TRACKING BAND</span>
                <span className={`relative w-8 h-4 border transition-colors ${params.trackingEnabled ? 'border-cyan-500 bg-cyan-900/30' : 'border-zinc-700 bg-zinc-900'}`}>
                  <input
                    type="checkbox"
                    aria-label="Enable Tracking Band"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    checked={!!params.trackingEnabled}
                    onChange={(e) => update('trackingEnabled', e.target.checked)}
                  />
                  <span className={`absolute top-0.5 bottom-0.5 w-2.5 transition-all ${params.trackingEnabled ? 'right-0.5 bg-cyan-400' : 'left-0.5 bg-zinc-600'}`}></span>
                </span>
              </label>
              <div className={params.trackingEnabled ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity"}>
                <div className="flex gap-2 mb-3">
                  <button
                    className={`flex-1 text-[10px] border py-1 font-bold ${params.trackingPosition === 'top' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                    onClick={() => update('trackingPosition', 'top')}
                  >
                    TOP
                  </button>
                  <button
                    className={`flex-1 text-[10px] border py-1 font-bold ${params.trackingPosition === 'bottom' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                    onClick={() => update('trackingPosition', 'bottom')}
                  >
                    BOTTOM
                  </button>
                  <button
                    className={`flex-1 text-[10px] border py-1 font-bold ${params.trackingPosition === 'auto' ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-zinc-700 text-zinc-500'}`}
                    onClick={() => update('trackingPosition', 'auto')}
                  >
                    AUTO
                  </button>
                </div>
                <Slider
                  label="STRENGTH"
                  value={params.trackingStrength ?? 0}
                  min={0}
                  max={100}
                  step={1}
                  onChange={(e) => update('trackingStrength', Number(e.target.value))}
                />
                <Slider
                  label="BAND HEIGHT"
                  value={params.trackingBandHeight ?? 0}
                  min={0}
                  max={200}
                  step={1}
                  onChange={(e) => update('trackingBandHeight', Number(e.target.value))}
                />
                <Slider
                  label="DRIFT SPEED"
                  value={params.trackingSpeed ?? 0}
                  min={0}
                  max={5}
                  step={0.1}
                  onChange={(e) => update('trackingSpeed', Number(e.target.value))}
                />
                <Slider
                  label="TEAR AMOUNT"
                  value={params.trackingTearAmount ?? 0}
                  min={0}
                  max={40}
                  step={0.5}
                  onChange={(e) => update('trackingTearAmount', Number(e.target.value))}
                />
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

          <div className="mt-3 p-2 bg-zinc-900/40 border border-zinc-800">
            <div className="text-[10px] text-purple-400 font-bold mb-2 uppercase">Chroma Drift / Delay</div>
            <Slider label="DELAY FRAMES" value={params.chromaDelayFrames ?? 0} min={0} max={12} step={1} onChange={(e) => update('chromaDelayFrames', Number(e.target.value))} />
            <Slider label="DRIFT AMOUNT" value={params.chromaDriftAmount ?? 0} min={0} max={20} step={1} onChange={(e) => update('chromaDriftAmount', Number(e.target.value))} />
            <Slider label="WOBBLE SPEED" value={params.chromaWobbleSpeed ?? 0} min={0} max={5} step={0.1} onChange={(e) => update('chromaWobbleSpeed', Number(e.target.value))} />
          </div>
        </Section>

        <Section title="Displacement" defaultOpen={false}>
          <div className="p-2 bg-zinc-900/40 border border-zinc-800">
            <div className="text-[10px] text-emerald-400 font-bold mb-2 uppercase">Slice / Stripe Displacement</div>
            <Toggle label="ENABLE SLICE STRIPES" checked={!!params.sliceEnabled} onChange={(v) => update('sliceEnabled', v)} />
            <div className={params.sliceEnabled ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity"}>
              <Slider label="SLICE COUNT" value={params.sliceCount ?? 0} min={0} max={60} step={1} onChange={(e) => update('sliceCount', Number(e.target.value))} />
              <Slider label="SLICE THICKNESS" value={params.sliceThickness ?? 0} min={0} max={120} step={1} onChange={(e) => update('sliceThickness', Number(e.target.value))} />
              <Slider label="OFFSET MAX" value={params.sliceOffsetMax ?? 0} min={0} max={200} step={1} onChange={(e) => update('sliceOffsetMax', Number(e.target.value))} />
              <Slider label="HOLD FRAMES" value={params.sliceHoldFrames ?? 0} min={0} max={30} step={1} onChange={(e) => update('sliceHoldFrames', Number(e.target.value))} />
              <div className="flex gap-2 mt-2">
                <button className={`flex-1 text-[10px] border py-1 font-bold ${params.sliceDirection === 'h' ? 'bg-emerald-900 border-emerald-600 text-white' : 'border-zinc-700 text-zinc-500'}`} onClick={() => update('sliceDirection', 'h')}>HORIZONTAL</button>
                <button className={`flex-1 text-[10px] border py-1 font-bold ${params.sliceDirection === 'v' ? 'bg-emerald-900 border-emerald-600 text-white' : 'border-zinc-700 text-zinc-500'}`} onClick={() => update('sliceDirection', 'v')}>VERTICAL</button>
                <button className={`flex-1 text-[10px] border py-1 font-bold ${params.sliceDirection === 'both' ? 'bg-emerald-900 border-emerald-600 text-white' : 'border-zinc-700 text-zinc-500'}`} onClick={() => update('sliceDirection', 'both')}>BOTH</button>
              </div>
            </div>
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
          <div className={params.scanlines ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity"}>
            <Slider label="SCANLINE INTENSITY" value={params.scanlineIntensity} min={0} max={100} onChange={(e) => update('scanlineIntensity', Number(e.target.value))} />
          </div>
          <Slider label="NOISE" value={params.noise} min={0} max={100} onChange={(e) => update('noise', Number(e.target.value))} />
          <div className="mt-3 p-2 bg-zinc-900/40 border border-zinc-800">
            <div className="text-[10px] text-zinc-400 font-bold uppercase mb-2">No-Signal Snow Burst</div>
            <Toggle label="ENABLE SNOW BURST" checked={!!params.snowBurstEnabled} onChange={(v) => update('snowBurstEnabled', v)} />
            <div className={params.snowBurstEnabled ? "opacity-100 transition-opacity" : "opacity-50 pointer-events-none transition-opacity"}>
              <Slider label="DURATION (FRAMES)" value={params.snowBurstDurationFrames ?? 6} min={1} max={60} step={1} onChange={(e) => update('snowBurstDurationFrames', Number(e.target.value))} />
              <Slider label="CHANCE / SEC" value={params.snowBurstChance ?? 0} min={0} max={100} step={1} onChange={(e) => update('snowBurstChance', Number(e.target.value))} />
              <Slider label="INTENSITY" value={params.snowBurstIntensity ?? 0} min={0} max={100} step={1} onChange={(e) => update('snowBurstIntensity', Number(e.target.value))} />
            </div>
          </div>
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
