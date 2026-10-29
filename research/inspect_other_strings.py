import re

pages = ['projects', 'about', 'services']

for p in pages:
    with open(f'heatbureau_{p}.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    main_idx = html.find('id="main"')
    main_html = html[main_idx:] if main_idx != -1 else html
    
    # Strip script and style
    clean = re.sub(r'<script.*?</script>', '', main_html, flags=re.DOTALL)
    clean = re.sub(r'<style.*?</style>', '', clean, flags=re.DOTALL)
    
    strings = re.findall(r'>([^<]{2,})<', clean)
    clean_strings = [s.strip() for s in strings if s.strip() and not s.strip().startswith('{')]
    
    # Dedup
    dedup = []
    for s in clean_strings:
        if not dedup or dedup[-1] != s:
            dedup.append(s)
            
    print(f"==================== PAGE: {p} ({len(dedup)} strings) ====================")
    for s in dedup[:40]:
        print("  *", s)
    print()
