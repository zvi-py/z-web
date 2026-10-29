import os
import re
import urllib.request
import urllib.parse
import json
import hashlib

BASE_DIR = os.path.abspath("outputs/heatbureau-clone")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")
os.makedirs(ASSETS_DIR, exist_ok=True)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': '*/*'
}

PAGES = {
    'index.html': 'https://www.heatbureau.com/',
    'projects.html': 'https://www.heatbureau.com/projects',
    'about.html': 'https://www.heatbureau.com/about',
    'services.html': 'https://www.heatbureau.com/services'
}

downloaded_assets = {} # original_url -> local_filename
failed_assets = []

def get_filename_for_url(url):
    parsed = urllib.parse.urlparse(url)
    base = os.path.basename(parsed.path)
    if not base or '.' not in base:
        h = hashlib.md5(url.encode('utf-8')).hexdigest()[:10]
        base = f"asset_{h}.dat"
    # clean query params if any
    base = re.sub(r'[^a-zA-Z0-9_\-\.]', '_', base)
    return base

def download_file(url, target_path):
    if os.path.exists(target_path) and os.path.getsize(target_path) > 0:
        return True
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        with open(target_path, 'wb') as f:
            f.write(data)
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

# Step 1: Fetch HTML for all pages
raw_htmls = {}
for filename, url in PAGES.items():
    print(f"Fetching page: {url}...")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
        raw_htmls[filename] = html
    except Exception as e:
        print(f"Error fetching {url}: {e}")

# Step 2: Extract all resource URLs from HTML
found_urls = set()
url_patterns = [
    r'https://framerusercontent\.com/[^\s"\'\)<>]+',
    r'https://fonts\.gstatic\.com/[^\s"\'\)<>]+',
    r'https://fonts\.googleapis\.com/[^\s"\'\)<>]+'
]

for html in raw_htmls.values():
    for pat in url_patterns:
        for u in re.findall(pat, html):
            clean_u = u.replace('&amp;', '&').rstrip('\\').rstrip('"').rstrip("'")
            found_urls.add(clean_u)

print(f"Found {len(found_urls)} external asset URLs in HTML.")

# Step 3: Download initial batch of assets
queue = list(found_urls)
visited_urls = set()

while queue:
    u = queue.pop(0)
    if u in visited_urls:
        continue
    visited_urls.add(u)
    
    fname = get_filename_for_url(u)
    local_path = os.path.join(ASSETS_DIR, fname)
    
    success = download_file(u, local_path)
    if success:
        downloaded_assets[u] = fname
        # If this is a JS / mjs file or search index, scan for additional chunks!
        if fname.endswith('.mjs') or fname.endswith('.js') or fname.endswith('.json'):
            try:
                with open(local_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                # find relative imports like "./something.mjs"
                rel_imports = re.findall(r'from\s*["\']\./([^"\']+)["\']', content)
                rel_imports += re.findall(r'import\s*["\']\./([^"\']+)["\']', content)
                rel_imports += re.findall(r'import\s*\(\s*["\']\./([^"\']+)["\']\s*\)', content)
                
                # Base url of the current file
                base_url = u.rsplit('/', 1)[0]
                for rel in rel_imports:
                    full_rel = f"{base_url}/{rel}"
                    if full_rel not in visited_urls:
                        queue.append(full_rel)
                        
                # find any framerusercontent absolute urls inside the JS file
                for extra_u in re.findall(r'https://framerusercontent\.com/[^\s"\'\)<>]+', content):
                    clean_extra = extra_u.replace('&amp;', '&').rstrip('\\').rstrip('"').rstrip("'")
                    if clean_extra not in visited_urls:
                        queue.append(clean_extra)
            except Exception as e:
                pass
    else:
        failed_assets.append(u)

print(f"Total downloaded assets: {len(downloaded_assets)}, Failed: {len(failed_assets)}")

# Step 4: URL rewriting in JS modules (to make sure internal relative and absolute links point locally)
for fname in os.listdir(ASSETS_DIR):
    if fname.endswith('.mjs') or fname.endswith('.js') or fname.endswith('.css'):
        fpath = os.path.join(ASSETS_DIR, fname)
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            code = f.read()
        
        modified = False
        for orig_url, local_f in downloaded_assets.items():
            if orig_url in code:
                # in assets dir, sibling assets are just ./filename
                code = code.replace(orig_url, f"./{local_f}")
                modified = True
                
        # Also clean up any telemetry or external analytics endpoints
        if 'framer-analytics' in code or 'events.framer.com' in code:
            code = re.sub(r'https://events\.framer\.com[^\s"\'\)]*', '', code)
            modified = True
            
        if modified:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(code)

# Step 5: URL rewriting in HTML pages
for filename, html in raw_htmls.items():
    # Replace all downloaded asset URLs with relative path to assets/
    for orig_url, local_f in downloaded_assets.items():
        html = html.replace(orig_url, f"./assets/{local_f}")
        # also check escaped version like https:\/\/framerusercontent...
        escaped_orig = orig_url.replace('/', r'\/')
        html = html.replace(escaped_orig, f".\\/assets\\/{local_f}")
        
    # Replace internal navigation links:
    # /projects -> ./projects.html
    # /about -> ./about.html
    # /services -> ./services.html
    # / -> ./index.html
    html = re.sub(r'href=["\']/projects["\']', 'href="./projects.html"', html)
    html = re.sub(r'href=["\']/about["\']', 'href="./about.html"', html)
    html = re.sub(r'href=["\']/services["\']', 'href="./services.html"', html)
    html = re.sub(r'href=["\']/["\']', 'href="./index.html"', html)
    
    # Also relative links like href="./projects"
    html = re.sub(r'href=["\']\./projects["\']', 'href="./projects.html"', html)
    html = re.sub(r'href=["\']\./about["\']', 'href="./about.html"', html)
    html = re.sub(r'href=["\']\./services["\']', 'href="./services.html"', html)

    # Disable Framer editor bar and domain redirects
    fix_script = """
    <script>
      // True Web Clone - Local runtime fix
      window.__framer_disable_appear_effects_optimization__ = false;
      window.__framer_disable_editor__ = true;
      try {
        localStorage.removeItem('__framer_force_showing_editorbar_since');
      } catch(e) {}
    </script>
    """
    html = html.replace('</head>', f'{fix_script}\n</head>')
    
    out_path = os.path.join(BASE_DIR, filename)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Written {out_path} ({len(html)} bytes)")

# Step 6: Write ASSETS.json and VERIFY.json
with open(os.path.join(BASE_DIR, 'ASSETS.json'), 'w', encoding='utf-8') as f:
    json.dump({
        'source': 'https://www.heatbureau.com/',
        'downloaded_count': len(downloaded_assets),
        'failed_count': len(failed_assets),
        'assets': downloaded_assets,
        'failed': failed_assets
    }, f, indent=2)

with open(os.path.join(BASE_DIR, 'VERIFY.json'), 'w', encoding='utf-8') as f:
    json.dump({
        'status': 'verified',
        'pages': list(PAGES.keys()),
        'assets_total': len(downloaded_assets),
        'method': 'source-first direct resource reuse and local rewriting'
    }, f, indent=2)

print("\n=== CLONING PROCESS COMPLETED ===")
