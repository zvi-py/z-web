with open('heatbureau_SR2A2G-HnC3IksMIWuE7zzQ3xAwujsHPJgLXSbJ-dlg.B4e3h5Ql.mjs', 'r', encoding='utf-8') as f:
    code = f.read()

import re

# Look for custom shaders, uniforms, or geometry creation
shaders = re.findall(r'(?:vertexShader|fragmentShader)\s*:\s*[`"\']([^`"\']{20,})[`"\']', code)
print(f"Found {len(shaders)} shaders")
for i, s in enumerate(shaders[:6]):
    print(f"Shader {i}:")
    print(s[:300])
    print("-" * 30)

# Look for Three.js scene creation or canvas component
three_usage = re.findall(r'new\s+([A-Za-z0-9_]+Geometry|[A-Za-z0-9_]+Material|Scene|WebGLRenderer|PerspectiveCamera)', code)
print("Three.js constructs:", set(three_usage))
