import{j as v,R as tl,r as me,_ as Us}from"./index-DRBn-erR.js";const nl=({leftPanel:n,centerPanel:e,rightPanel:t,bottomBar:i})=>v.jsxs("div",{className:"fixed inset-0 w-screen h-screen overflow-hidden flex flex-col bg-black text-zinc-300 select-none",children:[v.jsx("div",{className:"fixed inset-0 pointer-events-none opacity-10",style:{backgroundImage:"linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),v.jsxs("header",{className:"h-12 border-b border-zinc-800 bg-black/80 flex items-center justify-between px-4 z-10 relative",children:[v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("div",{className:"w-3 h-3 bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse"}),v.jsxs("h1",{className:"text-xl font-display font-bold tracking-widest text-white",children:["ERRORHEAD ",v.jsx("span",{className:"text-zinc-600 text-xs align-top opacity-70",children:"v2.0"})]})]}),v.jsxs("div",{className:"text-xs font-mono text-zinc-600 flex gap-6 items-center",children:[v.jsx("span",{children:"ENTROPY: ACTIVE"}),v.jsx("span",{children:"MEM: 64MB"}),v.jsx("a",{className:"px-2 py-1 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white",href:"https://eg0pr0xy.github.io/errorhead/guide/",target:"_blank",rel:"noreferrer",title:"Open Docs",children:"DOCS"}),v.jsx("span",{className:"text-cyan-800",children:"— SIGNAL OK"})]})]}),v.jsxs("main",{className:"flex-1 flex overflow-hidden relative z-10 p-2 gap-2 min-h-0",children:[v.jsx("div",{className:"w-72 flex-shrink-0 flex flex-col gap-2",children:n}),v.jsx("div",{className:"flex-1 flex flex-col min-w-0 min-h-0 relative h-full",children:e}),v.jsx("div",{className:"w-80 flex-shrink-0 flex flex-col gap-2",children:t})]}),v.jsx("footer",{className:"h-auto min-h-8 border-t border-zinc-800 bg-zinc-950 flex flex-col z-10 relative",children:i})]}),at={Upload:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),v.jsx("polyline",{points:"17 8 12 3 7 8"}),v.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),Refresh:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M23 4v6h-6"}),v.jsx("path",{d:"M1 20v-6h6"}),v.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),Undo:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),v.jsx("path",{d:"M3 3v5h5"})]}),Zap:()=>v.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),ChevronRight:()=>v.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("polyline",{points:"9 18 15 12 9 6"})}),Play:()=>v.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),Pause:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),v.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),Video:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),v.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),Camera:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z"}),v.jsx("circle",{cx:"12",cy:"14",r:"4"})]}),Record:()=>v.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"red",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("circle",{cx:"12",cy:"12",r:"10"})}),Stop:()=>v.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:v.jsx("rect",{x:"6",y:"6",width:"12",height:"12"})}),Keyframe:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M12 2l-5.5 9h11z"}),v.jsx("path",{d:"M12 22l-5.5-9h11z"})]}),Clock:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("circle",{cx:"12",cy:"12",r:"10"}),v.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Save:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),v.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),v.jsx("polyline",{points:"7 3 7 8 15 8"})]}),Folder:()=>v.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),Link:()=>v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),v.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]})},yt=({children:n,variant:e="primary",size:t="md",icon:i,className:r="",...s})=>{const o="font-mono uppercase tracking-wider transition-colors duration-100 flex items-center justify-center gap-2 border disabled:opacity-50 disabled:cursor-not-allowed select-none",a={primary:"bg-black border-zinc-600 text-zinc-200 hover:bg-zinc-900 hover:border-zinc-400",secondary:"bg-black border-zinc-800 text-zinc-400 hover:border-zinc-600",danger:"bg-black border-red-600 text-red-500 hover:border-red-400",ghost:"bg-transparent border-transparent text-zinc-400 hover:text-zinc-200"},c={sm:"text-xs px-2 py-1 h-7",md:"text-sm px-4 py-2 h-9"};return v.jsxs("button",{className:`${o} ${a[e]} ${c[t]} ${r}`,...s,children:[i&&v.jsx("span",{className:"w-4 h-4 flex items-center",children:i}),n]})},Ge=({label:n,value:e,...t})=>v.jsxs("div",{className:"flex flex-col gap-1 mb-4 group",children:[v.jsxs("div",{className:"flex justify-between items-end text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors",children:[v.jsx("label",{children:n}),v.jsx("span",{className:"bg-zinc-900 px-1 border border-zinc-800 font-display",children:e})]}),v.jsxs("div",{className:"relative h-4 flex items-center",children:[v.jsx("div",{className:"absolute w-full h-1 bg-zinc-800"}),v.jsx("div",{className:"absolute h-1 bg-cyan-900",style:{width:`${(e-Number(t.min||0))/(Number(t.max||100)-Number(t.min||0))*100}%`}}),v.jsx("input",{type:"range",className:"relative w-full z-10 opacity-0 cursor-pointer h-full",value:e,...t}),v.jsx("div",{className:"absolute w-2 h-4 bg-cyan-500 border border-black pointer-events-none transition-all duration-75",style:{left:`calc(${(e-Number(t.min||0))/(Number(t.max||100)-Number(t.min||0))*100}% - 4px)`}})]})]}),qn=({label:n,checked:e,onChange:t})=>v.jsxs("div",{className:"flex items-center justify-between mb-2 cursor-pointer group",onClick:()=>t(!e),children:[v.jsx("span",{className:"text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors",children:n}),v.jsx("div",{className:`w-8 h-4 border transition-colors relative ${e?"border-cyan-500 bg-cyan-900/30":"border-zinc-700 bg-zinc-900"}`,children:v.jsx("div",{className:`absolute top-0.5 bottom-0.5 w-2.5 bg-current transition-all ${e?"right-0.5 bg-cyan-400":"left-0.5 bg-zinc-600"}`})})]}),mn=({title:n,children:e,defaultOpen:t=!0})=>{const[i,r]=tl.useState(t);return v.jsxs("div",{className:"border-b border-zinc-800 last:border-0",children:[v.jsxs("button",{className:"w-full flex items-center justify-between py-2 px-1 hover:bg-zinc-900/50 transition-colors text-xs font-bold text-zinc-400 uppercase tracking-widest",onClick:()=>r(!i),children:[v.jsx("span",{children:n}),v.jsx("span",{className:`transform transition-transform ${i?"rotate-90":""}`,children:v.jsx(at.ChevronRight,{})})]}),i&&v.jsx("div",{className:"p-2 pb-4 animate-in slide-in-from-top-1 fade-in duration-200",children:e})]})},hr=({children:n,title:e,className:t="",action:i})=>v.jsxs("div",{className:`relative bg-black border border-zinc-800 flex flex-col ${t}`,children:[e&&v.jsxs("div",{className:"h-8 border-b border-zinc-800 flex items-center px-3 bg-black justify-between",children:[v.jsx("h3",{className:"text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono flex items-center gap-2",children:e}),i&&v.jsx("div",{children:i})]}),v.jsx("div",{className:"flex-1 overflow-hidden relative",children:n})]}),bt={amount:0,seed:25,iterations:5,quality:60,simpleSlice:!0,scatter:0,shred:0,burn:0,melt:0,shake:0,pixelSort:0,pixelSortMode:"brightness",channelSep:0,channelSepX:10,channelSepY:0,colorOffset:0,pixelation:0,rgbShift:0,redShift:0,greenShift:0,blueShift:0,scanlines:!1,scanlineIntensity:20,noise:0,brightness:100,masterSpeed:.5,videoSpeedMode:"normal",targetDurationSec:60,timeScaleMosh:.5,timeScaleDisp:.5,timeScaleBlocks:.5,timeScaleChroma:.5,holdMode:!1,injectIntervalSec:5,injectFrames:1,moshEnabled:!1,moshMode:"2d",moshInjection:.1,moshDiffusion:0,iframeInterval:30,iframeBloom:0,iframeSoftReset:0,flowX:0,flowY:0,flowRotate:0,flowZoom:0,blockList:0,blockSize:32,feedback:0,refSwap:0,historyCaptureInterval:1,motionResidue:0,temporalEcho:0,temporalEchoDecay:50,temporalEchoOffset:10,timeSmear:0,timeSmearFrames:5,timeSmearNonLinear:50,reverseBurst:0,reverseBurstDuration:10,stutterLock:0,stutterLockMin:2,stutterLockMax:10,temporalDisplace:0,temporalDisplaceRegions:8,temporalDisplaceOffset:15,partialReplace:0,partialReplacePattern:"random",partialReplaceOffset:10,audioEventEnable:!1,audioEventThreshold:70,audioEventAction:"freeze",audioEventDuration:10,chaosAmount:0,chaosEvolve:!1,mvAbuse:!1,mvBlockSize:32,mvSearchRadius:2,shaderMoshEnabled:!1,moshFeedback:85,moshDecay:2,moshWarp:10,moshBlockSize:30,moshRGBOffset:5,moshDispStrength:0,moshDispScale:10,moshDispSpeed:5,moshDispQuantize:0,audioEnabled:!1,audioSource:"mic",audioGain:50,audioGate:10,audioSmooth:30,audioFeature:"envelope",audioTargetRgb:50,audioTargetAmount:30,audioTargetWarp:60,audioTargetFeedback:0,audioTargetBlocks:0,audioTargetMelt:0,audioTargetShake:0,audioTargetNoise:0,audioInvert:!1,audioQuantize:0,corruptMode:"safe",strictEffectsEnabled:!1,phaseEnabled:!1,phaseOffset:0,phaseSpeed:0,phaseJitter:0,wrapMode:"hard",banding:"line",hOffset:0,hSpeed:0,hAmount:0,waveAmount:0,waveFrequency:0,waveSpeed:0,wavePhase:0,vSyncEnabled:!1,vSyncBandCount:8,vSyncBaseSpeed:0,vSyncBandVariance:0,vSyncJitter:0,vSyncWrapMode:"hard"},il=[{id:"default",name:"INITIALIZE",params:{...bt}},{id:"audio-reactive-glitch",name:"SONIC ENTROPY (AUDIO)",params:{...bt,audioEnabled:!0,audioSource:"mic",audioGain:80,amount:5,rgbShift:2,moshEnabled:!0,moshMode:"webgl",feedback:95,moshWarp:5,audioTargetWarp:100,audioTargetRgb:80,audioTargetAmount:40}},{id:"motion-sculpture",name:"MOTION SCULPTURE (GL)",params:{...bt,moshEnabled:!0,moshMode:"webgl",feedback:98,moshInjection:.05,moshWarp:40,flowX:2,flowRotate:1,noise:20,rgbShift:10}},{id:"deconstructed-paper",name:"PAPER SHREDDER",params:{...bt,scatter:60,shred:80,burn:20,amount:5,scanlines:!0,scanlineIntensity:10,timeScaleBlocks:.2}},{id:"burnt-film",name:"ACID BURN",params:{...bt,melt:50,burn:100,scatter:20,colorOffset:20,redShift:30,brightness:120,noise:40}},{id:"erosion-sculpture-30min",name:"EROSION SCULPTURE (30m)",params:{...bt,shaderMoshEnabled:!0,masterSpeed:.5,videoSpeedMode:"timeWarp",targetDurationSec:1800,holdMode:!0,injectIntervalSec:10,injectFrames:2,moshFeedback:99,moshDecay:.1,moshWarp:5,moshDispStrength:10,moshDispScale:10,moshDispSpeed:2,timeScaleDisp:.2,amount:0}},{id:"slow-drift",name:"SLOW DRIFT",params:{...bt,moshEnabled:!0,moshMode:"webgl",masterSpeed:.8,feedback:95,moshInjection:.02,moshWarp:20,flowX:1,flowY:.5,rgbShift:5,timeScaleMosh:.5,amount:0}},{id:"hard-meltdown",name:"HARD MELTDOWN",params:{...bt,shaderMoshEnabled:!0,masterSpeed:2,moshFeedback:80,moshDecay:5,moshWarp:60,moshDispStrength:50,moshDispScale:15,moshDispSpeed:30,timeScaleDisp:3,amount:10,melt:30}},{id:"vhs-tape-loop",name:"VHS TAPE LOOP",params:{...bt,moshEnabled:!1,amount:25,quality:40,noise:60,scanlines:!0,scanlineIntensity:65,shake:70,melt:20,rgbShift:15,colorOffset:10,brightness:115}},{id:"liquid-noise",name:"LIQUID NOISE",params:{...bt,moshEnabled:!0,moshMode:"webgl",feedback:98,moshWarp:0,moshDiffusion:2,moshInjection:.1,amount:0,rgbShift:5,shaderMoshEnabled:!0,moshDispStrength:40,moshDispScale:15,moshDispSpeed:10}},{id:"datamosh-burst",name:"DATAMOSH BURST",params:{...bt,moshEnabled:!0,iframeInterval:45,iframeBloom:60,flowZoom:-20,flowRotate:4,blockList:60,blockSize:32,feedback:20,amount:10}},{id:"temporal-echo",name:"TEMPORAL ECHO",params:{...bt,moshEnabled:!0,moshMode:"2d",iframeInterval:0,feedback:96,refSwap:85,flowX:2,flowY:0,rgbShift:5,brightness:110}},{id:"digital-sludge",name:"DIGITAL SLUDGE",params:{...bt,shaderMoshEnabled:!0,moshFeedback:90,moshDecay:1,moshDispStrength:80,moshDispScale:80,moshDispSpeed:2,moshDispQuantize:80,moshRGBOffset:30,pixelation:5}},{id:"fleisch-airsatz",name:"FLEISCH AIRSATZ",params:{...bt,amount:12,quality:35,noise:45,rgbShift:4,colorOffset:3,pixelation:3,iterations:2,brightness:110,scanlines:!0,scanlineIntensity:10}},{id:"bates-motel-tv",name:"BATES MOTEL TV",params:{...bt,phaseEnabled:!0,phaseSpeed:.12,phaseOffset:5,phaseJitter:.2,wrapMode:"soft",banding:"line",vSyncEnabled:!0,vSyncBandCount:8,vSyncBaseSpeed:.05,vSyncBandVariance:.08,vSyncJitter:.15,vSyncWrapMode:"soft",hAmount:3,hSpeed:.05,hOffset:0,waveAmount:4,waveFrequency:.01,waveSpeed:.05,wavePhase:0,scanlines:!0,scanlineIntensity:12,noise:2,amount:0,pixelSort:0,channelSep:0}}],rl=({onFileSelect:n,onPresetSelect:e,activePresetId:t,exportFormat:i,setExportFormat:r,exportQuality:s,setExportQuality:o,onExport:a,isVideo:c,isAnimationActive:u,currentParams:d,onImportPreset:l,onSharePreset:p,isRecording:m,recordFormat:g,setRecordFormat:_,recordFps:h,setRecordFps:f,isSeqActive:b,seqFps:x,setSeqFps:R,seqFrames:L,setSeqFrames:w,onStartPngSeq:A,onStopPngSeq:H,lockRes:M,setLockRes:T,lockWidth:U,lockHeight:q,setLockWidth:K,setLockHeight:P})=>{const N=me.useRef(null),G=me.useRef(null),[j,O]=me.useState("image"),[X,$]=me.useState(0);me.useEffect(()=>{O(c||u?"video":"image")},[c,u]);const ee=Y=>{if(Y.preventDefault(),Y.stopPropagation(),Y.dataTransfer.files&&Y.dataTransfer.files[0]){const le=Y.dataTransfer.files[0];console.log("[Import] drop:",le.name,le.type);try{window.dispatchEvent(new CustomEvent("eh-diag",{detail:{type:"file-drop",file:le}}))}catch{}n(le)}},he=Y=>{Y.preventDefault(),Y.stopPropagation()},B=()=>{const Y=prompt("Enter Preset Name:","Custom Glitch");if(!Y)return;const le={id:crypto.randomUUID(),name:Y,params:d},ge=JSON.stringify(le,null,2),Ae=new Blob([ge],{type:"application/json"}),De=URL.createObjectURL(Ae),_e=document.createElement("a");_e.href=De,_e.download=`${Y.replace(/\s+/g,"_").toLowerCase()}.json`,document.body.appendChild(_e),_e.click(),document.body.removeChild(_e),URL.revokeObjectURL(De)},Z=Y=>{var Ae;const le=(Ae=Y.target.files)==null?void 0:Ae[0];if(!le)return;const ge=new FileReader;ge.onload=De=>{var _e;try{const Ue=(_e=De.target)==null?void 0:_e.result,I=JSON.parse(Ue);I&&typeof I.params=="object"&&"amount"in I.params?l(I.params,I.name):alert("Invalid preset file format.")}catch(Ue){console.error("Failed to parse preset",Ue),alert("Error loading preset.")}G.current&&(G.current.value="")},ge.readAsText(le)};return v.jsxs("div",{className:"h-full flex flex-col gap-2",children:[v.jsx(hr,{title:"INPUT SOURCE",className:"h-auto min-h-[140px] flex-shrink-0",children:v.jsxs("div",{className:"absolute inset-2 border-2 border-dashed border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-900/30 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer group",onDrop:ee,onDragOver:he,onClick:()=>{var Y;return(Y=N.current)==null?void 0:Y.click()},children:[v.jsx("div",{className:`p-3 rounded-full transition-all ${c?"bg-cyan-900/50 text-cyan-400":"bg-zinc-900 text-zinc-500 group-hover:text-cyan-400 group-hover:scale-110"}`,children:c?v.jsx(at.Video,{}):v.jsx(at.Upload,{})}),v.jsxs("div",{className:"text-center",children:[v.jsx("p",{className:"text-xs font-bold text-zinc-400 group-hover:text-white",children:c?"VIDEO LOADED":"DROP FILE"}),v.jsx("p",{className:"text-[10px] text-zinc-600 mt-1",children:"PNG, JPG, GIF, MP4, MOV"})]}),v.jsx("input",{type:"file",ref:N,className:"hidden",accept:"image/*,video/mp4,video/quicktime,video/webm",onChange:Y=>{var ge;const le=(ge=Y.target.files)==null?void 0:ge[0];if(console.log("[Import] input onChange:",le==null?void 0:le.name,le==null?void 0:le.type),le)try{window.dispatchEvent(new CustomEvent("eh-diag",{detail:{type:"file-change",file:le}}))}catch{}le&&n(le)}})]})}),v.jsx(hr,{title:"PRESETS",className:"flex-1 min-h-0",action:v.jsxs("div",{className:"flex gap-1",children:[v.jsx("input",{type:"file",ref:G,className:"hidden",accept:"application/json",onChange:Z}),v.jsx("button",{className:"p-1 hover:text-cyan-400 text-zinc-500 transition-colors",title:"Import JSON Preset",onClick:()=>{var Y;return(Y=G.current)==null?void 0:Y.click()},children:v.jsx(at.Folder,{})}),v.jsx("button",{className:"p-1 hover:text-cyan-400 text-zinc-500 transition-colors",title:"Share Preset Link",onClick:p,children:v.jsx(at.Link,{})}),v.jsx("button",{className:"p-1 hover:text-cyan-400 text-zinc-500 transition-colors",title:"Save Preset as JSON",onClick:B,children:v.jsx(at.Save,{})})]}),children:v.jsx("div",{className:"absolute inset-0 overflow-y-auto p-2 space-y-2 custom-scrollbar",children:il.map(Y=>v.jsxs("button",{onClick:()=>e(Y),className:`w-full text-left p-3 border transition-all duration-200 relative overflow-hidden group ${t===Y.id?"border-cyan-500 bg-cyan-950/30":"border-zinc-800 bg-zinc-900/20 hover:border-zinc-600"}`,children:[v.jsxs("div",{className:"flex justify-between items-center relative z-10",children:[v.jsx("span",{className:`text-xs font-bold tracking-wider font-display ${t===Y.id?"text-cyan-400":"text-zinc-400 group-hover:text-zinc-200"}`,children:Y.name}),t===Y.id&&v.jsx("div",{className:"w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_5px_#22d3ee]"})]}),t===Y.id&&v.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none"})]},Y.id))})}),v.jsx(hr,{title:"OUTPUT",className:"flex-shrink-0 h-auto",children:v.jsxs("div",{className:"p-3 flex flex-col gap-3",children:[v.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[v.jsxs("label",{className:"flex items-center gap-2",children:[v.jsx("input",{type:"checkbox",checked:M,onChange:Y=>T(Y.target.checked)}),v.jsx("span",{className:"text-zinc-400",children:"LOCK RESOLUTION"})]}),v.jsx("input",{type:"number",className:"w-16 bg-zinc-900 border border-zinc-800 px-1 text-xs text-zinc-200",value:U,onChange:Y=>K(Number(Y.target.value)),placeholder:"W"}),v.jsx("span",{className:"text-zinc-600",children:"×"}),v.jsx("input",{type:"number",className:"w-16 bg-zinc-900 border border-zinc-800 px-1 text-xs text-zinc-200",value:q,onChange:Y=>P(Number(Y.target.value)),placeholder:"H"})]}),v.jsxs("div",{className:"flex bg-zinc-900 p-1 border border-zinc-800 select-none",children:[v.jsx("button",{className:`flex-1 text-[10px] font-bold py-1 px-2 transition-colors ${j==="image"?"bg-zinc-700 text-white":"text-zinc-500 hover:text-zinc-300"}`,onClick:()=>O("image"),children:"IMAGE"}),v.jsx("button",{className:`flex-1 text-[10px] font-bold py-1 px-2 transition-colors ${j==="video"?"bg-cyan-900 text-cyan-100":"text-zinc-500 hover:text-zinc-300"}`,onClick:()=>O("video"),children:"RECORD"})]}),j==="image"&&v.jsxs("div",{className:"flex flex-col gap-3 animate-in fade-in duration-200",children:[v.jsxs("div",{className:"flex gap-2",children:[v.jsx(yt,{variant:i==="png"?"primary":"secondary",size:"sm",className:"flex-1",onClick:()=>r("png"),children:"PNG"}),v.jsx(yt,{variant:i==="jpeg"?"primary":"secondary",size:"sm",className:"flex-1",onClick:()=>r("jpeg"),children:"JPG"})]}),i==="jpeg"&&v.jsx("div",{className:"animate-in fade-in duration-200",children:v.jsx(Ge,{label:"QUALITY",value:s,min:10,max:100,onChange:Y=>o(Number(Y.target.value))})}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx(yt,{variant:"primary",onClick:()=>a(!1),icon:v.jsx(at.Camera,{}),children:"SNAPSHOT"}),v.jsx(yt,{variant:b?"danger":"secondary",onClick:()=>b?H():A(x,L),icon:b?v.jsx(at.Stop,{}):v.jsx(at.Record,{}),children:b?"STOP SEQUENCE":"PNG SEQUENCE"})]}),v.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[10px] text-zinc-400",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block mb-1",children:"SEQ FPS"}),v.jsx("input",{type:"number",className:"w-full bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:x,onChange:Y=>R(Number(Y.target.value))})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block mb-1",children:"FRAMES"}),v.jsx("input",{type:"number",className:"w-full bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:L,onChange:Y=>w(Number(Y.target.value))})]})]})]}),j==="video"&&v.jsxs("div",{className:"flex flex-col gap-3 animate-in fade-in duration-200",children:[v.jsxs("div",{className:"grid grid-cols-3 gap-2 items-center text-[11px]",children:[v.jsx("span",{className:"text-zinc-400",children:"FORMAT"}),v.jsxs("select",{className:"col-span-2 bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:g,onChange:Y=>_(Y.target.value),children:[v.jsx("option",{value:"auto",children:"AUTO (MP4/WEBM)"}),v.jsx("option",{value:"mp4",children:"MP4 (H264)"}),v.jsx("option",{value:"webm",children:"WEBM (VP8/9)"})]})]}),v.jsxs("div",{className:"grid grid-cols-3 gap-2 items-center text-[11px]",children:[v.jsx("span",{className:"text-zinc-400",children:"FPS"}),v.jsx("input",{type:"number",className:"col-span-2 bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:h,onChange:Y=>f(Number(Y.target.value))})]}),v.jsxs("div",{className:"text-[10px] text-zinc-500 font-mono border border-zinc-800 bg-zinc-900/50 p-2",children:["DURATION (SEC, 0=MANUAL)",v.jsx("input",{type:"number",className:"w-full mt-1 bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200",value:X,onChange:Y=>$(Number(Y.target.value))})]}),v.jsx(yt,{variant:m?"danger":"primary",className:m?"animate-pulse":"",onClick:()=>a(!0,X),icon:m?v.jsx(at.Stop,{}):v.jsx(at.Record,{}),children:m?"STOP":"RECORD"})]})]})})]})},sl=({params:n,onChange:e,onRandomize:t,onReset:i,onImportMusic:r,onStopAudio:s,onToggleAudioPause:o,audioPauseLabel:a,audioPauseDisabled:c})=>{const u=me.useRef(null),d=(l,p)=>{e({...n,[l]:p})};return v.jsx(hr,{title:"CONTROLS",className:"h-full flex flex-col",children:v.jsxs("div",{className:"h-full flex flex-col",children:[v.jsxs("div",{className:"p-2 border-b border-zinc-800 flex gap-2",children:[v.jsx(yt,{variant:"secondary",size:"sm",className:"flex-1",onClick:t,icon:v.jsx(at.Refresh,{}),children:"RND"}),v.jsx(yt,{variant:"secondary",size:"sm",className:"flex-1",onClick:i,icon:v.jsx(at.Undo,{}),children:"RESET"})]}),v.jsxs("div",{className:"overflow-y-auto flex-1 custom-scrollbar",children:[v.jsxs(mn,{title:"TIME & EROSION",defaultOpen:!0,children:[v.jsxs("div",{className:"mb-4",children:[v.jsx(Ge,{label:"MASTER SPEED (GLOBAL)",value:n.masterSpeed,min:0,max:5,step:.1,onChange:l=>d("masterSpeed",Number(l.target.value))}),v.jsxs("div",{className:"flex gap-2 my-2",children:[v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.videoSpeedMode==="normal"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("videoSpeedMode","normal"),children:"NORMAL PLAY"}),v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.videoSpeedMode==="timeWarp"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("videoSpeedMode","timeWarp"),children:"TIME WARP"})]}),n.videoSpeedMode==="timeWarp"&&v.jsx("div",{className:"animate-in fade-in",children:v.jsx(Ge,{label:"TARGET DURATION (SEC)",value:n.targetDurationSec,min:10,max:3600,onChange:l=>d("targetDurationSec",Number(l.target.value))})})]}),v.jsxs("div",{className:"p-2 bg-zinc-900/40 border border-zinc-800 mb-4",children:[v.jsx("div",{className:"text-[10px] text-zinc-400 font-bold mb-2 uppercase",children:"Input Hold & Injection"}),v.jsx(qn,{label:"HOLD MODE (FREEZE INPUT)",checked:n.holdMode,onChange:l=>d("holdMode",l)}),v.jsxs("div",{className:n.holdMode?"opacity-100":"opacity-50 pointer-events-none",children:[v.jsx(Ge,{label:"INJECT INTERVAL (SEC)",value:n.injectIntervalSec,min:.5,max:60,step:.5,onChange:l=>d("injectIntervalSec",Number(l.target.value))}),v.jsx(Ge,{label:"INJECT FRAMES",value:n.injectFrames,min:1,max:5,step:1,onChange:l=>d("injectFrames",Number(l.target.value))})]})]})]}),v.jsx(mn,{title:"AUDIO MODULATION",defaultOpen:!0,children:v.jsxs("div",{className:"p-2 bg-black/40 mb-4 border border-zinc-800",children:[v.jsxs("div",{className:"text-[10px] text-zinc-400 font-bold mb-2 uppercase flex items-center gap-2",children:[v.jsx(at.Zap,{})," SIGNAL ENGINE"]}),v.jsx(qn,{label:"ENABLE MODULATION",checked:n.audioEnabled,onChange:l=>d("audioEnabled",l)}),v.jsx("div",{className:"mt-2",children:v.jsxs("div",{className:"flex gap-2",children:[v.jsx(yt,{size:"sm",variant:"secondary",className:"flex-1 text-[10px]",onClick:o,icon:a.toUpperCase().includes("PAUSE")?v.jsx(at.Pause,{}):v.jsx(at.Play,{}),disabled:c,children:a}),v.jsx(yt,{size:"sm",variant:"secondary",className:"flex-1 text-[10px]",onClick:s,icon:v.jsx(at.Stop,{}),children:"STOP AUDIO"})]})}),n.audioEnabled&&v.jsxs("div",{className:"mt-3 space-y-3 animate-in fade-in slide-in-from-top-1",children:[v.jsxs("div",{className:"flex flex-col gap-1",children:[v.jsx("label",{className:"text-[10px] text-zinc-500 font-bold uppercase",children:"Signal Source"}),v.jsx("div",{className:"flex gap-1",children:["mic","video","music"].map(l=>v.jsx("button",{className:`flex-1 text-[9px] border py-1 font-bold uppercase transition-all ${n.audioSource===l?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-800 text-zinc-500 hover:text-zinc-300"}`,onClick:()=>d("audioSource",l),children:l},l))})]}),n.audioSource==="music"&&v.jsxs("div",{className:"border border-dashed border-zinc-700 p-2 text-center",children:[v.jsx("input",{type:"file",ref:u,className:"hidden",accept:"audio/*",onChange:l=>l.target.files&&r(l.target.files[0])}),v.jsx(yt,{size:"sm",variant:"secondary",className:"w-full text-[10px]",onClick:()=>{var l;return(l=u.current)==null?void 0:l.click()},icon:v.jsx(at.Folder,{}),children:n.musicUrl?"SWAP MUSIC":"SELECT MUSIC FILE"}),n.musicUrl&&v.jsx("div",{className:"text-[9px] text-cyan-600 mt-1 truncate",children:"TRACK LOADED"})]}),v.jsxs("div",{className:"flex flex-col gap-1",children:[v.jsx("label",{className:"text-[10px] text-zinc-500 font-bold uppercase",children:"Feature Signal"}),v.jsxs("select",{value:n.audioFeature,onChange:l=>d("audioFeature",l.target.value),className:"w-full text-[10px] bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1 font-mono",children:[v.jsx("option",{value:"amplitude",children:"AMPLITUDE (raw)"}),v.jsx("option",{value:"envelope",children:"ENVELOPE (smoothed)"}),v.jsx("option",{value:"low",children:"LOW (20-250 Hz bass)"}),v.jsx("option",{value:"mid",children:"MID (250-4k Hz vocal)"}),v.jsx("option",{value:"high",children:"HIGH (4k-20k Hz treble)"}),v.jsx("option",{value:"transient",children:"TRANSIENT (percussive hits)"}),v.jsx("option",{value:"beat",children:"BEAT (rhythmic pulse)"})]})]}),v.jsx(Ge,{label:"INPUT GAIN",value:n.audioGain,min:0,max:200,onChange:l=>d("audioGain",Number(l.target.value))}),v.jsx(Ge,{label:"GATE THRESHOLD",value:n.audioGate,min:0,max:100,onChange:l=>d("audioGate",Number(l.target.value))}),v.jsx(Ge,{label:"SMOOTHING",value:n.audioSmooth,min:0,max:100,onChange:l=>d("audioSmooth",Number(l.target.value))}),v.jsx("div",{className:"flex gap-2 items-center",children:v.jsx(qn,{label:"INVERT SIGNAL",checked:!!n.audioInvert,onChange:l=>d("audioInvert",l)})}),v.jsx(Ge,{label:"QUANTIZE (STEPS)",value:n.audioQuantize||0,min:0,max:16,step:1,onChange:l=>d("audioQuantize",Number(l.target.value))}),v.jsxs("div",{className:"pt-2 border-t border-zinc-800/50",children:[v.jsx("div",{className:"text-[10px] text-cyan-600 font-bold mb-2 uppercase",children:"Modulation Targets"}),v.jsx(Ge,{label:"RGB SHIFT TARGET",value:n.audioTargetRgb,min:0,max:100,onChange:l=>d("audioTargetRgb",Number(l.target.value))}),v.jsx(Ge,{label:"GLITCH AMOUNT TARGET",value:n.audioTargetAmount,min:0,max:100,onChange:l=>d("audioTargetAmount",Number(l.target.value))}),v.jsx(Ge,{label:"MOSH WARP TARGET",value:n.audioTargetWarp,min:0,max:200,onChange:l=>d("audioTargetWarp",Number(l.target.value))}),v.jsx(Ge,{label:"FEEDBACK TARGET",value:n.audioTargetFeedback||0,min:0,max:100,onChange:l=>d("audioTargetFeedback",Number(l.target.value))}),v.jsx(Ge,{label:"BLOCKS TARGET",value:n.audioTargetBlocks||0,min:0,max:100,onChange:l=>d("audioTargetBlocks",Number(l.target.value))}),v.jsx(Ge,{label:"MELT TARGET",value:n.audioTargetMelt||0,min:0,max:100,onChange:l=>d("audioTargetMelt",Number(l.target.value))}),v.jsx(Ge,{label:"SHAKE TARGET",value:n.audioTargetShake||0,min:0,max:100,onChange:l=>d("audioTargetShake",Number(l.target.value))}),v.jsx(Ge,{label:"NOISE TARGET",value:n.audioTargetNoise||0,min:0,max:100,onChange:l=>d("audioTargetNoise",Number(l.target.value))})]})]})]})}),v.jsxs(mn,{title:"Advanced Datamosh",defaultOpen:!1,children:[v.jsx("div",{className:"mb-4 p-2 bg-zinc-900/50 border border-zinc-800",children:v.jsx(qn,{label:"ENABLE MOSH ENGINE",checked:n.moshEnabled,onChange:l=>d("moshEnabled",l)})}),v.jsxs("div",{className:n.moshEnabled?"opacity-100 transition-opacity":"opacity-50 pointer-events-none transition-opacity",children:[v.jsxs("div",{className:"flex gap-2 mb-4",children:[v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.moshMode==="2d"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("moshMode","2d"),children:"CANVAS 2D"}),v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.moshMode==="webgl"?"bg-purple-900 border-purple-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("moshMode","webgl"),children:"WEBGL2 SCULPT"})]}),v.jsxs("div",{className:"p-2 bg-zinc-900/40 border border-zinc-800 mb-3",children:[v.jsx(qn,{label:"MOTION VECTOR ABUSE (BLOCK MATCH)",checked:!!n.mvAbuse,onChange:l=>d("mvAbuse",l)}),v.jsxs("div",{className:n.mvAbuse?"":"opacity-50 pointer-events-none",children:[v.jsx(Ge,{label:"MV BLOCK SIZE",value:n.mvBlockSize||32,min:8,max:128,step:8,onChange:l=>d("mvBlockSize",Number(l.target.value))}),v.jsx(Ge,{label:"MV SEARCH RADIUS (BLOCKS)",value:n.mvSearchRadius||2,min:0,max:8,step:1,onChange:l=>d("mvSearchRadius",Number(l.target.value))})]})]}),v.jsx(Ge,{label:"ACCUMULATION (FEEDBACK)",value:n.feedback,min:0,max:100,onChange:l=>d("feedback",Number(l.target.value))})]})]}),v.jsxs(mn,{title:"Standard Glitch",children:[v.jsx(Ge,{label:"AMOUNT",value:n.amount,min:0,max:100,onChange:l=>d("amount",Number(l.target.value))}),v.jsx(Ge,{label:"QUALITY",value:n.quality,min:1,max:100,onChange:l=>d("quality",Number(l.target.value))})]}),v.jsxs(mn,{title:"Analog Sync Distortion",defaultOpen:!1,children:[v.jsx("div",{className:"mb-3 p-2 bg-zinc-900/40 border border-zinc-800",children:v.jsxs("label",{className:"flex items-center justify-between mb-2 cursor-pointer group",children:[v.jsx("span",{className:"text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors",children:"ENABLE ANALOG SYNC DISTORTION"}),v.jsxs("span",{className:`relative w-8 h-4 border transition-colors ${n.phaseEnabled?"border-cyan-500 bg-cyan-900/30":"border-zinc-700 bg-zinc-900"}`,children:[v.jsx("input",{type:"checkbox","aria-label":"Enable Analog Sync Distortion",className:"absolute inset-0 opacity-0 cursor-pointer",checked:!!n.phaseEnabled,onChange:l=>{const p=l.target.checked;e({...n,phaseEnabled:p,vSyncEnabled:p?n.vSyncEnabled:!1})}}),v.jsx("span",{className:`absolute top-0.5 bottom-0.5 w-2.5 transition-all ${n.phaseEnabled?"right-0.5 bg-cyan-400":"left-0.5 bg-zinc-600"}`})]})]})}),v.jsxs("div",{className:n.phaseEnabled?"opacity-100 transition-opacity":"opacity-50 pointer-events-none transition-opacity",children:[v.jsx("div",{className:"text-[10px] text-zinc-400 font-bold uppercase mb-2",children:"Phase Slip"}),v.jsx(Ge,{label:"PHASE SPEED",value:n.phaseSpeed??0,min:0,max:10,step:.1,onChange:l=>d("phaseSpeed",Number(l.target.value))}),v.jsx(Ge,{label:"PHASE OFFSET",value:n.phaseOffset??0,min:0,max:200,step:1,onChange:l=>d("phaseOffset",Number(l.target.value))}),v.jsx(Ge,{label:"PHASE JITTER",value:n.phaseJitter??0,min:0,max:20,step:.5,onChange:l=>d("phaseJitter",Number(l.target.value))}),v.jsxs("div",{className:"flex gap-2 mb-3",children:[v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.wrapMode==="hard"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("wrapMode","hard"),children:"HARD WRAP"}),v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.wrapMode==="soft"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("wrapMode","soft"),children:"SOFT WRAP"})]}),v.jsxs("div",{className:"flex gap-2 mb-3",children:[v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.banding==="line"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("banding","line"),children:"LINE BANDING"}),v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.banding==="block"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("banding","block"),children:"BLOCK BANDING"})]}),v.jsxs("div",{className:"mt-4 pt-3 border-t border-zinc-800/50",children:[v.jsx("div",{className:"text-[10px] text-zinc-400 font-bold uppercase mb-2",children:"Horizontal Drift"}),v.jsx(Ge,{label:"H OFFSET",value:n.hOffset??0,min:-50,max:50,step:.5,onChange:l=>d("hOffset",Number(l.target.value))}),v.jsx(Ge,{label:"H SPEED",value:n.hSpeed??0,min:0,max:1,step:.01,onChange:l=>d("hSpeed",Number(l.target.value))}),v.jsx(Ge,{label:"H AMOUNT",value:n.hAmount??0,min:0,max:30,step:.5,onChange:l=>d("hAmount",Number(l.target.value))})]}),v.jsxs("div",{className:"mt-4 pt-3 border-t border-zinc-800/50",children:[v.jsx("div",{className:"text-[10px] text-zinc-400 font-bold uppercase mb-2",children:"Wave Distortion"}),v.jsx(Ge,{label:"WAVE AMOUNT",value:n.waveAmount??0,min:0,max:30,step:.5,onChange:l=>d("waveAmount",Number(l.target.value))}),v.jsx(Ge,{label:"WAVE FREQUENCY",value:n.waveFrequency??0,min:0,max:.1,step:.001,onChange:l=>d("waveFrequency",Number(l.target.value))}),v.jsx(Ge,{label:"WAVE SPEED",value:n.waveSpeed??0,min:0,max:1,step:.01,onChange:l=>d("waveSpeed",Number(l.target.value))}),v.jsx(Ge,{label:"WAVE PHASE",value:n.wavePhase??0,min:0,max:6.28,step:.01,onChange:l=>d("wavePhase",Number(l.target.value))})]}),v.jsxs("div",{className:"mt-4 pt-3 border-t border-zinc-800/50",children:[v.jsx("div",{className:"text-[10px] text-zinc-400 font-bold uppercase mb-2",children:"Sync Collapse"}),v.jsxs("label",{className:"flex items-center justify-between mb-2 cursor-pointer group",children:[v.jsx("span",{className:"text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors",children:"ENABLE SYNC COLLAPSE"}),v.jsxs("span",{className:`relative w-8 h-4 border transition-colors ${n.vSyncEnabled?"border-cyan-500 bg-cyan-900/30":"border-zinc-700 bg-zinc-900"}`,children:[v.jsx("input",{type:"checkbox","aria-label":"Enable Sync Collapse",className:"absolute inset-0 opacity-0 cursor-pointer",checked:!!n.vSyncEnabled,onChange:l=>d("vSyncEnabled",l.target.checked)}),v.jsx("span",{className:`absolute top-0.5 bottom-0.5 w-2.5 transition-all ${n.vSyncEnabled?"right-0.5 bg-cyan-400":"left-0.5 bg-zinc-600"}`})]})]}),v.jsxs("div",{className:n.vSyncEnabled?"opacity-100 transition-opacity":"opacity-50 pointer-events-none transition-opacity",children:[v.jsx(Ge,{label:"BAND COUNT",value:n.vSyncBandCount??8,min:1,max:32,step:1,onChange:l=>d("vSyncBandCount",Number(l.target.value))}),v.jsx(Ge,{label:"BASE SPEED",value:n.vSyncBaseSpeed??0,min:0,max:10,step:.1,onChange:l=>d("vSyncBaseSpeed",Number(l.target.value))}),v.jsx(Ge,{label:"BAND VARIANCE",value:n.vSyncBandVariance??0,min:0,max:10,step:.1,onChange:l=>d("vSyncBandVariance",Number(l.target.value))}),v.jsx(Ge,{label:"JITTER",value:n.vSyncJitter??0,min:0,max:10,step:.1,onChange:l=>d("vSyncJitter",Number(l.target.value))}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.vSyncWrapMode==="hard"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("vSyncWrapMode","hard"),children:"HARD WRAP"}),v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.vSyncWrapMode==="soft"?"bg-cyan-900 border-cyan-500 text-white":"border-zinc-700 text-zinc-500"}`,onClick:()=>d("vSyncWrapMode","soft"),children:"SOFT WRAP"})]})]})]})]})]}),v.jsxs(mn,{title:"Professional Glitch",defaultOpen:!1,children:[v.jsxs("div",{className:"p-2 bg-zinc-900/40 border border-zinc-800 mb-3",children:[v.jsx("div",{className:"text-[10px] text-purple-400 font-bold mb-2 uppercase",children:"Pixel Sorting"}),v.jsx(Ge,{label:"INTENSITY",value:n.pixelSort||0,min:0,max:100,onChange:l=>d("pixelSort",Number(l.target.value))}),v.jsxs("div",{className:"flex gap-2 mt-2",children:[v.jsx("button",{className:`flex-1 text-[9px] border py-1 font-bold ${n.pixelSortMode==="brightness"?"bg-purple-900 border-purple-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>d("pixelSortMode","brightness"),children:"BRIGHT"}),v.jsx("button",{className:`flex-1 text-[9px] border py-1 font-bold ${n.pixelSortMode==="hue"?"bg-purple-900 border-purple-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>d("pixelSortMode","hue"),children:"HUE"}),v.jsx("button",{className:`flex-1 text-[9px] border py-1 font-bold ${n.pixelSortMode==="random"?"bg-purple-900 border-purple-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>d("pixelSortMode","random"),children:"RANDOM"})]})]}),v.jsxs("div",{className:"p-2 bg-zinc-900/40 border border-zinc-800",children:[v.jsx("div",{className:"text-[10px] text-purple-400 font-bold mb-2 uppercase",children:"Channel Separation"}),v.jsx(Ge,{label:"INTENSITY",value:n.channelSep||0,min:0,max:100,onChange:l=>d("channelSep",Number(l.target.value))}),v.jsx(Ge,{label:"OFFSET X",value:n.channelSepX||10,min:-50,max:50,onChange:l=>d("channelSepX",Number(l.target.value))}),v.jsx(Ge,{label:"OFFSET Y",value:n.channelSepY||0,min:-50,max:50,onChange:l=>d("channelSepY",Number(l.target.value))})]})]}),v.jsxs(mn,{title:"Compression",children:[v.jsx("div",{className:"text-[10px] text-zinc-400 font-bold mb-2 uppercase",children:"Byte Corruption Mode"}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.corruptMode==="safe"?"bg-emerald-900 border-emerald-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>d("corruptMode","safe"),children:"SAFE"}),v.jsx("button",{className:`flex-1 text-[10px] border py-1 font-bold ${n.corruptMode==="unsafe"?"bg-red-900 border-red-600 text-white":"border-zinc-700 text-zinc-400"}`,onClick:()=>d("corruptMode","unsafe"),children:"UNSAFE"})]})]}),v.jsxs(mn,{title:"Display",children:[v.jsx(qn,{label:"CRT SCANLINES",checked:n.scanlines,onChange:l=>d("scanlines",l)}),v.jsx(Ge,{label:"NOISE",value:n.noise,min:0,max:100,onChange:l=>d("noise",Number(l.target.value))}),v.jsxs("div",{className:"mt-2 p-2 bg-zinc-900/40 border border-zinc-800",children:[v.jsx("div",{className:"text-[10px] text-zinc-400 font-bold uppercase mb-2",children:"Debug"}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx(yt,{size:"sm",variant:"secondary",onClick:()=>{window.__ERRORHEAD_DEBUG__=!window.__ERRORHEAD_DEBUG__},children:"TOGGLE OVERLAY"}),v.jsx(yt,{size:"sm",variant:"secondary",onClick:()=>{window.__ERRORHEAD_FIXED_DT=window.__ERRORHEAD_FIXED_DT?void 0:1/30},children:"FIXED 30 FPS"})]})]})]})]})]})})},al=({animation:n,onPlayPause:e,onSeek:t,onAddKeyframe:i,onDeleteKeyframe:r,onDurationChange:s,isActive:o,onToggleActive:a,fps:c})=>{const u=l=>l.toFixed(2),d=l=>l>=50?"text-green-500":l>=24?"text-yellow-500":"text-red-500";return o?v.jsxs("div",{className:"flex flex-col bg-zinc-900/50 border-t border-cyan-500/20",children:[v.jsxs("div",{className:"flex items-center justify-between px-2 py-1 border-b border-zinc-800 h-10",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(yt,{variant:n.isPlaying?"secondary":"primary",size:"sm",onClick:e,icon:n.isPlaying?v.jsx(at.Pause,{}):v.jsx(at.Play,{}),children:n.isPlaying?"PAUSE":"PLAY"}),v.jsxs("div",{className:"flex items-center gap-1 bg-zinc-900 px-2 py-1 border border-zinc-700",children:[v.jsxs("span",{className:"text-cyan-400 font-mono text-sm",children:[u(n.currentTime),"s"]}),v.jsxs("span",{className:"text-zinc-500 text-xs",children:["/ ",n.duration,"s"]})]}),v.jsx(yt,{variant:"ghost",size:"sm",onClick:i,icon:v.jsx(at.Keyframe,{}),children:"ADD KEYFRAME"})]}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsxs("div",{className:"flex items-center gap-1.5 border-r border-zinc-700 pr-4 mr-1",children:[v.jsx("span",{className:"text-[10px] text-zinc-600",children:"FPS"}),v.jsx("span",{className:`text-xs font-mono ${d(c)}`,children:c})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-[10px] text-zinc-500",children:"DURATION"}),v.jsx("input",{type:"number",value:n.duration,onChange:l=>s(Number(l.target.value)),className:"w-12 bg-black border border-zinc-700 text-xs px-1 py-0.5 text-center text-zinc-300"})]}),v.jsx(yt,{variant:"ghost",size:"sm",onClick:a,children:"EXIT ANIMATION"})]})]}),v.jsxs("div",{className:"h-16 relative bg-black/40 group overflow-hidden cursor-crosshair",onClick:l=>{const p=l.currentTarget.getBoundingClientRect(),g=(l.clientX-p.left)/p.width*n.duration;t(Math.max(0,Math.min(n.duration,g)))},children:[v.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{backgroundImage:"linear-gradient(90deg, #333 1px, transparent 1px)",backgroundSize:`${100/n.duration}% 100%`}}),n.keyframes.map(l=>v.jsx("div",{className:"absolute top-2 w-3 h-3 bg-cyan-500 rotate-45 border border-white hover:scale-125 transition-transform cursor-pointer z-10",style:{left:`calc(${l.time/n.duration*100}% - 6px)`},onClick:p=>{p.stopPropagation(),t(l.time)},onContextMenu:p=>{p.preventDefault(),r(l.id)},title:`Keyframe at ${l.time.toFixed(2)}s`},l.id)),v.jsx("div",{className:"absolute top-0 bottom-0 w-px bg-red-500 z-20 pointer-events-none",style:{left:`${n.currentTime/n.duration*100}%`},children:v.jsx("div",{className:"absolute top-0 -left-1.5 w-3 h-3 bg-red-500 rotate-45 transform -translate-y-1/2"})})]})]}):v.jsxs("div",{className:"flex items-center justify-between px-4 h-8 text-xs font-mono text-zinc-500 bg-zinc-950 border-t border-zinc-900",children:[v.jsx("div",{className:"flex gap-4 items-center",children:v.jsx(yt,{variant:"ghost",size:"sm",onClick:a,icon:v.jsx(at.Clock,{}),children:"ENABLE ANIMATION"})}),v.jsxs("div",{className:"flex items-center gap-6",children:[v.jsxs("div",{className:"flex items-center gap-2",title:"Real-time Frame Rate",children:[v.jsx("span",{className:"text-zinc-600",children:"FPS"}),v.jsx("span",{className:`font-bold ${d(c)}`,children:c})]}),v.jsxs("div",{className:"text-zinc-600",children:["MODE: ",v.jsx("span",{className:"text-zinc-400",children:"STATIC"})]})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rs="160",ol=0,Is=1,ll=2,fo=1,cl=2,an=3,Rn=0,Dt=1,ln=2,Tn=0,pi=1,Fs=2,Os=3,Bs=4,ul=5,On=100,dl=101,hl=102,zs=103,ks=104,fl=200,pl=201,ml=202,gl=203,fs=204,ps=205,_l=206,vl=207,xl=208,Sl=209,Ml=210,El=211,bl=212,yl=213,Tl=214,Al=0,Rl=1,wl=2,mr=3,Cl=4,Ll=5,Pl=6,Dl=7,po=0,Nl=1,Ul=2,An=0,Il=1,Fl=2,Ol=3,Bl=4,zl=5,kl=6,mo=300,gi=301,_i=302,ms=303,gs=304,Er=306,_s=1e3,Kt=1001,vs=1002,wt=1003,Gs=1004,Dr=1005,Tt=1006,Gl=1007,Ni=1008,dn=1009,Hl=1010,Vl=1011,ws=1012,go=1013,bn=1014,yn=1015,Ui=1016,_o=1017,vo=1018,zn=1020,Wl=1021,Ht=1023,jl=1024,Xl=1025,kn=1026,vi=1027,ql=1028,xo=1029,Yl=1030,So=1031,Mo=1033,Nr=33776,Ur=33777,Ir=33778,Fr=33779,Hs=35840,Vs=35841,Ws=35842,js=35843,Eo=36196,Xs=37492,qs=37496,Ys=37808,$s=37809,Ks=37810,Zs=37811,Js=37812,Qs=37813,ea=37814,ta=37815,na=37816,ia=37817,ra=37818,sa=37819,aa=37820,oa=37821,Or=36492,la=36494,ca=36495,$l=36283,ua=36284,da=36285,ha=36286,bo=3e3,Gn=3001,Kl=3200,Zl=3201,Jl=0,Ql=1,Vt="",_t="srgb",fn="srgb-linear",Cs="display-p3",br="display-p3-linear",gr="linear",nt="srgb",_r="rec709",vr="p3",Yn=7680,fa=519,ec=512,tc=513,nc=514,yo=515,ic=516,rc=517,sc=518,ac=519,pa=35044,ma="300 es",xs=1035,cn=2e3,xr=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,Ss=180/Math.PI;function Ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function oc(n,e){return(n%e+e)%e}function zr(n,e,t){return(1-t)*n+t*e}function ga(n){return(n&n-1)===0&&n!==0}function Ms(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,c,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,u)}set(e,t,i,r,s,o,a,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],u=i[1],d=i[4],l=i[7],p=i[2],m=i[5],g=i[8],_=r[0],h=r[3],f=r[6],b=r[1],x=r[4],R=r[7],L=r[2],w=r[5],A=r[8];return s[0]=o*_+a*b+c*L,s[3]=o*h+a*x+c*w,s[6]=o*f+a*R+c*A,s[1]=u*_+d*b+l*L,s[4]=u*h+d*x+l*w,s[7]=u*f+d*R+l*A,s[2]=p*_+m*b+g*L,s[5]=p*h+m*x+g*w,s[8]=p*f+m*R+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],d=e[8];return t*o*d-t*a*u-i*s*d+i*a*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],d=e[8],l=d*o-a*u,p=a*c-d*s,m=u*s-o*c,g=t*l+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=l*_,e[1]=(r*u-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=p*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*c-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*o+u*a)+o+e,-r*u,r*c,-r*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Xe;function To(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lc(){const n=Sr("canvas");return n.style.display="block",n}const _a={};function Pi(n){n in _a||(_a[n]=!0,console.warn(n))}const va=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xa=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[fn]:{transfer:gr,primaries:_r,toReference:n=>n,fromReference:n=>n},[_t]:{transfer:nt,primaries:_r,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[br]:{transfer:gr,primaries:vr,toReference:n=>n.applyMatrix3(xa),fromReference:n=>n.applyMatrix3(va)},[Cs]:{transfer:nt,primaries:vr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(xa),fromReference:n=>n.applyMatrix3(va).convertLinearToSRGB()}},cc=new Set([fn,br]),et={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hi[e].toReference,r=Hi[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hi[n].primaries},getTransfer:function(n){return n===Vt?gr:Hi[n].transfer}};function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $n;class Ao{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$n===void 0&&($n=Sr("canvas")),$n.width=e.width,$n.height=e.height;const i=$n.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$n}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uc=0;class Ro{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hr(r[o].image)):s.push(Hr(r[o]))}else s=Hr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Hr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ao.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dc=0;class Nt extends Si{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Kt,r=Kt,s=Tt,o=Ni,a=Ht,c=dn,u=Nt.DEFAULT_ANISOTROPY,d=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=Ii(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Gn?_t:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Gn:bo}set encoding(e){Pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gn?_t:Vt}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=mo;Nt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,u=c[0],d=c[4],l=c[8],p=c[1],m=c[5],g=c[9],_=c[2],h=c[6],f=c[10];if(Math.abs(d-p)<.01&&Math.abs(l-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(l+_)<.1&&Math.abs(g+h)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,R=(m+1)/2,L=(f+1)/2,w=(d+p)/4,A=(l+_)/4,H=(g+h)/4;return x>R&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=A/i):R>L?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=w/r,s=H/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=H/s),this.set(i,r,s,t),this}let b=Math.sqrt((h-g)*(h-g)+(l-_)*(l-_)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(h-g)/b,this.y=(l-_)/b,this.z=(p-d)/b,this.w=Math.acos((u+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hc extends Si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Pi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gn?_t:Vt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends hc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wo extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],u=i[r+1],d=i[r+2],l=i[r+3];const p=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=l;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(l!==_||c!==p||u!==m||d!==g){let h=1-a;const f=c*p+u*m+d*g+l*_,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const L=Math.sqrt(x),w=Math.atan2(L,f*b);h=Math.sin(h*w)/L,a=Math.sin(a*w)/L}const R=a*b;if(c=c*h+p*R,u=u*h+m*R,d=d*h+g*R,l=l*h+_*R,h===1-a){const L=1/Math.sqrt(c*c+u*u+d*d+l*l);c*=L,u*=L,d*=L,l*=L}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=l}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],u=i[r+2],d=i[r+3],l=s[o],p=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+d*l+c*m-u*p,e[t+1]=c*g+d*p+u*l-a*m,e[t+2]=u*g+d*m+a*p-c*l,e[t+3]=d*g-a*l-c*p-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(i/2),d=a(r/2),l=a(s/2),p=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*d*l+u*m*g,this._y=u*m*l-p*d*g,this._z=u*d*g+p*m*l,this._w=u*d*l-p*m*g;break;case"YXZ":this._x=p*d*l+u*m*g,this._y=u*m*l-p*d*g,this._z=u*d*g-p*m*l,this._w=u*d*l+p*m*g;break;case"ZXY":this._x=p*d*l-u*m*g,this._y=u*m*l+p*d*g,this._z=u*d*g+p*m*l,this._w=u*d*l-p*m*g;break;case"ZYX":this._x=p*d*l-u*m*g,this._y=u*m*l+p*d*g,this._z=u*d*g-p*m*l,this._w=u*d*l+p*m*g;break;case"YZX":this._x=p*d*l+u*m*g,this._y=u*m*l+p*d*g,this._z=u*d*g-p*m*l,this._w=u*d*l-p*m*g;break;case"XZY":this._x=p*d*l-u*m*g,this._y=u*m*l-p*d*g,this._z=u*d*g+p*m*l,this._w=u*d*l+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],u=t[2],d=t[6],l=t[10],p=i+a+l;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>l){const m=2*Math.sqrt(1+i-a-l);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>l){const m=2*Math.sqrt(1+a-i-l);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+l-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,u=t._z,d=t._w;return this._x=i*d+o*a+r*u-s*c,this._y=r*d+o*c+s*a-i*u,this._z=s*d+o*u+i*c-r*a,this._w=o*d-i*a-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,a),l=Math.sin((1-t)*d)/u,p=Math.sin(t*d)/u;return this._w=o*l+this._w*p,this._x=i*l+this._x*p,this._y=r*l+this._y*p,this._z=s*l+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*r-a*i),d=2*(a*t-s*r),l=2*(s*i-o*t);return this.x=t+c*u+o*l-a*d,this.y=i+c*d+a*u-s*l,this.z=r+c*l+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vr.copy(this).projectOnVector(e),this.sub(Vr)}reflect(e){return this.sub(Vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vr=new W,Sa=new Fi;class Oi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(s,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vi.copy(i.boundingBox)),Vi.applyMatrix4(e.matrixWorld),this.union(Vi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),Wi.subVectors(this.max,Ti),Kn.subVectors(e.a,Ti),Zn.subVectors(e.b,Ti),Jn.subVectors(e.c,Ti),gn.subVectors(Zn,Kn),_n.subVectors(Jn,Zn),Pn.subVectors(Kn,Jn);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Pn.z,Pn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Pn.z,0,-Pn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Pn.y,Pn.x,0];return!Wr(t,Kn,Zn,Jn,Wi)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,Kn,Zn,Jn,Wi))?!1:(ji.crossVectors(gn,_n),t=[ji.x,ji.y,ji.z],Wr(t,Kn,Zn,Jn,Wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new W,new W,new W,new W,new W,new W,new W,new W],jt=new W,Vi=new Oi,Kn=new W,Zn=new W,Jn=new W,gn=new W,_n=new W,Pn=new W,Ti=new W,Wi=new W,ji=new W,Dn=new W;function Wr(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Dn.fromArray(n,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),c=e.dot(Dn),u=t.dot(Dn),d=i.dot(Dn);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>a)return!1}return!0}const pc=new Oi,Ai=new W,jr=new W;class Ls{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ai,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(jr)),this.expandByPoint(Ai.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new W,Xr=new W,Xi=new W,vn=new W,qr=new W,qi=new W,Yr=new W;class mc{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xr.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(Xr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xi),a=vn.dot(this.direction),c=-vn.dot(Xi),u=vn.lengthSq(),d=Math.abs(1-o*o);let l,p,m,g;if(d>0)if(l=o*c-a,p=o*a-c,g=s*d,l>=0)if(p>=-g)if(p<=g){const _=1/d;l*=_,p*=_,m=l*(l+o*p+2*a)+p*(o*l+p+2*c)+u}else p=s,l=Math.max(0,-(o*p+a)),m=-l*l+p*(p+2*c)+u;else p=-s,l=Math.max(0,-(o*p+a)),m=-l*l+p*(p+2*c)+u;else p<=-g?(l=Math.max(0,-(-o*s+a)),p=l>0?-s:Math.min(Math.max(-s,-c),s),m=-l*l+p*(p+2*c)+u):p<=g?(l=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+u):(l=Math.max(0,-(o*s+a)),p=l>0?s:Math.min(Math.max(-s,-c),s),m=-l*l+p*(p+2*c)+u);else p=o>0?-s:s,l=Math.max(0,-(o*p+a)),m=-l*l+p*(p+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,l),r&&r.copy(Xr).addScaledVector(Xi,p),m}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const i=tn.dot(this.direction),r=tn.dot(tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const u=1/this.direction.x,d=1/this.direction.y,l=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),l>=0?(a=(e.min.z-p.z)*l,c=(e.max.z-p.z)*l):(a=(e.max.z-p.z)*l,c=(e.min.z-p.z)*l),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,i,r,s){qr.subVectors(t,e),qi.subVectors(i,e),Yr.crossVectors(qr,qi);let o=this.direction.dot(Yr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vn.subVectors(this.origin,e);const c=a*this.direction.dot(qi.crossVectors(vn,qi));if(c<0)return null;const u=a*this.direction.dot(qr.cross(vn));if(u<0||c+u>o)return null;const d=-a*vn.dot(Yr);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,o,a,c,u,d,l,p,m,g,_,h){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,u,d,l,p,m,g,_,h)}set(e,t,i,r,s,o,a,c,u,d,l,p,m,g,_,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=u,f[6]=d,f[10]=l,f[14]=p,f[3]=m,f[7]=g,f[11]=_,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Qn.setFromMatrixColumn(e,0).length(),s=1/Qn.setFromMatrixColumn(e,1).length(),o=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const p=o*d,m=o*l,g=a*d,_=a*l;t[0]=c*d,t[4]=-c*l,t[8]=u,t[1]=m+g*u,t[5]=p-_*u,t[9]=-a*c,t[2]=_-p*u,t[6]=g+m*u,t[10]=o*c}else if(e.order==="YXZ"){const p=c*d,m=c*l,g=u*d,_=u*l;t[0]=p+_*a,t[4]=g*a-m,t[8]=o*u,t[1]=o*l,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*d,m=c*l,g=u*d,_=u*l;t[0]=p-_*a,t[4]=-o*l,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=_-p*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*d,m=o*l,g=a*d,_=a*l;t[0]=c*d,t[4]=g*u-m,t[8]=p*u+_,t[1]=c*l,t[5]=_*u+p,t[9]=m*u-g,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*u,g=a*c,_=a*u;t[0]=c*d,t[4]=_-p*l,t[8]=g*l+m,t[1]=l,t[5]=o*d,t[9]=-a*d,t[2]=-u*d,t[6]=m*l+g,t[10]=p-_*l}else if(e.order==="XZY"){const p=o*c,m=o*u,g=a*c,_=a*u;t[0]=c*d,t[4]=-l,t[8]=u*d,t[1]=p*l+_,t[5]=o*d,t[9]=m*l-g,t[2]=g*l-m,t[6]=a*d,t[10]=_*l+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gc,e,_c)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),xn.crossVectors(i,Ut),xn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),xn.crossVectors(i,Ut)),xn.normalize(),Yi.crossVectors(Ut,xn),r[0]=xn.x,r[4]=Yi.x,r[8]=Ut.x,r[1]=xn.y,r[5]=Yi.y,r[9]=Ut.y,r[2]=xn.z,r[6]=Yi.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],u=i[12],d=i[1],l=i[5],p=i[9],m=i[13],g=i[2],_=i[6],h=i[10],f=i[14],b=i[3],x=i[7],R=i[11],L=i[15],w=r[0],A=r[4],H=r[8],M=r[12],T=r[1],U=r[5],q=r[9],K=r[13],P=r[2],N=r[6],G=r[10],j=r[14],O=r[3],X=r[7],$=r[11],ee=r[15];return s[0]=o*w+a*T+c*P+u*O,s[4]=o*A+a*U+c*N+u*X,s[8]=o*H+a*q+c*G+u*$,s[12]=o*M+a*K+c*j+u*ee,s[1]=d*w+l*T+p*P+m*O,s[5]=d*A+l*U+p*N+m*X,s[9]=d*H+l*q+p*G+m*$,s[13]=d*M+l*K+p*j+m*ee,s[2]=g*w+_*T+h*P+f*O,s[6]=g*A+_*U+h*N+f*X,s[10]=g*H+_*q+h*G+f*$,s[14]=g*M+_*K+h*j+f*ee,s[3]=b*w+x*T+R*P+L*O,s[7]=b*A+x*U+R*N+L*X,s[11]=b*H+x*q+R*G+L*$,s[15]=b*M+x*K+R*j+L*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],u=e[13],d=e[2],l=e[6],p=e[10],m=e[14],g=e[3],_=e[7],h=e[11],f=e[15];return g*(+s*c*l-r*u*l-s*a*p+i*u*p+r*a*m-i*c*m)+_*(+t*c*m-t*u*p+s*o*p-r*o*m+r*u*d-s*c*d)+h*(+t*u*l-t*a*m-s*o*l+i*o*m+s*a*d-i*u*d)+f*(-r*a*d-t*c*l+t*a*p+r*o*l-i*o*p+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],d=e[8],l=e[9],p=e[10],m=e[11],g=e[12],_=e[13],h=e[14],f=e[15],b=l*h*u-_*p*u+_*c*m-a*h*m-l*c*f+a*p*f,x=g*p*u-d*h*u-g*c*m+o*h*m+d*c*f-o*p*f,R=d*_*u-g*l*u+g*a*m-o*_*m-d*a*f+o*l*f,L=g*l*c-d*_*c-g*a*p+o*_*p+d*a*h-o*l*h,w=t*b+i*x+r*R+s*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=b*A,e[1]=(_*p*s-l*h*s-_*r*m+i*h*m+l*r*f-i*p*f)*A,e[2]=(a*h*s-_*c*s+_*r*u-i*h*u-a*r*f+i*c*f)*A,e[3]=(l*c*s-a*p*s-l*r*u+i*p*u+a*r*m-i*c*m)*A,e[4]=x*A,e[5]=(d*h*s-g*p*s+g*r*m-t*h*m-d*r*f+t*p*f)*A,e[6]=(g*c*s-o*h*s-g*r*u+t*h*u+o*r*f-t*c*f)*A,e[7]=(o*p*s-d*c*s+d*r*u-t*p*u-o*r*m+t*c*m)*A,e[8]=R*A,e[9]=(g*l*s-d*_*s-g*i*m+t*_*m+d*i*f-t*l*f)*A,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*f+t*a*f)*A,e[11]=(d*a*s-o*l*s-d*i*u+t*l*u+o*i*m-t*a*m)*A,e[12]=L*A,e[13]=(d*_*r-g*l*r+g*i*p-t*_*p-d*i*h+t*l*h)*A,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*h-t*a*h)*A,e[15]=(o*l*r-d*a*r+d*i*c-t*l*c-o*i*p+t*a*p)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*c,u*c+r*a,0,u*a+r*c,d*a+i,d*c-r*o,0,u*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,u=s+s,d=o+o,l=a+a,p=s*u,m=s*d,g=s*l,_=o*d,h=o*l,f=a*l,b=c*u,x=c*d,R=c*l,L=i.x,w=i.y,A=i.z;return r[0]=(1-(_+f))*L,r[1]=(m+R)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-R)*w,r[5]=(1-(p+f))*w,r[6]=(h+b)*w,r[7]=0,r[8]=(g+x)*A,r[9]=(h-b)*A,r[10]=(1-(p+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Qn.set(r[0],r[1],r[2]).length();const o=Qn.set(r[4],r[5],r[6]).length(),a=Qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const u=1/s,d=1/o,l=1/a;return Xt.elements[0]*=u,Xt.elements[1]*=u,Xt.elements[2]*=u,Xt.elements[4]*=d,Xt.elements[5]*=d,Xt.elements[6]*=d,Xt.elements[8]*=l,Xt.elements[9]*=l,Xt.elements[10]*=l,t.setFromRotationMatrix(Xt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=cn){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),l=(t+e)/(t-e),p=(i+r)/(i-r);let m,g;if(a===cn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=cn){const c=this.elements,u=1/(t-e),d=1/(i-r),l=1/(o-s),p=(t+e)*u,m=(i+r)*d;let g,_;if(a===cn)g=(o+s)*l,_=-2*l;else if(a===xr)g=s*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qn=new W,Xt=new xt,gc=new W(0,0,0),_c=new W(1,1,1),xn=new W,Yi=new W,Ut=new W,Ma=new xt,Ea=new Fi;class yr{constructor(e=0,t=0,i=0,r=yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],d=r[9],l=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-l,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ma,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ea.setFromEuler(this),this.setFromQuaternion(Ea,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yr.DEFAULT_ORDER="XYZ";class Co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vc=0;const ba=new W,ei=new Fi,nn=new xt,$i=new W,Ri=new W,xc=new W,Sc=new Fi,ya=new W(1,0,0),Ta=new W(0,1,0),Aa=new W(0,0,1),Mc={type:"added"},Ec={type:"removed"};class Ft extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new W,t=new yr,i=new Fi,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Xe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(Ta,e)}rotateZ(e){return this.rotateOnAxis(Aa,e)}translateOnAxis(e,t){return ba.copy(e).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(Ta,e)}translateZ(e){return this.translateOnAxis(Aa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$i.copy(e):$i.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ri,$i,this.up):nn.lookAt($i,Ri,this.up),this.quaternion.setFromRotationMatrix(nn),r&&(nn.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(nn),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ec)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,Sc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const l=c[u];s(e.shapes,l)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),l=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),l.length>0&&(i.shapes=l),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new W(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new W,rn=new W,$r=new W,sn=new W,ti=new W,ni=new W,Ra=new W,Kr=new W,Zr=new W,Jr=new W;let Ki=!1;class Yt{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),rn.subVectors(i,t),$r.subVectors(e,t);const o=qt.dot(qt),a=qt.dot(rn),c=qt.dot($r),u=rn.dot(rn),d=rn.dot($r),l=o*u-a*a;if(l===0)return s.set(0,0,0),null;const p=1/l,m=(u*c-a*d)*p,g=(o*d-a*c)*p;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,i,r,s,o,a,c){return Ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ki=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,sn.x),c.addScaledVector(o,sn.y),c.addScaledVector(a,sn.z),c)}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),rn.subVectors(e,t),qt.cross(rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),qt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ki=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ti.subVectors(r,i),ni.subVectors(s,i),Kr.subVectors(e,i);const c=ti.dot(Kr),u=ni.dot(Kr);if(c<=0&&u<=0)return t.copy(i);Zr.subVectors(e,r);const d=ti.dot(Zr),l=ni.dot(Zr);if(d>=0&&l<=d)return t.copy(r);const p=c*l-d*u;if(p<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(ti,o);Jr.subVectors(e,s);const m=ti.dot(Jr),g=ni.dot(Jr);if(g>=0&&m<=g)return t.copy(s);const _=m*u-c*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(ni,a);const h=d*g-m*l;if(h<=0&&l-d>=0&&m-g>=0)return Ra.subVectors(s,r),a=(l-d)/(l-d+(m-g)),t.copy(r).addScaledVector(Ra,a);const f=1/(h+_+p);return o=_*f,a=p*f,t.copy(i).addScaledVector(ti,o).addScaledVector(ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function Qr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=oc(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qr(o,s,e+1/3),this.g=Qr(o,s,e),this.b=Qr(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=_t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const i=Lo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return et.fromWorkingColorSpace(Et.copy(this),e),Math.round(Pt(Et.r*255,0,255))*65536+Math.round(Pt(Et.g*255,0,255))*256+Math.round(Pt(Et.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,u;const d=(a+o)/2;if(a===o)c=0,u=0;else{const l=o-a;switch(u=d<=.5?l/(o+a):l/(2-o-a),o){case i:c=(r-s)/l+(r<s?6:0);break;case r:c=(s-i)/l+2;break;case s:c=(i-r)/l+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=_t){et.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Zi);const i=zr(Sn.h,Zi.h,t),r=zr(Sn.s,Zi.s,t),s=zr(Sn.l,Zi.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new tt;tt.NAMES=Lo;let bc=0;class Tr extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=pi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fs,this.blendDst=ps,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fs&&(i.blendSrc=this.blendSrc),this.blendDst!==ps&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Po extends Tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new W,Ji=new $e;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pa&&(e.usage=this.usage),e}}class Do extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class No extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hn extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yc=0;const zt=new xt,es=new Ft,ii=new W,It=new Oi,wi=new Oi,ft=new W;class Vn extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(To(e)?No:Do)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return es.lookAt(e),es.updateMatrix(),this.applyMatrix4(es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(It.min,wi.min),It.expandByPoint(ft),ft.addVectors(It.max,wi.max),It.expandByPoint(ft)):(It.expandByPoint(wi.min),It.expandByPoint(wi.max))}It.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)ft.fromBufferAttribute(a,u),c&&(ii.fromBufferAttribute(e,u),ft.add(ii)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let T=0;T<a;T++)u[T]=new W,d[T]=new W;const l=new W,p=new W,m=new W,g=new $e,_=new $e,h=new $e,f=new W,b=new W;function x(T,U,q){l.fromArray(r,T*3),p.fromArray(r,U*3),m.fromArray(r,q*3),g.fromArray(o,T*2),_.fromArray(o,U*2),h.fromArray(o,q*2),p.sub(l),m.sub(l),_.sub(g),h.sub(g);const K=1/(_.x*h.y-h.x*_.y);isFinite(K)&&(f.copy(p).multiplyScalar(h.y).addScaledVector(m,-_.y).multiplyScalar(K),b.copy(m).multiplyScalar(_.x).addScaledVector(p,-h.x).multiplyScalar(K),u[T].add(f),u[U].add(f),u[q].add(f),d[T].add(b),d[U].add(b),d[q].add(b))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let T=0,U=R.length;T<U;++T){const q=R[T],K=q.start,P=q.count;for(let N=K,G=K+P;N<G;N+=3)x(i[N+0],i[N+1],i[N+2])}const L=new W,w=new W,A=new W,H=new W;function M(T){A.fromArray(s,T*3),H.copy(A);const U=u[T];L.copy(U),L.sub(A.multiplyScalar(A.dot(U))).normalize(),w.crossVectors(H,U);const K=w.dot(d[T])<0?-1:1;c[T*4]=L.x,c[T*4+1]=L.y,c[T*4+2]=L.z,c[T*4+3]=K}for(let T=0,U=R.length;T<U;++T){const q=R[T],K=q.start,P=q.count;for(let N=K,G=K+P;N<G;N+=3)M(i[N+0]),M(i[N+1]),M(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new W,s=new W,o=new W,a=new W,c=new W,u=new W,d=new W,l=new W;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,h),d.subVectors(o,s),l.subVectors(r,s),d.cross(l),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,h),a.add(d),c.add(d),u.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,s),l.subVectors(r,s),d.cross(l),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,c){const u=a.array,d=a.itemSize,l=a.normalized,p=new u.constructor(c.length*d);let m=0,g=0;for(let _=0,h=c.length;_<h;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*d;for(let f=0;f<d;f++)p[g++]=u[m++]}return new Qt(p,d,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let d=0,l=u.length;d<l;d++){const p=u[d],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let l=0,p=u.length;l<p;l++){const m=u[l];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],l=s[u];for(let p=0,m=l.length;p<m;p++)d.push(l[p].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const l=o[u];this.addGroup(l.start,l.count,l.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new xt,Nn=new mc,Qi=new Ls,Ca=new W,ri=new W,si=new W,ai=new W,ts=new W,er=new W,tr=new $e,nr=new $e,ir=new $e,La=new W,Pa=new W,Da=new W,rr=new W,sr=new W;class un extends Ft{constructor(e=new Vn,t=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){er.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const d=a[c],l=s[c];d!==0&&(ts.fromBufferAttribute(l,e),o?er.addScaledVector(ts,d):er.addScaledVector(ts.sub(t),d))}t.add(er)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qi.copy(i.boundingSphere),Qi.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(Qi.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Qi,Ca)===null||Nn.origin.distanceToSquared(Ca)>(e.far-e.near)**2))&&(wa.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(wa),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,l=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const h=p[g],f=o[h.materialIndex],b=Math.max(h.start,m.start),x=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let R=b,L=x;R<L;R+=3){const w=a.getX(R),A=a.getX(R+1),H=a.getX(R+2);r=ar(this,f,e,i,u,d,l,w,A,H),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let h=g,f=_;h<f;h+=3){const b=a.getX(h),x=a.getX(h+1),R=a.getX(h+2);r=ar(this,o,e,i,u,d,l,b,x,R),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const h=p[g],f=o[h.materialIndex],b=Math.max(h.start,m.start),x=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let R=b,L=x;R<L;R+=3){const w=R,A=R+1,H=R+2;r=ar(this,f,e,i,u,d,l,w,A,H),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let h=g,f=_;h<f;h+=3){const b=h,x=h+1,R=h+2;r=ar(this,o,e,i,u,d,l,b,x,R),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Tc(n,e,t,i,r,s,o,a){let c;if(e.side===Dt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Rn,a),c===null)return null;sr.copy(a),sr.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(sr);return u<t.near||u>t.far?null:{distance:u,point:sr.clone(),object:n}}function ar(n,e,t,i,r,s,o,a,c,u){n.getVertexPosition(a,ri),n.getVertexPosition(c,si),n.getVertexPosition(u,ai);const d=Tc(n,e,t,i,ri,si,ai,rr);if(d){r&&(tr.fromBufferAttribute(r,a),nr.fromBufferAttribute(r,c),ir.fromBufferAttribute(r,u),d.uv=Yt.getInterpolation(rr,ri,si,ai,tr,nr,ir,new $e)),s&&(tr.fromBufferAttribute(s,a),nr.fromBufferAttribute(s,c),ir.fromBufferAttribute(s,u),d.uv1=Yt.getInterpolation(rr,ri,si,ai,tr,nr,ir,new $e),d.uv2=d.uv1),o&&(La.fromBufferAttribute(o,a),Pa.fromBufferAttribute(o,c),Da.fromBufferAttribute(o,u),d.normal=Yt.getInterpolation(rr,ri,si,ai,La,Pa,Da,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const l={a,b:c,c:u,normal:new W,materialIndex:0};Yt.getNormal(ri,si,ai,l.normal),d.face=l}return d}class Bi extends Vn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],d=[],l=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Hn(u,3)),this.setAttribute("normal",new Hn(d,3)),this.setAttribute("uv",new Hn(l,2));function g(_,h,f,b,x,R,L,w,A,H,M){const T=R/A,U=L/H,q=R/2,K=L/2,P=w/2,N=A+1,G=H+1;let j=0,O=0;const X=new W;for(let $=0;$<G;$++){const ee=$*U-K;for(let he=0;he<N;he++){const B=he*T-q;X[_]=B*b,X[h]=ee*x,X[f]=P,u.push(X.x,X.y,X.z),X[_]=0,X[h]=0,X[f]=w>0?1:-1,d.push(X.x,X.y,X.z),l.push(he/A),l.push(1-$/H),j+=1}}for(let $=0;$<H;$++)for(let ee=0;ee<A;ee++){const he=p+ee+N*$,B=p+ee+N*($+1),Z=p+(ee+1)+N*($+1),Y=p+(ee+1)+N*$;c.push(he,B,Y),c.push(B,Z,Y),O+=6}a.addGroup(m,O,M),m+=O,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=xi(n[t]);for(const r in i)e[r]=i[r]}return e}function Ac(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uo(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const Rc={clone:xi,merge:Rt};var wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wc,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Ac(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Io extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends Io{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,li=1;class Lc extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(oi,li,e,t);r.layers=this.layers,this.add(r);const s=new $t(oi,li,e,t);s.layers=this.layers,this.add(s);const o=new $t(oi,li,e,t);o.layers=this.layers,this.add(o);const a=new $t(oi,li,e,t);a.layers=this.layers,this.add(a);const c=new $t(oi,li,e,t);c.layers=this.layers,this.add(c);const u=new $t(oi,li,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const u of t)this.remove(u);if(e===cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,u,d]=this.children,l=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(l,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fo extends Nt{constructor(e,t,i,r,s,o,a,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:gi,super(e,t,i,r,s,o,a,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pc extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Pi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gn?_t:Vt),this.texture=new Fo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bi(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Tn});s.uniforms.tEquirect.value=t;const o=new un(r,s),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Tt),new Lc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ns=new W,Dc=new W,Nc=new Xe;class In{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ns.subVectors(i,t).cross(Dc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ns),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nc.getNormalMatrix(e),r=this.coplanarPoint(ns).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Ls,or=new W;class Oo{constructor(e=new In,t=new In,i=new In,r=new In,s=new In,o=new In){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],u=r[4],d=r[5],l=r[6],p=r[7],m=r[8],g=r[9],_=r[10],h=r[11],f=r[12],b=r[13],x=r[14],R=r[15];if(i[0].setComponents(c-s,p-u,h-m,R-f).normalize(),i[1].setComponents(c+s,p+u,h+m,R+f).normalize(),i[2].setComponents(c+o,p+d,h+g,R+b).normalize(),i[3].setComponents(c-o,p-d,h-g,R-b).normalize(),i[4].setComponents(c-a,p-l,h-_,R-x).normalize(),t===cn)i[5].setComponents(c+a,p+l,h+_,R+x).normalize();else if(t===xr)i[5].setComponents(a,l,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(or.x=r.normal.x>0?e.max.x:e.min.x,or.y=r.normal.y>0?e.max.y:e.min.y,or.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bo(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Uc(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,d){const l=u.array,p=u.usage,m=l.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,l,p),u.onUploadCallback();let _;if(l instanceof Float32Array)_=n.FLOAT;else if(l instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=n.SHORT;else if(l instanceof Uint32Array)_=n.UNSIGNED_INT;else if(l instanceof Int32Array)_=n.INT;else if(l instanceof Int8Array)_=n.BYTE;else if(l instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:g,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,d,l){const p=d.array,m=d._updateRange,g=d.updateRanges;if(n.bindBuffer(l,u),m.count===-1&&g.length===0&&n.bufferSubData(l,0,p),g.length!==0){for(let _=0,h=g.length;_<h;_++){const f=g[_];t?n.bufferSubData(l,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):n.bufferSubData(l,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}d.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(l,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(l,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(n.deleteBuffer(d.buffer),i.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const l=i.get(u);if(l===void 0)i.set(u,r(u,d));else if(l.version<u.version){if(l.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(l.buffer,u,d),l.version=u.version}}return{get:o,remove:a,update:c}}class Ar extends Vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),u=a+1,d=c+1,l=e/a,p=t/c,m=[],g=[],_=[],h=[];for(let f=0;f<d;f++){const b=f*p-o;for(let x=0;x<u;x++){const R=x*l-s;g.push(R,-b,0),_.push(0,0,1),h.push(x/a),h.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const x=b+u*f,R=b+u*(f+1),L=b+1+u*(f+1),w=b+1+u*f;m.push(x,R,w),m.push(R,L,w)}this.setIndex(m),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ic=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$c=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,su=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,au=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,du="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Iu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ju=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Id=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,th=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ih=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ah=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ch=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Ic,alphahash_pars_fragment:Fc,alphamap_fragment:Oc,alphamap_pars_fragment:Bc,alphatest_fragment:zc,alphatest_pars_fragment:kc,aomap_fragment:Gc,aomap_pars_fragment:Hc,batching_pars_vertex:Vc,batching_vertex:Wc,begin_vertex:jc,beginnormal_vertex:Xc,bsdfs:qc,iridescence_fragment:Yc,bumpmap_pars_fragment:$c,clipping_planes_fragment:Kc,clipping_planes_pars_fragment:Zc,clipping_planes_pars_vertex:Jc,clipping_planes_vertex:Qc,color_fragment:eu,color_pars_fragment:tu,color_pars_vertex:nu,color_vertex:iu,common:ru,cube_uv_reflection_fragment:su,defaultnormal_vertex:au,displacementmap_pars_vertex:ou,displacementmap_vertex:lu,emissivemap_fragment:cu,emissivemap_pars_fragment:uu,colorspace_fragment:du,colorspace_pars_fragment:hu,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:wu,envmap_vertex:_u,fog_vertex:vu,fog_pars_vertex:xu,fog_fragment:Su,fog_pars_fragment:Mu,gradientmap_pars_fragment:Eu,lightmap_fragment:bu,lightmap_pars_fragment:yu,lights_lambert_fragment:Tu,lights_lambert_pars_fragment:Au,lights_pars_begin:Ru,lights_toon_fragment:Cu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Pu,lights_phong_pars_fragment:Du,lights_physical_fragment:Nu,lights_physical_pars_fragment:Uu,lights_fragment_begin:Iu,lights_fragment_maps:Fu,lights_fragment_end:Ou,logdepthbuf_fragment:Bu,logdepthbuf_pars_fragment:zu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:Gu,map_fragment:Hu,map_pars_fragment:Vu,map_particle_fragment:Wu,map_particle_pars_fragment:ju,metalnessmap_fragment:Xu,metalnessmap_pars_fragment:qu,morphcolor_vertex:Yu,morphnormal_vertex:$u,morphtarget_pars_vertex:Ku,morphtarget_vertex:Zu,normal_fragment_begin:Ju,normal_fragment_maps:Qu,normal_pars_fragment:ed,normal_pars_vertex:td,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:ad,iridescence_pars_fragment:od,opaque_fragment:ld,packing:cd,premultiplied_alpha_fragment:ud,project_vertex:dd,dithering_fragment:hd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:_d,shadowmap_vertex:vd,shadowmask_pars_fragment:xd,skinbase_vertex:Sd,skinning_pars_vertex:Md,skinning_vertex:Ed,skinnormal_vertex:bd,specularmap_fragment:yd,specularmap_pars_fragment:Td,tonemapping_fragment:Ad,tonemapping_pars_fragment:Rd,transmission_fragment:wd,transmission_pars_fragment:Cd,uv_pars_fragment:Ld,uv_pars_vertex:Pd,uv_vertex:Dd,worldpos_vertex:Nd,background_vert:Ud,background_frag:Id,backgroundCube_vert:Fd,backgroundCube_frag:Od,cube_vert:Bd,cube_frag:zd,depth_vert:kd,depth_frag:Gd,distanceRGBA_vert:Hd,distanceRGBA_frag:Vd,equirect_vert:Wd,equirect_frag:jd,linedashed_vert:Xd,linedashed_frag:qd,meshbasic_vert:Yd,meshbasic_frag:$d,meshlambert_vert:Kd,meshlambert_frag:Zd,meshmatcap_vert:Jd,meshmatcap_frag:Qd,meshnormal_vert:eh,meshnormal_frag:th,meshphong_vert:nh,meshphong_frag:ih,meshphysical_vert:rh,meshphysical_frag:sh,meshtoon_vert:ah,meshtoon_frag:oh,points_vert:lh,points_frag:ch,shadow_vert:uh,shadow_frag:dh,sprite_vert:hh,sprite_frag:fh},oe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Jt={basic:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Rt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Rt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Rt([oe.points,oe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Rt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Rt([oe.common,oe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Rt([oe.sprite,oe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Rt([oe.common,oe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Rt([oe.lights,oe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Jt.physical={uniforms:Rt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const lr={r:0,b:0,g:0};function ph(n,e,t,i,r,s,o){const a=new tt(0);let c=s===!0?0:1,u,d,l=null,p=0,m=null;function g(h,f){let b=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Er)?(d===void 0&&(d=new un(new Bi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:xi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=et.getTransfer(x.colorSpace)!==nt,(l!==x||p!==x.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,l=x,p=x.version,m=n.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new un(new Ar(2,2),new wn({name:"BackgroundMaterial",uniforms:xi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=et.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||p!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,l=x,p=x.version,m=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function _(h,f){h.getRGB(lr,Uo(n)),i.buffers.color.setClear(lr.r,lr.g,lr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(h,f=1){a.set(h),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,_(a,c)},render:g}}function mh(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=h(null);let u=c,d=!1;function l(P,N,G,j,O){let X=!1;if(o){const $=_(j,G,N);u!==$&&(u=$,m(u.object)),X=f(P,j,G,O),X&&b(P,j,G,O)}else{const $=N.wireframe===!0;(u.geometry!==j.id||u.program!==G.id||u.wireframe!==$)&&(u.geometry=j.id,u.program=G.id,u.wireframe=$,X=!0)}O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,H(P,N,G,j),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,N,G){const j=G.wireframe===!0;let O=a[P.id];O===void 0&&(O={},a[P.id]=O);let X=O[N.id];X===void 0&&(X={},O[N.id]=X);let $=X[j];return $===void 0&&($=h(p()),X[j]=$),$}function h(P){const N=[],G=[],j=[];for(let O=0;O<r;O++)N[O]=0,G[O]=0,j[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:j,object:P,attributes:{},index:null}}function f(P,N,G,j){const O=u.attributes,X=N.attributes;let $=0;const ee=G.getAttributes();for(const he in ee)if(ee[he].location>=0){const Z=O[he];let Y=X[he];if(Y===void 0&&(he==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),he==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Z===void 0||Z.attribute!==Y||Y&&Z.data!==Y.data)return!0;$++}return u.attributesNum!==$||u.index!==j}function b(P,N,G,j){const O={},X=N.attributes;let $=0;const ee=G.getAttributes();for(const he in ee)if(ee[he].location>=0){let Z=X[he];Z===void 0&&(he==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),he==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const Y={};Y.attribute=Z,Z&&Z.data&&(Y.data=Z.data),O[he]=Y,$++}u.attributes=O,u.attributesNum=$,u.index=j}function x(){const P=u.newAttributes;for(let N=0,G=P.length;N<G;N++)P[N]=0}function R(P){L(P,0)}function L(P,N){const G=u.newAttributes,j=u.enabledAttributes,O=u.attributeDivisors;G[P]=1,j[P]===0&&(n.enableVertexAttribArray(P),j[P]=1),O[P]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),O[P]=N)}function w(){const P=u.newAttributes,N=u.enabledAttributes;for(let G=0,j=N.length;G<j;G++)N[G]!==P[G]&&(n.disableVertexAttribArray(G),N[G]=0)}function A(P,N,G,j,O,X,$){$===!0?n.vertexAttribIPointer(P,N,G,O,X):n.vertexAttribPointer(P,N,G,j,O,X)}function H(P,N,G,j){if(i.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const O=j.attributes,X=G.getAttributes(),$=N.defaultAttributeValues;for(const ee in X){const he=X[ee];if(he.location>=0){let B=O[ee];if(B===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),B!==void 0){const Z=B.normalized,Y=B.itemSize,le=t.get(B);if(le===void 0)continue;const ge=le.buffer,Ae=le.type,De=le.bytesPerElement,_e=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||B.gpuType===go);if(B.isInterleavedBufferAttribute){const Ue=B.data,I=Ue.stride,pt=B.offset;if(Ue.isInstancedInterleavedBuffer){for(let be=0;be<he.locationSize;be++)L(he.location+be,Ue.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let be=0;be<he.locationSize;be++)R(he.location+be);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let be=0;be<he.locationSize;be++)A(he.location+be,Y/he.locationSize,Ae,Z,I*De,(pt+Y/he.locationSize*be)*De,_e)}else{if(B.isInstancedBufferAttribute){for(let Ue=0;Ue<he.locationSize;Ue++)L(he.location+Ue,B.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Ue=0;Ue<he.locationSize;Ue++)R(he.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ue=0;Ue<he.locationSize;Ue++)A(he.location+Ue,Y/he.locationSize,Ae,Z,Y*De,Y/he.locationSize*Ue*De,_e)}}else if($!==void 0){const Z=$[ee];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(he.location,Z);break;case 3:n.vertexAttrib3fv(he.location,Z);break;case 4:n.vertexAttrib4fv(he.location,Z);break;default:n.vertexAttrib1fv(he.location,Z)}}}}w()}function M(){q();for(const P in a){const N=a[P];for(const G in N){const j=N[G];for(const O in j)g(j[O].object),delete j[O];delete N[G]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const N=a[P.id];for(const G in N){const j=N[G];for(const O in j)g(j[O].object),delete j[O];delete N[G]}delete a[P.id]}function U(P){for(const N in a){const G=a[N];if(G[P.id]===void 0)continue;const j=G[P.id];for(const O in j)g(j[O].object),delete j[O];delete G[P.id]}}function q(){K(),d=!0,u!==c&&(u=c,m(u.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:q,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:R,disableUnusedAttributes:w}}function gh(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,l){n.drawArrays(s,d,l),t.update(l,s,1)}function c(d,l,p){if(p===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,d,l,p),t.update(l,s,p)}function u(d,l,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(d[g],l[g]);else{m.multiDrawArraysWEBGL(s,d,0,l,0,p);let g=0;for(let _=0;_<p;_++)g+=l[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function _h(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,l=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,R=o||e.has("OES_texture_float"),L=x&&R,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:l,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:h,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:R,floatVertexTextures:L,maxSamples:w}}function vh(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new In,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,p){const m=l.length!==0||p||i!==0||r;return r=p,i=l.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,p){t=d(l,p,0)},this.setState=function(l,p,m){const g=l.clippingPlanes,_=l.clipIntersection,h=l.clipShadows,f=n.get(l);if(!r||g===null||g.length===0||s&&!h)s?d(null):u();else{const b=s?0:i,x=b*4;let R=f.clippingState||null;c.value=R,R=d(g,p,x,m);for(let L=0;L!==x;++L)R[L]=t[L];f.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(l,p,m,g){const _=l!==null?l.length:0;let h=null;if(_!==0){if(h=c.value,g!==!0||h===null){const f=m+_*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<f)&&(h=new Float32Array(f));for(let x=0,R=m;x!==_;++x,R+=4)o.copy(l[x]).applyMatrix4(b,a),o.normal.toArray(h,R),h[R+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}function xh(n){let e=new WeakMap;function t(o,a){return a===ms?o.mapping=gi:a===gs&&(o.mapping=_i),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ms||a===gs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Pc(c.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zo extends Io{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const di=4,Na=[.125,.215,.35,.446,.526,.582],Bn=20,is=new zo,Ua=new tt;let rs=null,ss=0,as=0;const Fn=(1+Math.sqrt(5))/2,ci=1/Fn,Ia=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Fn,ci),new W(0,Fn,-ci),new W(ci,0,Fn),new W(-ci,0,Fn),new W(Fn,ci,0),new W(-Fn,ci,0)];class Fa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rs,ss,as),e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Ui,format:Ht,colorSpace:fn,depthBuffer:!1},r=Oa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oa(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sh(s)),this._blurMaterial=Mh(s,e,t)}return r}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,is)}_sceneToCubeUV(e,t,i,r){const a=new $t(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,l=d.autoClear,p=d.toneMapping;d.getClearColor(Ua),d.toneMapping=An,d.autoClear=!1;const m=new Po({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new un(new Bi,m);let _=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,_=!0):(m.color.copy(Ua),_=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(u[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,u[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;cr(r,b*x,f>2?x:0,x,x),d.setRenderTarget(r),_&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=l,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gi||e.mapping===_i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;cr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,is)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ia[(r-1)%Ia.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,l=new un(this._lodPlanes[r],u),p=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),_=s/g,h=isFinite(s)?1+Math.floor(d*_):Bn;h>Bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Bn}`);const f=[];let b=0;for(let A=0;A<Bn;++A){const H=A/_,M=Math.exp(-H*H/2);f.push(M),A===0?b+=M:A<h&&(b+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-i;const R=this._sizeLods[r],L=3*R*(r>x-di?r-x+di:0),w=4*(this._cubeSize-R);cr(t,L,w,3*R,2*R),c.setRenderTarget(t),c.render(l,is)}}function Sh(n){const e=[],t=[],i=[];let r=n;const s=n-di+1+Na.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-di?c=Na[o-n+di-1]:o===0&&(c=0),i.push(c);const u=1/(a-2),d=-u,l=1+u,p=[d,d,l,d,l,l,d,d,l,l,d,l],m=6,g=6,_=3,h=2,f=1,b=new Float32Array(_*g*m),x=new Float32Array(h*g*m),R=new Float32Array(f*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,H=w>2?0:-1,M=[A,H,0,A+2/3,H,0,A+2/3,H+1,0,A,H,0,A+2/3,H+1,0,A,H+1,0];b.set(M,_*g*w),x.set(p,h*g*w);const T=[w,w,w,w,w,w];R.set(T,f*g*w)}const L=new Vn;L.setAttribute("position",new Qt(b,_)),L.setAttribute("uv",new Qt(x,h)),L.setAttribute("faceIndex",new Qt(R,f)),e.push(L),r>di&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Oa(n,e,t){const i=new pn(n,e,t);return i.texture.mapping=Er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Mh(n,e,t){const i=new Float32Array(Bn),r=new W(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ba(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function za(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ps(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Eh(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===ms||c===gs,d=c===gi||c===_i;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let l=e.get(a);return t===null&&(t=new Fa(n)),l=u?t.fromEquirectangular(a,l):t.fromCubemap(a,l),e.set(a,l),l.texture}else{if(e.has(a))return e.get(a).texture;{const l=a.image;if(u&&l&&l.height>0||d&&l&&r(l)){t===null&&(t=new Fa(n));const p=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let c=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bh(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yh(n,e,t,i){const r={},s=new WeakMap;function o(l){const p=l.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let h=0,f=_.length;h<f;h++)e.remove(_[h])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(l,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(l){const p=l.attributes;for(const g in p)e.update(p[g],n.ARRAY_BUFFER);const m=l.morphAttributes;for(const g in m){const _=m[g];for(let h=0,f=_.length;h<f;h++)e.update(_[h],n.ARRAY_BUFFER)}}function u(l){const p=[],m=l.index,g=l.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let x=0,R=b.length;x<R;x+=3){const L=b[x+0],w=b[x+1],A=b[x+2];p.push(L,w,w,A,A,L)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,R=b.length/3-1;x<R;x+=3){const L=x+0,w=x+1,A=x+2;p.push(L,w,w,A,A,L)}}else return;const h=new(To(p)?No:Do)(p,1);h.version=_;const f=s.get(l);f&&e.remove(f),s.set(l,h)}function d(l){const p=s.get(l);if(p){const m=l.index;m!==null&&p.version<m.version&&u(l)}else u(l);return s.get(l)}return{get:a,update:c,getWireframeAttribute:d}}function Th(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,c;function u(m){a=m.type,c=m.bytesPerElement}function d(m,g){n.drawElements(s,g,a,m*c),t.update(g,s,1)}function l(m,g,_){if(_===0)return;let h,f;if(r)h=n,f="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](s,g,a,m*c,_),t.update(g,s,_)}function p(m,g,_){if(_===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{h.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let f=0;for(let b=0;b<_;b++)f+=g[b];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=l,this.renderMultiDraw=p}function Ah(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Rh(n,e){return n[0]-e[0]}function wh(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ch(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new vt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,d,l){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(d);if(_===void 0||_.count!==g){let P=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const b=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let H=0;b===!0&&(H=1),x===!0&&(H=2),R===!0&&(H=3);let M=d.attributes.position.count*H,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const U=new Float32Array(M*T*4*g),q=new wo(U,M,T,g);q.type=yn,q.needsUpdate=!0;const K=H*4;for(let N=0;N<g;N++){const G=L[N],j=w[N],O=A[N],X=M*T*4*N;for(let $=0;$<G.count;$++){const ee=$*K;b===!0&&(o.fromBufferAttribute(G,$),U[X+ee+0]=o.x,U[X+ee+1]=o.y,U[X+ee+2]=o.z,U[X+ee+3]=0),x===!0&&(o.fromBufferAttribute(j,$),U[X+ee+4]=o.x,U[X+ee+5]=o.y,U[X+ee+6]=o.z,U[X+ee+7]=0),R===!0&&(o.fromBufferAttribute(O,$),U[X+ee+8]=o.x,U[X+ee+9]=o.y,U[X+ee+10]=o.z,U[X+ee+11]=O.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new $e(M,T)},s.set(d,_),d.addEventListener("dispose",P)}let h=0;for(let b=0;b<p.length;b++)h+=p[b];const f=d.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",p),l.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let g=i[d.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];i[d.id]=g}for(let x=0;x<m;x++){const R=g[x];R[0]=x,R[1]=p[x]}g.sort(wh);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Rh);const _=d.morphAttributes.position,h=d.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const R=a[x],L=R[0],w=R[1];L!==Number.MAX_SAFE_INTEGER&&w?(_&&d.getAttribute("morphTarget"+x)!==_[L]&&d.setAttribute("morphTarget"+x,_[L]),h&&d.getAttribute("morphNormal"+x)!==h[L]&&d.setAttribute("morphNormal"+x,h[L]),r[x]=w,f+=w):(_&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),h&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}const b=d.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Lh(n,e,t,i){let r=new WeakMap;function s(c){const u=i.render.frame,d=c.geometry,l=e.get(c,d);if(r.get(l)!==u&&(e.update(l),r.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return l}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class ko extends Nt{constructor(e,t,i,r,s,o,a,c,u,d){if(d=d!==void 0?d:kn,d!==kn&&d!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===kn&&(i=bn),i===void 0&&d===vi&&(i=zn),super(null,r,s,o,a,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Go=new Nt,Ho=new ko(1,1);Ho.compareFunction=yo;const Vo=new wo,Wo=new fc,jo=new Fo,ka=[],Ga=[],Ha=new Float32Array(16),Va=new Float32Array(9),Wa=new Float32Array(4);function Mi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ka[r];if(s===void 0&&(s=new Float32Array(r),ka[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rr(n,e){let t=Ga[e];t===void 0&&(t=new Int32Array(e),Ga[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ph(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Dh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function Nh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function Uh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function Ih(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,i))return;Wa.set(i),n.uniformMatrix2fv(this.addr,!1,Wa),ht(t,i)}}function Fh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,i))return;Va.set(i),n.uniformMatrix3fv(this.addr,!1,Va),ht(t,i)}}function Oh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(dt(t,i))return;Ha.set(i),n.uniformMatrix4fv(this.addr,!1,Ha),ht(t,i)}}function Bh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),ht(t,e)}}function kh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),ht(t,e)}}function Gh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),ht(t,e)}}function Hh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),ht(t,e)}}function Wh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),ht(t,e)}}function jh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),ht(t,e)}}function Xh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Ho:Go;t.setTexture2D(e||s,r)}function qh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wo,r)}function Yh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||jo,r)}function $h(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vo,r)}function Kh(n){switch(n){case 5126:return Ph;case 35664:return Dh;case 35665:return Nh;case 35666:return Uh;case 35674:return Ih;case 35675:return Fh;case 35676:return Oh;case 5124:case 35670:return Bh;case 35667:case 35671:return zh;case 35668:case 35672:return kh;case 35669:case 35673:return Gh;case 5125:return Hh;case 36294:return Vh;case 36295:return Wh;case 36296:return jh;case 35678:case 36198:case 36298:case 36306:case 35682:return Xh;case 35679:case 36299:case 36307:return qh;case 35680:case 36300:case 36308:case 36293:return Yh;case 36289:case 36303:case 36311:case 36292:return $h}}function Zh(n,e){n.uniform1fv(this.addr,e)}function Jh(n,e){const t=Mi(e,this.size,2);n.uniform2fv(this.addr,t)}function Qh(n,e){const t=Mi(e,this.size,3);n.uniform3fv(this.addr,t)}function ef(n,e){const t=Mi(e,this.size,4);n.uniform4fv(this.addr,t)}function tf(n,e){const t=Mi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nf(n,e){const t=Mi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rf(n,e){const t=Mi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sf(n,e){n.uniform1iv(this.addr,e)}function af(n,e){n.uniform2iv(this.addr,e)}function of(n,e){n.uniform3iv(this.addr,e)}function lf(n,e){n.uniform4iv(this.addr,e)}function cf(n,e){n.uniform1uiv(this.addr,e)}function uf(n,e){n.uniform2uiv(this.addr,e)}function df(n,e){n.uniform3uiv(this.addr,e)}function hf(n,e){n.uniform4uiv(this.addr,e)}function ff(n,e,t){const i=this.cache,r=e.length,s=Rr(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Go,s[o])}function pf(n,e,t){const i=this.cache,r=e.length,s=Rr(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wo,s[o])}function mf(n,e,t){const i=this.cache,r=e.length,s=Rr(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||jo,s[o])}function gf(n,e,t){const i=this.cache,r=e.length,s=Rr(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vo,s[o])}function _f(n){switch(n){case 5126:return Zh;case 35664:return Jh;case 35665:return Qh;case 35666:return ef;case 35674:return tf;case 35675:return nf;case 35676:return rf;case 5124:case 35670:return sf;case 35667:case 35671:return af;case 35668:case 35672:return of;case 35669:case 35673:return lf;case 5125:return cf;case 36294:return uf;case 36295:return df;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return gf}}class vf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kh(t.type)}}class xf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_f(t.type)}}class Sf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const os=/(\w+)(\])?(\[|\.)?/g;function ja(n,e){n.seq.push(e),n.map[e.id]=e}function Mf(n,e,t){const i=n.name,r=i.length;for(os.lastIndex=0;;){const s=os.exec(i),o=os.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){ja(t,u===void 0?new vf(a,n,e):new xf(a,n,e));break}else{let l=t.map[a];l===void 0&&(l=new Sf(a),ja(t,l)),t=l}}}class fr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Mf(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xa(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ef=37297;let bf=0;function yf(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Tf(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===vr&&t===_r?i="LinearDisplayP3ToLinearSRGB":e===_r&&t===vr&&(i="LinearSRGBToLinearDisplayP3"),n){case fn:case br:return[i,"LinearTransferOETF"];case _t:case Cs:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function qa(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yf(n.getShaderSource(e),o)}else return r}function Af(n,e){const t=Tf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rf(n,e){let t;switch(e){case Il:t="Linear";break;case Fl:t="Reinhard";break;case Ol:t="OptimizedCineon";break;case Bl:t="ACESFilmic";break;case kl:t="AgX";break;case zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hi).join(`
`)}function Cf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hi).join(`
`)}function Lf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Pf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hi(n){return n!==""}function Ya(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $a(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Df=/^[ \t]*#include +<([\w\d./]+)>/gm;function Es(n){return n.replace(Df,Uf)}const Nf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Uf(n,e){let t=je[e];if(t===void 0){const i=Nf.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Es(t)}const If=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(n){return n.replace(If,Ff)}function Ff(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Za(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Of(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function Bf(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gi:case _i:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zf(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function kf(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case po:e="ENVMAP_BLENDING_MULTIPLY";break;case Nl:e="ENVMAP_BLENDING_MIX";break;case Ul:e="ENVMAP_BLENDING_ADD";break}return e}function Gf(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Hf(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Of(t),u=Bf(t),d=zf(t),l=kf(t),p=Gf(t),m=t.isWebGL2?"":wf(t),g=Cf(t),_=Lf(s),h=r.createProgram();let f,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hi).join(`
`),f.length>0&&(f+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hi).join(`
`),b.length>0&&(b+=`
`)):(f=[Za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),b=[m,Za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+l:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?je.tonemapping_pars_fragment:"",t.toneMapping!==An?Rf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Af("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hi).join(`
`)),o=Es(o),o=Ya(o,t),o=$a(o,t),a=Es(a),a=Ya(a,t),a=$a(a,t),o=Ka(o),a=Ka(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const R=x+f+o,L=x+b+a,w=Xa(r,r.VERTEX_SHADER,R),A=Xa(r,r.FRAGMENT_SHADER,L);r.attachShader(h,w),r.attachShader(h,A),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h);function H(q){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(h).trim(),P=r.getShaderInfoLog(w).trim(),N=r.getShaderInfoLog(A).trim();let G=!0,j=!0;if(r.getProgramParameter(h,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,h,w,A);else{const O=qa(r,w,"vertex"),X=qa(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+O+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||N==="")&&(j=!1);j&&(q.diagnostics={runnable:G,programLog:K,vertexShader:{log:P,prefix:f},fragmentShader:{log:N,prefix:b}})}r.deleteShader(w),r.deleteShader(A),M=new fr(r,h),T=Pf(r,h)}let M;this.getUniforms=function(){return M===void 0&&H(this),M};let T;this.getAttributes=function(){return T===void 0&&H(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(h,Ef)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bf++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=A,this}let Vf=0;class Wf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jf(e),t.set(e,i)),i}}class jf{constructor(e){this.id=Vf++,this.code=e,this.usedTimes=0}}function Xf(n,e,t,i,r,s,o){const a=new Co,c=new Wf,u=[],d=r.isWebGL2,l=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function h(M,T,U,q,K){const P=q.fog,N=K.geometry,G=M.isMeshStandardMaterial?q.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),O=j&&j.mapping===Er?j.image.height:null,X=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=$!==void 0?$.length:0;let he=0;N.morphAttributes.position!==void 0&&(he=1),N.morphAttributes.normal!==void 0&&(he=2),N.morphAttributes.color!==void 0&&(he=3);let B,Z,Y,le;if(X){const mt=Jt[X];B=mt.vertexShader,Z=mt.fragmentShader}else B=M.vertexShader,Z=M.fragmentShader,c.update(M),Y=c.getVertexShaderID(M),le=c.getFragmentShaderID(M);const ge=n.getRenderTarget(),Ae=K.isInstancedMesh===!0,De=K.isBatchedMesh===!0,_e=!!M.map,Ue=!!M.matcap,I=!!j,pt=!!M.aoMap,be=!!M.lightMap,Ie=!!M.bumpMap,xe=!!M.normalMap,Ke=!!M.displacementMap,Be=!!M.emissiveMap,y=!!M.metalnessMap,S=!!M.roughnessMap,k=M.anisotropy>0,ie=M.clearcoat>0,te=M.iridescence>0,ne=M.sheen>0,re=M.transmission>0,se=k&&!!M.anisotropyMap,fe=ie&&!!M.clearcoatMap,Te=ie&&!!M.clearcoatNormalMap,ze=ie&&!!M.clearcoatRoughnessMap,Q=te&&!!M.iridescenceMap,Ye=te&&!!M.iridescenceThicknessMap,He=ne&&!!M.sheenColorMap,Ne=ne&&!!M.sheenRoughnessMap,ye=!!M.specularMap,pe=!!M.specularColorMap,ke=!!M.specularIntensityMap,Le=re&&!!M.transmissionMap,it=re&&!!M.thicknessMap,Ve=!!M.gradientMap,ae=!!M.alphaMap,C=M.alphaTest>0,ue=!!M.alphaHash,de=!!M.extensions,Pe=!!N.attributes.uv1,Re=!!N.attributes.uv2,Ze=!!N.attributes.uv3;let Ce=An;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ce=n.toneMapping),{isWebGL2:d,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:Z,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:De,instancing:Ae,instancingColor:Ae&&K.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:fn,map:_e,matcap:Ue,envMap:I,envMapMode:I&&j.mapping,envMapCubeUVHeight:O,aoMap:pt,lightMap:be,bumpMap:Ie,normalMap:xe,displacementMap:p&&Ke,emissiveMap:Be,normalMapObjectSpace:xe&&M.normalMapType===Ql,normalMapTangentSpace:xe&&M.normalMapType===Jl,metalnessMap:y,roughnessMap:S,anisotropy:k,anisotropyMap:se,clearcoat:ie,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:Q,iridescenceThicknessMap:Ye,sheen:ne,sheenColorMap:He,sheenRoughnessMap:Ne,specularMap:ye,specularColorMap:pe,specularIntensityMap:ke,transmission:re,transmissionMap:Le,thicknessMap:it,gradientMap:Ve,opaque:M.transparent===!1&&M.blending===pi,alphaMap:ae,alphaTest:C,alphaHash:ue,combine:M.combine,mapUv:_e&&_(M.map.channel),aoMapUv:pt&&_(M.aoMap.channel),lightMapUv:be&&_(M.lightMap.channel),bumpMapUv:Ie&&_(M.bumpMap.channel),normalMapUv:xe&&_(M.normalMap.channel),displacementMapUv:Ke&&_(M.displacementMap.channel),emissiveMapUv:Be&&_(M.emissiveMap.channel),metalnessMapUv:y&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:se&&_(M.anisotropyMap.channel),clearcoatMapUv:fe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(M.sheenRoughnessMap.channel),specularMapUv:ye&&_(M.specularMap.channel),specularColorMapUv:pe&&_(M.specularColorMap.channel),specularIntensityMapUv:ke&&_(M.specularIntensityMap.channel),transmissionMapUv:Le&&_(M.transmissionMap.channel),thicknessMapUv:it&&_(M.thicknessMap.channel),alphaMapUv:ae&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xe||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Re,vertexUv3s:Ze,pointsUvs:K.isPoints===!0&&!!N.attributes.uv&&(_e||ae),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:he,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,useLegacyLights:n._useLegacyLights,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===Dt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:de&&M.extensions.derivatives===!0,extensionFragDepth:de&&M.extensions.fragDepth===!0,extensionDrawBuffers:de&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)T.push(U),T.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(b(T,M),x(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function b(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function R(M){const T=g[M.type];let U;if(T){const q=Jt[T];U=Rc.clone(q.uniforms)}else U=M.uniforms;return U}function L(M,T){let U;for(let q=0,K=u.length;q<K;q++){const P=u[q];if(P.cacheKey===T){U=P,++U.usedTimes;break}}return U===void 0&&(U=new Hf(n,T,M,s),u.push(U)),U}function w(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function H(){c.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:R,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:H}}function qf(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Yf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ja(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qa(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(l,p,m,g,_,h){let f=n[e];return f===void 0?(f={id:l.id,object:l,geometry:p,material:m,groupOrder:g,renderOrder:l.renderOrder,z:_,group:h},n[e]=f):(f.id=l.id,f.object=l,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=l.renderOrder,f.z=_,f.group=h),e++,f}function a(l,p,m,g,_,h){const f=o(l,p,m,g,_,h);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(l,p,m,g,_,h){const f=o(l,p,m,g,_,h);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function u(l,p){t.length>1&&t.sort(l||Yf),i.length>1&&i.sort(p||Ja),r.length>1&&r.sort(p||Ja)}function d(){for(let l=e,p=n.length;l<p;l++){const m=n[l];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:u}}function $f(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qa,n.set(i,[o])):r>=s.length?(o=new Qa,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Kf(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new tt};break;case"SpotLight":t={position:new W,direction:new W,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Zf(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Jf=0;function Qf(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ep(n,e){const t=new Kf,i=Zf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new W);const s=new W,o=new xt,a=new xt;function c(d,l){let p=0,m=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,h=0,f=0,b=0,x=0,R=0,L=0,w=0,A=0,H=0,M=0;d.sort(Qf);const T=l===!0?Math.PI:1;for(let q=0,K=d.length;q<K;q++){const P=d[q],N=P.color,G=P.intensity,j=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=N.r*G*T,m+=N.g*G*T,g+=N.b*G*T;else if(P.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(P.sh.coefficients[X],G);M++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const $=P.shadow,ee=i.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,r.directionalShadow[_]=ee,r.directionalShadowMap[_]=O,r.directionalShadowMatrix[_]=P.shadow.matrix,R++}r.directional[_]=X,_++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(N).multiplyScalar(G*T),X.distance=j,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,r.spot[f]=X;const $=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&H++),r.spotLightMatrix[f]=$.matrix,P.castShadow){const ee=i.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,r.spotShadow[f]=ee,r.spotShadowMap[f]=O,w++}f++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(N).multiplyScalar(G),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),r.rectArea[b]=X,b++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*T),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,ee=i.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,r.pointShadow[h]=ee,r.pointShadowMap[h]=O,r.pointShadowMatrix[h]=P.shadow.matrix,L++}r.point[h]=X,h++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(G*T),X.groundColor.copy(P.groundColor).multiplyScalar(G*T),r.hemi[x]=X,x++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;const U=r.hash;(U.directionalLength!==_||U.pointLength!==h||U.spotLength!==f||U.rectAreaLength!==b||U.hemiLength!==x||U.numDirectionalShadows!==R||U.numPointShadows!==L||U.numSpotShadows!==w||U.numSpotMaps!==A||U.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=b,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+A-H,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=M,U.directionalLength=_,U.pointLength=h,U.spotLength=f,U.rectAreaLength=b,U.hemiLength=x,U.numDirectionalShadows=R,U.numPointShadows=L,U.numSpotShadows=w,U.numSpotMaps=A,U.numLightProbes=M,r.version=Jf++)}function u(d,l){let p=0,m=0,g=0,_=0,h=0;const f=l.matrixWorldInverse;for(let b=0,x=d.length;b<x;b++){const R=d[b];if(R.isDirectionalLight){const L=r.directional[p];L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),p++}else if(R.isSpotLight){const L=r.spot[g];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),g++}else if(R.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(f),a.identity(),o.copy(R.matrixWorld),o.premultiply(f),a.extractRotation(o),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(f),m++}else if(R.isHemisphereLight){const L=r.hemi[h];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(f),h++}}}return{setup:c,setupView:u,state:r}}function eo(n,e){const t=new ep(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(l){i.push(l)}function a(l){r.push(l)}function c(l){t.setup(i,l)}function u(l){t.setupView(i,l)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a}}function tp(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new eo(n,e),t.set(s,[c])):o>=a.length?(c=new eo(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class np extends Tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ip extends Tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ap(n,e,t){let i=new Oo;const r=new $e,s=new $e,o=new vt,a=new np({depthPacking:Zl}),c=new ip,u={},d=t.maxTextureSize,l={[Rn]:Dt,[Dt]:Rn,[ln]:ln},p=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:rp,fragmentShader:sp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new un(g,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let f=this.type;this.render=function(w,A,H){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Tn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=f!==an&&this.type===an,P=f===an&&this.type!==an;for(let N=0,G=w.length;N<G;N++){const j=w[N],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const X=O.getFrameExtents();if(r.multiply(X),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/X.x),r.x=s.x*X.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/X.y),r.y=s.y*X.y,O.mapSize.y=s.y)),O.map===null||K===!0||P===!0){const ee=this.type!==an?{minFilter:wt,magFilter:wt}:{};O.map!==null&&O.map.dispose(),O.map=new pn(r.x,r.y,ee),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const $=O.getViewportCount();for(let ee=0;ee<$;ee++){const he=O.getViewport(ee);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),q.viewport(o),O.updateMatrices(j,ee),i=O.getFrustum(),R(A,H,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===an&&b(O,H),O.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(M,T,U)};function b(w,A){const H=e.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,H,p,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,H,m,_,null)}function x(w,A,H,M){let T=null;const U=H.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)T=U;else if(T=H.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=T.uuid,K=A.uuid;let P=u[q];P===void 0&&(P={},u[q]=P);let N=P[K];N===void 0&&(N=T.clone(),P[K]=N,A.addEventListener("dispose",L)),T=N}if(T.visible=A.visible,T.wireframe=A.wireframe,M===an?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:l[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=n.properties.get(T);q.light=H}return T}function R(w,A,H,M,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===an)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld);const K=e.update(w),P=w.material;if(Array.isArray(P)){const N=K.groups;for(let G=0,j=N.length;G<j;G++){const O=N[G],X=P[O.materialIndex];if(X&&X.visible){const $=x(w,X,M,T);w.onBeforeShadow(n,w,A,H,K,$,O),n.renderBufferDirect(H,null,K,$,w,O),w.onAfterShadow(n,w,A,H,K,$,O)}}}else if(P.visible){const N=x(w,P,M,T);w.onBeforeShadow(n,w,A,H,K,N,null),n.renderBufferDirect(H,null,K,N,w,null),w.onAfterShadow(n,w,A,H,K,N,null)}}const q=w.children;for(let K=0,P=q.length;K<P;K++)R(q[K],A,H,M,T)}function L(w){w.target.removeEventListener("dispose",L);for(const H in u){const M=u[H],T=w.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function op(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const ue=new vt;let de=null;const Pe=new vt(0,0,0,0);return{setMask:function(Re){de!==Re&&!C&&(n.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){C=Re},setClear:function(Re,Ze,Ce,lt,mt){mt===!0&&(Re*=lt,Ze*=lt,Ce*=lt),ue.set(Re,Ze,Ce,lt),Pe.equals(ue)===!1&&(n.clearColor(Re,Ze,Ce,lt),Pe.copy(ue))},reset:function(){C=!1,de=null,Pe.set(-1,0,0,0)}}}function s(){let C=!1,ue=null,de=null,Pe=null;return{setTest:function(Re){Re?De(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(Re){ue!==Re&&!C&&(n.depthMask(Re),ue=Re)},setFunc:function(Re){if(de!==Re){switch(Re){case Al:n.depthFunc(n.NEVER);break;case Rl:n.depthFunc(n.ALWAYS);break;case wl:n.depthFunc(n.LESS);break;case mr:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Ll:n.depthFunc(n.GEQUAL);break;case Pl:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=Re}},setLocked:function(Re){C=Re},setClear:function(Re){Pe!==Re&&(n.clearDepth(Re),Pe=Re)},reset:function(){C=!1,ue=null,de=null,Pe=null}}}function o(){let C=!1,ue=null,de=null,Pe=null,Re=null,Ze=null,Ce=null,lt=null,mt=null;return{setTest:function(Je){C||(Je?De(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!C&&(n.stencilMask(Je),ue=Je)},setFunc:function(Je,gt,Ot){(de!==Je||Pe!==gt||Re!==Ot)&&(n.stencilFunc(Je,gt,Ot),de=Je,Pe=gt,Re=Ot)},setOp:function(Je,gt,Ot){(Ze!==Je||Ce!==gt||lt!==Ot)&&(n.stencilOp(Je,gt,Ot),Ze=Je,Ce=gt,lt=Ot)},setLocked:function(Je){C=Je},setClear:function(Je){mt!==Je&&(n.clearStencil(Je),mt=Je)},reset:function(){C=!1,ue=null,de=null,Pe=null,Re=null,Ze=null,Ce=null,lt=null,mt=null}}}const a=new r,c=new s,u=new o,d=new WeakMap,l=new WeakMap;let p={},m={},g=new WeakMap,_=[],h=null,f=!1,b=null,x=null,R=null,L=null,w=null,A=null,H=null,M=new tt(0,0,0),T=0,U=!1,q=null,K=null,P=null,N=null,G=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,X=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),O=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=X>=2);let ee=null,he={};const B=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),Y=new vt().fromArray(B),le=new vt().fromArray(Z);function ge(C,ue,de,Pe){const Re=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(C,Ze),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<de;Ce++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(ue+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Ze}const Ae={};Ae[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),De(n.DEPTH_TEST),c.setFunc(mr),Be(!1),y(Is),De(n.CULL_FACE),xe(Tn);function De(C){p[C]!==!0&&(n.enable(C),p[C]=!0)}function _e(C){p[C]!==!1&&(n.disable(C),p[C]=!1)}function Ue(C,ue){return m[C]!==ue?(n.bindFramebuffer(C,ue),m[C]=ue,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ue),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function I(C,ue){let de=_,Pe=!1;if(C)if(de=g.get(ue),de===void 0&&(de=[],g.set(ue,de)),C.isWebGLMultipleRenderTargets){const Re=C.texture;if(de.length!==Re.length||de[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,Ce=Re.length;Ze<Ce;Ze++)de[Ze]=n.COLOR_ATTACHMENT0+Ze;de.length=Re.length,Pe=!0}}else de[0]!==n.COLOR_ATTACHMENT0&&(de[0]=n.COLOR_ATTACHMENT0,Pe=!0);else de[0]!==n.BACK&&(de[0]=n.BACK,Pe=!0);Pe&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function pt(C){return h!==C?(n.useProgram(C),h=C,!0):!1}const be={[On]:n.FUNC_ADD,[dl]:n.FUNC_SUBTRACT,[hl]:n.FUNC_REVERSE_SUBTRACT};if(i)be[zs]=n.MIN,be[ks]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(be[zs]=C.MIN_EXT,be[ks]=C.MAX_EXT)}const Ie={[fl]:n.ZERO,[pl]:n.ONE,[ml]:n.SRC_COLOR,[fs]:n.SRC_ALPHA,[Ml]:n.SRC_ALPHA_SATURATE,[xl]:n.DST_COLOR,[_l]:n.DST_ALPHA,[gl]:n.ONE_MINUS_SRC_COLOR,[ps]:n.ONE_MINUS_SRC_ALPHA,[Sl]:n.ONE_MINUS_DST_COLOR,[vl]:n.ONE_MINUS_DST_ALPHA,[El]:n.CONSTANT_COLOR,[bl]:n.ONE_MINUS_CONSTANT_COLOR,[yl]:n.CONSTANT_ALPHA,[Tl]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(C,ue,de,Pe,Re,Ze,Ce,lt,mt,Je){if(C===Tn){f===!0&&(_e(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),C!==ul){if(C!==b||Je!==U){if((x!==On||w!==On)&&(n.blendEquation(n.FUNC_ADD),x=On,w=On),Je)switch(C){case pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fs:n.blendFunc(n.ONE,n.ONE);break;case Os:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bs:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Os:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bs:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}R=null,L=null,A=null,H=null,M.set(0,0,0),T=0,b=C,U=Je}return}Re=Re||ue,Ze=Ze||de,Ce=Ce||Pe,(ue!==x||Re!==w)&&(n.blendEquationSeparate(be[ue],be[Re]),x=ue,w=Re),(de!==R||Pe!==L||Ze!==A||Ce!==H)&&(n.blendFuncSeparate(Ie[de],Ie[Pe],Ie[Ze],Ie[Ce]),R=de,L=Pe,A=Ze,H=Ce),(lt.equals(M)===!1||mt!==T)&&(n.blendColor(lt.r,lt.g,lt.b,mt),M.copy(lt),T=mt),b=C,U=!1}function Ke(C,ue){C.side===ln?_e(n.CULL_FACE):De(n.CULL_FACE);let de=C.side===Dt;ue&&(de=!de),Be(de),C.blending===pi&&C.transparent===!1?xe(Tn):xe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const Pe=C.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(C.stencilWriteMask),u.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),u.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),k(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(C){q!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),q=C)}function y(C){C!==ol?(De(n.CULL_FACE),C!==K&&(C===Is?n.cullFace(n.BACK):C===ll?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),K=C}function S(C){C!==P&&(O&&n.lineWidth(C),P=C)}function k(C,ue,de){C?(De(n.POLYGON_OFFSET_FILL),(N!==ue||G!==de)&&(n.polygonOffset(ue,de),N=ue,G=de)):_e(n.POLYGON_OFFSET_FILL)}function ie(C){C?De(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function te(C){C===void 0&&(C=n.TEXTURE0+j-1),ee!==C&&(n.activeTexture(C),ee=C)}function ne(C,ue,de){de===void 0&&(ee===null?de=n.TEXTURE0+j-1:de=ee);let Pe=he[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},he[de]=Pe),(Pe.type!==C||Pe.texture!==ue)&&(ee!==de&&(n.activeTexture(de),ee=de),n.bindTexture(C,ue||Ae[C]),Pe.type=C,Pe.texture=ue)}function re(){const C=he[ee];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(C){Y.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function Le(C){le.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),le.copy(C))}function it(C,ue){let de=l.get(ue);de===void 0&&(de=new WeakMap,l.set(ue,de));let Pe=de.get(C);Pe===void 0&&(Pe=n.getUniformBlockIndex(ue,C.name),de.set(C,Pe))}function Ve(C,ue){const Pe=l.get(ue).get(C);d.get(ue)!==Pe&&(n.uniformBlockBinding(ue,Pe,C.__bindingPointIndex),d.set(ue,Pe))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ee=null,he={},m={},g=new WeakMap,_=[],h=null,f=!1,b=null,x=null,R=null,L=null,w=null,A=null,H=null,M=new tt(0,0,0),T=0,U=!1,q=null,K=null,P=null,N=null,G=null,Y.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:De,disable:_e,bindFramebuffer:Ue,drawBuffers:I,useProgram:pt,setBlending:xe,setMaterial:Ke,setFlipSided:Be,setCullFace:y,setLineWidth:S,setPolygonOffset:k,setScissorTest:ie,activeTexture:te,bindTexture:ne,unbindTexture:re,compressedTexImage2D:se,compressedTexImage3D:fe,texImage2D:ye,texImage3D:pe,updateUBOMapping:it,uniformBlockBinding:Ve,texStorage2D:He,texStorage3D:Ne,texSubImage2D:Te,texSubImage3D:ze,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ye,scissor:ke,viewport:Le,reset:ae}}function lp(n,e,t,i,r,s,o){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let l;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,S){return m?new OffscreenCanvas(y,S):Sr("canvas")}function _(y,S,k,ie){let te=1;if((y.width>ie||y.height>ie)&&(te=ie/Math.max(y.width,y.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ne=S?Ms:Math.floor,re=ne(te*y.width),se=ne(te*y.height);l===void 0&&(l=g(re,se));const fe=k?g(re,se):l;return fe.width=re,fe.height=se,fe.getContext("2d").drawImage(y,0,0,re,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+re+"x"+se+")."),fe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function h(y){return ga(y.width)&&ga(y.height)}function f(y){return a?!1:y.wrapS!==Kt||y.wrapT!==Kt||y.minFilter!==wt&&y.minFilter!==Tt}function b(y,S){return y.generateMipmaps&&S&&y.minFilter!==wt&&y.minFilter!==Tt}function x(y){n.generateMipmap(y)}function R(y,S,k,ie,te=!1){if(a===!1)return S;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ne=S;if(S===n.RED&&(k===n.FLOAT&&(ne=n.R32F),k===n.HALF_FLOAT&&(ne=n.R16F),k===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(ne=n.R8UI),k===n.UNSIGNED_SHORT&&(ne=n.R16UI),k===n.UNSIGNED_INT&&(ne=n.R32UI),k===n.BYTE&&(ne=n.R8I),k===n.SHORT&&(ne=n.R16I),k===n.INT&&(ne=n.R32I)),S===n.RG&&(k===n.FLOAT&&(ne=n.RG32F),k===n.HALF_FLOAT&&(ne=n.RG16F),k===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RGBA){const re=te?gr:et.getTransfer(ie);k===n.FLOAT&&(ne=n.RGBA32F),k===n.HALF_FLOAT&&(ne=n.RGBA16F),k===n.UNSIGNED_BYTE&&(ne=re===nt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function L(y,S,k){return b(y,k)===!0||y.isFramebufferTexture&&y.minFilter!==wt&&y.minFilter!==Tt?Math.log2(Math.max(S.width,S.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?S.mipmaps.length:1}function w(y){return y===wt||y===Gs||y===Dr?n.NEAREST:n.LINEAR}function A(y){const S=y.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&d.delete(S)}function H(y){const S=y.target;S.removeEventListener("dispose",H),U(S)}function M(y){const S=i.get(y);if(S.__webglInit===void 0)return;const k=y.source,ie=p.get(k);if(ie){const te=ie[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(y),Object.keys(ie).length===0&&p.delete(k)}i.remove(y)}function T(y){const S=i.get(y);n.deleteTexture(S.__webglTexture);const k=y.source,ie=p.get(k);delete ie[S.__cacheKey],o.memory.textures--}function U(y){const S=y.texture,k=i.get(y),ie=i.get(S);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(k.__webglFramebuffer[te]))for(let ne=0;ne<k.__webglFramebuffer[te].length;ne++)n.deleteFramebuffer(k.__webglFramebuffer[te][ne]);else n.deleteFramebuffer(k.__webglFramebuffer[te]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[te])}else{if(Array.isArray(k.__webglFramebuffer))for(let te=0;te<k.__webglFramebuffer.length;te++)n.deleteFramebuffer(k.__webglFramebuffer[te]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let te=0,ne=S.length;te<ne;te++){const re=i.get(S[te]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(S[te])}i.remove(S),i.remove(y)}let q=0;function K(){q=0}function P(){const y=q;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),q+=1,y}function N(y){const S=[];return S.push(y.wrapS),S.push(y.wrapT),S.push(y.wrapR||0),S.push(y.magFilter),S.push(y.minFilter),S.push(y.anisotropy),S.push(y.internalFormat),S.push(y.format),S.push(y.type),S.push(y.generateMipmaps),S.push(y.premultiplyAlpha),S.push(y.flipY),S.push(y.unpackAlignment),S.push(y.colorSpace),S.join()}function G(y,S){const k=i.get(y);if(y.isVideoTexture&&Ke(y),y.isRenderTargetTexture===!1&&y.version>0&&k.__version!==y.version){const ie=y.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,y,S);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function j(y,S){const k=i.get(y);if(y.version>0&&k.__version!==y.version){Y(k,y,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function O(y,S){const k=i.get(y);if(y.version>0&&k.__version!==y.version){Y(k,y,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function X(y,S){const k=i.get(y);if(y.version>0&&k.__version!==y.version){le(k,y,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const $={[_s]:n.REPEAT,[Kt]:n.CLAMP_TO_EDGE,[vs]:n.MIRRORED_REPEAT},ee={[wt]:n.NEAREST,[Gs]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[Tt]:n.LINEAR,[Gl]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},he={[ec]:n.NEVER,[ac]:n.ALWAYS,[tc]:n.LESS,[yo]:n.LEQUAL,[nc]:n.EQUAL,[sc]:n.GEQUAL,[ic]:n.GREATER,[rc]:n.NOTEQUAL};function B(y,S,k){if(k?(n.texParameteri(y,n.TEXTURE_WRAP_S,$[S.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,$[S.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,$[S.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ee[S.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ee[S.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Kt||S.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,w(S.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==wt&&S.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,he[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===wt||S.minFilter!==Dr&&S.minFilter!==Ni||S.type===yn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ui&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(y,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Z(y,S){let k=!1;y.__webglInit===void 0&&(y.__webglInit=!0,S.addEventListener("dispose",A));const ie=S.source;let te=p.get(ie);te===void 0&&(te={},p.set(ie,te));const ne=N(S);if(ne!==y.__cacheKey){te[ne]===void 0&&(te[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[ne].usedTimes++;const re=te[y.__cacheKey];re!==void 0&&(te[y.__cacheKey].usedTimes--,re.usedTimes===0&&T(S)),y.__cacheKey=ne,y.__webglTexture=te[ne].texture}return k}function Y(y,S,k){let ie=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=n.TEXTURE_3D);const te=Z(y,S),ne=S.source;t.bindTexture(ie,y.__webglTexture,n.TEXTURE0+k);const re=i.get(ne);if(ne.version!==re.__version||te===!0){t.activeTexture(n.TEXTURE0+k);const se=et.getPrimaries(et.workingColorSpace),fe=S.colorSpace===Vt?null:et.getPrimaries(S.colorSpace),Te=S.colorSpace===Vt||se===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ze=f(S)&&h(S.image)===!1;let Q=_(S.image,ze,!1,r.maxTextureSize);Q=Be(S,Q);const Ye=h(Q)||a,He=s.convert(S.format,S.colorSpace);let Ne=s.convert(S.type),ye=R(S.internalFormat,He,Ne,S.colorSpace,S.isVideoTexture);B(ie,S,Ye);let pe;const ke=S.mipmaps,Le=a&&S.isVideoTexture!==!0&&ye!==Eo,it=re.__version===void 0||te===!0,Ve=L(S,Q,Ye);if(S.isDepthTexture)ye=n.DEPTH_COMPONENT,a?S.type===yn?ye=n.DEPTH_COMPONENT32F:S.type===bn?ye=n.DEPTH_COMPONENT24:S.type===zn?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:S.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===kn&&ye===n.DEPTH_COMPONENT&&S.type!==ws&&S.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=bn,Ne=s.convert(S.type)),S.format===vi&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,S.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=zn,Ne=s.convert(S.type))),it&&(Le?t.texStorage2D(n.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,He,Ne,null));else if(S.isDataTexture)if(ke.length>0&&Ye){Le&&it&&t.texStorage2D(n.TEXTURE_2D,Ve,ye,ke[0].width,ke[0].height);for(let ae=0,C=ke.length;ae<C;ae++)pe=ke[ae],Le?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,pe.width,pe.height,He,Ne,pe.data):t.texImage2D(n.TEXTURE_2D,ae,ye,pe.width,pe.height,0,He,Ne,pe.data);S.generateMipmaps=!1}else Le?(it&&t.texStorage2D(n.TEXTURE_2D,Ve,ye,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,He,Ne,Q.data)):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,He,Ne,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,ye,ke[0].width,ke[0].height,Q.depth);for(let ae=0,C=ke.length;ae<C;ae++)pe=ke[ae],S.format!==Ht?He!==null?Le?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,Q.depth,He,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ye,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,Q.depth,He,Ne,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ye,pe.width,pe.height,Q.depth,0,He,Ne,pe.data)}else{Le&&it&&t.texStorage2D(n.TEXTURE_2D,Ve,ye,ke[0].width,ke[0].height);for(let ae=0,C=ke.length;ae<C;ae++)pe=ke[ae],S.format!==Ht?He!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,pe.width,pe.height,He,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,pe.width,pe.height,He,Ne,pe.data):t.texImage2D(n.TEXTURE_2D,ae,ye,pe.width,pe.height,0,He,Ne,pe.data)}else if(S.isDataArrayTexture)Le?(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,He,Ne,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,He,Ne,Q.data);else if(S.isData3DTexture)Le?(it&&t.texStorage3D(n.TEXTURE_3D,Ve,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,He,Ne,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,He,Ne,Q.data);else if(S.isFramebufferTexture){if(it)if(Le)t.texStorage2D(n.TEXTURE_2D,Ve,ye,Q.width,Q.height);else{let ae=Q.width,C=Q.height;for(let ue=0;ue<Ve;ue++)t.texImage2D(n.TEXTURE_2D,ue,ye,ae,C,0,He,Ne,null),ae>>=1,C>>=1}}else if(ke.length>0&&Ye){Le&&it&&t.texStorage2D(n.TEXTURE_2D,Ve,ye,ke[0].width,ke[0].height);for(let ae=0,C=ke.length;ae<C;ae++)pe=ke[ae],Le?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,He,Ne,pe):t.texImage2D(n.TEXTURE_2D,ae,ye,He,Ne,pe);S.generateMipmaps=!1}else Le?(it&&t.texStorage2D(n.TEXTURE_2D,Ve,ye,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,Ne,Q)):t.texImage2D(n.TEXTURE_2D,0,ye,He,Ne,Q);b(S,Ye)&&x(ie),re.__version=ne.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function le(y,S,k){if(S.image.length!==6)return;const ie=Z(y,S),te=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+k);const ne=i.get(te);if(te.version!==ne.__version||ie===!0){t.activeTexture(n.TEXTURE0+k);const re=et.getPrimaries(et.workingColorSpace),se=S.colorSpace===Vt?null:et.getPrimaries(S.colorSpace),fe=S.colorSpace===Vt||re===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,ze=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let ae=0;ae<6;ae++)!Te&&!ze?Q[ae]=_(S.image[ae],!1,!0,r.maxCubemapSize):Q[ae]=ze?S.image[ae].image:S.image[ae],Q[ae]=Be(S,Q[ae]);const Ye=Q[0],He=h(Ye)||a,Ne=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),pe=R(S.internalFormat,Ne,ye,S.colorSpace),ke=a&&S.isVideoTexture!==!0,Le=ne.__version===void 0||ie===!0;let it=L(S,Ye,He);B(n.TEXTURE_CUBE_MAP,S,He);let Ve;if(Te){ke&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,it,pe,Ye.width,Ye.height);for(let ae=0;ae<6;ae++){Ve=Q[ae].mipmaps;for(let C=0;C<Ve.length;C++){const ue=Ve[C];S.format!==Ht?Ne!==null?ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,C,0,0,ue.width,ue.height,Ne,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,C,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,C,0,0,ue.width,ue.height,Ne,ye,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,C,pe,ue.width,ue.height,0,Ne,ye,ue.data)}}}else{Ve=S.mipmaps,ke&&Le&&(Ve.length>0&&it++,t.texStorage2D(n.TEXTURE_CUBE_MAP,it,pe,Q[0].width,Q[0].height));for(let ae=0;ae<6;ae++)if(ze){ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Q[ae].width,Q[ae].height,Ne,ye,Q[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,pe,Q[ae].width,Q[ae].height,0,Ne,ye,Q[ae].data);for(let C=0;C<Ve.length;C++){const de=Ve[C].image[ae].image;ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,C+1,0,0,de.width,de.height,Ne,ye,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,C+1,pe,de.width,de.height,0,Ne,ye,de.data)}}else{ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,ye,Q[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,pe,Ne,ye,Q[ae]);for(let C=0;C<Ve.length;C++){const ue=Ve[C];ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,C+1,0,0,Ne,ye,ue.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,C+1,pe,Ne,ye,ue.image[ae])}}}b(S,He)&&x(n.TEXTURE_CUBE_MAP),ne.__version=te.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function ge(y,S,k,ie,te,ne){const re=s.convert(k.format,k.colorSpace),se=s.convert(k.type),fe=R(k.internalFormat,re,se,k.colorSpace);if(!i.get(S).__hasExternalTextures){const ze=Math.max(1,S.width>>ne),Q=Math.max(1,S.height>>ne);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,fe,ze,Q,S.depth,0,re,se,null):t.texImage2D(te,ne,fe,ze,Q,0,re,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),xe(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,te,i.get(k).__webglTexture,0,Ie(S)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,te,i.get(k).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(y,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,y),S.depthBuffer&&!S.stencilBuffer){let ie=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||xe(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===yn?ie=n.DEPTH_COMPONENT32F:te.type===bn&&(ie=n.DEPTH_COMPONENT24));const ne=Ie(S);xe(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,ie,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,ie,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Ie(S);k&&xe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,S.width,S.height):xe(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ie.length;te++){const ne=ie[te],re=s.convert(ne.format,ne.colorSpace),se=s.convert(ne.type),fe=R(ne.internalFormat,re,se,ne.colorSpace),Te=Ie(S);k&&xe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,fe,S.width,S.height):xe(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,fe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(y,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,te=Ie(S);if(S.depthTexture.format===kn)xe(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(S.depthTexture.format===vi)xe(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function _e(y){const S=i.get(y),k=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");De(S.__webglFramebuffer,y)}else if(k){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=n.createRenderbuffer(),Ae(S.__webglDepthbuffer[ie],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Ae(S.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(y,S,k){const ie=i.get(y);S!==void 0&&ge(ie.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&_e(y)}function I(y){const S=y.texture,k=i.get(y),ie=i.get(S);y.addEventListener("dispose",H),y.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=S.version,o.memory.textures++);const te=y.isWebGLCubeRenderTarget===!0,ne=y.isWebGLMultipleRenderTargets===!0,re=h(y)||a;if(te){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let fe=0;fe<S.mipmaps.length;fe++)k.__webglFramebuffer[se][fe]=n.createFramebuffer()}else k.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)k.__webglFramebuffer[se]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){const se=y.texture;for(let fe=0,Te=se.length;fe<Te;fe++){const ze=i.get(se[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&xe(y)===!1){const se=ne?S:[S];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const Te=se[fe];k.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const ze=s.convert(Te.format,Te.colorSpace),Q=s.convert(Te.type),Ye=R(Te.internalFormat,ze,Q,Te.colorSpace,y.isXRRenderTarget===!0),He=Ie(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Ye,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(k.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),B(n.TEXTURE_CUBE_MAP,S,re);for(let se=0;se<6;se++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)ge(k.__webglFramebuffer[se][fe],y,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,fe);else ge(k.__webglFramebuffer[se],y,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);b(S,re)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const se=y.texture;for(let fe=0,Te=se.length;fe<Te;fe++){const ze=se[fe],Q=i.get(ze);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),B(n.TEXTURE_2D,ze,re),ge(k.__webglFramebuffer,y,ze,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),b(ze,re)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?se=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ie.__webglTexture),B(se,S,re),a&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)ge(k.__webglFramebuffer[fe],y,S,n.COLOR_ATTACHMENT0,se,fe);else ge(k.__webglFramebuffer,y,S,n.COLOR_ATTACHMENT0,se,0);b(S,re)&&x(se),t.unbindTexture()}y.depthBuffer&&_e(y)}function pt(y){const S=h(y)||a,k=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0,te=k.length;ie<te;ie++){const ne=k[ie];if(b(ne,S)){const re=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(ne).__webglTexture;t.bindTexture(re,se),x(re),t.unbindTexture()}}}function be(y){if(a&&y.samples>0&&xe(y)===!1){const S=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],k=y.width,ie=y.height;let te=n.COLOR_BUFFER_BIT;const ne=[],re=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(y),fe=y.isWebGLMultipleRenderTargets===!0;if(fe)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){ne.push(n.COLOR_ATTACHMENT0+Te),y.depthBuffer&&ne.push(re);const ze=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(ze===!1&&(y.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[Te]),ze===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[re])),fe){const Q=i.get(S[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,k,ie,0,0,k,ie,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,se.__webglColorRenderbuffer[Te]);const ze=i.get(S[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Ie(y){return Math.min(r.maxSamples,y.samples)}function xe(y){const S=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ke(y){const S=o.render.frame;d.get(y)!==S&&(d.set(y,S),y.update())}function Be(y,S){const k=y.colorSpace,ie=y.format,te=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===xs||k!==fn&&k!==Vt&&(et.getTransfer(k)===nt?a===!1?e.has("EXT_sRGB")===!0&&ie===Ht?(y.format=xs,y.minFilter=Tt,y.generateMipmaps=!1):S=Ao.sRGBToLinear(S):(ie!==Ht||te!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=O,this.setTextureCube=X,this.rebindTextures=Ue,this.setupRenderTarget=I,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function cp(n,e,t){const i=t.isWebGL2;function r(s,o=Vt){let a;const c=et.getTransfer(o);if(s===dn)return n.UNSIGNED_BYTE;if(s===_o)return n.UNSIGNED_SHORT_4_4_4_4;if(s===vo)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Hl)return n.BYTE;if(s===Vl)return n.SHORT;if(s===ws)return n.UNSIGNED_SHORT;if(s===go)return n.INT;if(s===bn)return n.UNSIGNED_INT;if(s===yn)return n.FLOAT;if(s===Ui)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Wl)return n.ALPHA;if(s===Ht)return n.RGBA;if(s===jl)return n.LUMINANCE;if(s===Xl)return n.LUMINANCE_ALPHA;if(s===kn)return n.DEPTH_COMPONENT;if(s===vi)return n.DEPTH_STENCIL;if(s===xs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ql)return n.RED;if(s===xo)return n.RED_INTEGER;if(s===Yl)return n.RG;if(s===So)return n.RG_INTEGER;if(s===Mo)return n.RGBA_INTEGER;if(s===Nr||s===Ur||s===Ir||s===Fr)if(c===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Nr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Nr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ir)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hs||s===Vs||s===Ws||s===js)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ws)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===js)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xs||s===qs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xs)return c===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qs)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ys||s===$s||s===Ks||s===Zs||s===Js||s===Qs||s===ea||s===ta||s===na||s===ia||s===ra||s===sa||s===aa||s===oa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ys)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$s)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ks)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zs)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Js)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qs)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ea)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ta)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===na)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ia)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ra)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sa)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===aa)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oa)return c===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Or||s===la||s===ca)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Or)return c===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===la)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ca)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$l||s===ua||s===da||s===ha)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Or)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ua)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===da)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ha)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class up extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ur extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dp={type:"move"};class ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const h=t.getJointPose(_,i),f=this._getHandJoint(u,_);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const d=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],p=d.position.distanceTo(l.position),m=.02,g=.005;u.inputState.pinching&&p>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ur;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class hp extends Si{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,u=null,d=null,l=null,p=null,m=null,g=null;const _=t.getContextAttributes();let h=null,f=null;const b=[],x=[],R=new $e;let L=null;const w=new $t;w.layers.enable(1),w.viewport=new vt;const A=new $t;A.layers.enable(2),A.viewport=new vt;const H=[w,A],M=new up;M.layers.enable(1),M.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=b[B];return Z===void 0&&(Z=new ls,b[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=b[B];return Z===void 0&&(Z=new ls,b[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=b[B];return Z===void 0&&(Z=new ls,b[B]=Z),Z.getHandSpace()};function q(B){const Z=x.indexOf(B.inputSource);if(Z===-1)return;const Y=b[Z];Y!==void 0&&(Y.update(B.inputSource,B.frame,u||o),Y.dispatchEvent({type:B.type,data:B.inputSource}))}function K(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",P);for(let B=0;B<b.length;B++){const Z=x[B];Z!==null&&(x[B]=null,b[B].disconnect(Z))}T=null,U=null,e.setRenderTarget(h),m=null,p=null,l=null,r=null,f=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return l},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",K),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new pn(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,Y=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?vi:kn,Y=_.stencil?zn:bn);const ge={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};l=new XRWebGLBinding(r,t),p=l.createProjectionLayer(ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new pn(p.textureWidth,p.textureHeight,{format:Ht,type:dn,depthTexture:new ko(p.textureWidth,p.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ae=e.properties.get(f);Ae.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(B){for(let Z=0;Z<B.removed.length;Z++){const Y=B.removed[Z],le=x.indexOf(Y);le>=0&&(x[le]=null,b[le].disconnect(Y))}for(let Z=0;Z<B.added.length;Z++){const Y=B.added[Z];let le=x.indexOf(Y);if(le===-1){for(let Ae=0;Ae<b.length;Ae++)if(Ae>=x.length){x.push(Y),le=Ae;break}else if(x[Ae]===null){x[Ae]=Y,le=Ae;break}if(le===-1)break}const ge=b[le];ge&&ge.connect(Y)}}const N=new W,G=new W;function j(B,Z,Y){N.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(Y.matrixWorld);const le=N.distanceTo(G),ge=Z.projectionMatrix.elements,Ae=Y.projectionMatrix.elements,De=ge[14]/(ge[10]-1),_e=ge[14]/(ge[10]+1),Ue=(ge[9]+1)/ge[5],I=(ge[9]-1)/ge[5],pt=(ge[8]-1)/ge[0],be=(Ae[8]+1)/Ae[0],Ie=De*pt,xe=De*be,Ke=le/(-pt+be),Be=Ke*-pt;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Be),B.translateZ(Ke),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const y=De+Ke,S=_e+Ke,k=Ie-Be,ie=xe+(le-Be),te=Ue*_e/S*y,ne=I*_e/S*y;B.projectionMatrix.makePerspective(k,ie,te,ne,y,S),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function O(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;M.near=A.near=w.near=B.near,M.far=A.far=w.far=B.far,(T!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,U=M.far);const Z=B.parent,Y=M.cameras;O(M,Z);for(let le=0;le<Y.length;le++)O(Y[le],Z);Y.length===2?j(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),X(B,M,Z)};function X(B,Z,Y){Y===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(Y.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ss*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(B){c=B,p!==null&&(p.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let $=null;function ee(B,Z){if(d=Z.getViewerPose(u||o),g=Z,d!==null){const Y=d.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let le=!1;Y.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let ge=0;ge<Y.length;ge++){const Ae=Y[ge];let De=null;if(m!==null)De=m.getViewport(Ae);else{const Ue=l.getViewSubImage(p,Ae);De=Ue.viewport,ge===0&&(e.setRenderTargetTextures(f,Ue.colorTexture,p.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(f))}let _e=H[ge];_e===void 0&&(_e=new $t,_e.layers.enable(ge),_e.viewport=new vt,H[ge]=_e),_e.matrix.fromArray(Ae.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ae.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(M.matrix.copy(_e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(_e)}}for(let Y=0;Y<b.length;Y++){const le=x[Y],ge=b[Y];le!==null&&ge!==void 0&&ge.update(le,Z,u||o)}$&&$(B,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const he=new Bo;he.setAnimationLoop(ee),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}}function fp(n,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,Uo(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,b,x,R){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(h,f):f.isMeshToonMaterial?(s(h,f),l(h,f)):f.isMeshPhongMaterial?(s(h,f),d(h,f)):f.isMeshStandardMaterial?(s(h,f),p(h,f),f.isMeshPhysicalMaterial&&m(h,f,R)):f.isMeshMatcapMaterial?(s(h,f),g(h,f)):f.isMeshDepthMaterial?s(h,f):f.isMeshDistanceMaterial?(s(h,f),_(h,f)):f.isMeshNormalMaterial?s(h,f):f.isLineBasicMaterial?(o(h,f),f.isLineDashedMaterial&&a(h,f)):f.isPointsMaterial?c(h,f,b,x):f.isSpriteMaterial?u(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Dt&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Dt&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(h.envMap.value=b,h.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap){h.lightMap.value=f.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,h.lightMapTransform)}f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function o(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function a(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function c(h,f,b,x){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*b,h.scale.value=x*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function d(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function l(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function p(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),e.get(f).envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function m(h,f,b){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&h.clearcoatNormalScale.value.negate())),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=b.texture,h.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,f){f.matcap&&(h.matcap.value=f.matcap)}function _(h,f){const b=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(b.matrixWorld),h.nearDistance.value=b.shadow.camera.near,h.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pp(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,x){const R=x.program;i.uniformBlockBinding(b,R)}function u(b,x){let R=r[b.id];R===void 0&&(g(b),R=d(b),r[b.id]=R,b.addEventListener("dispose",h));const L=x.program;i.updateUBOMapping(b,L);const w=e.render.frame;s[b.id]!==w&&(p(b),s[b.id]=w)}function d(b){const x=l();b.__bindingPointIndex=x;const R=n.createBuffer(),L=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,R),R}function l(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const x=r[b.id],R=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,A=R.length;w<A;w++){const H=Array.isArray(R[w])?R[w]:[R[w]];for(let M=0,T=H.length;M<T;M++){const U=H[M];if(m(U,w,M,L)===!0){const q=U.__offset,K=Array.isArray(U.value)?U.value:[U.value];let P=0;for(let N=0;N<K.length;N++){const G=K[N],j=_(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,q+P,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,x,R,L){const w=b.value,A=x+"_"+R;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{const H=L[A];if(typeof w=="number"||typeof w=="boolean"){if(H!==w)return L[A]=w,!0}else if(H.equals(w)===!1)return H.copy(w),!0}return!1}function g(b){const x=b.uniforms;let R=0;const L=16;for(let A=0,H=x.length;A<H;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,U=M.length;T<U;T++){const q=M[T],K=Array.isArray(q.value)?q.value:[q.value];for(let P=0,N=K.length;P<N;P++){const G=K[P],j=_(G),O=R%L;O!==0&&L-O<j.boundary&&(R+=L-O),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=R,R+=j.storage}}}const w=R%L;return w>0&&(R+=L-w),b.__size=R,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function h(b){const x=b.target;x.removeEventListener("dispose",h);const R=o.indexOf(x.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:u,dispose:f}}class Xo{constructor(e={}){const{canvas:t=lc(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,h=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const x=this;let R=!1,L=0,w=0,A=null,H=-1,M=null;const T=new vt,U=new vt;let q=null;const K=new tt(0);let P=0,N=t.width,G=t.height,j=1,O=null,X=null;const $=new vt(0,0,N,G),ee=new vt(0,0,N,G);let he=!1;const B=new Oo;let Z=!1,Y=!1,le=null;const ge=new xt,Ae=new $e,De=new W,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return A===null?j:1}let I=i;function pt(E,D){for(let z=0;z<E.length;z++){const V=E[z],F=t.getContext(V,D);if(F!==null)return F}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rs}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),I=pt(D,E),I===null)throw pt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let be,Ie,xe,Ke,Be,y,S,k,ie,te,ne,re,se,fe,Te,ze,Q,Ye,He,Ne,ye,pe,ke,Le;function it(){be=new bh(I),Ie=new _h(I,be,e),be.init(Ie),pe=new cp(I,be,Ie),xe=new op(I,be,Ie),Ke=new Ah(I),Be=new qf,y=new lp(I,be,xe,Be,Ie,pe,Ke),S=new xh(x),k=new Eh(x),ie=new Uc(I,Ie),ke=new mh(I,be,ie,Ie),te=new yh(I,ie,Ke,ke),ne=new Lh(I,te,ie,Ke),He=new Ch(I,Ie,y),ze=new vh(Be),re=new Xf(x,S,k,be,Ie,ke,ze),se=new fp(x,Be),fe=new $f,Te=new tp(be,Ie),Ye=new ph(x,S,k,xe,ne,p,c),Q=new ap(x,ne,Ie),Le=new pp(I,Ke,Ie,xe),Ne=new gh(I,be,Ke,Ie),ye=new Th(I,be,Ke,Ie),Ke.programs=re.programs,x.capabilities=Ie,x.extensions=be,x.properties=Be,x.renderLists=fe,x.shadowMap=Q,x.state=xe,x.info=Ke}it();const Ve=new hp(x,I);this.xr=Ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(N,G,!1))},this.getSize=function(E){return E.set(N,G)},this.setSize=function(E,D,z=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,G=D,t.width=Math.floor(E*j),t.height=Math.floor(D*j),z===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(N*j,G*j).floor()},this.setDrawingBufferSize=function(E,D,z){N=E,G=D,j=z,t.width=Math.floor(E*z),t.height=Math.floor(D*z),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,D,z,V){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,D,z,V),xe.viewport(T.copy($).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,D,z,V){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,D,z,V),xe.scissor(U.copy(ee).multiplyScalar(j).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){xe.setScissorTest(he=E)},this.setOpaqueSort=function(E){O=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(E=!0,D=!0,z=!0){let V=0;if(E){let F=!1;if(A!==null){const ce=A.texture.format;F=ce===Mo||ce===So||ce===xo}if(F){const ce=A.texture.type,Se=ce===dn||ce===bn||ce===ws||ce===zn||ce===_o||ce===vo,we=Ye.getClearColor(),ve=Ye.getClearAlpha(),Ee=we.r,Fe=we.g,Oe=we.b;Se?(m[0]=Ee,m[1]=Fe,m[2]=Oe,m[3]=ve,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ee,g[1]=Fe,g[2]=Oe,g[3]=ve,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}D&&(V|=I.DEPTH_BUFFER_BIT),z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),fe.dispose(),Te.dispose(),Be.dispose(),S.dispose(),k.dispose(),ne.dispose(),ke.dispose(),Le.dispose(),re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",mt),Ve.removeEventListener("sessionend",Je),le&&(le.dispose(),le=null),gt.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=Ke.autoReset,D=Q.enabled,z=Q.autoUpdate,V=Q.needsUpdate,F=Q.type;it(),Ke.autoReset=E,Q.enabled=D,Q.autoUpdate=z,Q.needsUpdate=V,Q.type=F}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function de(E){const D=E.target;D.removeEventListener("dispose",de),Pe(D)}function Pe(E){Re(E),Be.remove(E)}function Re(E){const D=Be.get(E).programs;D!==void 0&&(D.forEach(function(z){re.releaseProgram(z)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,z,V,F,ce){D===null&&(D=_e);const Se=F.isMesh&&F.matrixWorld.determinant()<0,we=J(E,D,z,V,F);xe.setMaterial(V,Se);let ve=z.index,Ee=1;if(V.wireframe===!0){if(ve=te.getWireframeAttribute(z),ve===void 0)return;Ee=2}const Fe=z.drawRange,Oe=z.attributes.position;let rt=Fe.start*Ee,At=(Fe.start+Fe.count)*Ee;ce!==null&&(rt=Math.max(rt,ce.start*Ee),At=Math.min(At,(ce.start+ce.count)*Ee)),ve!==null?(rt=Math.max(rt,0),At=Math.min(At,ve.count)):Oe!=null&&(rt=Math.max(rt,0),At=Math.min(At,Oe.count));const ct=At-rt;if(ct<0||ct===1/0)return;ke.setup(F,V,we,z,ve);let Wt,st=Ne;if(ve!==null&&(Wt=ie.get(ve),st=ye,st.setIndex(Wt)),F.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*Ue()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(F.isLine){let We=V.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*Ue()),F.isLineSegments?st.setMode(I.LINES):F.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else F.isPoints?st.setMode(I.POINTS):F.isSprite&&st.setMode(I.TRIANGLES);if(F.isBatchedMesh)st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)st.renderInstances(rt,ct,F.count);else if(z.isInstancedBufferGeometry){const We=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Xn=Math.min(z.instanceCount,We);st.renderInstances(rt,ct,Xn)}else st.render(rt,ct)};function Ze(E,D,z){E.transparent===!0&&E.side===ln&&E.forceSinglePass===!1?(E.side=Dt,E.needsUpdate=!0,jn(E,D,z),E.side=Rn,E.needsUpdate=!0,jn(E,D,z),E.side=ln):jn(E,D,z)}this.compile=function(E,D,z=null){z===null&&(z=E),h=Te.get(z),h.init(),b.push(h),z.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(x._useLegacyLights);const V=new Set;return E.traverse(function(F){const ce=F.material;if(ce)if(Array.isArray(ce))for(let Se=0;Se<ce.length;Se++){const we=ce[Se];Ze(we,z,F),V.add(we)}else Ze(ce,z,F),V.add(ce)}),b.pop(),h=null,V},this.compileAsync=function(E,D,z=null){const V=this.compile(E,D,z);return new Promise(F=>{function ce(){if(V.forEach(function(Se){Be.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){F(E);return}setTimeout(ce,10)}be.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ce=null;function lt(E){Ce&&Ce(E)}function mt(){gt.stop()}function Je(){gt.start()}const gt=new Bo;gt.setAnimationLoop(lt),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(E){Ce=E,Ve.setAnimationLoop(E),E===null?gt.stop():gt.start()},Ve.addEventListener("sessionstart",mt),Ve.addEventListener("sessionend",Je),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(D),D=Ve.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,D,A),h=Te.get(E,b.length),h.init(),b.push(h),ge.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),B.setFromProjectionMatrix(ge),Y=this.localClippingEnabled,Z=ze.init(this.clippingPlanes,Y),_=fe.get(E,f.length),_.init(),f.push(_),Ot(E,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(O,X),this.info.render.frame++,Z===!0&&ze.beginShadows();const z=h.state.shadowsArray;if(Q.render(z,E,D),Z===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,E),h.setupLights(x._useLegacyLights),D.isArrayCamera){const V=D.cameras;for(let F=0,ce=V.length;F<ce;F++){const Se=V[F];Ei(_,E,Se,Se.viewport)}}else Ei(_,E,D);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,D),ke.resetDefaultState(),H=-1,M=null,b.pop(),b.length>0?h=b[b.length-1]:h=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Ot(E,D,z,V){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||B.intersectsSprite(E)){V&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);const Se=ne.update(E),we=E.material;we.visible&&_.push(E,Se,we,z,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||B.intersectsObject(E))){const Se=ne.update(E),we=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),De.copy(Se.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(ge)),Array.isArray(we)){const ve=Se.groups;for(let Ee=0,Fe=ve.length;Ee<Fe;Ee++){const Oe=ve[Ee],rt=we[Oe.materialIndex];rt&&rt.visible&&_.push(E,Se,rt,z,De.z,Oe)}}else we.visible&&_.push(E,Se,we,z,De.z,null)}}const ce=E.children;for(let Se=0,we=ce.length;Se<we;Se++)Ot(ce[Se],D,z,V)}function Ei(E,D,z,V){const F=E.opaque,ce=E.transmissive,Se=E.transparent;h.setupLightsView(z),Z===!0&&ze.setGlobalState(x.clippingPlanes,z),ce.length>0&&wr(F,ce,D,z),V&&xe.viewport(T.copy(V)),F.length>0&&Wn(F,D,z),ce.length>0&&Wn(ce,D,z),Se.length>0&&Wn(Se,D,z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function wr(E,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ce=Ie.isWebGL2;le===null&&(le=new pn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Ui:dn,minFilter:Ni,samples:ce?4:0})),x.getDrawingBufferSize(Ae),ce?le.setSize(Ae.x,Ae.y):le.setSize(Ms(Ae.x),Ms(Ae.y));const Se=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(K),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=An,Wn(E,z,V),y.updateMultisampleRenderTarget(le),y.updateRenderTargetMipmap(le);let ve=!1;for(let Ee=0,Fe=D.length;Ee<Fe;Ee++){const Oe=D[Ee],rt=Oe.object,At=Oe.geometry,ct=Oe.material,Wt=Oe.group;if(ct.side===ln&&rt.layers.test(V.layers)){const st=ct.side;ct.side=Dt,ct.needsUpdate=!0,zi(rt,z,V,At,ct,Wt),ct.side=st,ct.needsUpdate=!0,ve=!0}}ve===!0&&(y.updateMultisampleRenderTarget(le),y.updateRenderTargetMipmap(le)),x.setRenderTarget(Se),x.setClearColor(K,P),x.toneMapping=we}function Wn(E,D,z){const V=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ce=E.length;F<ce;F++){const Se=E[F],we=Se.object,ve=Se.geometry,Ee=V===null?Se.material:V,Fe=Se.group;we.layers.test(z.layers)&&zi(we,D,z,ve,Ee,Fe)}}function zi(E,D,z,V,F,ce){E.onBeforeRender(x,D,z,V,F,ce),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,D,z,V,E,ce),F.transparent===!0&&F.side===ln&&F.forceSinglePass===!1?(F.side=Dt,F.needsUpdate=!0,x.renderBufferDirect(z,D,V,F,E,ce),F.side=Rn,F.needsUpdate=!0,x.renderBufferDirect(z,D,V,F,E,ce),F.side=ln):x.renderBufferDirect(z,D,V,F,E,ce),E.onAfterRender(x,D,z,V,F,ce)}function jn(E,D,z){D.isScene!==!0&&(D=_e);const V=Be.get(E),F=h.state.lights,ce=h.state.shadowsArray,Se=F.state.version,we=re.getParameters(E,F.state,ce,D,z),ve=re.getProgramCacheKey(we);let Ee=V.programs;V.environment=E.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(E.isMeshStandardMaterial?k:S).get(E.envMap||V.environment),Ee===void 0&&(E.addEventListener("dispose",de),Ee=new Map,V.programs=Ee);let Fe=Ee.get(ve);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===Se)return Gi(E,we),Fe}else we.uniforms=re.getUniforms(E),E.onBuild(z,we,x),E.onBeforeCompile(we,x),Fe=re.acquireProgram(we,ve),Ee.set(ve,Fe),V.uniforms=we.uniforms;const Oe=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=ze.uniform),Gi(E,we),V.needsLights=qe(E),V.lightsStateVersion=Se,V.needsLights&&(Oe.ambientLightColor.value=F.state.ambient,Oe.lightProbe.value=F.state.probe,Oe.directionalLights.value=F.state.directional,Oe.directionalLightShadows.value=F.state.directionalShadow,Oe.spotLights.value=F.state.spot,Oe.spotLightShadows.value=F.state.spotShadow,Oe.rectAreaLights.value=F.state.rectArea,Oe.ltc_1.value=F.state.rectAreaLTC1,Oe.ltc_2.value=F.state.rectAreaLTC2,Oe.pointLights.value=F.state.point,Oe.pointLightShadows.value=F.state.pointShadow,Oe.hemisphereLights.value=F.state.hemi,Oe.directionalShadowMap.value=F.state.directionalShadowMap,Oe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Oe.spotShadowMap.value=F.state.spotShadowMap,Oe.spotLightMatrix.value=F.state.spotLightMatrix,Oe.spotLightMap.value=F.state.spotLightMap,Oe.pointShadowMap.value=F.state.pointShadowMap,Oe.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function ki(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=fr.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Gi(E,D){const z=Be.get(E);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function J(E,D,z,V,F){D.isScene!==!0&&(D=_e),y.resetTextureUnits();const ce=D.fog,Se=V.isMeshStandardMaterial?D.environment:null,we=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fn,ve=(V.isMeshStandardMaterial?k:S).get(V.envMap||Se),Ee=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Fe=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!z.morphAttributes.position,rt=!!z.morphAttributes.normal,At=!!z.morphAttributes.color;let ct=An;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ct=x.toneMapping);const Wt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=Wt!==void 0?Wt.length:0,We=Be.get(V),Xn=h.state.lights;if(Z===!0&&(Y===!0||E!==M)){const Bt=E===M&&V.id===H;ze.setState(V,E,Bt)}let Qe=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Xn.state.version||We.outputColorSpace!==we||F.isBatchedMesh&&We.batching===!1||!F.isBatchedMesh&&We.batching===!0||F.isInstancedMesh&&We.instancing===!1||!F.isInstancedMesh&&We.instancing===!0||F.isSkinnedMesh&&We.skinning===!1||!F.isSkinnedMesh&&We.skinning===!0||F.isInstancedMesh&&We.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&We.instancingColor===!1&&F.instanceColor!==null||We.envMap!==ve||V.fog===!0&&We.fog!==ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ze.numPlanes||We.numIntersection!==ze.numIntersection)||We.vertexAlphas!==Ee||We.vertexTangents!==Fe||We.morphTargets!==Oe||We.morphNormals!==rt||We.morphColors!==At||We.toneMapping!==ct||Ie.isWebGL2===!0&&We.morphTargetsCount!==st)&&(Qe=!0):(Qe=!0,We.__version=V.version);let Cn=We.currentProgram;Qe===!0&&(Cn=jn(V,D,F));let Ds=!1,bi=!1,Cr=!1;const St=Cn.getUniforms(),Ln=We.uniforms;if(xe.useProgram(Cn.program)&&(Ds=!0,bi=!0,Cr=!0),V.id!==H&&(H=V.id,bi=!0),Ds||M!==E){St.setValue(I,"projectionMatrix",E.projectionMatrix),St.setValue(I,"viewMatrix",E.matrixWorldInverse);const Bt=St.map.cameraPosition;Bt!==void 0&&Bt.setValue(I,De.setFromMatrixPosition(E.matrixWorld)),Ie.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,bi=!0,Cr=!0)}if(F.isSkinnedMesh){St.setOptional(I,F,"bindMatrix"),St.setOptional(I,F,"bindMatrixInverse");const Bt=F.skeleton;Bt&&(Ie.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),St.setValue(I,"boneTexture",Bt.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(St.setOptional(I,F,"batchingTexture"),St.setValue(I,"batchingTexture",F._matricesTexture,y));const Lr=z.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0&&Ie.isWebGL2===!0)&&He.update(F,z,Cn),(bi||We.receiveShadow!==F.receiveShadow)&&(We.receiveShadow=F.receiveShadow,St.setValue(I,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ln.envMap.value=ve,Ln.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),bi&&(St.setValue(I,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Me(Ln,Cr),ce&&V.fog===!0&&se.refreshFogUniforms(Ln,ce),se.refreshMaterialUniforms(Ln,V,j,G,le),fr.upload(I,ki(We),Ln,y)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fr.upload(I,ki(We),Ln,y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(I,"center",F.center),St.setValue(I,"modelViewMatrix",F.modelViewMatrix),St.setValue(I,"normalMatrix",F.normalMatrix),St.setValue(I,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Bt=V.uniformsGroups;for(let Pr=0,el=Bt.length;Pr<el;Pr++)if(Ie.isWebGL2){const Ns=Bt[Pr];Le.update(Ns,Cn),Le.bind(Ns,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function Me(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function qe(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,D,z){Be.get(E.texture).__webglTexture=D,Be.get(E.depthTexture).__webglTexture=z;const V=Be.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const z=Be.get(E);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,z=0){A=E,L=D,w=z;let V=!0,F=null,ce=!1,Se=!1;if(E){const ve=Be.get(E);ve.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):ve.__webglFramebuffer===void 0?y.setupRenderTarget(E):ve.__hasExternalTextures&&y.rebindTextures(E,Be.get(E.texture).__webglTexture,Be.get(E.depthTexture).__webglTexture);const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Se=!0);const Fe=Be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?F=Fe[D][z]:F=Fe[D],ce=!0):Ie.isWebGL2&&E.samples>0&&y.useMultisampledRTT(E)===!1?F=Be.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?F=Fe[z]:F=Fe,T.copy(E.viewport),U.copy(E.scissor),q=E.scissorTest}else T.copy($).multiplyScalar(j).floor(),U.copy(ee).multiplyScalar(j).floor(),q=he;if(xe.bindFramebuffer(I.FRAMEBUFFER,F)&&Ie.drawBuffers&&V&&xe.drawBuffers(E,F),xe.viewport(T),xe.scissor(U),xe.setScissorTest(q),ce){const ve=Be.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,z)}else if(Se){const ve=Be.get(E.texture),Ee=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.__webglTexture,z||0,Ee)}H=-1},this.readRenderTargetPixels=function(E,D,z,V,F,ce,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){xe.bindFramebuffer(I.FRAMEBUFFER,we);try{const ve=E.texture,Ee=ve.format,Fe=ve.type;if(Ee!==Ht&&pe.convert(Ee)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===Ui&&(be.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&be.has("EXT_color_buffer_float"));if(Fe!==dn&&pe.convert(Fe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===yn&&(Ie.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-V&&z>=0&&z<=E.height-F&&I.readPixels(D,z,V,F,pe.convert(Ee),pe.convert(Fe),ce)}finally{const ve=A!==null?Be.get(A).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(E,D,z=0){const V=Math.pow(2,-z),F=Math.floor(D.image.width*V),ce=Math.floor(D.image.height*V);y.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,E.x,E.y,F,ce),xe.unbindTexture()},this.copyTextureToTexture=function(E,D,z,V=0){const F=D.image.width,ce=D.image.height,Se=pe.convert(z.format),we=pe.convert(z.type);y.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,E.x,E.y,F,ce,Se,we,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,Se,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,V,E.x,E.y,Se,we,D.image),V===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,D,z,V,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=E.max.x-E.min.x+1,Se=E.max.y-E.min.y+1,we=E.max.z-E.min.z+1,ve=pe.convert(V.format),Ee=pe.convert(V.type);let Fe;if(V.isData3DTexture)y.setTexture3D(V,0),Fe=I.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)y.setTexture2DArray(V,0),Fe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const Oe=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),At=I.getParameter(I.UNPACK_SKIP_PIXELS),ct=I.getParameter(I.UNPACK_SKIP_ROWS),Wt=I.getParameter(I.UNPACK_SKIP_IMAGES),st=z.isCompressedTexture?z.mipmaps[F]:z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?I.texSubImage3D(Fe,F,D.x,D.y,D.z,ce,Se,we,ve,Ee,st.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Fe,F,D.x,D.y,D.z,ce,Se,we,ve,st.data)):I.texSubImage3D(Fe,F,D.x,D.y,D.z,ce,Se,we,ve,Ee,st),I.pixelStorei(I.UNPACK_ROW_LENGTH,Oe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt),F===0&&V.generateMipmaps&&I.generateMipmap(Fe),xe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?y.setTextureCube(E,0):E.isData3DTexture?y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?y.setTexture2DArray(E,0):y.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){L=0,w=0,A=null,xe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Cs?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===br?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Gn:bo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gn?_t:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mp extends Xo{}mp.prototype.isWebGL1Renderer=!0;class gp extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class _p extends Nt{constructor(e,t,i,r,s,o,a,c,u){super(e,t,i,r,s,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rs);const vp=`
varying vec2 vUv;
uniform sampler2D tOld; // Previous Frame
uniform sampler2D tNew; // Current Incoming Frame
uniform float uFeedback; // 0.0 - 1.0
uniform float uDecay;    // 0.0 - 1.0 (Darkening)
uniform float uWarp;     // Strength of Luma displacement
uniform float uBlockSize; // Quantization for macroblock look
uniform float uRGBOffset; // Chroma separation strength
uniform vec2 uResolution;
uniform bool uReset;      // Hard I-Frame reset

// Displacement Uniforms
uniform float uTime;
uniform float uDispStrength; // Noise warp strength
uniform float uDispScale;    // Noise frequency
uniform float uDispSpeed;    // Noise animation speed
uniform float uDispQuantize; // Quantization of noise UVs

// --- RANDOM & NOISE ---
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main() {
    // If reset is triggered (I-Frame), just output the new frame
    if (uReset) {
        gl_FragColor = texture2D(tNew, vUv);
        return;
    }

    // --- TIME STEPPING ---
    // Quantize time to create a "stop motion" stutter effect
    // This prevents static images from vibrating uncontrollably
    float speed = max(1.0, uDispSpeed);
    float steppedTime = floor(uTime * speed); 

    vec2 uv = vUv;
    
    // --- 1. UV TEARING (Map & Destroy) ---
    // Instead of liquid noise, we displace strips of the image horizontally
    
    // Create random strips based on Y coordinate and Stepped Time
    float stripSize = max(0.01, 1.0 / uDispScale);
    float stripId = floor(uv.y / stripSize);
    
    // Determine shift amount for this strip
    float shift = (noise(vec2(stripId, steppedTime)) - 0.5) * 2.0;
    
    // Apply Strength
    float strength = uDispStrength * 0.01;
    
    // Threshold - only move some strips
    float threshold = 0.4; // 40% of strips might move
    if (abs(shift) < threshold) shift = 0.0;
    
    vec2 tornUv = uv;
    tornUv.x += shift * strength;

    // --- 2. LUMA WARP (From Input) ---
    // Use the brightness of the NEW image to warp the OLD image
    // This makes the glitch react to the image content
    vec4 currentPixel = texture2D(tNew, vUv);
    float luma = dot(currentPixel.rgb, vec3(0.299, 0.587, 0.114));
    
    vec2 lumaOffset = vec2(
        (luma - 0.5) * (uWarp * 0.005),
        (luma - 0.5) * (uWarp * 0.005) 
    );
    
    vec2 finalReadUv = tornUv + lumaOffset;

    // --- 3. FEEDBACK SAMPLE ---
    vec4 oldCol;
    
    if (uRGBOffset > 0.0) {
        float off = uRGBOffset * 0.002;
        float r = texture2D(tOld, finalReadUv + vec2(off, 0.0)).r;
        float g = texture2D(tOld, finalReadUv).g;
        float b = texture2D(tOld, finalReadUv - vec2(off, 0.0)).b;
        oldCol = vec4(r, g, b, 1.0);
    } else {
        oldCol = texture2D(tOld, finalReadUv);
    }

    // --- 4. MIX & OUTPUT ---
    vec4 newCol = texture2D(tNew, vUv);

    // Temporal Blend
    vec4 mixedCol = mix(newCol, oldCol, uFeedback);
    
    // Decay
    mixedCol.rgb -= (uDecay * 0.01);
    mixedCol = max(vec4(0.0), mixedCol); // Clamp to black

    gl_FragColor = vec4(mixedCol.rgb, 1.0);
}
`,xp=`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;class Sp{constructor(){this.width=0,this.height=0,this.frameCounter=0,this._sourceTexture=null,this.renderer=new Xo({alpha:!0,preserveDrawingBuffer:!0}),this.renderer.autoClear=!1,this.scene=new gp,this.camera=new zo(-1,1,1,-1,0,1);const e={minFilter:Tt,magFilter:Tt,format:Ht,type:dn};this.targetA=new pn(1,1,e),this.targetB=new pn(1,1,e),this.material=new wn({uniforms:{tOld:{value:null},tNew:{value:null},uTime:{value:0},uFeedback:{value:.9},uDecay:{value:0},uWarp:{value:10},uBlockSize:{value:32},uRGBOffset:{value:0},uDispStrength:{value:0},uDispScale:{value:20},uDispSpeed:{value:10},uDispQuantize:{value:0},uResolution:{value:new $e(1,1)},uReset:{value:!1}},vertexShader:xp,fragmentShader:vp}),this.quad=new un(new Ar(2,2),this.material),this.scene.add(this.quad)}resize(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.renderer.setSize(e,t),this.targetA.setSize(e,t),this.targetB.setSize(e,t),this.material.uniforms.uResolution.value.set(e,t))}clear(){this.renderer.setClearColor(0,0),this.renderer.setRenderTarget(this.targetA),this.renderer.clear(),this.renderer.setRenderTarget(this.targetB),this.renderer.clear(),this.renderer.setRenderTarget(null),this.frameCounter=0,this._sourceTexture&&(this._sourceTexture.dispose(),this._sourceTexture=null)}render(e,t,i){this.resize(e.width,e.height),this.frameCounter++;const r=this.material.uniforms;this._sourceTexture?(this._sourceTexture.image=e,this._sourceTexture.needsUpdate=!0):(this._sourceTexture=new _p(e),this._sourceTexture.minFilter=Tt,this._sourceTexture.magFilter=Tt),r.tNew.value=this._sourceTexture,r.tOld.value=this.targetA.texture,r.uTime.value=i,r.uFeedback.value=t.moshFeedback/100,r.uDecay.value=t.moshDecay,r.uWarp.value=t.moshWarp,r.uBlockSize.value=Math.max(1,t.moshBlockSize*2),r.uRGBOffset.value=t.moshRGBOffset,r.uDispStrength.value=t.moshDispStrength,r.uDispScale.value=t.moshDispScale,r.uDispSpeed.value=t.moshDispSpeed,r.uDispQuantize.value=t.moshDispQuantize;const o=this.frameCounter===1||t.iframeInterval>0&&this.frameCounter%t.iframeInterval===0;r.uReset.value=o,this.renderer.setRenderTarget(this.targetB),this.renderer.render(this.scene,this.camera);const a=this.targetA;return this.targetA=this.targetB,this.targetB=a,this.renderer.setRenderTarget(null),this.material.uniforms.tNew.value=this.targetA.texture,this.material.uniforms.uReset.value=!0,this.renderer.render(this.scene,this.camera),this.renderer.domElement}}const bs=new Sp,En={frameCounter:0,lastInjectTime:0,isInjecting:!1,injectFrameCount:0,historyFrames:[],prevShaderMoshEnabled:!1},qo=60,kt={input:document.createElement("canvas"),compose:document.createElement("canvas"),jpeg:document.createElement("canvas"),mosh:document.createElement("canvas"),swap:document.createElement("canvas"),hold:document.createElement("canvas"),prev:document.createElement("canvas")},Mp=()=>({inCtx:kt.input.getContext("2d",{willReadFrequently:!0}),compCtx:kt.compose.getContext("2d",{willReadFrequently:!0}),jpgCtx:kt.jpeg.getContext("2d",{willReadFrequently:!0}),moshCtx:kt.mosh.getContext("2d",{willReadFrequently:!0}),swapCtx:kt.swap.getContext("2d",{willReadFrequently:!0}),holdCtx:kt.hold.getContext("2d",{willReadFrequently:!0}),prevCtx:kt.prev.getContext("2d",{willReadFrequently:!0})}),ot=(n,e,t)=>{const i=Math.sin(t)*1e4,r=i-Math.floor(i);return Math.floor(r*(e-n+1))+n},Ep=()=>{En.frameCounter=0,En.historyFrames=[],En.lastInjectTime=0,En.isInjecting=!1,En.injectFrameCount=0,En.prevShaderMoshEnabled=!1,bs.clear(),Object.values(kt).forEach(n=>{var e;(e=n.getContext("2d"))==null||e.clearRect(0,0,n.width,n.height)})};function Yo(){return{state:En,buffers:kt}}function bp(n,e,t,i,r,s){const o=Math.max(0,Math.min(1,(Number.isFinite(t)?t:0)/100)),a=Math.max(0,Math.min(1,(Number.isFinite(i)?i:0)/100));e.save(),a<=0?(e.globalAlpha=1,e.globalCompositeOperation="source-over",e.clearRect(0,0,r,s)):(e.globalCompositeOperation="destination-out",e.globalAlpha=1-a,e.fillStyle="#000000",e.fillRect(0,0,r,s),e.globalCompositeOperation="source-over",e.globalAlpha=1),e.drawImage(n.buffers.input,0,0,r,s),o>0&&(e.globalCompositeOperation="screen",e.globalAlpha=o,e.fillStyle="#FFFFFF",e.fillRect(0,0,r,s)),e.restore(),n.state.historyFrames.length=0}function yp(n,e,t,i,r,s){let o=n.buffers.mosh;const a=Math.max(0,Math.min(100,t.refSwap));if(a>0&&n.state.historyFrames.length>0){const m=_=>{const h=Math.sin(_)*1e4;return h-Math.floor(h)};if(m(s)*100<a){const _=Math.floor(m(s+1)*n.state.historyFrames.length);o=n.state.historyFrames[_]}}e.save(),e.clearRect(0,0,i,r);const c=(t.motionResidue??0)/100;let u=1+t.flowZoom/500,d=t.flowRotate*Math.PI/180,l=t.flowX,p=t.flowY;if(c>0){const m=Math.floor(s*10),g=Math.sin(m*.1)*c*.5,_=Math.cos(m*.1)*c*.5,h=Math.sin(m*.2)*c*.01,f=Math.cos(m*.3)*c*.001;l+=g,p+=_,d+=h,u+=f}e.translate(i/2+l,r/2+p),e.rotate(d),e.scale(u,u),e.translate(-i/2,-r/2),e.drawImage(o,0,0,i,r),e.restore()}function Tp(n,e,t,i,r){const s=Math.max(0,Math.min(100,t));e.save(),s<100&&(e.globalCompositeOperation="destination-out",e.globalAlpha=(100-s)*.01,e.fillStyle="#000000",e.fillRect(0,0,i,r)),e.globalCompositeOperation="source-over",e.globalAlpha=1,e.drawImage(n.buffers.swap,0,0,i,r),e.restore()}function Ap(n,e,t,i,r,s){const o=Math.max(8,t.blockSize),a=Math.ceil(i/o),c=Math.ceil(r/o),u=Math.max(0,Math.min(100,t.blockList))/100,d=a*c,l=Math.floor(d*u*.1),p=(m,g,_)=>{const h=Math.sin(_)*1e4,f=h-Math.floor(h);return Math.floor(f*(g-m+1))+m};e.save();for(let m=0;m<l;m++){const g=p(0,a,s+m),_=p(0,c,s+m+1),h=g*o,f=_*o,b=p(-2,2,s+m*2)*o,x=p(-2,2,s+m*3)*o,R=Math.max(0,Math.min(i-o,h+b)),L=Math.max(0,Math.min(r-o,f+x));e.drawImage(n.buffers.mosh,R,L,o,o,h,f,o,o)}e.restore()}function to(n,e,t){const i=new Uint8Array(e*t);for(let r=0,s=0;r<n.length;r+=4,s++){const o=n[r],a=n[r+1],c=n[r+2];i[s]=(o*299+a*587+c*114)/1e3}return i}function Rp(n,e,t,i,r,s){const o=n.buffers.prev.getContext("2d",{willReadFrequently:!0}),a=n.buffers.input.getContext("2d",{willReadFrequently:!0});if(!o||!a)return;if(n.buffers.prev.width!==t||n.buffers.prev.height!==i){n.buffers.prev.width=t,n.buffers.prev.height=i,o.clearRect(0,0,t,i),o.drawImage(n.buffers.input,0,0,t,i);return}const c=t,u=i,d=Math.max(8,Math.floor(r)),l=Math.ceil(c/d),p=Math.ceil(u/d),m=Math.max(0,Math.floor(s)),g=o.getImageData(0,0,c,u).data,_=a.getImageData(0,0,c,u).data,h=to(g,c,u),f=to(_,c,u);e.save(),e.clearRect(0,0,c,u);for(let b=0;b<p;b++)for(let x=0;x<l;x++){const R=x*d,L=b*d,w=Math.min(d,c-R),A=Math.min(d,u-L);let H=0,M=0,T=Number.POSITIVE_INFINITY;for(let K=-m;K<=m;K++)for(let P=-m;P<=m;P++){let N=0,G=0;const j=R+P*d,O=L+K*d;if(j<0||O<0||j+w>c||O+A>u)continue;for(let $=0;$<A;$+=4){const ee=(L+$)*c+R,he=(O+$)*c+j;for(let B=0;B<w;B+=4)N+=Math.abs(f[ee+B]-h[he+B]),G++}const X=N/Math.max(1,G);X<T&&(T=X,H=P,M=K)}const U=R+H*d,q=L+M*d;e.drawImage(n.buffers.prev,U,q,w,A,R,L,w,A)}e.restore()}const Zt=(n,e,t)=>{const i=Math.sin(t)*1e4,r=i-Math.floor(i);return Math.floor(r*(e-n+1))+n},Ct=n=>(Math.sin(n)+Math.sin(n*2.1)+Math.sin(n*4.4))/3+.5,dr=(n,e,t)=>{const i=n+e*57+t*131,r=i<<13^i;return 1-(r*(r*r*15731+789221)+1376312589&2147483647)/1073741824},no=(n,e,t)=>{const i=Math.floor(n),r=n-i,s=Math.floor(e),o=e-s,a=dr(i,s,t),c=dr(i+1,s,t),u=dr(i,s+1,t),d=dr(i+1,s+1,t),l=a*(1-r)+c*r,p=u*(1-r)+d*r;return l*(1-o)+p*o};function wp(n,e,t,i,r,s,o){if(i.melt<=0)return;t.save(),t.clearRect(0,0,r,s),t.drawImage(n.buffers.compose,0,0,r,s);const a=Math.max(0,Math.min(100,i.melt))/100,c=Math.max(0,Math.min(100,i.burn))/100,u=Math.ceil(r/Math.max(2,8-a*6)),d=r/u;e.save(),c>.5?e.globalCompositeOperation="hard-light":c>.3&&(e.globalCompositeOperation="overlay");const l=Math.ceil(a*3)+1;for(let p=0;p<l;p++){const m=1/l;e.globalAlpha=m;for(let g=0;g<u;g++){const _=g*d,h=g*99.1+p*50,f=a*2,b=Math.sin(o*f+g*.2)*.5+.5,x=Math.sin(o*f*.5+g*.5)*.3,R=Ct(g*3+o*.5)*.2,L=b+x+R,w=a*s*.9,A=(Ct(h+o)-.5)*s*a*.3,H=L*s*a*.4;let M=w*(b*.5+.5)+A+H;if(c>0){const q=(Ct(h+o*2)-.5)*s*c*.5;M+=q}a>.5&&Ct(g*7+o)>.85&&(M*=1.5+c*.5);const T=(Ct(g*11+o*1.5)-.5)*d*a*2,U=1+(Ct(g*13+o)-.5)*a*.15;e.drawImage(n.buffers.swap,_,0,d,s,_+T,M,d,s*U)}}e.globalAlpha=1,e.globalCompositeOperation="source-over",e.restore(),t.restore()}function Cp(n,e,t,i,r,s,o){if(i<=0)return;t.save(),t.clearRect(0,0,r,s),t.drawImage(n.buffers.compose,0,0,r,s);const a=Math.max(0,Math.min(100,i))/100,c=3,u=80-a*50,d=(c+u)/2,l=Math.ceil(r/d);e.save(),e.clearRect(0,0,r,s);let p=0;for(let m=0;m<l&&p<r;m++){const g=(Ct(m*17+o*.5)-.5)*(u-c),_=Math.max(c,Math.min(u,d+g)),h=Ct(m*20.2+o),f=Math.sin(m*.5+o*2),x=(h*.6+(f*.5+.5)*.4-.5)*s*a,L=(m%2===0?1:-1)*a*s*.2*(h>.7?1:0),w=x+L;if(a>.6&&Ct(m*23+o)>.9){e.save();const H=p+_/2,M=s/2+w;e.translate(H,M),e.rotate((Ct(m*29+o)-.5)*Math.PI*a*.3),e.drawImage(n.buffers.swap,p,0,_,s,-_/2,-s/2-w,_,s),e.restore()}else e.drawImage(n.buffers.swap,p,0,_,s,p,w,_,s),w>0?e.drawImage(n.buffers.swap,p,s-w,_,w,p,0,_,w):w<0&&e.drawImage(n.buffers.swap,p,0,_,-w,p,s+w,_,-w);p+=_}e.restore(),t.restore()}function Lp(n,e,t,i,r,s,o){const a=Math.max(0,Math.min(100,i.scatter))/100;if(a<=0)return;const c=Math.max(0,Math.min(100,i.burn))/100,u=Math.floor(a*120)+10;e.save();for(let d=0;d<u;d++){const l=o*10+d*133.7,p=Ct(l)*a;let m,g;p>.8?(m=Zt(r/10,r/3,l),g=Zt(s/10,s/3,l+1)):p>.5?(m=Zt(r/20,r/8,l),g=Zt(s/20,s/8,l+1)):(m=Zt(5,r/15,l),g=Zt(5,s/15,l+1));const _=Zt(0,Math.max(1,r-m),l+2),h=Zt(0,Math.max(1,s-g),l+3),f=a*200,b=no(d*.1,o*.1,l)*f,x=no(d*.1,o*.1,l+100)*f*.5,R=_+b+Zt(-50,50,l+4)*a,L=h+x+Zt(-30,30,l+5)*a;if(c>.3){const M=Ct(l+10);M>.85?e.globalCompositeOperation="difference":M>.7?e.globalCompositeOperation="color-dodge":M>.55?e.globalCompositeOperation="overlay":M>.4&&(e.globalCompositeOperation="screen")}const w=1+(Ct(l+20)-.5)*a*.4,A=a>.7?(Ct(l+30)-.5)*Math.PI*.3*a:0,H=.7+Ct(l+40)*.3;if(e.globalAlpha=H,Math.abs(A)>.01||Math.abs(w-1)>.01){e.save();const M=R+m*w/2,T=L+g*w/2;e.translate(M,T),e.rotate(A),e.scale(w,w),e.drawImage(t,_,h,m,g,-m/2,-g/2,m,g),e.restore()}else e.drawImage(t,_,h,m,g,R,L,m*w,g*w);e.globalCompositeOperation="source-over",e.globalAlpha=1}e.restore()}function Pp(n,e,t,i,r,s="brightness"){if(e<=0)return;const o=n.getImageData(0,0,t,i),a=o.data,c=Math.max(0,Math.min(100,e))/100,u=Math.floor(i*c),d=Math.floor((i-u)/2);for(let l=d;l<d+u;l++){const p=Math.floor(1+c*10);for(let m=0;m<p;m++){const g=Math.floor(m/p*t),_=Math.floor((m+1)/p*t),h=[];for(let f=g;f<_;f++){const b=(l*t+f)*4,x=a[b],R=a[b+1],L=a[b+2],w=a[b+3];let A;s==="brightness"?A=(x+R+L)/3:s==="hue"?A=x:A=(x+R*2+L)/4,h.push([A,x,R,L,w])}h.sort((f,b)=>f[0]-b[0]);for(let f=g;f<_;f++){const b=f-g,x=h[b],R=(l*t+f)*4;a[R]=x[1],a[R+1]=x[2],a[R+2]=x[3],a[R+3]=x[4]}}}n.putImageData(o,0,0)}function Dp(n,e,t,i,r){if(r<=0)return;const s=n.getImageData(0,0,e.width,e.height),o=s.data,a=new Uint8ClampedArray(o.length),c=Math.max(0,Math.min(100,r))/100,u=Math.floor(t*c),d=Math.floor(i*c);for(let l=0;l<e.height;l++)for(let p=0;p<e.width;p++){const m=(l*e.width+p)*4,g=Math.max(0,Math.min(e.width-1,p+u)),h=(Math.max(0,Math.min(e.height-1,l))*e.width+g)*4,f=m,b=Math.max(0,Math.min(e.width-1,p-u)),R=(Math.max(0,Math.min(e.height-1,l+d))*e.width+b)*4;a[m]=o[h],a[m+1]=o[f+1],a[m+2]=o[R+2],a[m+3]=o[m+3]}for(let l=0;l<o.length;l++)o[l]=a[l];n.putImageData(s,0,0)}let ui=null,Np=0;const Mr=new Map;let Di=!1,Gt=null,ys="",Ts=0,As=0;function Up(){if(ui)return ui;try{ui=new Worker(new URL("/errorhead/assets/jpegWorker-Dyb2ocJr.js",import.meta.url),{type:"module"}),ui.onmessage=n=>{const e=n.data;if(!e||e.type!=="result")return;const t=Mr.get(e.id);Mr.delete(e.id),t&&t(e.ok?e.imageBitmap:null)}}catch{ui=null}return ui}async function Ip(n,e,t,i,r,s,o,a){if(!("Worker"in window)||!("createImageBitmap"in window)||!window.OffscreenCanvas)return null;const c=Up();if(!c)return null;const u=await createImageBitmap(n),d=++Np,l=new Promise(p=>Mr.set(d,p));return c.postMessage({id:d,type:"encodeCorrupt",width:e,height:t,quality:i,amount:r,iterations:s,bitmap:u,seed:o,mode:a},[u]),l}function Fp(n){let e=n>>>0;return function(){e+=1831565813;let i=Math.imul(e^e>>>15,1|e);return i^=i+Math.imul(i^i>>>7,61|i),((i^i>>>14)>>>0)/4294967296}}async function Op(n,e,t,i,r,s,o,a){var c;try{const u=Fp(o),d=document.createElement("canvas");d.width=e,d.height=t,d.getContext("2d").drawImage(n,0,0);const p=await((c=d.convertToBlob)==null?void 0:c.call(d,{type:"image/jpeg",quality:i}))||await(await fetch(d.toDataURL("image/jpeg",i))).blob(),m=new Uint8Array(await p.arrayBuffer()),g=a==="safe"?256:32;for(let f=0;f<s;f++){const b=Math.floor(g+u()*(m.length-g-10));u()<r/100&&(m[b]=m[b]+Math.floor(u()*255)&255)}const _=new Blob([m],{type:"image/jpeg"});return await createImageBitmap(_)}catch{return null}}const Bp=async(n,e,t,i,r,s,o)=>{if(i.amount<=0)return n;const a=t.getContext("2d"),c=Math.max(.01,Math.min(1,i.quality/100)),u=`${s}x${o}|q${c}|a${i.amount}|i${i.iterations}`,d=performance.now();return Gt&&(a.clearRect(0,0,s,o),a.drawImage(Gt,0,0,s,o)),!Di&&(u!==ys||d-Ts>80)&&(Di=!0,ys=u,(async()=>{const m=((i.seed??0)^Math.floor(r*1e3))>>>0;let g=await Ip(n,s,o,c,i.amount,i.iterations,m,i.corruptMode||"safe");if(!g&&d>As&&(g=await Op(n,s,o,c,i.amount,i.iterations,m,i.corruptMode||"safe"),As=performance.now()+120),g){if(Gt)try{Gt.close()}catch{}Gt=g,Ts=performance.now()}Di=!1})()),Gt?t:n};function zp(){return{hasBitmap:!!Gt,inFlight:Di}}function kp(){var n;try{Gt&&((n=Gt.close)==null||n.call(Gt))}catch{}Gt=null,ys="",Ts=0,Di=!1,As=0,Mr.clear()}const Gp=(n,e,t,i,r,s)=>{const o=kt.jpeg.getContext("2d"),a=100+t.amount/10,c=`brightness(${t.brightness}%) contrast(${a}%)`,u=t.rgbShift+t.colorOffset,d=t.redShift-u*.5,l=t.greenShift,p=t.blueShift+u*.5;if(d!==0||l!==0||p!==0){n.globalCompositeOperation="screen";const m=(g,_)=>{o.globalCompositeOperation="source-over",o.clearRect(0,0,i,r),o.filter=c,o.drawImage(e,0,0),o.filter="none",o.globalCompositeOperation="multiply",o.fillStyle=g,o.fillRect(0,0,i,r),n.drawImage(kt.jpeg,_,0)};m("#FF0000",d),m("#00FF00",l),m("#0000FF",p),n.globalCompositeOperation="source-over"}else n.filter=c,n.drawImage(e,0,0,i,r),n.filter="none";if(t.scanlines){n.fillStyle=`rgba(0, 0, 0, ${t.scanlineIntensity/200})`;for(let m=0;m<r;m+=4)n.fillRect(0,m,i,2)}if(t.noise>0){const m=t.noise/100*.15;n.fillStyle=`rgba(255, 255, 255, ${m})`;const g=Math.floor(t.noise*.3);for(let _=0;_<g;_++){const h=ot(10,i/2,s+_),f=ot(0,i-h,s+_+1),b=ot(0,r,s+_+2);n.fillRect(f,b,h,1)}}};let cs=0,io=0,ro=0;function Hp(n,e,t,i,r,s){const o=t.phaseEnabled??!1,a=t.phaseOffset??0,c=t.phaseSpeed??0,u=t.phaseJitter??0,d=t.wrapMode??"hard",l=t.banding??"line",p=t.hOffset??0,m=t.hSpeed??0,g=t.hAmount??0,_=t.waveAmount??0,h=t.waveFrequency??0,f=t.waveSpeed??0,b=t.wavePhase??0;if(!o||a===0&&c===0&&u===0&&p===0&&m===0&&g===0&&_===0&&h===0&&f===0&&b===0)return;cs+=c,io+=m,ro+=f;const R=((a+cs)%r+r)%r,L=l==="block"?Math.max(2,Math.round(r/120)):1,w=d==="soft",A=w?.85:1,H=w?.15:0;e.clearRect(0,0,i,r),e.drawImage(n.canvas,0,0,i,r),n.clearRect(0,0,i,r),n.save();const M=(U,q,K,P,N)=>{if(n.globalAlpha=P,N===0){n.drawImage(e.canvas,0,U,i,K,0,q,i,K);return}let G=N%i;if(G<0&&(G+=i),G===0){n.drawImage(e.canvas,0,U,i,K,0,q,i,K);return}const j=i-G;n.drawImage(e.canvas,0,U,j,K,G,q,j,K),n.drawImage(e.canvas,j,U,G,K,0,q,G,K)},T=(U,q,K,P)=>{let N=U;for(;N<0;)N+=r;if(N+K<=r){if(M(N,q,K,A,P),H>0){const O=(N+Math.max(1,Math.floor(K/2)))%r;M(O,q,K,H,P)}return}const G=r-N,j=K-G;G>0&&(M(N,q,G,A,P),H>0&&M((N+Math.max(1,Math.floor(G/2)))%r,q,G,H,P)),j>0&&(M(0,q+G,j,A,P),H>0&&M(Math.max(0,Math.floor(j/2)),q+G,j,H,P))};for(let U=0;U<r;U+=L){const q=U*.013+s*.7,K=Math.sin(q*12.9898)*43758.5453,P=u?(K-Math.floor(K)-.5)*2*u:0,N=(U+R+P)%r,G=Math.PI*2/Math.max(8,L*8),j=io+cs+p,O=g!==0?Math.sin(U*G+j)*g:0,X=_!==0?Math.sin(U*h+b+ro)*_:0,$=O+X;T(N,U,Math.min(L,r-U),$)}n.restore()}let fi=[],Li=[],us=0,so=0;const Vp=n=>{if(n<=0){fi.length=0,Li.length=0,us=0;return}if(!(n===us&&fi.length===n&&Li.length===n)){fi=new Array(n),Li=new Array(n);for(let e=0;e<n;e++)fi[e]=0,Li[e]=Math.random()*2-1;us=n}};function Wp(n,e,t,i,r){if(!(t.vSyncEnabled??!1))return;const o=Math.max(0,Math.floor(t.vSyncBandCount??0)),a=t.vSyncBaseSpeed??0,c=t.vSyncBandVariance??0,u=t.vSyncJitter??0,d=t.vSyncWrapMode??"hard";if(o<=0||a===0&&c===0&&u===0)return;Vp(o),so+=1,e.drawImage(n.canvas,0,0,i,r);const l=d==="soft",p=l?.85:1,m=l?.15:0;n.save(),n.globalCompositeOperation="source-over";const g=(h,f,b,x)=>{n.globalAlpha=x,n.drawImage(e.canvas,0,h,i,b,0,f,i,b)},_=(h,f,b)=>{let x=h;for(;x<0;)x+=r;if(x+b<=r){if(g(x,f,b,p),m>0){const w=(x+Math.max(1,Math.floor(b/2)))%r;g(w,f,b,m)}return}const R=r-x,L=b-R;R>0&&(g(x,f,R,p),m>0&&g((x+Math.max(1,Math.floor(R/2)))%r,f,R,m)),L>0&&(g(0,f+R,L,p),m>0&&g(Math.max(0,Math.floor(L/2)),f+R,L,m))};for(let h=0;h<o;h++){const f=Math.floor(h*r/o),b=Math.floor((h+1)*r/o),x=Math.max(1,b-f),R=a+c*Li[h];fi[h]+=R;let L=fi[h];if(u!==0){const A=(h+1)*12.9898+so*.1,H=Math.sin(A)*43758.5453,M=H-Math.floor(H);L+=(M-.5)*2*u}const w=(f+L)%r;_(w,f,x)}n.restore()}function ao(n,e,t){const i=n.createShader(e);if(n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS)){const r=n.getShaderInfoLog(i);throw n.deleteShader(i),new Error("Shader compilation failed: "+r)}return i}function oo(n,e,t){const i=n.createProgram(),r=ao(n,n.VERTEX_SHADER,e),s=ao(n,n.FRAGMENT_SHADER,t);if(n.attachShader(i,r),n.attachShader(i,s),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS)){const o=n.getProgramInfoLog(i);throw n.deleteProgram(i),new Error("Program linking failed: "+o)}return i}function jp(n){return n.getExtension("EXT_color_buffer_float")?{internal:n.RGBA16F,format:n.RGBA,type:n.HALF_FLOAT}:{internal:n.RGBA8,format:n.RGBA,type:n.UNSIGNED_BYTE}}function ds(n,e,t,i){const r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,i.internal,e,t,0,i.format,i.type,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}function lo(n,e){const t=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,t),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0),t}const co=`#version 300 es
in vec2 position;
out vec2 vUv;
void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,Xp=`#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D u_prev;
uniform sampler2D u_source;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_persistence;
uniform float u_injection;
uniform float u_flowAmp;
uniform float u_flowScale;
uniform float u_flowSpeed;
uniform vec2 u_drift;
uniform float u_globalRot;
uniform float u_globalZoom;
uniform float u_diffusion;

// Simple hash for noise
float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

// 2D Noise
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Curl-ish noise flow
vec2 getFlow(vec2 p, float time) {
    float n1 = noise(p * u_flowScale + time * u_flowSpeed);
    float n2 = noise(p * u_flowScale + time * u_flowSpeed + 5.0);
    return vec2(n1 - 0.5, n2 - 0.5) * u_flowAmp;
}

void main() {
    vec2 uv = vUv;
    
    // 1. Calculate Flow
    vec2 flow = getFlow(uv, u_time);
    
    // 2. Apply Global Transforms (Drift, Rot, Zoom)
    vec2 center = vec2(0.5);
    vec2 toCenter = uv - center;
    
    // Zoom
    toCenter /= (1.0 + u_globalZoom * 0.01);
    
    // Rotate
    float s = sin(u_globalRot);
    float c = cos(u_globalRot);
    toCenter = vec2(toCenter.x * c - toCenter.y * s, toCenter.x * s + toCenter.y * c);
    
    vec2 warpedUv = center + toCenter + flow + u_drift;
    
    // 3. Accumulate with Diffusion
    vec4 prev;
    if (u_diffusion > 0.0) {
        vec2 off = u_diffusion / u_resolution;
        prev = texture(u_prev, warpedUv) * 0.4;
        prev += texture(u_prev, warpedUv + vec2(off.x, 0.0)) * 0.15;
        prev += texture(u_prev, warpedUv - vec2(off.x, 0.0)) * 0.15;
        prev += texture(u_prev, warpedUv + vec2(0.0, off.y)) * 0.15;
        prev += texture(u_prev, warpedUv - vec2(0.0, off.y)) * 0.15;
    } else {
        prev = texture(u_prev, warpedUv);
    }
    
    // 4. Sample Source
    vec4 src = texture(u_source, vUv);
    
    // 5. Blend
    vec4 final = prev * u_persistence;
    final = mix(final, src, u_injection);
    
    fragColor = vec4(final.rgb, 1.0);
}
`,qp=`#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D u_texture;
uniform float u_time;
uniform float u_grain;
uniform float u_chroma;
uniform float u_vignette;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    // 1. Chromatic Aberration
    float r = texture(u_texture, vUv + vec2(u_chroma, 0.0)).r;
    float g = texture(u_texture, vUv).g;
    float b = texture(u_texture, vUv - vec2(u_chroma, 0.0)).b;
    vec3 color = vec3(r, g, b);
    
    // 2. Film Grain
    float noise = hash(vUv + u_time);
    color += (noise - 0.5) * u_grain;
    
    // 3. Vignette
    float d = distance(vUv, vec2(0.5));
    color *= smoothstep(0.8, 0.5, d * u_vignette);
    
    // 4. Contrast Curve (Simple Gamma/S-Curve)
    color = pow(color, vec3(1.1)); 
    
    fragColor = vec4(color, 1.0);
}
`;class Yp{constructor(){if(this.width=0,this.height=0,this.isPing=!0,this._lastUploadOk=!1,this._lastGLError=0,this.canvas=document.createElement("canvas"),this.gl=this.canvas.getContext("webgl2",{preserveDrawingBuffer:!0,alpha:!1,antialias:!1}),!this.gl)throw new Error("WebGL2 not supported");this.moshProgram=oo(this.gl,co,Xp),this.postProgram=oo(this.gl,co,qp),this.quadBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.quadBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW)}init(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t,this.canvas.width=e,this.canvas.height=t;const i=this.gl,r=jp(i);this.pingTex&&i.deleteTexture(this.pingTex),this.pongTex&&i.deleteTexture(this.pongTex),this.pingFbo&&i.deleteFramebuffer(this.pingFbo),this.pongFbo&&i.deleteFramebuffer(this.pongFbo),this.sourceTex&&i.deleteTexture(this.sourceTex),this.pingTex=ds(i,e,t,r),this.pongTex=ds(i,e,t,r),this.pingFbo=lo(i,this.pingTex),this.pongFbo=lo(i,this.pongTex),this.sourceTex=ds(i,e,t,{internal:i.RGBA8,format:i.RGBA,type:i.UNSIGNED_BYTE}),i.viewport(0,0,e,t),i.clearColor(0,0,0,1),i.bindFramebuffer(i.FRAMEBUFFER,this.pingFbo),i.clear(i.COLOR_BUFFER_BIT),i.bindFramebuffer(i.FRAMEBUFFER,this.pongFbo),i.clear(i.COLOR_BUFFER_BIT)}render(e,t,i){var h;this.init(Number(i instanceof HTMLVideoElement?i.videoWidth:i.width),Number(i instanceof HTMLVideoElement?i.videoHeight:i.height));const r=this.gl,{moshProgram:s,postProgram:o}=this;r.bindTexture(r.TEXTURE_2D,this.sourceTex),r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,i),this._lastGLError=((h=r.getError)==null?void 0:h.call(r))??0,this._lastUploadOk=this._lastGLError===0;const a=this.isPing?this.pongFbo:this.pingFbo,c=this.isPing?this.pingTex:this.pongTex;r.bindFramebuffer(r.FRAMEBUFFER,a),r.useProgram(s);const u=Math.max(0,Math.min(1,e.feedback/100)),d=e.moshInjection??.05+(1-u)*.2,l=f=>r.getUniformLocation(s,f);r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,c),r.uniform1i(l("u_prev"),0),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,this.sourceTex),r.uniform1i(l("u_source"),1),r.uniform2f(l("u_resolution"),this.width,this.height),r.uniform1f(l("u_time"),t),r.uniform1f(l("u_persistence"),u),r.uniform1f(l("u_injection"),d),r.uniform1f(l("u_flowAmp"),(e.moshWarp||0)*5e-4),r.uniform1f(l("u_flowScale"),2),r.uniform1f(l("u_flowSpeed"),1),r.uniform2f(l("u_drift"),e.flowX/this.width,-e.flowY/this.height),r.uniform1f(l("u_globalRot"),e.flowRotate*Math.PI/180),r.uniform1f(l("u_globalZoom"),e.flowZoom),r.uniform1f(l("u_diffusion"),e.moshDiffusion||0);const p=r.getAttribLocation(s,"position");r.enableVertexAttribArray(p),r.bindBuffer(r.ARRAY_BUFFER,this.quadBuffer),r.vertexAttribPointer(p,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,6),r.bindFramebuffer(r.FRAMEBUFFER,null),r.useProgram(o);const m=this.isPing?this.pongTex:this.pingTex,g=f=>r.getUniformLocation(o,f);r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,m),r.uniform1i(g("u_texture"),0),r.uniform1f(g("u_time"),t),r.uniform1f(g("u_grain"),e.noise/100*.15),r.uniform1f(g("u_chroma"),e.rgbShift/this.width*.5),r.uniform1f(g("u_vignette"),1.2);const _=r.getAttribLocation(o,"position");return r.enableVertexAttribArray(_),r.vertexAttribPointer(_,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLES,0,6),this.isPing=!this.isPing,this.canvas}dispose(){const e=this.gl;e.deleteTexture(this.pingTex),e.deleteTexture(this.pongTex),e.deleteFramebuffer(this.pingFbo),e.deleteFramebuffer(this.pongFbo),e.deleteTexture(this.sourceTex),e.deleteBuffer(this.quadBuffer),e.deleteProgram(this.moshProgram),e.deleteProgram(this.postProgram)}getDebug(){return{width:this.width,height:this.height,lastUploadOk:this._lastUploadOk,lastError:this._lastGLError}}}let hn=null,pr=!0,Mn=null;function $p(n,e,t,i,r){if(!pr)return hs(r,e,t);if(!hn)try{hn=new Yp,console.info("ERRORHEAD // WebGL2 Motion Sculpture Engine Initialized")}catch(s){return console.warn("ERRORHEAD // WebGL2 initialization failed. Falling back to Canvas2D path.",s),pr=!1,hs(r,e,t)}try{return hn.render(n,i,r)}catch(s){return console.error("ERRORHEAD // WebGL Render Error:",s),$o(),pr=!1,hs(r,e,t)}}function hs(n,e,t){Mn||(Mn=document.createElement("canvas")),(Mn.width!==e||Mn.height!==t)&&(Mn.width=e,Mn.height=t);const i=Mn.getContext("2d");return i&&(i.clearRect(0,0,e,t),i.drawImage(n,0,0,e,t)),Mn}function $o(){if(hn){try{hn.dispose()}catch(n){console.warn("Error during WebGL disposal:",n)}hn=null}}function Kp(){return{supported:pr,engineReady:!!hn,...hn?hn.getDebug():{width:0,height:0,lastUploadOk:!1,lastError:0}}}let Ko=[];const Zp=n=>{Ko=Array.isArray(n)?[...n]:[]},Jp=async(n,e)=>{for(const t of Ko)try{n.save();const i=t(n,e);i&&typeof i.then=="function"&&await i}catch(i){console.warn("[Effects] effect failed; continuing",i)}finally{n.restore()}},Qp=(n,{width:e,height:t})=>{const i=n.getImageData(0,0,e,t),r=i.data;for(let s=0;s<r.length;s+=4)r[s]=255-r[s],r[s+1]=255-r[s+1],r[s+2]=255-r[s+2];n.putImageData(i,0,0)},em=(n=50)=>{const e=Math.max(0,Math.min(1,n/100*.25));return(t,{width:i,height:r})=>{t.save(),t.globalAlpha=e,t.fillStyle="#000";for(let s=1;s<r;s+=2)t.fillRect(0,s,i,1);t.restore()}};function tm(n){const e=[];if(e.push(Qp),n.scanlines){const t=typeof n.scanlineIntensity=="number"?n.scanlineIntensity:50;e.push(em(t))}return e}const nm=(n,e,t,i,r,s,o,a)=>{if(t<=0||n.state.historyFrames.length===0)return;const c=Math.max(0,Math.min(100,t))/100,u=Math.max(0,Math.min(100,i))/100,d=Math.floor(Math.max(1,Math.min(60,r)));if(n.state.historyFrames.length<d)return;const l=n.state.historyFrames.length-d,p=n.state.historyFrames[l];if(!p)return;const m=c*(1-u*.5);e.save(),e.globalAlpha=m,e.globalCompositeOperation="screen",e.drawImage(p,0,0,s,o),e.restore()},im=(n,e,t,i,r,s,o,a)=>{if(t<=0||n.state.historyFrames.length<2)return;const c=Math.max(0,Math.min(100,t))/100,u=Math.floor(Math.max(2,Math.min(10,i))),d=Math.max(0,Math.min(100,r))/100,l=Math.min(u,n.state.historyFrames.length);if(l<2)return;const p=[];let m=0;for(let g=0;g<l;g++){const h=Math.exp(-g*.5),f=1*(1-d)+h*d;p.push(f),m+=f}for(let g=0;g<p.length;g++)p[g]/=m;e.save(),e.globalCompositeOperation="source-over";for(let g=0;g<l;g++){const _=n.state.historyFrames.length-1-g,h=n.state.historyFrames[_];if(!h)continue;const f=p[g]*c;e.globalAlpha=f,e.drawImage(h,0,0,s,o)}e.restore()},rm=(n,e,t,i,r,s,o)=>{if(t<=0||n.state.historyFrames.length<3)return!1;const a=Math.max(0,Math.min(100,t)),c=Math.floor(Math.max(2,Math.min(30,i)));n.state.reverseBurst||(n.state.reverseBurst={active:!1,frameIndex:0,totalFrames:0,startHistorySize:0});const u=n.state.reverseBurst;if(u.active){const d=u.startHistorySize-1-u.frameIndex;if(d>=0&&d<n.state.historyFrames.length){const l=n.state.historyFrames[d];l&&(e.clearRect(0,0,r,s),e.drawImage(l,0,0,r,s))}return u.frameIndex++,u.frameIndex>=u.totalFrames&&(u.active=!1,u.frameIndex=0),!0}return ot(0,100,o)<a&&n.state.historyFrames.length>=c?(u.active=!0,u.frameIndex=0,u.totalFrames=Math.min(c,n.state.historyFrames.length),u.startHistorySize=n.state.historyFrames.length,!0):!1},sm=(n,e,t,i,r,s,o,a)=>{if(t<=0)return!1;const c=Math.max(0,Math.min(100,t)),u=Math.floor(Math.max(1,Math.min(10,i))),d=Math.floor(Math.max(u,Math.min(30,r)));n.state.stutterLock||(n.state.stutterLock={active:!1,frameIndex:0,totalFrames:0,frozenFrame:null});const l=n.state.stutterLock;if(l.active&&l.frozenFrame)return e.clearRect(0,0,s,o),e.drawImage(l.frozenFrame,0,0,s,o),l.frameIndex++,l.frameIndex>=l.totalFrames&&(l.active=!1,l.frameIndex=0,l.frozenFrame=null),!0;if(ot(0,100,a)<c){const p=document.createElement("canvas");p.width=s,p.height=o;const m=p.getContext("2d");if(m)return m.drawImage(e.canvas,0,0,s,o),l.active=!0,l.frameIndex=0,l.totalFrames=ot(u,d,a+123),l.frozenFrame=p,!0}return!1},am=(n,e,t,i,r,s,o,a,c)=>{if(i<=0||n.state.historyFrames.length<2)return;const u=Math.max(0,Math.min(100,i))/100,d=Math.floor(Math.max(1,Math.min(20,r))),l=Math.floor(Math.max(1,Math.min(30,s))),p=Math.min(l,n.state.historyFrames.length);if(!(p<2)){t.clearRect(0,0,o,a),t.drawImage(e.canvas,0,0,o,a);for(let m=0;m<d;m++){const g=c+m*137,_=ot(0,o-1,g),h=ot(0,a-1,g+1),f=ot(o*.05,o*.3,g+2),b=ot(a*.05,a*.3,g+3),x=ot(1,p,g+4),R=n.state.historyFrames.length-x,L=n.state.historyFrames[R];L&&(e.save(),e.globalAlpha=u,e.drawImage(L,_,h,f,b,_,h,f,b),e.restore())}}},om=n=>{n.state.reverseBurst&&(n.state.reverseBurst.active=!1,n.state.reverseBurst.frameIndex=0),n.state.stutterLock&&(n.state.stutterLock.active=!1,n.state.stutterLock.frameIndex=0,n.state.stutterLock.frozenFrame=null)},lm=n=>{var e;for(;n.state.historyFrames.length>qo;)n.state.historyFrames.shift();(e=n.state.stutterLock)!=null&&e.frozenFrame&&!n.state.stutterLock.active&&(n.state.stutterLock.frozenFrame=null)},cm=(n,e,t,i,r,s,o,a,c)=>{if(i<=0||n.state.historyFrames.length===0)return;const u=Math.max(0,Math.min(100,i))/100,d=Math.floor(Math.max(1,Math.min(60,s)));if(n.state.historyFrames.length<d)return;const l=n.state.historyFrames.length-d,p=n.state.historyFrames[l];if(p){switch(t.clearRect(0,0,o,a),t.drawImage(e.canvas,0,0,o,a),e.save(),r){case"random":um(e,p,u,o,a,c);break;case"bands":dm(e,p,t.canvas,u,o,a,c);break;case"blocks":hm(e,p,u,o,a,c);break;case"gradient":fm(e,p,t.canvas,u,o,a);break}e.restore()}},um=(n,e,t,i,r,s)=>{const o=Math.floor(t*20)+5;for(let a=0;a<o;a++){const c=s+a*137,u=ot(i*.05,i*.3,c),d=ot(r*.05,r*.3,c+1),l=ot(0,i-u,c+2),p=ot(0,r-d,c+3);n.globalAlpha=.7+ot(0,30,c+4)/100,n.drawImage(e,l,p,u,d,l,p,u,d)}},dm=(n,e,t,i,r,s,o)=>{const a=Math.floor(i*15)+3,c=s/a;for(let u=0;u<a;u++){const d=u*c;(u%2===0||ot(0,100,o+u)<i*50)&&(n.globalAlpha=.8+ot(0,20,o+u)/100,n.drawImage(e,0,d,r,c,0,d,r,c))}},hm=(n,e,t,i,r,s)=>{const a=Math.ceil(i/32),c=Math.ceil(r/32),u=a*c,d=Math.floor(u*t*.4);for(let l=0;l<d;l++){const p=s+l*97,m=ot(0,a-1,p),g=ot(0,c-1,p+1),_=m*32,h=g*32;n.globalAlpha=.85+ot(0,15,p+2)/100,n.drawImage(e,_,h,32,32,_,h,32,32)}},fm=(n,e,t,i,r,s)=>{const o=n.createLinearGradient(0,0,r,0);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(i,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),n.globalAlpha=1,n.drawImage(e,0,0,r,s),n.globalCompositeOperation="destination-in",n.fillStyle=o,n.fillRect(0,0,r,s),n.globalCompositeOperation="source-over"},pm=()=>({lastTriggerTime:0,cooldownFrames:0,activeEvent:"none",eventFramesRemaining:0,frozenFrame:null}),mm=(n,e,t,i,r,s,o,a,c)=>{n.state.audioEvents||(n.state.audioEvents=pm());const u=n.state.audioEvents,d=Math.max(0,Math.min(100,i))/100;if(u.activeEvent!=="none"&&u.eventFramesRemaining>0){switch(u.eventFramesRemaining--,u.activeEvent){case"freeze":if(u.frozenFrame)return e.drawImage(u.frozenFrame,0,0,o,a),!0;break;case"reverse":const p=Math.floor(n.state.historyFrames.length-1-(s-u.eventFramesRemaining));if(p>=0&&p<n.state.historyFrames.length){const m=n.state.historyFrames[p];return e.drawImage(m,0,0,o,a),!0}break;case"swap":if(n.state.historyFrames.length>0){const m=Math.floor(Math.random()*n.state.historyFrames.length),g=n.state.historyFrames[m];return e.drawImage(g,0,0,o,a),!0}break}return u.eventFramesRemaining<=0&&(u.activeEvent="none",u.frozenFrame=null),u.activeEvent!=="inject"}if(u.cooldownFrames>0)return u.cooldownFrames--,!1;if((r==="inject"?t.beat:t.transient)>d){if(u.activeEvent=r,u.eventFramesRemaining=Math.floor(s),u.lastTriggerTime=c,u.cooldownFrames=Math.floor(s*.5),r==="freeze"){const p=document.createElement("canvas");p.width=o,p.height=a;const m=p.getContext("2d");m&&(m.drawImage(e.canvas,0,0,o,a),u.frozenFrame=p)}return r!=="inject"}return!1},gm=(n,e,t,i)=>{const r=Math.max(0,Math.min(100,n)),s=Math.max(0,Math.min(100,e))/100;if(s===0)return r;const o=Math.sin(i*.1+r)*s*50;let a=r+o;if(t){const c=i*.01%100;a=(a+c)%100}return Math.max(0,Math.min(100,a))},_m=typeof window<"u"&&window.__ERRORHEAD_DEBUG__===!0;let Ci=0;const uo=n=>{const e=Yo();Ep(),$o(),kp(),om(e)},vm=async(n,e,t,i,r,s,o=0,a)=>{var w;const c={media:"unknown",mw:i,mh:r,overlayOk:!1,pipeline:"2d"};try{if(e instanceof HTMLVideoElement){const A=e;c.media=`video${A.paused?"(paused)":""}`,c.mw=A.videoWidth,c.mh=A.videoHeight}else if(e instanceof HTMLImageElement){const A=e;c.media="image",c.mw=A.naturalWidth||A.width,c.mh=A.naturalHeight||A.height}else if(e instanceof HTMLCanvasElement){const A=e;c.media="canvas",c.mw=A.width,c.mh=A.height}}catch{}const u=Yo(),d=kt,l=En,{inCtx:p,compCtx:m,moshCtx:g,swapCtx:_}=Mp();Object.values(d).forEach(A=>{(A.width!==i||A.height!==r)&&(A.width=i,A.height=r)});let h={...t};if(h.audioEnabled){const{audioService:A}=await Us(async()=>{const{audioService:O}=await Promise.resolve().then(()=>ho);return{audioService:O}},void 0),H=A.getFeatures();let T={amplitude:H.amplitude,envelope:H.envelope,low:H.low,mid:H.mid,high:H.high,transient:H.transient,beat:H.beat}[h.audioFeature]||H.envelope;const U=h.audioGate/100;if(T<U?T=0:T=(T-U)/(1-U),h.audioInvert&&(T=1-T),h.audioQuantize&&h.audioQuantize>0){const O=Math.floor(h.audioQuantize);T=Math.floor(T*O)/O}const q=Math.min(1,T*(h.audioGain/50)),P=1-Math.max(0,Math.min(1,(h.audioSmooth??0)/100));Ci=Ci+(q-Ci)*P;const N=Math.min(1,Ci*1.4),G=(O,X,$)=>Math.max(X,Math.min($,O)),j=(O,X,$,ee)=>{const he=O+X,B=O>0?O:$;return G(he,B,ee)};if(h.audioTargetRgb>0){const O=h.audioTargetRgb/100;h.rgbShift=j(t.rgbShift??0,N*O*50,0,50)}if(h.audioTargetAmount>0){const O=h.audioTargetAmount/100;h.amount=j(t.amount??0,N*O*40,0,100)}if(h.audioTargetWarp>0){const O=h.audioTargetWarp/100;h.moshWarp=j(t.moshWarp??0,N*O*60,0,200)}if(h.audioTargetFeedback&&h.audioTargetFeedback>0){const O=h.audioTargetFeedback/100;h.feedback=j(t.feedback??0,N*O*20,0,100)}if(h.audioTargetBlocks&&h.audioTargetBlocks>0){const O=h.audioTargetBlocks/100;h.blockList=j(t.blockList??0,N*O*60,0,100)}if(h.audioTargetMelt&&h.audioTargetMelt>0){const O=h.audioTargetMelt/100;h.melt=j(t.melt??0,N*O*50,0,100)}if(h.audioTargetShake&&h.audioTargetShake>0){const O=h.audioTargetShake/100;h.shake=j(t.shake??0,N*O*80,0,100)}if(h.audioTargetNoise&&h.audioTargetNoise>0){const O=h.audioTargetNoise/100;h.noise=j(t.noise??0,N*O*60,0,100)}h.scanlines&&H.transient>.5&&(h.scanlineIntensity=j(t.scanlineIntensity??0,H.transient*30,0,100))}else Ci=0;if(p.clearRect(0,0,i,r),h.holdMode){const A=s-l.lastInjectTime;!l.isInjecting&&A>h.injectIntervalSec&&(l.isInjecting=!0,l.lastInjectTime=s,l.injectFrameCount=0),l.isInjecting?(d.hold.getContext("2d").drawImage(e,0,0,i,r),p.drawImage(e,0,0,i,r),l.injectFrameCount++,l.injectFrameCount>=h.injectFrames&&(l.isInjecting=!1)):p.drawImage(d.hold,0,0,i,r)}else p.drawImage(e,0,0,i,r);let f=d.input;if(h.moshEnabled)if(h.moshMode==="webgl")f=$p(h,i,r,s*h.timeScaleMosh,d.input),c.pipeline="webgl-mosh";else{if(l.frameCounter++,l.frameCounter===1||h.iframeInterval>0&&l.frameCounter%h.iframeInterval===0)bp(u,g,h.iframeBloom,h.iframeSoftReset,i,r);else{const M=s*h.timeScaleMosh;if(h.mvAbuse){const T=Math.max(8,h.mvBlockSize||32),U=Math.max(0,h.mvSearchRadius||2);Rp(u,_,i,r,T,U)}else yp(u,_,h,i,r,M);if(Tp(u,g,h.feedback,i,r),h.blockList>0){const T=Math.floor(s*12)*h.timeScaleBlocks;Ap(u,g,h,i,r,T)}g.save(),g.globalAlpha=.05,g.globalCompositeOperation="difference",g.drawImage(d.input,0,0,i,r),g.restore()}const H=h.historyCaptureInterval??1;if(l.frameCounter%H===0){const M=document.createElement("canvas");M.width=i,M.height=r,(w=M.getContext("2d"))==null||w.drawImage(d.mosh,0,0,i,r),l.historyFrames.push(M),l.historyFrames.length>qo&&l.historyFrames.shift()}f=d.mosh}else l.frameCounter=0,l.historyFrames.length=0;if(m.clearRect(0,0,i,r),m.drawImage(f,0,0,i,r),h.pixelation>0){const A=Math.max(.01,1-h.pixelation/20),H=Math.floor(i*A),M=Math.floor(r*A);_.save(),_.clearRect(0,0,i,r),_.drawImage(d.compose,0,0,H,M),m.imageSmoothingEnabled=!1,m.clearRect(0,0,i,r),m.drawImage(d.swap,0,0,H,M,0,0,i,r),m.imageSmoothingEnabled=!0,_.restore()}h.melt>0&&wp(u,m,_,h,i,r,s),h.shred>0&&Cp(u,m,_,h.shred,i,r,Math.floor(s*12)),h.scatter>0&&Lp(u,m,d.compose,h,i,r,Math.floor(s*12));const b=await Bp(d.compose,d.jpeg,d.swap,h,s,i,r);Gp(n,b,h,i,r,s),Hp(n,_,h,i,r,s),Wp(n,_,h,i,r),h.pixelSort&&h.pixelSort>0&&Pp(n,h.pixelSort,i,r,Math.floor(s*100),h.pixelSortMode||"brightness"),h.channelSep&&h.channelSep>0&&Dp(n,n.canvas,h.channelSepX||10,h.channelSepY||0,h.channelSep);let x=!1;if(h.audioEnabled&&h.audioEventEnable){const{audioService:A}=await Us(async()=>{const{audioService:M}=await Promise.resolve().then(()=>ho);return{audioService:M}},void 0),H=A.getFeatures();x=mm(u,n,H,h.audioEventThreshold||70,h.audioEventAction||"freeze",h.audioEventDuration||10,i,r,l.frameCounter)}let R=x;if(h.reverseBurst&&h.reverseBurst>0&&(R=rm(u,n,h.reverseBurst,h.reverseBurstDuration||10,i,r,Math.floor(s*100))),!R&&h.stutterLock&&h.stutterLock>0&&(R=sm(u,n,h.stutterLock,h.stutterLockMin||2,h.stutterLockMax||10,i,r,Math.floor(s*100))),!R){if(h.partialReplace&&h.partialReplace>0){const A=h.chaosAmount?gm(h.seed,h.chaosAmount,h.chaosEvolve||!1,l.frameCounter):h.seed;cm(u,n,_,h.partialReplace,h.partialReplacePattern||"random",h.partialReplaceOffset||10,i,r,Math.floor(A+s*100))}h.temporalDisplace&&h.temporalDisplace>0&&am(u,n,_,h.temporalDisplace,h.temporalDisplaceRegions||8,h.temporalDisplaceOffset||15,i,r,Math.floor(s*100)),h.timeSmear&&h.timeSmear>0&&im(u,n,h.timeSmear,h.timeSmearFrames||5,h.timeSmearNonLinear||50,i,r),h.temporalEcho&&h.temporalEcho>0&&nm(u,n,h.temporalEcho,h.temporalEchoDecay||50,h.temporalEchoOffset||10,i,r)}if(lm(u),h.shaderMoshEnabled){l.prevShaderMoshEnabled||bs.clear(),l.prevShaderMoshEnabled=!0;try{const A=bs.render(n.canvas,h,s*h.timeScaleDisp);A&&A.width>0&&A.height>0&&(n.save(),n.globalCompositeOperation="copy",n.drawImage(A,0,0,i,r),n.restore(),c.overlayOk=!0)}catch{c.overlayOk=!1}}else l.prevShaderMoshEnabled=!1;if(!!h.strictEffectsEnabled||typeof window<"u"&&window.__ERRORHEAD_STRICT_FX__===!0)try{const A=e instanceof HTMLVideoElement?"video":"image";Zp(tm(h)),await Jp(n,{width:i,height:r,time:s,sourceType:A})}catch(A){try{console.warn("[Effects] strict layer failed; continuing",A)}catch{}}if(_m)try{n.save(),n.globalCompositeOperation="source-over",n.fillStyle="rgba(0,0,0,0.5)";const A=zp(),H=Kp(),M=[`DBG frame: ${c.pipeline}${h.shaderMoshEnabled?"+shader":""}`,`media:${c.media} src:${c.mw}x${c.mh} out:${i}x${r}`,`gl2 upload:${H.lastUploadOk?"ok":"fail"} ${H.width}x${H.height} err:${H.lastError} overlay:${c.overlayOk?"on":"off"}`,`jpeg worker: ${A.hasBitmap?"bitmap":"passthru"} inflight:${A.inFlight?"yes":"no"}`],T=6,U=12,q=280,K=T*2+M.length*U;n.fillRect(8,8,q,K),n.font="10px monospace",n.fillStyle="#00FFFF";for(let P=0;P<M.length;P++)n.fillText(M[P],12,12+(P+1)*U-4);n.restore()}catch{}};function Zo(n){if(n.current){try{URL.revokeObjectURL(n.current)}catch{}n.current=null}}function xm(n,e,t,i){Zo(i);const r=URL.createObjectURL(t);return i.current=r,new Promise((s,o)=>{n.onload=()=>{try{console.log("[Import] image onload")}catch{}const a=n.naturalWidth||n.width||0,c=n.naturalHeight||n.height||0;e&&a>0&&c>0&&(e.width=a,e.height=c,console.log(`[Import] Image loaded: ${a}x${c}, canvas set to ${e.width}x${e.height}`)),s({url:r,width:a,height:c})},n.onerror=a=>{console.error("[Media Core] Image load error. This should not fail silently.",a),o(a)},n.src=r})}function Sm(n,e,t,i){Zo(i);const r=URL.createObjectURL(t);return i.current=r,new Promise((s,o)=>{const a=()=>{try{console.log("[Import] video onloadedmetadata")}catch{}const c=n.videoWidth||0,u=n.videoHeight||0;e&&c>0&&u>0&&(e.width=c,e.height=u,console.log(`[Import] Video loaded: ${c}x${u}, canvas set to ${e.width}x${e.height}`)),s({url:r,width:c,height:u})};n.onloadedmetadata=a,n.onerror=c=>{console.error("[Media Core] Video load error. This should not fail silently.",c),o(c)},n.src=r;try{n.load()}catch{}n.play().then(()=>{try{console.log("[Import] video play started")}catch{}}).catch(()=>{})})}class Jo{constructor(){this.micSource=null,this.mediaSource=null,this.isActive=!1,this.currentElement=null,this.elementNodes=new WeakMap,this.prevRMS=0,this.envelope=0,this.prevAmplitude=0,this.transientAccum=0,this.beatPhase=0,this.beatSmooth=0,this.ATTACK_COEF=.3,this.RELEASE_COEF=.05,this.TRANSIENT_DECAY=.85,this.BEAT_SMOOTH=.1,this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.4,this.analyser.minDecibels=-90,this.analyser.maxDecibels=-10,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.frequencyData=new Uint8Array(this.analyser.frequencyBinCount),this.destination=this.ctx.createMediaStreamDestination()}async resume(){this.ctx.state==="suspended"&&await this.ctx.resume()}async connectMic(){await this.resume(),this.stop();try{const e=await navigator.mediaDevices.getUserMedia({audio:!0});this.micSource=this.ctx.createMediaStreamSource(e),this.micSource.connect(this.analyser),this.micSource.connect(this.destination),this.isActive=!0,console.info("ERRORHEAD // Mic Source Connected [CV Mode]")}catch(e){console.error("Audio access denied",e),this.isActive=!1}}connectMedia(e){if(this.resume(),this.currentElement===e&&this.mediaSource){this.isActive=!0,console.info("ERRORHEAD // Media Source Reused [CV Mode]:",e.tagName);return}if(this.mediaSource)try{this.mediaSource.disconnect()}catch{}this.currentElement=e;try{const t=this.elementNodes.get(e);this.mediaSource=t??this.ctx.createMediaElementSource(e),t||this.elementNodes.set(e,this.mediaSource),this.mediaSource.connect(this.analyser),this.mediaSource.connect(this.destination),this.mediaSource.connect(this.ctx.destination),this.isActive=!0,console.info("ERRORHEAD // Media Source Connected [CV Mode]:",e.tagName)}catch(t){console.warn("Could not connect media source (might already be connected):",t),this.isActive=!0}}stop(){if(this.micSource&&(this.micSource.disconnect(),this.micSource=null),this.mediaSource)try{this.mediaSource.disconnect()}catch{}this.isActive=!1,this.prevRMS=0,this.envelope=0,this.prevAmplitude=0,this.transientAccum=0,this.beatPhase=0,this.beatSmooth=0}getLevel(){return this.isActive?this.getFeatures().amplitude:0}getFeatures(){if(!this.isActive)return{amplitude:0,envelope:0,low:0,mid:0,high:0,transient:0,beat:0};this.analyser.getByteFrequencyData(this.frequencyData);const e=this.ctx.sampleRate,t=this.analyser.frequencyBinCount,i=e/2/t,r=Math.floor(250/i),s=Math.floor(4e3/i),o=t;let a=0;for(let b=0;b<t;b++){const x=this.frequencyData[b]/255;a+=x*x}const c=Math.sqrt(a/t),u=Math.min(1,c*1.5);u>this.envelope?this.envelope+=(u-this.envelope)*this.ATTACK_COEF:this.envelope+=(u-this.envelope)*this.RELEASE_COEF;const d=(b,x)=>{let R=0,L=0;for(let w=b;w<Math.min(x,t);w++)R+=this.frequencyData[w],L++;return L>0?Math.min(1,R/L/255*1.8):0},l=d(0,r),p=d(r,s),m=d(s,o),g=u-this.prevAmplitude;g>.15&&(this.transientAccum=Math.min(1,this.transientAccum+g*3)),this.transientAccum*=this.TRANSIENT_DECAY;const _=Math.min(1,this.transientAccum),h=l*.7+_*.3;this.beatSmooth+=(h-this.beatSmooth)*this.BEAT_SMOOTH;const f=Math.min(1,this.beatSmooth);return this.prevAmplitude=u,this.prevRMS=c,{amplitude:u,envelope:Math.min(1,this.envelope),low:Math.min(1,l),mid:Math.min(1,p),high:Math.min(1,m),transient:Math.min(1,_),beat:Math.min(1,f)}}getMixedStream(){return this.destination.stream}}const on=new Jo,ho=Object.freeze(Object.defineProperty({__proto__:null,AudioAnalyzer:Jo,audioService:on},Symbol.toStringTag,{value:"Module"}));function Mm(n,e){const t=e.format==="jpeg"?"image/jpeg":"image/png",i=e.format==="jpeg"?"jpg":"png",r=e.format==="jpeg"?Math.max(.1,Math.min(1,(e.quality??90)/100)):void 0,s=(e.fileNameBase??"errorhead_frame").replace(/\.[^/.]+$/,""),o=new Date().toISOString().replace(/[:.]/g,"-"),a=`${s}_${o}.${i}`;return new Promise(c=>{n.toBlob(u=>{if(!u)return c();const d=URL.createObjectURL(u),l=document.createElement("a");l.href=d,l.download=a,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(d),c()},t,r)})}async function Em(n,e,t,i,r,s=on,o={}){var _;const a=o.fps??30,c=n.captureStream(a);let u;if(e.audioEnabled){const f=s.getMixedStream().getAudioTracks();u=new MediaStream([...c.getVideoTracks(),...f])}else u=new MediaStream([...c.getVideoTracks()]);i.recordStreamRef.current=u,i.recordChunksRef.current=[];let d;const l=o.container??"auto";l==="mp4"?d=["video/mp4;codecs=h264","video/mp4"]:l==="webm"?d=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"]:d=["video/mp4;codecs=h264","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"];const p=d.find(h=>window.MediaRecorder&&window.MediaRecorder.isTypeSupported&&window.MediaRecorder.isTypeSupported(h))||"video/webm";if(!window.MediaRecorder){alert("MediaRecorder is not supported in this browser.");return}const m=new MediaRecorder(u,{mimeType:p,bitsPerSecond:o.bitsPerSecond});i.recorderRef.current=m;const g=typeof window<"u"?window.__ERRORHEAD_FIXED_DT:void 0;o.deterministicFps&&o.deterministicFps>0&&(window.__ERRORHEAD_FIXED_DT=1/o.deterministicFps),m.ondataavailable=h=>{h.data&&h.data.size>0&&i.recordChunksRef.current.push(h.data)},m.onstop=()=>{var w;i.setIsRecording(!1);const h=new Blob(i.recordChunksRef.current,{type:p}),f=t?t.replace(/\.[^/.]+$/,""):"errorhead_recording",b=new Date().toISOString().replace(/[:.]/g,"-"),x=`${f}_${b}.webm`,R=URL.createObjectURL(h),L=document.createElement("a");L.href=R,L.download=x,document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(R),(w=i.recordStreamRef.current)==null||w.getTracks().forEach(A=>A.stop()),i.recordStreamRef.current=null,i.recorderRef.current=null,i.recordChunksRef.current=[],o.deterministicFps&&(g===void 0?delete window.__ERRORHEAD_FIXED_DT:window.__ERRORHEAD_FIXED_DT=g)};try{m.start(250),i.setIsRecording(!0),r&&r>0&&(i.recordTimerRef.current=window.setTimeout(()=>Qo(i),r*1e3))}catch(h){console.error("Failed to start recording",h),i.setIsRecording(!1),(_=i.recordStreamRef.current)==null||_.getTracks().forEach(f=>f.stop()),i.recordStreamRef.current=null,i.recorderRef.current=null}}function Qo(n){if(n.recorderRef.current){try{n.recorderRef.current.stop()}catch{}n.recordTimerRef.current&&(clearTimeout(n.recordTimerRef.current),n.recordTimerRef.current=null)}}function bm(n){const t=n.readyState>=(n.HAVE_CURRENT_DATA||2),i=n.videoWidth||0,r=n.videoHeight||0;return{ready:t,w:i,h:r}}const ym=!0,Tm=(n,e,t)=>{n.clearRect(0,0,e,t);const i=n.createLinearGradient(0,0,e,t);i.addColorStop(0,"#000000"),i.addColorStop(.5,"#00ff00"),i.addColorStop(1,"#0000ff"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#ffffff",n.fillRect(e*.25,t*.25,e*.5,t*.5),n.fillStyle="#ff0000",n.font="48px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText("CANVAS TEST",e/2,t/2),console.log(`[Debug] Test pattern drawn: ${e}x${t}`)},Rm=()=>{const[n,e]=me.useState(bt),[t,i]=me.useState(!0),[r,s]=me.useState("default"),[o,a]=me.useState([]),[c,u]=me.useState(!1),[d,l]=me.useState({isPlaying:!1,currentTime:0,duration:5,keyframes:[],fps:30}),[p,m]=me.useState(null),[g,_]=me.useState(!1),[h,f]=me.useState(""),[b,x]=me.useState("png"),[R,L]=me.useState(90),[w,A]=me.useState(!1),[H,M]=me.useState(0),[T,U]=me.useState(!1),q=me.useRef(null),[K,P]=me.useState("auto"),[N,G]=me.useState(30),[j,O]=me.useState(!1),[X,$]=me.useState(30),[ee,he]=me.useState(0),B=me.useRef({active:!1,fps:30,framesTotal:0,frameIndex:0,baseName:"errorhead_seq"}),[Z,Y]=me.useState(!1),[le,ge]=me.useState(0),[Ae,De]=me.useState(0),_e=me.useRef(new Audio);me.useEffect(()=>{const J=_e.current,Me=()=>U(!0),qe=()=>U(!1);return J.addEventListener("play",Me),J.addEventListener("pause",qe),J.addEventListener("ended",qe),()=>{J.removeEventListener("play",Me),J.removeEventListener("pause",qe),J.removeEventListener("ended",qe)}},[]);const Ue=me.useRef(n),I=me.useRef(d),pt=me.useRef(t),be=me.useRef(p),Ie=me.useRef(g),xe=me.useRef(c),Ke=me.useRef(0),Be=me.useRef(0),y=me.useRef(0),S=me.useRef(0),k=me.useRef(0),[ie,te]=me.useState(0),ne=me.useRef(!1),re=me.useRef(null),se=me.useRef(null),fe=me.useRef(null),Te=me.useRef(0);me.useEffect(()=>{const J=se.current;if(!J)return;const Me=()=>_(!0),qe=()=>_(!1);return J.addEventListener("play",Me),J.addEventListener("pause",qe),J.addEventListener("ended",qe),()=>{J.removeEventListener("play",Me),J.removeEventListener("pause",qe),J.removeEventListener("ended",qe)}},[]);const ze=me.useRef(null),Q=me.useRef([]),Ye=me.useRef(null),He=me.useRef(null),[Ne,ye]=me.useState(null),pe=me.useRef(null),ke=J=>{ye(J),pe.current&&window.clearTimeout(pe.current),pe.current=window.setTimeout(()=>ye(null),3e3)};me.useEffect(()=>{Ue.current=n},[n]),me.useEffect(()=>{I.current=d},[d]),me.useEffect(()=>{pt.current=t},[t]),me.useEffect(()=>{be.current=p},[p]),me.useEffect(()=>{Ie.current=g},[g]),me.useEffect(()=>{xe.current=c},[c]),me.useEffect(()=>{n.audioEnabled&&(on.resume().catch(()=>{}),n.audioSource==="mic"?on.connectMic().then(()=>Le("Audio: Mic Online")).catch(()=>Le("Audio: Mic Access Denied")):n.audioSource==="video"&&se.current?(on.connectMedia(se.current),Le("Audio: Tapped Video Stream")):n.audioSource==="music"&&n.musicUrl&&(_e.current.src!==n.musicUrl&&(_e.current.src=n.musicUrl),_e.current.play().catch(()=>{}),on.connectMedia(_e.current),Le("Audio: Music Stream Active")))},[n.audioEnabled,n.audioSource,n.musicUrl]);const Le=J=>{const Me=new Date().toLocaleTimeString("en-US",{hour12:!1});a(qe=>[`[${Me}] ${J}`,...qe].slice(0,5))},it=()=>{Ke.current=0,uo(),se.current&&(se.current.currentTime=0,be.current==="video"&&se.current.play().then(()=>_(!0)).catch(()=>{}))},Ve=async J=>{console.log("[Import] handleFileSelect:",J.name,J.type),f(J.name),Le(`Loading ${J.name}...`),Ke.current=0,uo();const Me=J.type.startsWith("video/"),qe=Me?"video":"image";if(m(qe),be.current=qe,_(!1),Me){const D=se.current;if(!D){Le("Video element missing");return}try{const z=await Sm(D,re.current,J,q);Le(`Video ready: ${z.width}x${z.height}`)}catch(z){console.error("[Import] Video load error:",z),Le("Video load error")}return}const E=fe.current;if(!E){Le("Image element missing");return}try{const D=await xm(E,re.current,J,q);Le(`Image ready: ${D.width}x${D.height}`)}catch(D){console.error("[Import] Image load error:",D),Le("Image load error")}},ae=J=>{const Me=URL.createObjectURL(J);e(qe=>({...qe,musicUrl:Me,audioSource:"music",audioEnabled:!0})),Le(`Imported Audio: ${J.name}`)},C=J=>{e(J),r!=="custom"&&s("custom")},ue=()=>{on.stop(),Ue.current.audioSource==="music"&&_e.current.pause(),e(J=>({...J,audioEnabled:!1})),Le("Audio: Stopped")},de=()=>{if(Ue.current.audioSource!=="music"){Le("Audio: Pause/Resume only applies to music source");return}const J=_e.current;J.paused?(J.play().catch(()=>{}),Le("Audio: Resumed")):(J.pause(),Le("Audio: Paused"))},Pe=J=>{e(Me=>({...J.params,audioEnabled:Me.audioEnabled,audioSource:Me.audioSource,musicUrl:Me.musicUrl})),s(J.id)},Re=J=>{e(Me=>({...J,audioEnabled:Me.audioEnabled,audioSource:Me.audioSource,musicUrl:Me.musicUrl}))},Ze=(J,Me,qe)=>Math.max(Me,Math.min(qe,J)),Ce=(J,Me,qe=1)=>Math.round((Math.random()*(Me-J)+J)/qe)*qe,lt=J=>({...J,amount:Ce(0,60),quality:Ce(30,100),iterations:Ce(1,20),rgbShift:Ce(0,25),redShift:Ce(-10,10),greenShift:Ce(-10,10),blueShift:Ce(-10,10),pixelation:Ce(0,6),noise:Ce(0,40),melt:Ce(0,40),shred:Ce(0,50),scatter:Ce(0,50),brightness:Ze(Ce(90,120),50,200),scanlines:Math.random()<.4?!J.scanlines:J.scanlines,scanlineIntensity:Ce(10,80),masterSpeed:Math.random()<.5?J.masterSpeed:Math.round((Math.random()*2+.3)*10)/10,moshEnabled:Math.random()<.5?!0:J.moshEnabled,moshMode:Math.random()<.5?"webgl":"2d",feedback:Ce(60,98),moshWarp:Ce(0,60),moshDiffusion:Ce(0,3),blockList:Ce(0,80),blockSize:Ce(16,48,2),moshDispStrength:Ce(0,60),moshDispScale:Ce(5,30),moshDispSpeed:Ce(5,30),moshDispQuantize:Ce(0,80),audioEnabled:J.audioEnabled,audioSource:J.audioSource,audioGain:J.audioGain,audioGate:J.audioGate,audioTargetRgb:J.audioTargetRgb,audioTargetAmount:J.audioTargetAmount,audioTargetWarp:J.audioTargetWarp,musicUrl:J.musicUrl}),mt=()=>{e(J=>lt(J)),s("custom"),Le("Randomized parameters")},Je=()=>{const Me={id:crypto.randomUUID(),time:I.current.currentTime,params:Ue.current};l(qe=>({...qe,keyframes:[...qe.keyframes,Me].sort((E,D)=>E.time-D.time)})),Le(`Added keyframe @ ${I.current.currentTime.toFixed(2)}s`)},gt=J=>{l(Me=>({...Me,keyframes:Me.keyframes.filter(qe=>qe.id!==J)})),Le("Deleted keyframe")},Ot=async J=>{if(!(!re.current||ne.current))try{ne.current=!0;const Me=re.current.getContext("2d",{alpha:!1});if(!Me){console.error("[Render] Failed to get 2D context");return}const qe=J/1e3,E=qe-(Be.current||qe);Be.current=qe;const D=typeof window<"u"?window.__ERRORHEAD_FIXED_DT:void 0,z=Number.isFinite(D)&&D>0?D:Math.min(E,.1);if(Ke.current+=z*Ue.current.masterSpeed,xe.current&&I.current.isPlaying){let ve=I.current.currentTime+z;ve>I.current.duration&&(ve=0),l(Ee=>({...Ee,currentTime:ve}))}let V=null,F=0,ce=0,Se=!1;const we=be.current;if(we==="image"&&fe.current&&fe.current.complete&&fe.current.naturalWidth>0&&fe.current.naturalHeight>0)Se=!0,V=fe.current,F=fe.current.naturalWidth,ce=fe.current.naturalHeight,re.current&&(re.current.width!==F||re.current.height!==ce)&&(re.current.width=F,re.current.height=ce,console.log(`[Render] Canvas resized to ${F}x${ce} for image`));else if(we==="video"&&se.current){const ve=se.current,Ee=bm(ve);Ee.ready&&Ee.w>0&&Ee.h>0&&(Se=!0,V=ve,F=Ee.w,ce=Ee.h,(re.current.width!==F||re.current.height!==ce)&&(re.current.width=F,re.current.height=ce,console.log(`[Render] Canvas resized to ${F}x${ce} for video`)))}if(Se&&V&&F>0&&ce>0){let ve=F,Ee=ce;Z&&le>0&&Ae>0&&(ve=le,Ee=Ae,re.current&&(re.current.width!==ve||re.current.height!==Ee)&&(re.current.width=ve,re.current.height=Ee,console.log(`[Render] Resolution lock: ${ve}x${Ee}`))),Me.clearRect(0,0,ve,Ee),Me.save(),Me.globalAlpha=1,Me.globalCompositeOperation="copy",Me.filter="none",Me.drawImage(V,0,0,ve,Ee),Me.restore();const Fe=on.getLevel();ym&&await vm(Me,V,Ue.current,ve,Ee,Ke.current,Fe),B.current.active&&await new Promise(Oe=>{re.current.toBlob(rt=>{if(rt){const At=B.current.frameIndex,ct=B.current.framesTotal,Wt=String(ct).length,We=`${B.current.baseName}_${String(At).padStart(Wt,"0")}.png`,Xn=URL.createObjectURL(rt),Qe=document.createElement("a");Qe.href=Xn,Qe.download=We,document.body.appendChild(Qe),Qe.click(),document.body.removeChild(Qe),URL.revokeObjectURL(Xn),B.current.frameIndex++,B.current.frameIndex>=B.current.framesTotal&&(B.current.active=!1,O(!1),delete window.__ERRORHEAD_FIXED_DT)}Oe()},"image/png")})}else be.current||((re.current.width!==800||re.current.height!==600)&&(re.current.width=800,re.current.height=600),Tm(Me,800,600))}finally{ne.current=!1}},Ei=J=>{S.current===0&&(S.current=J);const Me=J-S.current;y.current++,Me>=1e3&&(M(Math.round(y.current*1e3/Me)),te(k.current),S.current=J),Ot(J),k.current++,y.current++,Te.current=requestAnimationFrame(Ei)};me.useEffect(()=>(console.log("App: Setting up render loop"),(()=>{console.log("App: Starting animate loop"),Te.current=requestAnimationFrame(Ei)})(),()=>{Te.current&&cancelAnimationFrame(Te.current),console.log("App: Render loop cleaned up")}),[]),me.useEffect(()=>()=>{if(q.current){try{URL.revokeObjectURL(q.current)}catch{}q.current=null}},[]),me.useEffect(()=>()=>{pe.current&&window.clearTimeout(pe.current)},[]);const wr=async()=>{const J=re.current;J&&(await Mm(J,{format:b,quality:R,fileNameBase:h}),ke("Saved image"))},Wn=()=>Qo({recorderRef:ze,recordChunksRef:Q,recordStreamRef:Ye,recordTimerRef:He,setIsRecording:A}),zi=async J=>{if(re.current){if(w){Wn();return}await Em(re.current,Ue.current,h,{recorderRef:ze,recordChunksRef:Q,recordStreamRef:Ye,recordTimerRef:He,setIsRecording:A},J,on,{fps:N,bitsPerSecond:8e6,deterministicFps:N,container:K})}},jn=(J,Me)=>{J?zi(Me):wr()},ki=(J,Me)=>{re.current&&(Me<=0||J<=0||(B.current.active=!0,B.current.fps=J,B.current.framesTotal=Me,B.current.frameIndex=0,B.current.baseName=h?h.replace(/\.[^/.]+$/,""):"errorhead_seq",window.__ERRORHEAD_FIXED_DT=1/J,O(!0)))},Gi=()=>{B.current.active=!1,O(!1),delete window.__ERRORHEAD_FIXED_DT};return v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"absolute top-0 left-0 w-0 h-0 overflow-hidden",children:[v.jsx("img",{ref:fe,crossOrigin:"anonymous",alt:"source"}),v.jsx("video",{ref:se,crossOrigin:"anonymous",loop:!0,muted:!0,playsInline:!0})]}),v.jsx(nl,{leftPanel:v.jsx(rl,{onFileSelect:Ve,onPresetSelect:Pe,activePresetId:r,exportFormat:b,setExportFormat:x,exportQuality:R,setExportQuality:L,onExport:jn,isVideo:p==="video",isAnimationActive:c,currentParams:n,onImportPreset:J=>Re(J),onSharePreset:()=>{},isRecording:w,recordFormat:K,setRecordFormat:P,recordFps:N,setRecordFps:G,isSeqActive:j,seqFps:X,setSeqFps:$,seqFrames:ee,setSeqFrames:he,onStartPngSeq:(J,Me)=>ki(J,Me),onStopPngSeq:Gi,lockRes:Z,setLockRes:Y,lockWidth:le,lockHeight:Ae,setLockWidth:ge,setLockHeight:De}),centerPanel:v.jsx("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:v.jsx("canvas",{ref:re,style:{border:"2px solid #333",maxWidth:"100%",maxHeight:"100%"}})}),rightPanel:v.jsx(sl,{params:n,onChange:C,onRandomize:mt,onReset:it,onImportMusic:ae,onStopAudio:ue,onToggleAudioPause:de,audioPauseLabel:n.audioSource==="music"?T?"PAUSE AUDIO":"RESUME AUDIO":"PAUSE/RESUME",audioPauseDisabled:n.audioSource!=="music"||!n.musicUrl}),bottomBar:v.jsx(al,{animation:d,isActive:c,onToggleActive:()=>u(!c),onPlayPause:()=>l(J=>({...J,isPlaying:!J.isPlaying})),onSeek:J=>l(Me=>({...Me,currentTime:J})),onAddKeyframe:Je,onDeleteKeyframe:gt,onDurationChange:J=>l(Me=>({...Me,duration:J})),fps:H})}),Ne&&v.jsx("div",{className:"fixed bottom-4 right-4 z-[200]",children:v.jsx("div",{className:"bg-zinc-900/90 border border-zinc-700 text-zinc-200 px-3 py-2 text-xs font-mono shadow-lg",children:Ne})})]})};export{Rm as default};
