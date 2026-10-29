import re
import json

with open('zaveriya_bundle.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Let's search for projects, experience, bio, socials, etc.
# Look for strings mentioning Aurael, EcoCane, ZARVIS, Mulla, github, linkedin, email, etc.

keywords = ['Aurael', 'EcoCane', 'ZARVIS', 'Zaveriya', 'Mulla', 'github.com', 'linkedin.com', 'experience', 'education', 'skills']

results = {}

for kw in keywords:
    matches = [m.start() for m in re.finditer(kw, js, re.IGNORECASE)]
    snippets = []
    for idx in matches[:10]: # up to 10 snippets per keyword
        start = max(0, idx - 200)
        end = min(len(js), idx + 300)
        snippets.append(js[start:end])
    results[kw] = snippets

with open('zaveriya_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print("Extracted snippets for keywords:", list(results.keys()))
