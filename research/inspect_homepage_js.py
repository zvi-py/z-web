import re
import json

with open('heatbureau_SR2A2G-HnC3IksMIWuE7zzQ3xAwujsHPJgLXSbJ-dlg.B4e3h5Ql.mjs', 'r', encoding='utf-8') as f:
    js = f.read()

# Find all hrefs inside this file
hrefs = set(re.findall(r'href:"([^"]+)"', js))
print("HREFS in homepage:", hrefs)

# Find all texts (props like text:"...", children:"...")
texts = set(re.findall(r'(?:text|children):"([^"]{3,100})"', js))
clean_texts = [t for t in texts if not t.startswith('http') and not t.startswith('var ') and not t.startswith('rgb') and not '{' in t]
print("\nClean texts in homepage component (sample 50):")
for t in sorted(clean_texts)[:50]:
    print(" - ", t)
