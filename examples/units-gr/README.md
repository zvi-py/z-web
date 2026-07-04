# Units.gr Case Study

This case study records a local True Web Clone run against the Units homepage.

## Source And Clone

- Source URL: https://units.gr/en/homepage/
- Local clone artifact: `outputs/测试文件夹-direct-reuse/index.html`
- Public live clone: intentionally not hosted in this repository

The generated local clone preserved the original public frontend resource surface as much as possible, then added local fallbacks where third-party services were bound to the original domain.

## Verification Summary

From `VERIFY.json`:

- title: `HomePage - Units`
- body opacity: `1`
- GSAP: detected
- ScrollTrigger: detected, 2 triggers
- Swiper: detected, 1 initialized instance
- Lottie: detected, 3 rendered nodes
- local scripts: 37
- local styles: 12
- failed requests: 0
- critical errors: 0

From `ASSETS.summary.json`:

- source URL: `https://units.gr/en/homepage/`
- public resource URLs discovered: 334
- resources downloaded locally: 334
- failed downloads: 0

## Important Pitfall

The original page includes a Google Maps block in the Locations section. The live Google Maps API key is domain-bound to the original site, so it cannot be reused locally without authorization. The local clone keeps the map container and location data, then replaces the live map with an offline fallback.

This is the intended True Web Clone behavior: clone what is public and reproducible, then clearly mark or replace what depends on private server state, third-party authorization, or domain-bound keys.
