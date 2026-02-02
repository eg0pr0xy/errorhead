# Audio-Modulation Test Guide

## Schnelltest: Audio funktioniert jetzt! 🎵

### SCHRITT 1: Bild oder Video laden
1. Datei hochladen (DROP FILE Bereich)
2. Warten bis Bild/Video sichtbar ist

### SCHRITT 2: Audio Modulation aktivieren
1. Öffne **"AUDIO MODULATION"** Section
2. Aktiviere **"ENABLE MODULATION"** Toggle
3. Bei "MIC" → Browser fragt nach Mikrofon-Zugriff → **Erlauben**

### SCHRITT 3: Einfacher Test
**Basis-Einstellungen für sichtbaren Effekt:**
```
Signal Source: MIC
Feature Signal: ENVELOPE (smoothed)
INPUT GAIN: 100
GATE THRESHOLD: 5
RGB SHIFT TARGET: 80
GLITCH AMOUNT TARGET: 60
```

**Jetzt sprechen/klatschen** → RGB Shift und Glitch Amount sollten auf Audio reagieren!

---

## Vollständige Parameter-Erklärung

### Signal Processing
- **Feature Signal**: Welche Audio-Eigenschaft wird verwendet
  - `AMPLITUDE`: Rohe Lautstärke
  - `ENVELOPE`: Geglättete Lautstärke (empfohlen für Start)
  - `LOW`: Bass-Frequenzen (20-250 Hz)
  - `MID`: Mitten (250-4000 Hz)
  - `HIGH`: Höhen (4000-20000 Hz)
  - `TRANSIENT`: Perkussive Schläge
  - `BEAT`: Rhythmischer Puls

- **INPUT GAIN**: Verstärkung (50 = normal, 100 = 2x, 200 = 4x)
- **GATE THRESHOLD**: Unterhalb diesem Wert → kein Effekt (Rauschunterdrückung)
- **SMOOTHING**: Noch nicht implementiert im Backend (TODO)
- **INVERT SIGNAL**: Kehrt Modulation um (leise = mehr Effekt)
- **QUANTIZE**: Stufige Modulation statt glatt (0 = aus)

### Modulation Targets
Jeder Target steuert, wie stark Audio einen visuellen Parameter beeinflusst:

- **RGB SHIFT TARGET**: Farbverschiebung
- **GLITCH AMOUNT TARGET**: Kompression/Korruption
- **MOSH WARP TARGET**: Motion Warp (benötigt Mosh Engine)
- **FEEDBACK TARGET**: Temporale Rückkopplung (benötigt Mosh)
- **BLOCKS TARGET**: Makroblock-Korruption (benötigt Mosh)
- **MELT TARGET**: Schmelz-Effekt
- **SHAKE TARGET**: Instabilität
- **NOISE TARGET**: Rauschen

---

## Test-Szenarien

### Szenario 1: Bass-reaktive RGB-Verschiebung
```
Feature Signal: LOW (bass)
INPUT GAIN: 80
GATE THRESHOLD: 15
RGB SHIFT TARGET: 100
```
**Erwartung**: Bassdrum → Farbverschiebung

### Szenario 2: Transienten-getriggerte Blöcke
```
Feature Signal: TRANSIENT (percussive)
INPUT GAIN: 100
GATE THRESHOLD: 20
BLOCKS TARGET: 100
(Mosh Engine muss AN sein, 2D oder WebGL)
```
**Erwartung**: Schlagzeug → Makroblöcke erscheinen

### Szenario 3: Hochfrequenz-Glitch
```
Feature Signal: HIGH (treble)
INPUT GAIN: 60
GATE THRESHOLD: 10
GLITCH AMOUNT TARGET: 80
NOISE TARGET: 60
```
**Erwartung**: Zischlaute/Becken → Kompression + Rauschen

### Szenario 4: Beat-synchronisierter Warp
```
Feature Signal: BEAT (rhythm)
INPUT GAIN: 70
GATE THRESHOLD: 10
MOSH WARP TARGET: 100
(Mosh Engine WebGL muss AN sein)
```
**Erwartung**: Rhythmus → Wellenförmige Verzerrung

---

## Fehlerbehebung

### Problem: Nichts passiert
**Lösung**:
1. ✅ Ist "ENABLE MODULATION" AN?
2. ✅ Ist ein Bild/Video geladen?
3. ✅ Ist mindestens ein TARGET > 0?
4. ✅ Ist INPUT GAIN > 0?
5. ✅ Ist GATE THRESHOLD nicht zu hoch?
6. ✅ Bei MIC: Hat Browser Mikrofon-Zugriff?

### Problem: Audio zu leise
**Lösung**:
- INPUT GAIN erhöhen (z.B. 150-200)
- GATE THRESHOLD senken (z.B. 5)

### Problem: Zu viel Rauschen
**Lösung**:
- GATE THRESHOLD erhöhen (z.B. 20-30)
- Feature Signal auf ENVELOPE statt AMPLITUDE

### Problem: Effekt zu jittrig
**Lösung**:
- Feature Signal: ENVELOPE (statt AMPLITUDE)
- Oder BEAT für rhythmische Inhalte

---

## Audio-Quellen

### MIC (Mikrofon)
- Live-Audio von Mikrofon
- Browser fragt nach Erlaubnis
- **Empfohlen für:** Live-Performance, Tests

### VIDEO (Video-Audio)
- Audio aus geladenem Video
- Automatisch synchronisiert
- **Empfohlen für:** Audio-visuelle Exports

### MUSIC (Separate Audio-Datei)
- Separate MP3/WAV-Datei laden
- Läuft unabhängig vom Video
- **Empfohlen für:** Visuals zu bestehender Musik

---

## Technische Details

### Audio Pipeline
```
Audio Input (Mic/Video/Music)
  ↓
AudioContext → AnalyserNode
  ↓
FFT Analysis (2048 bins)
  ↓
Feature Extraction:
  - RMS Amplitude
  - Envelope (Attack/Release)
  - Frequency Bands (LOW/MID/HIGH)
  - Transient Detection
  - Beat Detection
  ↓
Control Voltage Processing:
  - Gate Threshold
  - Gain Multiplication
  - Inversion
  - Quantization
  ↓
Parameter Modulation (per Target)
  ↓
Visual Output
```

### Update-Rate
- Audio analysiert mit **60 FPS** (jedes Frame)
- FFT-Auflösung: **2048 bins** (~23 Hz bei 48 kHz)
- Latenz: **< 50ms** (sub-perzeptual)

---

## Beste Einstellungen für Anfänger

```javascript
// Kopiere diese Werte für sofortigen Erfolg:
{
  audioEnabled: true,
  audioSource: 'mic',
  audioFeature: 'envelope',
  audioGain: 100,
  audioGate: 10,
  audioTargetRgb: 80,
  audioTargetAmount: 50,
  audioTargetWarp: 60,
  // Mosh Engine: AN
  // Mosh Mode: WEBGL2 SCULPT
}
```

**Dann klatschen oder sprechen** → RGB und Glitch reagieren!

---

## Fortgeschrittene Nutzung

### Multi-Target Modulation
```javascript
// Bass steuert Warp, Höhen steuern RGB
{
  audioFeature: 'low',      // Bass für Basis
  audioTargetWarp: 100,     // Bass → Warp
  // Dann Feature auf 'high' wechseln oder
  // mehrere Parameter gleichzeitig nutzen
}
```

### Quantisierte Modulation
```javascript
{
  audioQuantize: 4,  // 4 Stufen
  audioFeature: 'transient',
  audioTargetBlocks: 100
}
// Ergebnis: Diskrete Sprünge statt glatte Übergänge
```

### Invertierte Modulation
```javascript
{
  audioInvert: true,
  audioFeature: 'envelope',
  audioTargetAmount: 80
}
// Ergebnis: Leise = mehr Glitch, Laut = weniger Glitch
```

---

**Audio-Modulation ist jetzt vollständig funktionsfähig!** 🎵🎨
