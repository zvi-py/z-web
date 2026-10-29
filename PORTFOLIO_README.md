# ZAVERIYA MULLA — PERSONAL PORTFOLIO RECREATION
### Inspired by & Reconstructed from [Heat Bureau](https://www.heatbureau.com/)

A personal portfolio for **Zaveriya Mulla**, engineered with the design language, motion choreography, typography, progressive lens glassmorphism, and editorial structure of **Heat Bureau**.

---

## ✦ Core Design & Aesthetic Implementation

1. **Editorial Typography System**:
   - Primary Expressive Display: `Syne` & `Inter Display` with uppercase case-inversions and tight tracking (`-0.03em`) matching Heat Bureau's headlines:
     * `an APPLIED-AI & FULL-STACK engineering STUDIO`
     * `WE TURN COMPUTATIONAL INSIGHT INTO SYSTEMS WITH SUBSTANCE.`
   - Monospace Metadata Tags: `Space Mono` / `Fragment Mono` for indices (`[01]`, `[02]`), status tags (`[reach]`, `[social]`, `[bureau]`, `[location]`), and tech tags.
   - Body Copy: Clean, high-readability sans-serif (`Inter`) with comfortable editorial line heights.

2. **Obsidian Charcoal & Warm Heat Palette**:
   - Primary Background: `#202020` (exact token from Heat Bureau `rgb(32, 32, 32)`).
   - Elevated Surfaces: `#181818` and `#161616`.
   - Subtle Hairline Borders: `rgba(255, 255, 255, 0.08)` to `0.15`.
   - Accents: Heat Flame (`#FF552E`), Warm Amber (`#FFA500`), and Neon Emerald (`#00E676`).

3. **Signature Motion & Interaction Architecture**:
   - **8-Tier Stepped Lens Blur Header**: Faithful reproduction of Heat Bureau's progressive backdrop blur mask (`blur(0.2px)` to `blur(16px)` with layered alpha gradient masks).
   - **Cursor Image Trail**: Interactive visual trail following cursor coordinates with spring physics, rotation jitter, and soft blur fade-out.
   - **Fluid Generative Shader Canvas**: GPU-accelerated 2D canvas simulating organic heat fields and magnetic mouse attraction.
   - **Lenis Smooth Momentum Scrolling**: Buttery smooth inertial scrolling across all viewports.
   - **Interactive Case Study Deep-Dive**: Rich modal viewer detailing Challenge, Technical Approach, Architecture, Metrics, and live deployment links.

---

## ✦ Verified Ground-Truth Profile (Extracted from [zaveriya.vercel.app](https://zaveriya.vercel.app/))

- **Founding & Venture Leadership**:
  - Founder & Team Lead, **EcoCane** (VTU Incubation Centre, Belagavi). Ranked **Top 10 in NAIN Startup Program** with **₹4.5 Lakh** in startup funding.
- **Ambassadorships & Community**:
  - **Google Gemini Student Ambassador** (Google GID 9142).
  - **AWS Student Builder Community Lead** (AWS SBCL, ID: zaveriya).
- **Engineering Experience**:
  - Full Stack Development Intern, Maincrafts Technology.
  - Data Analysis Intern, BlueStack.
- **Verified Projects (Complete with Live / Source Links)**:
  1. **Aurael** — AI-powered mental wellness, journaling, and reflection app ([Live](https://aurael.vercel.app/) • [GitHub](https://github.com/zvi-py/Aurael)).
  2. **EcoCane** — VTU-incubated sustainable alternative to single-use plastics ([LinkedIn](https://linkedin.com/in/zaveriya)).
  3. **HeatRay / ZARVIS** — Cinematic thermal-vision web app with real-time hand-gesture detection using Next.js 15, Three.js, and MediaPipe Vision.
  4. **Finova** — AI personal finance assistant with predictive budgeting ([Live](https://finovabyzxll.vercel.app/)).
  5. **TrainLLM** — Interactive educational platform simulating transformers and attention matrices.
  6. **ZoneXza** — Mood-based Spotify music recommendation platform using NLP embeddings ([Live](https://zonexzabyzxll.vercel.app/)).
  7. **Ghosted** — Real-time multiplayer quiz game with streak engines ([Live](https://ghostedbyzxll.vercel.app/)).
  8. **Face Recognitor** — OpenCV computer vision face recognition system ([Live](https://zvi-py.github.io/Face-Recognizer/) • [GitHub](https://github.com/zvi-py/Face-Recognizer)).

---

## ✦ Routes & Navigation Architecture

| Route | Purpose | Heat Bureau Reference Equivalent |
|---|---|---|
| `/` | Main Studio Showcase | Homepage (`/`) |
| `/projects` | Dedicated Case Studies Archive | Projects Index (`/projects`) |
| `/about` | Studio Philosophy & Leadership | Studio / About (`/about`) |
| `/services` | Capabilities, Pain Points & Engagement | Services (`/services`) |

---

## ✦ Running Locally & Deployment

### Quick Start:

From the workspace root:

```bash
# Start development server on http://localhost:3000
npm run dev

# Or build for production
npm run build
npm run start
```

### Direct Folder Navigation:

```bash
cd zaveriya-portfolio
npm run dev
```

### Vercel Deployment:
Deploy directly by connecting the `zaveriya-portfolio` root directory on Vercel with standard Next.js defaults.
