import json

with open('zaveriya_projects_raw.txt', 'r', encoding='utf-8') as f:
    proj_raw = f.read()

with open('zaveriya_experiences_raw.txt', 'r', encoding='utf-8') as f:
    exp_raw = f.read()

print("PROJECTS RAW LENGTH:", len(proj_raw))
print(proj_raw[:1500])
print("\n" + "="*50 + "\n")
print("EXPERIENCES RAW LENGTH:", len(exp_raw))
print(exp_raw[:1500])
