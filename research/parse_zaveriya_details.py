import re
import json

with open('zaveriya_bundle.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Let's find project array
# v5=[{id:"aurael"...
match_projects = re.search(r'(\[\{id:"aurael".*?\}\])', js)
if match_projects:
    print("Found projects array match!")
    with open('zaveriya_projects_raw.txt', 'w', encoding='utf-8') as f:
        f.write(match_projects.group(1))

# Let's search for experiences
match_exp = re.search(r'(\[\{id:"[^"]+",role:".*?createdAt:[^\]]+\])', js)
if match_exp:
    print("Found experiences match!")
    with open('zaveriya_experiences_raw.txt', 'w', encoding='utf-8') as f:
        f.write(match_exp.group(1))

# Let's find all URLs (github, linkedin, twitter, email, etc.)
urls = set(re.findall(r'https?://[^\s"\'<>]+', js))
personal_urls = [u for u in urls if any(k in u.lower() for k in ['zaveriya', 'github.com', 'linkedin.com', 'x.com', 'twitter.com', 'mailto', 'ecocane', 'aurael'])]

with open('zaveriya_links.json', 'w', encoding='utf-8') as f:
    json.dump(personal_urls, f, indent=2)

print("Found links:", personal_urls)
