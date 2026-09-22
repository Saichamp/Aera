/* ============================================================
   AERA by Sai — Main Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────
     CUSTOM CURSOR
  ──────────────────────────────────────── */
  const cursor    = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursor && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top  = ry + 'px';
      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      cursorRing.style.opacity = '1';
    });
  } else {
    // Touch device — hide cursor elements, restore system cursor
    if (cursor) cursor.remove();
    if (cursorRing) cursorRing.remove();
    document.body.style.cursor = 'auto';
    document.querySelectorAll('button, a').forEach(el => {
      el.style.cursor = 'pointer';
    });
  }

  /* ────────────────────────────────────────
     HERO TEXT CHAR REVEAL
  ──────────────────────────────────────── */
  const heroLines = document.querySelectorAll('.hero-heading .line');
  heroLines.forEach((line, lineIdx) => {
    const text = line.textContent;
    line.textContent = '';
    [...text].forEach((ch, charIdx) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      span.style.animationDelay = (lineIdx * 200 + charIdx * 30) + 'ms';
      line.appendChild(span);
    });
    setTimeout(() => {
      line.querySelectorAll('.char').forEach(ch => ch.classList.add('animate'));
    }, 100 + lineIdx * 60);
  });

  /* ────────────────────────────────────────
     CARD MOUSE GLOW (radial follow)
  ──────────────────────────────────────── */
  document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });

  /* ────────────────────────────────────────
     TOOLBOX: Search + Filter
  ──────────────────────────────────────── */
  const searchInput  = document.getElementById('toolbox-search');
  const filterBtns   = document.querySelectorAll('.filter-pill');
  const toolboxGrid  = document.getElementById('toolbox-grid');
  let activeFilter   = 'All';

  const renderToolbox = () => {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = AERA.tools.filter(tool => {
      const matchFilter = activeFilter === 'All' || tool.audience === activeFilter;
      const matchSearch = !query
        || tool.name.toLowerCase().includes(query)
        || tool.oneLiner.toLowerCase().includes(query)
        || tool.tags.some(t => t.toLowerCase().includes(query));
      return matchFilter && matchSearch;
    });

    toolboxGrid.innerHTML = filtered.length
      ? filtered.map(tool => toolCardHTML(tool)).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:var(--space-16);color:var(--muted-light)">No tools found — try a different filter or search.</div>`;

    // Re-bind card glow
    toolboxGrid.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
        const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
        card.style.setProperty('--mx', x + '%');
        card.style.setProperty('--my', y + '%');
      });
    });

    if (window.AERA_reveal) window.AERA_reveal();
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderToolbox();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', renderToolbox);
  }

  renderToolbox();

  /* ────────────────────────────────────────
     AUDIENCE DISCOVERY TABS
  ──────────────────────────────────────── */
  const audienceTabs   = document.querySelectorAll('.audience-tab');
  const audiencePanels = document.querySelectorAll('.audience-panel');

  audienceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      audienceTabs.forEach(t => t.classList.remove('active'));
      audiencePanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('panel-' + tab.dataset.audience);
      if (target) target.classList.add('active');
    });
  });

  /* ────────────────────────────────────────
     RENDER AUDIENCE PANELS
  ──────────────────────────────────────── */
  AERA.audiences.forEach(aud => {
    const panel = document.getElementById('panel-' + aud.key);
    if (!panel) return;
    const tools = AERA.tools.filter(t => t.audience === aud.key);
    panel.querySelector('.h-scroll-lane').innerHTML = tools.map(tool => `
      <div class="tool-card-mini">
        <div style="display:flex;align-items:center;gap:var(--space-3)">
          <div class="tool-card-icon">${tool.icon}</div>
          <span style="font-family:var(--font-display);font-size:16px;font-weight:600;">${tool.name}</span>
        </div>
        <p class="tool-card-desc">${tool.oneLiner}</p>
        <div style="display:flex;gap:var(--space-2);flex-wrap:wrap">
          ${tool.tags.slice(0,2).map(t => `<span class="pill pill-muted">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  });

  /* ────────────────────────────────────────
     COUNTER ANIMATION (stats)
  ──────────────────────────────────────── */
  const animateCounter = (el, target, suffix = '') => {
    let start = 0;
    const end = parseInt(target);
    if (isNaN(end)) { el.textContent = target + suffix; return; }
    const duration = 1800;
    const startTime = performance.now();
    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (end - start) * eased) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const val = el.dataset.count;
        const suf = el.dataset.suffix || '';
        animateCounter(el, val, suf);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => statObserver.observe(el));

});

/* ── Utility: Build tool card HTML ── */
function toolCardHTML(tool) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    `<span class="${i < tool.rating ? 'rating-filled' : 'rating-empty'}"></span>`
  ).join('');

  return `
  <a href="${tool.link}" target="_blank" rel="noopener" class="tool-card reveal">
    <div style="display:flex;align-items:center;gap:var(--space-3)">
      <div class="tool-card-icon">${tool.icon}</div>
      ${tool.featured ? '<span class="pill pill-accent" style="margin-left:auto">Featured</span>' : ''}
    </div>
    <div class="tool-card-name">${tool.name}</div>
    <p class="tool-card-desc">${tool.oneLiner}</p>
    <div style="display:flex;gap:var(--space-2);flex-wrap:wrap">
      ${tool.tags.map(t => `<span class="pill pill-muted">${t}</span>`).join('')}
    </div>
    <div class="tool-card-footer">
      <div class="tool-rating">${stars}</div>
      <span class="btn-arrow t-xs">Explore <span class="arrow">→</span></span>
    </div>
  </a>`;
}
