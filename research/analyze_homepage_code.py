import re
import json

with open('heatbureau_SR2A2G-HnC3IksMIWuE7zzQ3xAwujsHPJgLXSbJ-dlg.B4e3h5Ql.mjs', 'r', encoding='utf-8') as f:
    code = f.read()

# Extract all string literals longer than 4 chars
strings = re.findall(r'"([^"\\]{4,100})"', code)
clean_strings = set([s for s in strings if not s.startswith('http') and not s.startswith('data:') and not s.startswith('framer') and not '\\' in s])

# Look for specific keywords or section headings
interesting = [s for s in clean_strings if any(w in s.lower() for w in ['studio', 'design', 'heat', 'service', 'project', 'client', 'contact', 'work', 'tbilisi', 'brand', 'digital', 'full', 'about'])]

print(f"Total interesting strings: {len(interesting)}")
for s in sorted(interesting)[:50]:
    print(" - ", s)

# Let's search for CSS classes, color codes, styles
hex_colors = set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', code))
rgba_colors = set(re.findall(r'rgba?\([^\)]+\)', code))

print("\n--- HEX COLORS ---")
print(sorted(list(hex_colors)))

print("\n--- RGBA COLORS (sample 15) ---")
for c in list(rgba_colors)[:15]:
    print(c)
