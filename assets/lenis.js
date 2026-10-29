/**
 * Smooth Inertial Scroll Engine (Heat Bureau Style)
 * Provides silky-smooth momentum, deceleration, and physics-based easing.
 */
(function() {
  if (typeof window === 'undefined') return;

  // Configuration
  const SPEED = 1.0;
  const SMOOTHNESS = 0.085; // Lower is smoother/floatier, 0.085 is buttery
  
  let targetY = window.scrollY || window.pageYOffset || 0;
  let currentY = targetY;
  let isRunning = false;
  let isUserScrolling = false;
  let scrollTimeout = null;

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function onWheel(e) {
    // If inside a scrollable modal, don't hijack
    if (e.target.closest && (e.target.closest('.zavi-modal-window') || e.target.closest('.zavi-modal-body'))) {
      return;
    }

    e.preventDefault();
    isUserScrolling = true;
    
    // Normalize delta
    let delta = e.deltaY;
    if (e.deltaMode === 1) delta *= 40; // lines
    if (e.deltaMode === 2) delta *= 800; // pages

    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    targetY = Math.max(0, Math.min(targetY + delta * SPEED, maxScroll));

    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(render);
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isUserScrolling = false;
    }, 150);
  }

  function render() {
    if (!isRunning) return;

    currentY = lerp(currentY, targetY, SMOOTHNESS);
    
    if (Math.abs(targetY - currentY) < 0.5) {
      currentY = targetY;
      window.scrollTo(0, Math.round(currentY));
      isRunning = false;
      return;
    }

    window.scrollTo(0, Math.round(currentY));
    requestAnimationFrame(render);
  }

  // Smooth programmatic scroll API
  window.zaviScrollTo = function(y) {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    targetY = Math.max(0, Math.min(y, maxScroll));
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(render);
    }
  };

  // Sync targetY if browser scrolls naturally (e.g. scrollbar drag or anchor)
  function onScroll() {
    if (!isUserScrolling && !isRunning) {
      targetY = window.scrollY || window.pageYOffset || 0;
      currentY = targetY;
    }
  }

  // Initialize once DOM is ready
  function init() {
    targetY = window.scrollY || window.pageYOffset || 0;
    currentY = targetY;
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    console.log('[Zavi Smooth Scroll] Activated silky inertial scrolling.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
