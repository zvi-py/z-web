import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0'}

pages = ['projects', 'about', 'services']
for p in pages:
    url = f'https://www.heatbureau.com/{p}'
    print(f"Fetching {url}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8')
        with open(f'heatbureau_{p}.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Saved heatbureau_{p}.html ({len(html)} bytes)")
    except Exception as e:
        print(f"Failed {p}: {e}")
