import os
import urllib.request

MIRROR_DIR = os.path.abspath("outputs/heatbureau-mirror")
os.makedirs(MIRROR_DIR, exist_ok=True)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

pages = {
    'index.html': 'https://www.heatbureau.com/',
    'projects.html': 'https://www.heatbureau.com/projects',
    'about.html': 'https://www.heatbureau.com/about',
    'services.html': 'https://www.heatbureau.com/services'
}

for name, url in pages.items():
    print(f"Fetching live {url}...")
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        
    # In live HTML, internal links are like href="./projects" or href="/projects"
    # Make them navigate cleanly between local pages:
    html = html.replace('href="./projects"', 'href="./projects.html"')
    html = html.replace('href="/projects"', 'href="./projects.html"')
    html = html.replace('href="./about"', 'href="./about.html"')
    html = html.replace('href="/about"', 'href="./about.html"')
    html = html.replace('href="./services"', 'href="./services.html"')
    html = html.replace('href="/services"', 'href="./services.html"')
    html = html.replace('href="./"', 'href="./index.html"')
    html = html.replace('href="/"', 'href="./index.html"')
    
    with open(os.path.join(MIRROR_DIR, name), 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Saved {name} ({len(html)} bytes)")
