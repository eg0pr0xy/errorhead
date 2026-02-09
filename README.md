<div align="center">
  <img width="1200" height="475" alt="ERRORHEAD banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

```txt
:: ERRORHEAD :: ENTROPY ENGINE
signal state ........ unstable
mode ................ realtime glitch lab
```

<div align="center">

[![Build docs site](https://github.com/eg0pr0xy/errorhead/actions/workflows/pages.yml/badge.svg)](https://github.com/eg0pr0xy/errorhead/actions/workflows/pages.yml)
[![Media lock](https://github.com/eg0pr0xy/errorhead/actions/workflows/media-lock.yml/badge.svg)](https://github.com/eg0pr0xy/errorhead/actions/workflows/media-lock.yml)

</div>

Minimal browser-based glitch studio for image, video, and live webcam signal abuse.
No cloud render farm. No external API. No keys.

## Live Nodes

- App: https://eg0pr0xy.github.io/errorhead/
- Docs: https://eg0pr0xy.github.io/errorhead/guide/
- Repository: https://github.com/eg0pr0xy/errorhead

## Core Capabilities

- Realtime glitch processing in browser (Canvas2D + WebGL paths)
- Image and video import
- Live webcam input (`getUserMedia`) as stream source
- Temporal/mosh style effects, RGB shift, block artifacts, scanline systems
- Audio-reactive modulation (mic / video / imported music)
- Export as PNG/JPG, video recording, and PNG sequence

## Quickstart

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Operator Flow

```txt
1) load source (file or webcam)
2) bend entropy in control stack
3) route optional audio modulation
4) record or export final damage
```

## Input Sources

- File drop/import: `PNG, JPG, GIF, MP4, MOV, WEBM`
- Webcam live source: `START WEBCAM` in Input panel
- Webcam notes:
  - requires browser camera permission
  - requires secure context (`https` on GitHub Pages, `localhost` in dev)
  - stream is live/non-seekable by design

## Design Signals

- Terminal-forward, high-contrast, low-friction UI
- Landing gate before editor entry (`ENTER`)
- Canvas remains blank until media source is valid (no fake test pattern)

## Stack

- React 19
- TypeScript
- Vite 6
- Three.js
- Tailwind CSS (local PostCSS build)

## Deploy

GitHub Actions builds and publishes site artifacts to Pages.

- Workflow: `.github/workflows/pages.yml`
- App URL target: `https://eg0pr0xy.github.io/errorhead/`

## Contributing

PRs are welcome.
Keep changes deterministic, fast, and hostile to unnecessary complexity.