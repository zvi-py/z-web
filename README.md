# True Web Clone

Source-first AI website cloning for local, animated, asset-aware web replicas.

True Web Clone is a Codex skill for cloning public websites into local files while preserving real frontend assets, runtime motion, 3D/WebGL scenes, and browser-verifiable behavior. It is designed for users who say: "clone this website", "download this site locally", "recreate the animations", "preserve GSAP/Lottie/Swiper effects", "clone this WebGL site", "复刻网站", "扒站", "下载到本地", or "复刻复杂动效/3D 网站".

Project page: https://skynotsilent.github.io/true-web-clone/

> Clone the real site, not a screenshot.

## Why This Exists

Most AI website clone workflows start from screenshots and hallucinate a new page. True Web Clone starts from the real source surface:

- rendered DOM and original class names
- CSS, fonts, images, SVG, video, JSON, and Lottie files
- runtime libraries such as GSAP, ScrollTrigger, Swiper, Lottie, Lenis, Three.js, Rive, and canvas/WebGL engines
- 3D and GPU assets such as `.buf`, `.bin`, `.glb`, `.gltf`, `.riv`, `.wasm`, `.sog`, texture folders, splats, and MSDF font atlases
- local fallbacks for domain-bound services such as Google Maps, forms, feeds, and analytics
- Playwright verification instead of visual guessing

## What Makes It Different

- **Source-first, not screenshot-first**: preserve the actual DOM/CSS/JS/runtime before attempting an AI rebuild.
- **Asset-first**: crawl and localize public assets, including fonts, Lottie JSON, Rive files, wasm, videos, WebGL buffers, splats, and textures.
- **Runtime-aware**: detect and preserve motion systems such as GSAP, ScrollTrigger, Swiper, Lenis, Lottie, Rive, Three.js, canvas, and custom WebGL.
- **404-loop verification**: run the local clone, collect missing local requests, download the exact assets, refresh, and repeat until critical local 404s are gone.
- **Honest about boundaries**: mark domain-bound services like Google Maps, Typekit binaries, Vimeo players, private APIs, forms, payments, and analytics instead of pretending they were cloned.

This makes it useful as an AI website cloner, local website mirror workflow, animated website downloader, WebGL website cloning playbook, and Claude Code / OpenAI Codex skill for high-fidelity frontend reconstruction.

## Install

Copy the skill into your Codex skills folder:

```bash
mkdir -p ~/.codex/skills
cp -R skills/true-web-clone ~/.codex/skills/
```

Then invoke it naturally:

```text
Use $true-web-clone to clone https://example.com into a local folder.
```

Natural-language triggers also work when your agent supports implicit skill invocation:

- "Clone this website locally."
- "Download this animated website with all assets."
- "Preserve the GSAP and Lottie effects."
- "Clone this WebGL / Three.js / Rive site locally."
- "帮我克隆这个网站。"
- "把这个网站下载到本地，并复刻动效。"
- "复刻这个 3D 网站，并把资源抓到本地。"

## Workflow

True Web Clone follows a strict sequence:

1. Capture the live baseline with Playwright screenshots, console logs, failed requests, and runtime library detection.
2. Inventory public resources from DOM, CSS, JS strings, `srcset`, `data-*` attributes, manifests, JSON, performance entries, and post-scroll lazy loading.
3. Build a direct-reuse candidate first, preserving original DOM, CSS, JS, and asset paths after local rewriting.
4. Stub or replace fragile dependencies such as analytics, cookie banners, Google Maps, forms, private APIs, and feed widgets.
5. Restore motion only after direct reuse is exhausted.
6. Verify the local result over HTTP with Playwright, using correct MIME types for module JS, wasm, fonts, `.buf`, `.riv`, `.sog`, video, and manifests.
7. For complex canvas/WebGL sites, iterate the local 404 loop until late-loaded scene assets are also local.

## What It Checks

The verification step should confirm:

- no critical console errors
- no failed local resource requests
- images, fonts, scripts, and styles load
- `window.gsap` and `window.ScrollTrigger` exist when the source uses them
- `window.Swiper` exists and has instances when sliders are present
- Lottie renders SVG or canvas nodes
- Rive/canvas/WebGL scenes create expected canvas nodes
- wasm, model buffers, splats, textures, and MSDF font atlas files are served locally when used
- smooth scrolling exists when the source uses Lenis or an equivalent runtime
- desktop and mobile screenshots stay structurally aligned

## Case Study: Oryzo.ai 3D/WebGL Site

This repository records a complex 3D clone run against the Oryzo AI homepage. The purpose is to document the method and verification evidence, not to publish another brand's full mirrored site.

| Field | Value |
| --- | --- |
| Source URL | https://oryzo.ai/ |
| Method | Direct reuse of Astro HTML, CSS, JS, WebGL assets, Rive assets, wasm, splats, textures, and late-loaded scene resources |
| Local output from test run | `outputs/oryzo-true-web-clone/` |
| Output size | about 25 MB |
| Files | 156 |
| Dynamic/special assets | 107 under models, textures, splats, and wearable gallery |
| Canvas count verified | 6 |
| Local failed requests after fix loop | 0 |
| Key pitfall | Many 3D assets appeared only after the local page reached later preload/scroll phases |

See [examples/oryzo-ai](examples/oryzo-ai/) for the verification summary.

## Case Study: Units.gr

This repository includes a public case study based on the Units homepage.

| Field | Value |
| --- | --- |
| Source URL | https://units.gr/en/homepage/ |
| Clone artifact from local run | `outputs/测试文件夹-direct-reuse/index.html` |
| Public live clone | Not hosted, because the clone contains third-party brand assets and domain-bound service integrations |
| Method | Direct resource reuse plus local fallbacks |
| Runtime libraries detected | GSAP, ScrollTrigger, Swiper, Lottie |
| Public resources discovered | 334 |
| Public resources downloaded | 334 |
| Failed downloads | 0 |

See [examples/units-gr](examples/units-gr/) for the verification report and asset summary.

### Why The Units Clone Is Not Hosted Here

True Web Clone can reproduce public frontend assets for local study. Publishing a full live clone of another brand's site, including images, fonts, scripts, logos, and map integrations, is a different permission problem. This repo therefore publishes the method, skill, metrics, and case-study report, not a public mirror of the Units website.

If you own the source site or have permission to publish the cloned output, you can host the generated local folder on GitHub Pages, Netlify, Vercel, or any static host.

## Repository Layout

```text
.
├── skills/true-web-clone/        # Installable Codex skill
│   └── references/complex-motion-3d.md
├── examples/units-gr/            # Case-study metrics and verification output
├── examples/oryzo-ai/            # 3D/WebGL case-study summary
└── docs/                         # GitHub Pages project page
```

## SEO Keywords

website cloner, web clone, AI website cloner, AI web clone, local website clone, website mirror, animated website clone, source-first website cloning, asset-first website clone, clone website to local files, download website locally, WebGL website clone, Three.js website clone, Rive website clone, canvas website clone, 3D website clone, GSAP clone, ScrollTrigger clone, Lottie clone, Swiper clone, Lenis smooth scroll, Playwright website verification, Claude Code skill, OpenAI Codex skill, Codex skill, AI agent website cloning, 复刻网站, 克隆网站, 扒站, 下载网站到本地, 复刻动效, 复刻 3D 网站, 复杂动效网站复刻.

## Suggested GitHub Topics

`website-cloner`, `ai-website-cloner`, `web-clone`, `website-mirror`, `codex-skill`, `claude-code`, `playwright`, `webgl`, `threejs`, `rive`, `gsap`, `lottie`, `frontend-automation`, `ai-agents`, `local-first`

## Safety

Use True Web Clone for local research, learning, migration analysis, prototyping, and authorized reconstruction. Do not use it to bypass authentication, paywalls, private APIs, DRM, or domain-bound third-party keys.
