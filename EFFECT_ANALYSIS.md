# ERRORHEAD — Effect Gap Analysis & Core Requirements

## STEP 1 — EFFECT GAP ANALYSIS

### Current Effect Inventory

#### SPATIAL EFFECTS (Pixel-level)
| Effect | Material | Type | Deterministic | Audio Control | Status |
|--------|----------|------|---------------|---------------|--------|
| RGB Shift | Channels | Spatial | ✅ Yes | ✅ Yes | ✅ CORE |
| Pixelation | Pixels | Spatial | ✅ Yes | ❌ No | ✅ ADEQUATE |
| Noise | Pixels | Spatial | ✅ Seeded | ✅ Yes (indirect) | ✅ ADEQUATE |
| Scanlines | Pixels | Spatial | ✅ Yes | ✅ Yes (intensity) | ✅ ADEQUATE |
| Pixel Sort | Pixels | Spatial | ✅ Yes | ❌ No | ✅ ADVANCED |
| Channel Sep | Channels | Spatial | ✅ Yes | ❌ No | ✅ ADVANCED |
| Melt | Pixels | Spatial | ✅ Seeded | ✅ Yes | ✅ CORE |
| Shred | Pixels | Spatial | ✅ Seeded | ❌ No | ✅ ADEQUATE |
| Scatter | Pixels | Spatial | ✅ Seeded | ❌ No | ✅ ADEQUATE |
| Shake | Transform | Spatial | ✅ Seeded | ✅ Yes | ✅ ADEQUATE |

**Analysis:**
- ✅ Well-developed: RGB, color manipulation, displacement
- ✅ Professional: Pixel sorting, channel separation
- ⚠️ Gap: Limited audio hookup for advanced effects
- ⚠️ Gap: No cross-frame blending of spatial effects

---

#### TEMPORAL EFFECTS (Time-based)
| Effect | Material | Type | Deterministic | Audio Control | Status |
|--------|----------|------|---------------|---------------|--------|
| Feedback | Frames | Temporal | ✅ Yes | ✅ Yes | ✅ CORE |
| Ref Swap (Ghost) | Frames | Temporal | ✅ Seeded | ✅ Yes (indirect) | ✅ CORE |
| Temporal Echo | Frames | Temporal | ✅ Yes | ❌ No | ✅ IMPLEMENTED |
| Time Smear | Frames | Temporal | ✅ Yes | ❌ No | ✅ IMPLEMENTED |
| Reverse Burst | Frames | Temporal | ✅ Seeded | ❌ No | ✅ IMPLEMENTED |
| Stutter Lock | Frames | Temporal | ✅ Seeded | ❌ No | ✅ IMPLEMENTED |
| Temporal Displace | Frames | Temporal | ✅ Seeded | ❌ No | ✅ IMPLEMENTED |

**Analysis:**
- ✅ Strong foundation: Feedback, history, echo, smear
- ✅ Recently added comprehensive temporal suite
- ❌ **CRITICAL GAP**: No audio triggers for temporal effects
- ❌ **CRITICAL GAP**: No cross-fade between temporal states
- ❌ **MISSING**: No "time freeze" (hold current + inject new sparingly)

---

#### DATAMOSH EFFECTS (Codec-like)
| Effect | Material | Type | Deterministic | Audio Control | Status |
|--------|----------|------|---------------|---------------|--------|
| I-Frame Interval | Structure | Structural | ✅ Yes | ❌ No | ✅ CORE |
| I-Frame Bloom | Structure | Structural | ✅ Yes | ❌ No | ✅ ADEQUATE |
| Motion Vectors | Motion | Structural | ✅ Yes | ✅ Yes (warp) | ✅ CORE |
| MV Abuse (Block Match) | Motion | Structural | ✅ Yes | ❌ No | ✅ ADVANCED |
| Macroblock Corrupt | Structure | Structural | ✅ Seeded | ✅ Yes | ✅ CORE |
| WebGL Mosh | Motion | Structural | ✅ Yes | ✅ Yes (warp) | ✅ ADVANCED |
| Motion Residue | Motion | Temporal | ✅ Yes | ❌ No | ⚠️ PARAMETER EXISTS, NOT IMPLEMENTED |

**Analysis:**
- ✅ Excellent: I-Frame, motion vectors, block corruption
- ✅ Advanced: WebGL motion sculpture, MV block matching
- ❌ **CRITICAL GAP**: Motion Residue declared but not implemented
- ❌ **MISSING**: No GOP (Group of Pictures) manipulation
- ❌ **MISSING**: No inter-frame dependency corruption

---

#### COMPRESSION EFFECTS (Codec simulation)
| Effect | Material | Type | Deterministic | Audio Control | Status |
|--------|----------|------|---------------|---------------|--------|
| JPEG Compression | Bytes | Structural | ✅ Yes | ✅ Yes (amount) | ✅ CORE |
| Quality Reduction | Bytes | Structural | ✅ Yes | ❌ No | ✅ ADEQUATE |
| Byte Corruption | Bytes | Structural | ✅ Seeded | ✅ Yes (amount) | ✅ ADEQUATE |
| Safe/Unsafe Mode | Bytes | Structural | ✅ Yes | ❌ No | ✅ ADEQUATE |

**Analysis:**
- ✅ Good coverage: JPEG, quality, byte corruption
- ⚠️ Limited: Only JPEG codec (no MPEG-style artifacts)
- ❌ **MISSING**: No bit-plane corruption
- ❌ **MISSING**: No DCT coefficient manipulation

---

#### AUDIO-DRIVEN EFFECTS (Control Voltage)
| Effect | Material | Type | Deterministic | Audio Control | Status |
|--------|----------|------|---------------|---------------|--------|
| CV System | Audio | Meta | ✅ Yes | ✅ Native | ✅ CORE |
| Feature Extraction | Audio | Meta | ✅ Yes | ✅ Native | ✅ CORE |
| 8 Modulation Targets | Various | Meta | ✅ Yes | ✅ Native | ✅ ADEQUATE |
| Gate/Gain/Smooth | Audio | Meta | ✅ Yes | ✅ Native | ✅ ADEQUATE |
| Quantize/Invert | Audio | Meta | ✅ Yes | ✅ Native | ✅ ADEQUATE |

**Analysis:**
- ✅ Excellent foundation: CV system, feature extraction
- ✅ Good: 8 modulation targets with depth control
- ❌ **CRITICAL GAP**: No audio-triggered events (only continuous modulation)
- ❌ **CRITICAL GAP**: No beat-synced frame operations
- ❌ **MISSING**: No audio-driven parameter automation curves

---

#### META-EFFECTS (System-level)
| Effect | Material | Type | Deterministic | Audio Control | Status |
|--------|----------|------|---------------|---------------|--------|
| Hold Mode + Inject | Time | Meta | ✅ Yes | ❌ No | ✅ CORE |
| Time Warp | Time | Meta | ✅ Yes | ❌ No | ✅ ADEQUATE |
| Master Speed | Time | Meta | ✅ Yes | ❌ No | ✅ ADEQUATE |
| Deterministic Seed | Chaos | Meta | ✅ Yes | ❌ No | ✅ ADEQUATE |
| History Capture Rate | Frames | Meta | ✅ Yes | ❌ No | ✅ ADEQUATE |

**Analysis:**
- ✅ Good: Hold/inject, time manipulation, seeding
- ⚠️ Limited: No transition system between states
- ❌ **MISSING**: No preset morphing
- ❌ **MISSING**: No deterministic automation sequencing

---

### CRITICAL GAPS IDENTIFIED

#### 🔴 CRITICAL (Must Fix)
1. **Motion Residue**: Parameter exists, not implemented
2. **Audio Event Triggers**: Only continuous modulation, no discrete events
3. **Temporal ↔ Audio Bridge**: Temporal effects have no audio hooks
4. **Frame Blending**: No cross-fade or blend between temporal states

#### 🟡 HIGH PRIORITY (Should Have)
5. **GOP Manipulation**: No inter-frame dependency control
6. **Audio Automation**: No parameter automation curves
7. **Preset Transitions**: No morphing between effect states
8. **Bit-Plane Effects**: No low-level bit manipulation

#### 🟢 MEDIUM PRIORITY (Nice to Have)
9. **DCT Manipulation**: No JPEG coefficient control
10. **Multi-Source Blending**: No A/B source crossfade
11. **LUT/Color Grading**: No professional color tools
12. **Particle Systems**: No generative overlay layer

---

## STEP 2 — CANONICAL EFFECT TAXONOMY

### 1. TEMPORAL EFFECTS (Time as Material)
**Why Essential:**
- Datamosh/glitch is fundamentally about **time corruption**
- Memory = artistic context (what came before matters)
- Non-linear time = core aesthetic (rewind, freeze, echo)
- Differentiates from static image glitch tools

**Current Status:** ✅ Strong (recently implemented comprehensive suite)
**Gap:** Audio integration

---

### 2. DATAMOSH-ADJACENT EFFECTS (Frame Corruption, History)
**Why Essential:**
- ERRORHEAD's core identity
- Codec artifacts = authentic glitch aesthetic
- Motion vector manipulation = professional datamosh
- Inter-frame corruption = true video glitch (not just pixel effects)

**Current Status:** ✅ Excellent (I-Frame, MV, blocks, WebGL)
**Gap:** Motion residue implementation, GOP control

---

### 3. AUDIO-DRIVEN CONTROL EFFECTS (CV System)
**Why Essential:**
- **Musicality** = what separates instruments from toys
- Real-time performance requires audio response
- Beat-sync, envelope-follow = professional VJ tools
- Control voltage paradigm = modular synthesis approach

**Current Status:** ⚠️ Foundation exists, event triggers missing
**Gap:** Discrete events, beat-sync, automation

---

### 4. STRUCTURAL / CODEC-LIKE EFFECTS
**Why Essential:**
- Compression = modern digital aesthetic
- Bit-level corruption = authentic digital decay
- DCT/quantization = professional understanding of codecs
- Differentiates from surface-level glitch

**Current Status:** ✅ Adequate (JPEG, byte corruption)
**Gap:** Bit-plane, DCT coefficients, MPEG-style

---

### 5. META-EFFECTS (Feedback, Determinism, Transitions)
**Why Essential:**
- **Determinism** = reproducible art (critical for professionals)
- **Transitions** = smooth changes (not jarring jumps)
- **Feedback loops** = emergent complexity
- System-level control = compositional power

**Current Status:** ⚠️ Foundation exists, transitions missing
**Gap:** Preset morphing, automation curves, state blending

---

## STEP 3 — CORE EFFECT SET (MANDATORY)

### TIER 1: MUST SHIP (CORE)

#### 1. **Motion Residue Carryover** ⚠️ PARAMETER EXISTS, NOT IMPLEMENTED
**What it manipulates:** Motion vectors across frames
**Inputs:** Current motion field, previous residue
**Parameters:**
- `motionResidue`: 0-100 (accumulation strength)
**Audio modulation:** Should connect to audioTargetFeedback
**Safety:** Residue decays to prevent runaway
**Why critical:** TRUE datamosh = motion errors accumulate over time

---

#### 2. **Audio-Triggered Frame Events**
**What it manipulates:** Frame operations on audio peaks
**Inputs:** Audio transients, beat detection
**Parameters:**
- `audioTriggerThreshold`: 0-100 (sensitivity)
- `audioTriggerAction`: 'inject' | 'reverse' | 'freeze' | 'swap'
- `audioTriggerDuration`: 1-30 frames
**Audio modulation:** Native (IS audio modulation)
**Safety:** Cooldown period prevents rapid-fire
**Why critical:** Discrete events ≠ continuous modulation. Beats should trigger frame ops.

---

#### 3. **Partial Frame Replacement**
**What it manipulates:** Regions of current frame replaced with history
**Inputs:** Current frame, frame history, mask
**Parameters:**
- `partialReplace`: 0-100 (intensity)
- `replacePattern`: 'random' | 'bands' | 'blocks' | 'gradient'
- `replaceOffset`: 1-60 (frames back)
**Audio modulation:** Hook to audioTargetBlocks
**Safety:** Always preserve some current frame
**Why critical:** Temporal collage = key datamosh technique

---

#### 4. **Frame Hold + Sparse Injection** ✅ EXISTS, NEEDS AUDIO HOOK
**What it manipulates:** Time flow (hold current, inject new sparingly)
**Inputs:** Current frame, inject trigger
**Parameters:**
- `holdMode`: boolean ✅ EXISTS
- `injectIntervalSec`: 0.5-60 ✅ EXISTS
- `injectFrames`: 1-5 ✅ EXISTS
- **NEW:** `audioInjectTrigger`: boolean (beat triggers inject)
**Audio modulation:** **MISSING** - should connect to beat detection
**Safety:** Always inject eventually (no infinite freeze)
**Why critical:** Erosion sculpture = key ERRORHEAD technique

---

#### 5. **Deterministic Chaos Engine** ⚠️ PARTIAL
**What it manipulates:** All randomness in pipeline
**Inputs:** Master seed, frame counter
**Parameters:**
- `seed`: 0-100 ✅ EXISTS
- **NEW:** `chaosAmount`: 0-100 (controlled unpredictability)
- **NEW:** `chaosEvolve`: boolean (seed changes over time)
**Audio modulation:** Hook to audioTargetAmount
**Safety:** Deterministic = reproducible
**Why critical:** Professional artists need reproducibility + controlled chaos

---

#### 6. **Temporal Crossfade**
**What it manipulates:** Blend between temporal effect states
**Inputs:** Current temporal state, target state, blend factor
**Parameters:**
- `temporalBlend`: 0-100 (crossfade amount)
- `temporalBlendCurve`: 'linear' | 'ease' | 'snap'
**Audio modulation:** Hook to envelope
**Safety:** Always shows valid frame
**Why critical:** Smooth transitions = professional look vs jarring jumps

---

#### 7. **Feedback Injection Strength**
**What it manipulates:** New frame mixing into feedback loop
**Inputs:** Current frame, feedback buffer
**Parameters:**
- `feedback`: 0-100 ✅ EXISTS
- **NEW:** `feedbackInjection`: 0-100 (new frame influence)
**Audio modulation:** ✅ audioTargetFeedback exists
**Safety:** Prevents pure black accumulation
**Why critical:** Separates feedback decay from new frame influence

---

#### 8. **Audio-Sync Time Slice**
**What it manipulates:** Frame timing aligned to audio beats
**Inputs:** Beat detection, frame buffer
**Parameters:**
- `audioSliceEnable`: boolean
- `audioSliceQuantize`: 1-16 (beat divisions)
- `audioSliceSmooth`: 0-100 (transition smoothing)
**Audio modulation:** Native (IS audio sync)
**Safety:** Falls back to time-based if no audio
**Why critical:** Beat-sync = essential for VJ/performance tools

---

### TIER 2: ADVANCED (v1.x)

#### 9. **GOP (Group of Pictures) Control**
**What it manipulates:** Inter-frame dependency structure
**Parameters:**
- `gopSize`: 1-60 (frames per GOP)
- `gopPattern`: 'IBBP' | 'IBP' | 'all-I'
- `gopCorrupt`: 0-100 (dependency violation)

#### 10. **Bit-Plane Separation**
**What it manipulates:** Individual bit planes of pixel data
**Parameters:**
- `bitPlaneShift`: 0-7 (bit position)
- `bitPlaneInvert`: boolean
- `bitPlaneScramble`: 0-100

#### 11. **Preset Morph Engine**
**What it manipulates:** All parameters transitioning between presets
**Parameters:**
- `morphTarget`: preset ID
- `morphProgress`: 0-100
- `morphCurve`: 'linear' | 'ease' | 'bounce'

#### 12. **Audio Automation Curves**
**What it manipulates:** Parameter values over time, synced to audio
**Parameters:**
- `autoPattern`: LFO shape
- `autoSync`: 'free' | 'beat' | 'bar'
- `autoDepth`: 0-100

---

### TIER 3: EXPERIMENTAL (Optional)

#### 13. **DCT Coefficient Manipulation**
**What it manipulates:** JPEG frequency coefficients directly

#### 14. **Multi-Source A/B Crossfade**
**What it manipulates:** Blend between two video sources

#### 15. **Generative Particle Overlay**
**What it manipulates:** Procedural visual layer on top

---

## STEP 4 — IMPLEMENTATION RULES

### Rule 1: Canvas Integrity
```typescript
// ❌ WRONG: Clearing loses base frame
compCtx.clearRect(0, 0, width, height);
applyEffect();

// ✅ CORRECT: Preserve base, apply effect additively
swapCtx.drawImage(compCtx.canvas, 0, 0);
applyEffect(swapCtx, compCtx);
```

### Rule 2: Temporal Safety
```typescript
// ✅ Always check minimum history
if (historyFrames.length < requiredFrames) {
  return; // Skip effect gracefully
}
```

### Rule 3: Effect Ordering
```typescript
// Effects stack in this order:
1. Spatial effects (operate on current frame)
2. Temporal effects (blend with history)
3. Structural effects (codec-like)
4. Meta effects (feedback, output)
```

### Rule 4: Seeded Randomness
```typescript
// ✅ All randomness must support seed
const value = randInt(min, max, seed + frameCounter);

// ❌ NEVER use Math.random() directly in effects
```

### Rule 5: Audio Hook Pattern
```typescript
// ✅ CORRECT: Effects expose audio targets
if (params.audioEnabled && params.audioTargetX > 0) {
  const cv = getAudioCV();
  const depth = params.audioTargetX / 100;
  effectIntensity += cv * depth * maxModulation;
}
```

---

## STEP 5 — EFFECT PRIORITIZATION

### Ranking by Artistic Impact

| Rank | Effect | Impact | Uniqueness | Differentiation | Tier |
|------|--------|--------|------------|-----------------|------|
| 1 | **Motion Residue** | 🔥🔥🔥 | 🎯🎯🎯 | 🚀🚀🚀 | CORE |
| 2 | **Audio Frame Events** | 🔥🔥🔥 | 🎯🎯🎯 | 🚀🚀🚀 | CORE |
| 3 | **Partial Frame Replace** | 🔥🔥🔥 | 🎯🎯 | 🚀🚀 | CORE |
| 4 | **Audio-Sync Time Slice** | 🔥🔥 | 🎯🎯🎯 | 🚀🚀🚀 | CORE |
| 5 | **Temporal Crossfade** | 🔥🔥 | 🎯 | 🚀🚀 | CORE |
| 6 | **Deterministic Chaos** | 🔥🔥 | 🎯🎯 | 🚀 | CORE |
| 7 | **Feedback Injection** | 🔥🔥 | 🎯 | 🚀 | CORE |
| 8 | **Audio Hold Inject** | 🔥 | 🎯 | 🚀 | CORE |
| 9 | GOP Control | 🔥🔥 | 🎯🎯 | 🚀🚀 | ADVANCED |
| 10 | Preset Morph | 🔥 | 🎯 | 🚀🚀 | ADVANCED |

---

## WHY THESE EFFECTS BEAT TYPICAL GLITCH TOOLS

### Typical Glitch Tool:
```
✅ RGB shift
✅ Pixel displacement
✅ Scanlines
✅ Noise
❌ No temporal effects
❌ No audio integration
❌ No codec simulation
❌ No deterministic control
```

### ERRORHEAD (with Core Effects):
```
✅ All spatial effects (RGB, displacement, etc.)
✅ Comprehensive temporal suite (echo, smear, reverse, stutter)
✅ TRUE datamosh (I-Frame, motion vectors, motion residue)
✅ Control voltage audio system (8 targets + events)
✅ Beat-synced frame operations
✅ Deterministic chaos engine
✅ Feedback injection control
✅ Partial frame replacement (temporal collage)
✅ Audio-triggered time manipulation
```

### Competitive Advantages:

1. **TIME = First-Class Material**
   - Most tools: frame-by-frame effects
   - ERRORHEAD: time manipulation, temporal collage, history

2. **AUDIO = Native Control Surface**
   - Most tools: no audio, or simple amplitude
   - ERRORHEAD: CV system, multi-band, transients, events, beat-sync

3. **TRUE DATAMOSH**
   - Most tools: pixel shuffling (fake datamosh)
   - ERRORHEAD: motion vectors, I-Frame, residue accumulation (real codec artifacts)

4. **DETERMINISTIC CREATIVITY**
   - Most tools: random = unreproducible
   - ERRORHEAD: seeded chaos = reproducible art + controlled unpredictability

5. **PERFORMANCE INSTRUMENT**
   - Most tools: render farm
   - ERRORHEAD: real-time, audio-reactive, VJ-ready

---

## IMPLEMENTATION PRIORITY ORDER

### Phase 1 (Immediate):
1. ✅ Motion Residue (fix critical gap)
2. ✅ Audio Frame Events (beat triggers)
3. ✅ Partial Frame Replace (temporal collage)

### Phase 2 (Short-term):
4. ✅ Audio-Sync Time Slice
5. ✅ Temporal Crossfade
6. ✅ Feedback Injection Control

### Phase 3 (Medium-term):
7. ✅ Deterministic Chaos Engine
8. ✅ Audio Hold Inject Hook

---

## SUCCESS CRITERIA

ERRORHEAD will be considered **best-in-class** when:

✅ **TIME** is treated as manipulable material (not just playback)
✅ **AUDIO** drives discrete events, not just continuous modulation
✅ **STRUCTURE** (codec artifacts) is authentic, not simulated
✅ **DETERMINISM** enables reproducible art with controlled chaos
✅ **PERFORMANCE** is real-time, not render-farm

**Current Status: 75% complete**
**With Core Effects: 95% complete**
**Differentiation: Industry-leading**


