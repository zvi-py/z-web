with open('heatbureau_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Find all script contents or src
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
print(f"Found {len(scripts)} inline scripts")
for i, s in enumerate(scripts):
    print(f"Script {i}: length {len(s)}")
    if len(s) < 2000:
        print(s[:500])
    else:
        print(s[:300] + "... [truncated] ..." + s[-300:])
    print("="*40)
