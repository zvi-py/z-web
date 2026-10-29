/* ==========================================================================
   ZAVERIYA PORTFOLIO - LUXURY EMAIL COMPOSER & INTERACTIVE MODAL SYSTEM
   ========================================================================== */

(function() {
  // 1. Inject Styles for the Composer & Project Modals
  const style = document.createElement('style');
  style.id = 'zavi-modal-system-styles';
  style.textContent = `
    /* Overlay Background */
    .zavi-modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(8, 8, 8, 0.88);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .zavi-modal-backdrop.is-open {
      opacity: 1;
      pointer-events: auto;
    }

    /* Modal Box */
    .zavi-modal-box {
      background: #111111;
      border: 1px solid rgba(238, 237, 228, 0.16);
      border-radius: 14px;
      width: 100%;
      max-width: 620px;
      box-shadow: 0 30px 90px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.04);
      overflow: hidden;
      transform: translateY(24px) scale(0.97);
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      font-family: "Inter Display", -apple-system, BlinkMacSystemFont, sans-serif;
      color: #EEEDE4;
    }
    .zavi-modal-backdrop.is-open .zavi-modal-box {
      transform: translateY(0) scale(1);
    }

    /* Modal Header */
    .zavi-modal-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 24px;
      border-bottom: 1px solid rgba(238, 237, 228, 0.08);
      background: rgba(255, 255, 255, 0.02);
    }
    .zavi-modal-title {
      font-family: "Fragment Mono", monospace;
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(238, 237, 228, 0.6);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .zavi-modal-title::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #34d399;
      box-shadow: 0 0 10px #34d399;
    }
    .zavi-modal-close {
      background: none;
      border: none;
      color: rgba(238, 237, 228, 0.5);
      font-size: 20px;
      line-height: 1;
      cursor: pointer;
      padding: 4px;
      transition: color 0.2s, transform 0.2s;
    }
    .zavi-modal-close:hover {
      color: #EEEDE4;
      transform: scale(1.15);
    }

    /* Modal Body */
    .zavi-modal-body {
      padding: 24px;
      max-height: 80vh;
      overflow-y: auto;
    }

    /* Recipient Chips */
    .zavi-composer-recipients {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(238, 237, 228, 0.06);
    }
    .zavi-recipient-row {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13px;
    }
    .zavi-recipient-label {
      font-family: "Fragment Mono", monospace;
      font-size: 11px;
      color: rgba(238, 237, 228, 0.45);
      width: 32px;
      text-transform: uppercase;
    }
    .zavi-recipient-chip {
      background: rgba(238, 237, 228, 0.08);
      border: 1px solid rgba(238, 237, 228, 0.12);
      border-radius: 6px;
      padding: 3px 10px;
      font-size: 12px;
      color: #EEEDE4;
      font-family: "Fragment Mono", monospace;
    }

    /* Inputs */
    .zavi-form-group {
      margin-bottom: 16px;
    }
    .zavi-form-label {
      display: block;
      font-family: "Fragment Mono", monospace;
      font-size: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(238, 237, 228, 0.45);
      margin-bottom: 6px;
    }
    .zavi-form-input, .zavi-form-textarea {
      width: 100%;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(238, 237, 228, 0.12);
      border-radius: 8px;
      padding: 12px 14px;
      color: #EEEDE4;
      font-size: 13px;
      font-family: "Inter Display", sans-serif;
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.2s, background 0.2s;
    }
    .zavi-form-input:focus, .zavi-form-textarea:focus {
      border-color: rgba(238, 237, 228, 0.4);
      background: rgba(255, 255, 255, 0.06);
    }
    .zavi-form-textarea {
      min-height: 110px;
      resize: vertical;
    }

    /* Action Buttons */
    .zavi-modal-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 24px;
    }
    .zavi-btn-primary {
      flex: 1;
      min-width: 180px;
      background: #EEEDE4;
      color: #111111;
      border: none;
      border-radius: 8px;
      padding: 13px 20px;
      font-size: 13px;
      font-weight: 600;
      font-family: "Inter Display", sans-serif;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: background 0.2s, transform 0.15s;
    }
    .zavi-btn-primary:hover {
      background: #ffffff;
      transform: translateY(-1px);
    }
    .zavi-btn-secondary {
      flex: 1;
      min-width: 180px;
      background: rgba(238, 237, 228, 0.08);
      color: #EEEDE4;
      border: 1px solid rgba(238, 237, 228, 0.18);
      border-radius: 8px;
      padding: 13px 20px;
      font-size: 13px;
      font-weight: 500;
      font-family: "Inter Display", sans-serif;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: background 0.2s, border-color 0.2s;
    }
    .zavi-btn-secondary:hover {
      background: rgba(238, 237, 228, 0.14);
      border-color: rgba(238, 237, 228, 0.35);
    }

    /* Live Preview Banner */
    .zavi-composer-note {
      font-size: 11px;
      color: rgba(238, 237, 228, 0.4);
      font-family: "Fragment Mono", monospace;
      margin-top: 14px;
      text-align: center;
    }

    /* Project Detail Cover Card in Modal */
    .zavi-project-cover {
      width: 100%;
      height: 220px;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 20px;
      position: relative;
      background: #181818;
    }
    .zavi-project-cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .zavi-project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 16px 0;
    }
    .zavi-project-tag {
      font-family: "Fragment Mono", monospace;
      font-size: 10px;
      background: rgba(238, 237, 228, 0.06);
      border: 1px solid rgba(238, 237, 228, 0.12);
      border-radius: 4px;
      padding: 4px 8px;
      color: rgba(238, 237, 228, 0.7);
    }
  `;
  document.head.appendChild(style);

  // 2. Build the Email Composer HTML
  const composerModal = document.createElement('div');
  composerModal.id = 'zavi-composer-modal';
  composerModal.className = 'zavi-modal-backdrop';
  composerModal.innerHTML = `
    <div class="zavi-modal-box">
      <div class="zavi-modal-head">
        <div class="zavi-modal-title">NEW MESSAGE &bull; ZAVERIYA MULLA</div>
        <button class="zavi-modal-close" aria-label="Close modal">&times;</button>
      </div>
      <div class="zavi-modal-body">
        <div class="zavi-composer-recipients">
          <div class="zavi-recipient-row">
            <span class="zavi-recipient-label">TO:</span>
            <span class="zavi-recipient-chip">zaveriya.edu@gmail.com</span>
          </div>
          <div class="zavi-recipient-row">
            <span class="zavi-recipient-label">CC:</span>
            <span class="zavi-recipient-chip">zaveriyawork@gmail.com</span>
          </div>
        </div>

        <form id="zavi-composer-form">
          <div class="zavi-form-group">
            <label class="zavi-form-label">Your Name</label>
            <input type="text" id="zavi-sender-name" class="zavi-form-input" placeholder="e.g. Alex Morgan" required />
          </div>
          <div class="zavi-form-group">
            <label class="zavi-form-label">Subject</label>
            <input type="text" id="zavi-msg-subject" class="zavi-form-input" value="Project Inquiry — Zaveriya Mulla" required />
          </div>
          <div class="zavi-form-group">
            <label class="zavi-form-label">Message</label>
            <textarea id="zavi-msg-body" class="zavi-form-textarea" placeholder="Hi Zaveriya, I came across your portfolio and would love to discuss a project..." required>Hi Zaveriya,

I would love to discuss a project or collaboration with you. Let's connect!</textarea>
          </div>

          <div class="zavi-modal-actions">
            <button type="button" id="zavi-send-gmail" class="zavi-btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Send via Gmail Web
            </button>
            <button type="submit" id="zavi-send-native" class="zavi-btn-secondary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              Default Mail App
            </button>
          </div>
        </form>
        <div class="zavi-composer-note">Delivers straight to Zaveriya's primary inbox &amp; work inbox.</div>
      </div>
    </div>
  `;
  document.body.appendChild(composerModal);

  // 3. Logic to Open / Close Composer Modal
  function openComposer(e) {
    if (e) e.preventDefault();
    composerModal.classList.add('is-open');
  }

  function closeComposer() {
    composerModal.classList.remove('is-open');
  }

  composerModal.querySelector('.zavi-modal-close').addEventListener('click', closeComposer);
  composerModal.addEventListener('click', (e) => {
    if (e.target === composerModal) closeComposer();
  });

  // Action: Gmail Web Composer
  document.getElementById('zavi-send-gmail').addEventListener('click', () => {
    const subj = encodeURIComponent(document.getElementById('zavi-msg-subject').value || 'Project Inquiry — Zaveriya Mulla');
    const body = encodeURIComponent(document.getElementById('zavi-msg-body').value || '');
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=zaveriya.edu@gmail.com&cc=zaveriyawork@gmail.com&su=${subj}&body=${body}`;
    window.open(url, '_blank');
    closeComposer();
  });

  // Action: Default Mailto Handler
  document.getElementById('zavi-composer-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const subj = encodeURIComponent(document.getElementById('zavi-msg-subject').value || 'Project Inquiry — Zaveriya Mulla');
    const body = encodeURIComponent(document.getElementById('zavi-msg-body').value || '');
    const mailto = `mailto:zaveriya.edu@gmail.com?cc=zaveriyawork@gmail.com&subject=${subj}&body=${body}`;
    window.location.href = mailto;
    closeComposer();
  });

  // 4. Attach click listener to ALL mail links
  function bindMailLinks() {
    document.querySelectorAll('a[href^="mailto:"], a[href*="zaveriya.edu@gmail.com"]').forEach(link => {
      link.addEventListener('click', openComposer);
    });
  }

  // 5. Build Project Modal for projects.html
  const projectModal = document.createElement('div');
  projectModal.id = 'zavi-project-modal';
  projectModal.className = 'zavi-modal-backdrop';
  projectModal.innerHTML = `
    <div class="zavi-modal-box">
      <div class="zavi-modal-head">
        <div id="zavi-proj-category" class="zavi-modal-title">PROJECT SHOWCASE</div>
        <button class="zavi-modal-close" aria-label="Close modal">&times;</button>
      </div>
      <div class="zavi-modal-body">
        <div class="zavi-project-cover">
          <img id="zavi-proj-img" src="./assets/eDpiWrqEMMYor0uQWfrCvWHc.jpg" alt="Project cover" />
        </div>
        <h2 id="zavi-proj-title" style="font-size:24px;font-weight:600;margin:0 0 10px 0;color:#EEEDE4;">Project Title</h2>
        <p id="zavi-proj-desc" style="font-size:14px;line-height:1.6;color:rgba(238,237,228,0.75);margin:0 0 16px 0;">Project description goes here.</p>
        
        <div id="zavi-proj-tags" class="zavi-project-tags"></div>

        <div class="zavi-modal-actions" style="margin-top:20px;">
          <a id="zavi-proj-github" href="https://github.com/xozavii" target="_blank" class="zavi-btn-secondary" style="text-decoration:none;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub Repository
          </a>
          <a id="zavi-proj-demo" href="https://zaveriya.vercel.app" target="_blank" class="zavi-btn-primary" style="text-decoration:none;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            Live Production Demo
          </a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(projectModal);

  projectModal.querySelector('.zavi-modal-close').addEventListener('click', () => {
    projectModal.classList.remove('is-open');
  });
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) projectModal.classList.remove('is-open');
  });

  // Project Data Map
  const PROJECTS_DATA = {
    'AURAEL': {
      title: 'Aurael Intelligence Engine',
      category: 'Autonomous Multi-Agent AI System',
      desc: 'High-performance autonomous agent network orchestrating distributed reasoning pipelines, tool execution, and contextual retrieval for complex business automation. Built with LangChain, LlamaIndex, and vector similarity search.',
      tags: ['Autonomous Agents', 'LangChain', 'FastAPI', 'PyTorch', 'Vector DB', 'Multi-Agent LLMs'],
      img: './assets/eDpiWrqEMMYor0uQWfrCvWHc.jpg',
      github: 'https://github.com/xozavii/aurael',
      demo: 'https://zaveriya.vercel.app'
    },
    'ZARVIS': {
      title: 'ZARVIS AI Review Engine',
      category: 'Full-Stack Automated Code Intelligence',
      desc: 'Automated pull-request analysis and continuous code verification bot powered by Claude 3.5 Sonnet and AST parsing. Performs static bug detection, security checks, and generates instant markdown diff solutions.',
      tags: ['Claude 3.5 Sonnet', 'TypeScript', 'GitHub Apps', 'Python AST', 'Docker', 'CI/CD'],
      img: './assets/2nBnLmhRLmgp93zBcdw2yChw2MQ.jpg',
      github: 'https://github.com/xozavii/zarvis',
      demo: 'https://zaveriya.vercel.app'
    },
    'SWAS': {
      title: 'SWAS Enterprise Automation',
      category: 'Distributed Workflow Orchestrator',
      desc: 'Robust enterprise automation engine designed with Temporal.io and asynchronous queue workers. Handles fault-tolerant task dispatch, real-time telemetry, and multi-tenant webhook integration.',
      tags: ['Temporal.io', 'Python', 'Redis', 'PostgreSQL', 'FastAPI', 'Docker Compose'],
      img: './assets/r28TOPU5FurVvMAfI5vySdXj5Wo.jpg',
      github: 'https://github.com/xozavii/swas',
      demo: 'https://zaveriya.vercel.app'
    },
    'ECOCANE': {
      title: 'EcoCane Startup',
      category: 'Funded Venture \u2022 \u20B94.5 Lakh Grant',
      desc: 'Sustainable sugarcane byproduct transformation initiative awarded \u20B94.5 Lakh in early-stage startup funding. Developed IoT-integrated supply tracking and AI crop-waste prediction dashboard.',
      tags: ['Startup Funding', 'Founder & Team Lead', 'Next.js 15', 'IoT Telemetry', 'Predictive ML'],
      img: './assets/ClK00uxydTRnx2FcyYDqVb9ws.jpg',
      github: 'https://github.com/xozavii',
      demo: 'https://zaveriya.vercel.app'
    },
    'ZCOLLAB': {
      title: 'ZCollab NMC Platform',
      category: 'Enterprise Real-Time Collaboration & CRM',
      desc: 'Architected collaborative workspace for NoeticMinds with dynamic permissioning, rich document versioning, live team presence, and WebSocket synchronization.',
      tags: ['Next.js 15', 'WebSockets', 'Tailwind', 'PostgreSQL', 'Prisma', 'OAuth 2.0'],
      img: './assets/oa6qxeil3SnDuhs7ikd3X3dKpE.jpg',
      github: 'https://github.com/xozavii/zcollab',
      demo: 'https://zaveriya.vercel.app'
    },
    'HEATRAY': {
      title: 'HeatRay Vision Experiments',
      category: 'Interactive WebGL / Shaders & Vision',
      desc: 'Experimental web application combining MediaPipe hand-tracking and Three.js GLSL vertex distortion shaders for fluid real-time computer vision manipulation directly in the browser.',
      tags: ['Three.js', 'MediaPipe AI', 'WebGL / GLSL', 'Computer Vision', 'Creative Dev'],
      img: './assets/rYpGIb3MygYvhwgSUEJYk8t5oII.jpg',
      github: 'https://github.com/xozavii/heatray',
      demo: 'https://zaveriya.vercel.app'
    }
  };

  // Bind project card clicks
  function bindProjectCards() {
    document.querySelectorAll('.framer-1a3b1x5, [data-project-key], a[href*="projects/"]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        // If clicking inside a direct external link button, let it open
        if (e.target.closest('a') && e.target.closest('a').getAttribute('href').startsWith('http')) return;
        e.preventDefault();

        const cardText = card.innerText.toUpperCase();
        let matched = null;
        for (const key of Object.keys(PROJECTS_DATA)) {
          if (cardText.includes(key)) {
            matched = PROJECTS_DATA[key];
            break;
          }
        }
        if (!matched) matched = PROJECTS_DATA['AURAEL'];

        document.getElementById('zavi-proj-title').innerText = matched.title;
        document.getElementById('zavi-proj-category').innerText = matched.category;
        document.getElementById('zavi-proj-desc').innerText = matched.desc;
        document.getElementById('zavi-proj-img').src = matched.img;
        document.getElementById('zavi-proj-github').href = matched.github;
        document.getElementById('zavi-proj-demo').href = matched.demo;

        const tagsContainer = document.getElementById('zavi-proj-tags');
        tagsContainer.innerHTML = '';
        matched.tags.forEach(tag => {
          const span = document.createElement('span');
          span.className = 'zavi-project-tag';
          span.innerText = tag;
          tagsContainer.appendChild(span);
        });

        projectModal.classList.add('is-open');
      });
    });
  }

  // 6. Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      bindMailLinks();
      bindProjectCards();
    });
  } else {
    bindMailLinks();
    bindProjectCards();
  }

  // Expose global helper
  window.openZaviComposer = openComposer;
})();
