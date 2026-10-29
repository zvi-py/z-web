import re

with open('heatbureau_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

main_idx = html.find('id="main"')
main_html = html[main_idx:]

# Find all headings, links, and paragraphs inside main
items = re.findall(r'<(h[1-6]|p|a|span|div)[^>]*>(.*?)</\1>', main_html)
print(f"Total tag pairs in main: {len(items)}")

# Let's extract clean text with tag names
extracted = []
for tag, text in items:
    # remove child tags
    clean = re.sub(r'<[^>]+>', '', text).strip()
    if clean and len(clean) > 2 and not clean.startswith('{') and not clean.startswith('var '):
        extracted.append(f"<{tag}> {clean}")

# deduplicate consecutive
deduped = []
for item in extracted:
    if not deduped or deduped[-1] != item:
        deduped.append(item)

with open('heatbureau_main_all_tags.txt', 'w', encoding='utf-8') as out:
    for item in deduped:
        out.write(item + '\n')

print(f"Saved {len(deduped)} tags to heatbureau_main_all_tags.txt")
