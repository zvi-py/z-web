import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0'}

# 1. Fetch Zaveriya assets
with open('zaveriya_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

js_files = re.findall(r'src=["\']([^"\']+\.js)["\']', html)
css_files = re.findall(r'href=["\']([^"\']+\.css)["\']', html)

for js_path in js_files:
    url = 'https://zaveriya.vercel.app' + js_path if js_path.startswith('/') else 'https://zaveriya.vercel.app/' + js_path
    print(f'Fetching {url}')
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8')
    with open('zaveriya_bundle.js', 'w', encoding='utf-8') as out:
        out.write(content)
    print(f'Saved zaveriya_bundle.js ({len(content)} bytes)')

for css_path in css_files:
    url = 'https://zaveriya.vercel.app' + css_path if css_path.startswith('/') else 'https://zaveriya.vercel.app/' + css_path
    print(f'Fetching {url}')
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8')
    with open('zaveriya_bundle.css', 'w', encoding='utf-8') as out:
        out.write(content)
    print(f'Saved zaveriya_bundle.css ({len(content)} bytes)')
