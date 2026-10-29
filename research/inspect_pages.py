import json

with open('heatbureau_search_index.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for path, info in data.items():
    print(f"==================== PAGE: {path} ====================")
    if isinstance(info, dict):
        print("Title:", info.get('title'))
        print("Description:", info.get('description'))
        # print first 500 chars of text/content
        body = info.get('body') or info.get('text') or info.get('content') or ""
        if isinstance(body, list):
            print("Content items:", len(body))
            print("Preview:", " | ".join(str(x) for x in body[:10]))
        else:
            print("Body preview:", str(body)[:400])
    print()
