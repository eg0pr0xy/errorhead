# ERRORHEAD — Audio System Debug Guide

## Problem: "Audio modulation doesn't work - I can't see any results"

### Root Cause Analysis:

The audio system IS implemented and functional, but there are **4 common reasons** why you might not see results:

---

## Issue 1: Audio is Disabled by Default ⚠️

**Check:** Look at Control Panel → "AUDIO MODULATION" section
**Fix:** Toggle "ENABLE MODULATION" to ON

**Why:** `audioEnabled: false` by default in `constants.ts`

---

## Issue 2: Modulation Targets are Set to 0 ⚠️

Even if audio is enabled, if all target depths are 0, nothing will happen.

**Check Control Panel values:**
```
RGB SHIFT TARGET: 0        ← No RGB modulation
GLITCH AMOUNT TARGET: 0    ← No compression modulation  
MOSH WARP TARGET: 0        ← No warp modulation
FEEDBACK TARGET: 0         ← No temporal modulation
BLOCKS TARGET: 0           ← No macroblock modulation
MELT TARGET: 0             ← No melt modulation
SHAKE TARGET: 0            ← No shake modulation
NOISE TARGET: 0            ← No noise modulation
```

**Fix:** Increase at least ONE target depth to 50-100

**Recommended starting values:**
- RGB SHIFT TARGET: 80
- GLITCH AMOUNT TARGET: 40
- MOSH WARP TARGET: 100

---

## Issue 3: Audio Source Not Connected 🎤

**Check:** Control Panel → "Signal Source" shows: MIC | VIDEO | MUSIC
- If "MIC" selected → Browser must grant microphone permission
- If "VIDEO" selected → Video must be playing AND have audio track
- If "MUSIC" selected → Must click "SELECT MUSIC FILE" and load audio

**Common mistakes:**
- MIC selected but browser blocked permission
- VIDEO selected but video file has no audio track
- MUSIC selected but no file loaded

**Fix:**
1. For MIC: Allow microphone access when prompted
2. For VIDEO: Check video has audio (play in VLC to verify)
3. For MUSIC: Click "SELECT MUSIC FILE" button and choose MP3/WAV

---

## Issue 4: AudioContext Suspended (Autoplay Policy) 🔇

Modern browsers suspend AudioContext until user interaction.

**Check Console for:**
```
ERRORHEAD // Mic Source Connected [CV Mode]
ERRORHEAD // Media Source Connected [CV Mode]: VIDEO
```

**If you see nothing:** AudioContext is suspended

**Fix:** Click anywhere on the page after loading media

---

## Issue 5: Modulation Intensity Too Low

Audio might be working but modulation is too subtle to see.

**Check:**
- INPUT GAIN: Should be 50-150 (default: 50)
- AUDIO GATE: If too high (>30), quiet sounds are filtered out
- SMOOTHING: If too high (>70), changes are very gradual

**Recommended troubleshooting values:**
```
INPUT GAIN: 100        ← Boost sensitivity
GATE THRESHOLD: 5      ← Allow quiet sounds through
SMOOTHING: 20          ← Faster response
```

---

## Quick Diagnostic Test

**Step 1: Enable Audio**
1. Open Control Panel → "AUDIO MODULATION" section
2. Toggle "ENABLE MODULATION" → ON
3. Select "Signal Source" → MIC
4. Allow microphone access

**Step 2: Set Targets**
1. RGB SHIFT TARGET → 80
2. GLITCH AMOUNT TARGET → 40
3. MOSH WARP TARGET → 100

**Step 3: Test**
1. Clap or make loud sounds
2. You should see RGB shift increase on loud sounds
3. Look for visual response

**Expected result:**
- Loud sounds → RGB channels separate
- Beat → Glitch compression increases
- Transients → Warp spikes

---

## Visual Indicators That Audio IS Working:

✅ **Console logs:**
```
ERRORHEAD // Mic Source Connected [CV Mode]
[HH:MM:SS] Audio: Mic Online
```

✅ **Visual changes:**
- RGB shift pulses with music
- Glitch intensity follows amplitude
- Mosh warp reacts to bass

✅ **Browser microphone indicator:**
- Red dot or mic icon in browser tab (if using MIC source)

---

## Debug Console Commands

Open browser console (F12) and run:

```javascript
// Check if audio is active
audioService.isActive
// Should return: true

// Check audio features manually
audioService.getFeatures()
// Should return object with amplitude, low, mid, high, etc.

// Force mic connection
audioService.connectMic()

// Check AudioContext state
audioService.ctx.state
// Should return: "running" (not "suspended")
```

---

## Common Fix: "It Still Doesn't Work!"

If audio is enabled, targets are set, source is connected, but STILL nothing happens:

**Nuclear Option — Full Audio Reset:**

1. Disable audio modulation (toggle OFF)
2. Hard reset (click RESET button in Control Panel)
3. Re-enable audio modulation (toggle ON)
4. Set signal source again
5. Click anywhere on page to resume AudioContext

---

## Default Preset with Audio Enabled

Try loading the "SONIC ENTROPY (AUDIO)" preset:
- This preset has audio pre-configured
- RGB SHIFT TARGET: 80
- MOSH WARP TARGET: 100
- GLITCH AMOUNT TARGET: 40
- Source: MIC

Load it and allow microphone access → should work immediately.

---

## Why Audio Modulation is Different from Simple "Loudness"

**Bad Audio Reactivity (most tools):**
```
loud → more glitch
quiet → less glitch
```

**ERRORHEAD Control Voltage System:**
```
bass (20-250Hz) → modulate melt/shake
transients → trigger frame events
mid (250-4k) → modulate glitch amount
high (4k-20k) → modulate RGB shift
envelope → smooth modulation
beat → rhythmic pulse
```

Each parameter can be driven by different audio features:
- Feature Signal: amplitude | envelope | low | mid | high | transient | beat
- Modulation Target: rgb | amount | warp | feedback | blocks | melt | shake | noise

This is why you need to:
1. Choose the right FEATURE (what audio characteristic to track)
2. Choose the right TARGET (what visual parameter to modulate)
3. Set the TARGET DEPTH (how much modulation to apply)

---

## Still Not Working? Report Bug

If after all these checks audio still doesn't work:

1. Open browser console (F12)
2. Check for errors (red text)
3. Run: `audioService.getFeatures()`
4. Screenshot the result
5. Report with details:
   - Browser (Chrome/Firefox/Safari)
   - Operating System
   - Audio source selected (MIC/VIDEO/MUSIC)
   - Console errors
   - Feature values from step 3

---

## Success Checklist

Audio modulation is working if:
- [ ] "ENABLE MODULATION" is ON
- [ ] Signal source is selected (MIC/VIDEO/MUSIC)
- [ ] At least ONE target depth > 0
- [ ] AudioContext state = "running"
- [ ] Console shows "Mic Source Connected" or "Media Source Connected"
- [ ] Visual changes happen when you make sound

If all checked → Audio is working! 🎵✨

If not all checked → Follow fixes above for each unchecked item.
