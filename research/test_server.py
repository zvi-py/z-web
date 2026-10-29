import urllib.request

routes = ['/', '/projects', '/about', '/services']
for r in routes:
    url = f'http://localhost:3000{r}'
    try:
        with urllib.request.urlopen(url, timeout=10) as resp:
            code = resp.getcode()
            body = resp.read().decode('utf-8')
            has_title = 'Zaveriya Mulla' in body
            has_heat = 'studio' in body or 'projects' in body
            print(f"{r}: HTTP {code}, length {len(body)} bytes, Title verified: {has_title}, Content verified: {has_heat}")
    except Exception as e:
        print(f"{r}: Error: {e}")
