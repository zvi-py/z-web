import re
import json

with open('heatbureau_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's check title, meta tags
print("=== META TAGS ===")
for m in re.findall(r'<meta[^>]+>', html):
    print(m)

# Let's extract all text content blocks
# Remove script and style tags
clean_text = re.sub(r'<script.*?</script>', '', html, flags=re.DOTALL)
clean_text = re.sub(r'<style.*?</style>', '', clean_text, flags=re.DOTALL)

# Extract visible strings
strings = re.findall(r'>([^<]{2,})<', clean_text)
clean_strings = [s.strip() for s in strings if s.strip() and not s.strip().startswith('{') and not s.strip().startswith('var ')]

with open('heatbureau_extracted_text.txt', 'w', encoding='utf-8') as f:
    for s in clean_strings:
        f.write(s + '\n')

print(f"Extracted {len(clean_strings)} text strings to heatbureau_extracted_text.txt")
