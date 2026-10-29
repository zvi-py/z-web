import re

with open('heatbureau_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's find <div id="main" ...>
main_start = html.find('id="main"')
if main_start != -1:
    print("Found id='main' at:", main_start)
    snippet = html[main_start-20:main_start+8000]
    with open('heatbureau_main_snippet.html', 'w', encoding='utf-8') as out:
        out.write(snippet)
    print("Saved 8000 chars of main to heatbureau_main_snippet.html")
else:
    print("Could not find id='main'")
