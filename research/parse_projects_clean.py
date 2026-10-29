import re
import json

with open('zaveriya_bundle.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Let's extract all project items: {id:"...",title:"...",description:"...",technologies:[...],...}
# Find start of v5
start = js.find('const v5=[{id:"aurael"')
# find closing of v5
# Let's find each `{id:"...`
matches = re.findall(r'\{id:"([^"]+)",title:"([^"]+)",description:"([^"]+)",technologies:(\[[^\]]+\])(?:,imageUrl:"([^"]+)")?(?:,liveUrl:"([^"]*)")?(?:,githubUrl:"([^"]*)")?(?:,category:"([^"]*)")?', js)

projects = []
for m in matches:
    projects.append({
        'id': m[0],
        'title': m[1],
        'description': m[2],
        'technologies': eval(m[3]),
        'imageUrl': m[4] if len(m) > 4 else '',
        'liveUrl': m[5] if len(m) > 5 else '',
        'githubUrl': m[6] if len(m) > 6 else '',
        'category': m[7] if len(m) > 7 else ''
    })

with open('zaveriya_parsed_clean.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)

existing['projects'] = projects

with open('zaveriya_parsed_clean.json', 'w', encoding='utf-8') as f:
    json.dump(existing, f, indent=2)

print(f"Parsed {len(projects)} projects and {len(existing.get('experiences', []))} experiences.")
