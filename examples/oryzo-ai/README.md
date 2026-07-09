# Oryzo.ai 3D/WebGL Case Study

This case study records a local True Web Clone run against the Oryzo AI homepage.

## Source And Clone

- Source URL: https://oryzo.ai/
- Local clone artifact from test run: `outputs/oryzo-true-web-clone/`
- Public live clone: intentionally not hosted in this repository

The generated local clone preserved the original public frontend runtime as much as possible, including Astro HTML, CSS, JavaScript, WebGL scene assets, Rive assets, wasm, splats, textures, and gallery media.

## Verification Summary

From the local run:

- title: `ORYZO AI`
- local failed requests after fix loop: `0`
- canvas count: `6`
- scroll test: reached `scrollY = 2000`
- output size: about `25 MB`
- output files: `156`
- dynamic/special assets: `107` files under models, textures, splats, and wearable gallery

Important localized runtime files included:

- `/_astro/hoisted.CRsATKbF.js`
- `/_astro/index.TL6TuoJb.css`
- `/vendor/rive/rive.wasm`
- `/rive/oryzo.riv`
- `/models/coaster_hero_animation.buf`
- `/splats/props.sog`
- `/splats/table_reflection.sog`

## Important Pitfalls

This site was not a pure HTML page. It used canvas/WebGL scenes, Rive, wasm, binary model buffers, splats, texture maps, and lazy-loaded gallery media.

The first pass looked mostly complete but later browser reloads revealed additional missing assets. The correct workflow was an iterative local 404 loop:

1. Serve the clone over local HTTP.
2. Open it with Playwright or a real browser.
3. Capture console/request 404s.
4. Download the exact missing same-origin resources.
5. Refresh and repeat until local 404s are gone.

This case is the reason True Web Clone includes `references/complex-motion-3d.md`.

## Publishing Boundary

True Web Clone can reproduce public frontend resources for local study and authorized migration work. Publishing another brand's full cloned 3D site, including its imagery, models, videos, fonts, and product identity, is a separate permission question. This repository publishes the method and verification summary, not a public mirror.
