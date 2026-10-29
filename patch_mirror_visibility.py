import os

PAGES_DIR = os.path.abspath("outputs/heatbureau-clone")

css_patch = """
<style id="true-web-clone-visibility-patch">
  /* True Web Clone: Restore immediate visibility & smooth transitions for SSR elements */
  [data-framer-appear-id] {
    opacity: 1 !important;
    transform: none !important;
    transition: opacity 0.8s cubic-bezier(0.44, 0, 0.56, 1) !important;
  }
  .framer-xguzlf {
    opacity: 1 !important;
    transform: translateX(-50%) translateY(0px) !important;
    transition: opacity 0.8s ease, transform 0.8s ease !important;
  }
  .framer-xguzlf span[style*="opacity:0.001"], 
  .framer-text span[style*="opacity:0.001"] {
    opacity: 1 !important;
    filter: blur(0px) !important;
    transform: none !important;
    transition: opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease !important;
  }
  .framer-sqtwkb {
    opacity: 1 !important;
    transition: opacity 0.8s ease !important;
  }
  .framer-c0vawd {
    opacity: 1 !important;
  }
  header.framer-2g118 {
    opacity: 1 !important;
    transform: none !important;
  }
  footer.framer-MLDwj {
    opacity: 1 !important;
    transform: none !important;
    transition: opacity 0.8s ease, transform 0.8s ease !important;
  }
  /* Ensure logo and main containers are always displayed */
  .framer-1ifny2d, .framer-1gph9rt-container {
    opacity: 1 !important;
    visibility: visible !important;
  }
</style>
<script>
  // Ensure Framer events tracker doesn't block local hydration
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[style*=\"opacity:0.001\"]').forEach(el => {
      el.style.opacity = '1';
      if (el.style.filter && el.style.filter.includes('blur')) {
        el.style.filter = 'blur(0px)';
      }
      if (el.style.transform && el.style.transform.includes('scale')) {
        el.style.transform = 'none';
      }
    });
  });
</script>
"""

for fname in ['index.html', 'projects.html', 'about.html', 'services.html']:
    fpath = os.path.join(PAGES_DIR, fname)
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            html = f.read()
        
        # Inject before </head>
        if 'true-web-clone-visibility-patch' not in html:
            html = html.replace('</head>', f'{css_patch}\n</head>')
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f"Patched visibility on {fname}")
        else:
            print(f"Already patched {fname}")
