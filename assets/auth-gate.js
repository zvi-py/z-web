/**
 * Zaveriya Portfolio - Front-end Session Gate
 * Password: "password"
 * Session persistence via sessionStorage ('zavi_authenticated')
 */
(function() {
  var AUTH_KEY = 'zavi_authenticated';
  var PASS = 'password';

  // If already authenticated in this session, do nothing
  if (sessionStorage.getItem(AUTH_KEY) === 'true') {
    return;
  }

  // Preload style to prevent unauthenticated flash
  var style = document.createElement('style');
  style.id = 'zavi-auth-gate-style';
  style.innerHTML = `
    #zavi-auth-overlay {
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: #0D0D0D !important;
      z-index: 2147483647 !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      padding: clamp(24px, 4vw, 48px) !important;
      box-sizing: border-box !important;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
      color: #EEEDE4 !important;
      transition: opacity 0.35s ease, visibility 0.35s ease !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
    #zavi-auth-overlay.is-hidden {
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }
    .zavi-auth-brand {
      font-family: 'Inter', sans-serif !important;
      font-weight: 700 !important;
      font-size: 13px !important;
      letter-spacing: 0.12em !important;
      text-transform: uppercase !important;
      color: #EEEDE4 !important;
      user-select: none !important;
    }
    .zavi-auth-center {
      align-self: center !important;
      width: 100% !important;
      max-width: 440px !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 20px !important;
    }
    .zavi-auth-meta {
      font-family: 'Fragment Mono', monospace !important;
      font-size: 11px !important;
      letter-spacing: 0.18em !important;
      text-transform: uppercase !important;
      color: rgba(238, 237, 228, 0.45) !important;
    }
    .zavi-auth-title {
      font-family: 'Inter', sans-serif !important;
      font-size: clamp(24px, 3vw, 32px) !important;
      font-weight: 700 !important;
      letter-spacing: -0.03em !important;
      line-height: 1.15 !important;
      margin: 0 !important;
      color: #EEEDE4 !important;
    }
    .zavi-auth-form {
      display: flex !important;
      flex-direction: column !important;
      gap: 12px !important;
      margin-top: 8px !important;
    }
    .zavi-auth-input-row {
      display: flex !important;
      gap: 10px !important;
      width: 100% !important;
    }
    .zavi-auth-input {
      flex: 1 !important;
      background: #161616 !important;
      border: 1px solid rgba(238, 237, 228, 0.16) !important;
      border-radius: 8px !important;
      padding: 14px 18px !important;
      font-family: 'Inter', sans-serif !important;
      font-size: 14px !important;
      color: #EEEDE4 !important;
      outline: none !important;
      transition: border-color 0.25s ease, box-shadow 0.25s ease !important;
    }
    .zavi-auth-input:focus {
      border-color: #EEEDE4 !important;
      box-shadow: 0 0 0 1px #EEEDE4 !important;
    }
    .zavi-auth-input::placeholder {
      color: rgba(238, 237, 228, 0.3) !important;
    }
    .zavi-auth-btn {
      background: #EEEDE4 !important;
      color: #0E0E0E !important;
      border: none !important;
      border-radius: 8px !important;
      padding: 14px 22px !important;
      font-family: 'Inter', sans-serif !important;
      font-size: 13px !important;
      font-weight: 600 !important;
      letter-spacing: 0.04em !important;
      cursor: pointer !important;
      transition: background-color 0.25s ease, color 0.25s ease, transform 0.15s ease !important;
      white-space: nowrap !important;
    }
    .zavi-auth-btn:hover {
      background: #FF552E !important;
      color: #FFFFFF !important;
    }
    .zavi-auth-btn:active {
      transform: scale(0.97) !important;
    }
    .zavi-auth-error {
      font-family: 'Fragment Mono', monospace !important;
      font-size: 12px !important;
      color: #FF552E !important;
      letter-spacing: 0.05em !important;
      display: none;
      animation: zaviShake 0.35s cubic-bezier(0.36, 0.07, 0.19, 0.97) both !important;
    }
    .zavi-auth-footer {
      display: flex !important;
      justify-content: space-between !important;
      font-family: 'Fragment Mono', monospace !important;
      font-size: 11px !important;
      letter-spacing: 0.1em !important;
      color: rgba(238, 237, 228, 0.35) !important;
      text-transform: uppercase !important;
    }
    @keyframes zaviShake {
      10%, 90% { transform: translate3d(-1px, 0, 0); }
      20%, 80% { transform: translate3d(2px, 0, 0); }
      30%, 50%, 70% { transform: translate3d(-3px, 0, 0); }
      40%, 60% { transform: translate3d(3px, 0, 0); }
    }
  `;
  document.head.appendChild(style);

  function createGate() {
    if (sessionStorage.getItem(AUTH_KEY) === 'true') return;
    if (document.getElementById('zavi-auth-overlay')) return;

    var overlay = document.createElement('div');
    overlay.id = 'zavi-auth-overlay';
    overlay.innerHTML = `
      <div class="zavi-auth-brand">ZAVERIYA™</div>
      <div class="zavi-auth-center">
        <span class="zavi-auth-meta">// DIRECTORY ACCESS</span>
        <h1 class="zavi-auth-title">Private Portfolio &amp; Archives</h1>
        <form class="zavi-auth-form" id="zaviAuthForm" onsubmit="return false;">
          <div class="zavi-auth-input-row">
            <input type="password" id="zaviAuthInput" class="zavi-auth-input" placeholder="Enter password" autocomplete="current-password" autofocus required />
            <button type="submit" id="zaviAuthBtn" class="zavi-auth-btn">ENTER ↗</button>
          </div>
          <div id="zaviAuthError" class="zavi-auth-error">Incorrect password. Please try again.</div>
        </form>
      </div>
      <div class="zavi-auth-footer">
        <span>AUTHENTICATION GATE</span>
        <span>SESSION-PROTECTED</span>
      </div>
    `;

    document.body.prepend(overlay);

    var form = document.getElementById('zaviAuthForm');
    var input = document.getElementById('zaviAuthInput');
    var error = document.getElementById('zaviAuthError');

    function checkAuth() {
      if (input.value === PASS) {
        sessionStorage.setItem(AUTH_KEY, 'true');
        overlay.classList.add('is-hidden');
        setTimeout(function() {
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, 400);
      } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
      }
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      checkAuth();
    });

    setTimeout(function() {
      if (input) input.focus();
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createGate);
  } else {
    createGate();
  }
})();
