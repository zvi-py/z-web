import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0'}

with open('heatbureau_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

mjs_urls = re.findall(r'https://framerusercontent\.com/sites/4TxhbsgEbDtTKDRMq12nAY/[^\s"\'\)]+\.mjs', html)
print(f"Found {len(mjs_urls)} mjs modules")

for u in set(mjs_urls):
    name = u.split('/')[-1]
    print(f"Fetching {name}...")
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8')
        with open(f"heatbureau_{name}", 'w', encoding='utf-8') as out:
            out.write(content)
        print(f"Saved heatbureau_{name} ({len(content)} bytes)")
    except Exception as e:
        print(f"Failed {name}: {e}")
