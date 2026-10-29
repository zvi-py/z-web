import re
import json

with open('heatbureau_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all image URLs, webp, png, svg, mp4
assets = re.findall(r'https://framerusercontent\.com/[^\s"\'\)]+', html)
unique_assets = sorted(list(set(assets)))

images = [a for a in unique_assets if any(a.endswith(ext) or ext in a for ext in ['.png', '.jpg', '.jpeg', '.webp', '.svg'])]
videos = [a for a in unique_assets if any(a.endswith(ext) or ext in a for ext in ['.mp4', '.webm'])]
fonts = [a for a in unique_assets if any(a.endswith(ext) or ext in a for ext in ['.woff2', '.woff', '.ttf'])]
js_bundles = [a for a in unique_assets if any(a.endswith(ext) or ext in a for ext in ['.mjs', '.js'])]

print(f"Found {len(images)} images, {len(videos)} videos, {len(fonts)} fonts, {len(js_bundles)} js modules")
print("\n--- SAMPLE IMAGES ---")
for img in images[:10]:
    print(img)

print("\n--- SAMPLE VIDEOS ---")
for vid in videos:
    print(vid)

print("\n--- SAMPLE JS CHUNKS ---")
for js in js_bundles[:5]:
    print(js)
