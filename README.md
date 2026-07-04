# True Web Clone

Source-first website cloning for local, animated, asset-aware web replicas.

True Web Clone is a Codex skill for cloning public websites into local files while preserving real frontend assets, runtime motion, and browser-verifiable behavior. It is designed for users who say: "clone this website", "download this site locally", "recreate the animations", "preserve GSAP/Lottie/Swiper effects", "复刻网站", "扒站", or "下载到本地".

Project page: https://skynotsilent.github.io/true-web-clone/

## Why This Exists

Most AI website clone workflows start from screenshots and hallucinate a new page. True Web Clone starts from the real source surface:

- rendered DOM and original class names
- CSS, fonts, images, SVG, video, JSON, and Lottie files
- runtime libraries such as GSAP, ScrollTrigger, Swiper, Lottie, Lenis, and Three.js
- local fallbacks for domain-bound services such as Google Maps, forms, feeds, and analytics
- Playwright verification instead of visual guessing

Tagline:

> Clone the real site, not a screenshot.

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
- "帮我克隆这个网站。"
- "把这个网站下载到本地，并复刻动效。"

## Workflow

True Web Clone follows a strict sequence:

1. Capture the live baseline with Playwright screenshots, console logs, failed requests, and runtime library detection.
2. Inventory public resources from DOM, CSS, JS strings, `srcset`, `data-*` attributes, manifests, and JSON.
3. Build a direct-reuse candidate first, preserving original DOM, CSS, JS, and asset paths after local rewriting.
4. Stub or replace fragile dependencies such as analytics, cookie banners, Google Maps, forms, private APIs, and feed widgets.
5. Restore motion only after direct reuse is exhausted.
6. Verify the local result over HTTP with Playwright.

## What It Checks

The verification step should confirm:

- no critical console errors
- no failed local resource requests
- images, fonts, scripts, and styles load
- `window.gsap` and `window.ScrollTrigger` exist when the source uses them
- `window.Swiper` exists and has instances when sliders are present
- Lottie renders SVG or canvas nodes
- smooth scrolling exists when the source uses Lenis or an equivalent runtime
- desktop and mobile screenshots stay structurally aligned

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
├── examples/units-gr/            # Case-study metrics and verification output
└── docs/                         # GitHub Pages project page
```

## SEO Keywords

website cloner, web clone, AI website cloner, animated website clone, local website clone, source-first website cloning, asset-first website clone, GSAP clone, Lottie clone, Swiper clone, Lenis smooth scroll, Playwright website verification, Claude Code skill, Codex skill, clone website to local files, 复刻网站, 克隆网站, 扒站, 下载网站到本地.

## Safety

Use True Web Clone for local research, learning, migration analysis, prototyping, and authorized reconstruction. Do not use it to bypass authentication, paywalls, private APIs, DRM, or domain-bound third-party keys.
