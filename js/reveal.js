/* ============================================================
   AERA by Sai — Scroll Reveal
   ============================================================ */

(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Don't unobserve — but once revealed, CSS keeps it visible
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  // Observe all .reveal elements
  const initReveal = () => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };
  initReveal();

  // Also expose for dynamically added elements
  window.AERA_reveal = initReveal;
})();
