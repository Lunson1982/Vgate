/*==========================================================
  common.js — Vgate
  Header logo shrink-on-scroll, drawer toggle, pagetop,
  body fade-in on load, anchorLink href adjustment.
  Pure vanilla JS (no jQuery).
==========================================================*/

(function () {
  'use strict';

  /* ------------------------------------------------------------------
   * 1. Body fade-in on load (replaces the jQuery .addClass('show'))
   * ------------------------------------------------------------------ */
  function fadeInBody() {
    document.body.classList.add('show');
  }
  if (document.readyState === 'complete') {
    fadeInBody();
  } else {
    window.addEventListener('load', fadeInBody);
  }

  /* ------------------------------------------------------------------
   * 2. Header logo collapse on scroll
   *    (replaces jQuery $(window).scroll + .addClass('active'))
   * ------------------------------------------------------------------ */
  function onScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY <= 10) {
      header.classList.remove('active');
    } else {
      header.classList.add('active');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);

  /* ------------------------------------------------------------------
   * 3. Drawer toggle (open / close) — delegated so it works after the
   *    header partial is injected.
   * ------------------------------------------------------------------ */
  document.addEventListener('click', function (e) {
    const openBtn  = e.target.closest('.openbtn');
    const closeBtn = e.target.closest('.closebtn');

    if (openBtn) {
      const closeEl = document.querySelector('.closebtn');
      const navEl   = document.getElementById('g-nav');
      const overlay = document.querySelector('header .overlay');
      const contWrap = document.querySelector('.contWrap');
      const header   = document.querySelector('header');
      const isActive = closeEl && closeEl.classList.contains('active');
      if (isActive) {
        if (closeEl) closeEl.classList.remove('active');
        if (navEl)   navEl.classList.remove('panelactive');
        if (overlay) overlay.classList.remove('open');
        if (contWrap) contWrap.classList.remove('moveLeft');
        if (header)   header.classList.remove('moveLeft');
      } else {
        if (closeEl) closeEl.classList.add('active');
        if (navEl)   navEl.classList.add('panelactive');
        if (overlay) overlay.classList.add('open');
        if (contWrap) contWrap.classList.add('moveLeft');
        if (header)   header.classList.add('moveLeft');
      }
      return;
    }
    if (closeBtn) {
      if (closeBtn.classList.contains('active')) {
        closeBtn.classList.remove('active');
        const navEl = document.getElementById('g-nav');
        const overlay = document.querySelector('header .overlay');
        const contWrap = document.querySelector('.contWrap');
        const header = document.querySelector('header');
        if (navEl)    navEl.classList.remove('panelactive');
        if (overlay)  overlay.classList.remove('open');
        if (contWrap) contWrap.classList.remove('moveLeft');
        if (header)   header.classList.remove('moveLeft');
      }
      return;
    }
    /* Anchor links inside the drawer close it */
    const anchorLink = e.target.closest('a.anchorLink');
    if (anchorLink) {
      const closeEl = document.querySelector('.closebtn');
      const navEl = document.getElementById('g-nav');
      const overlay = document.querySelector('header .overlay');
      const contWrap = document.querySelector('.contWrap');
      const header = document.querySelector('header');
      if (closeEl)  closeEl.classList.remove('active');
      if (navEl)    navEl.classList.remove('panelactive');
      if (overlay)  overlay.classList.remove('open');
      if (contWrap) contWrap.classList.remove('moveLeft');
      if (header)   header.classList.remove('moveLeft');
    }
  });

  /* Keyboard support for openbtn / closebtn */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const t = e.target;
    if (t && (t.classList.contains('openbtn') || t.classList.contains('closebtn'))) {
      e.preventDefault();
      t.click();
    }
  });

  /* ------------------------------------------------------------------
   * 4. anchorLink href — point at homepage #commitment, or current dir
   *    for sub-pages. Mirrors the mashgroup logic.
   * ------------------------------------------------------------------ */
  function setAnchorLinks() {
    const path = window.location.pathname;
    const href = window.location.href;
    const dirRoot = window.location.origin + '/';
    const dir = path.replace(/[^/]*$/, '');

    let target = dirRoot + 'index.html#commitment';
    if (href === dirRoot || href === dirRoot + 'index.html' || path === '/' || path === '/index.html') {
      target = '#commitment';
    }

    document.querySelectorAll('a.anchorLink').forEach(function (a) {
      a.setAttribute('href', target);
    });

    /* body class — useful for per-page CSS hooks */
    if (href === dirRoot || href === dirRoot + 'index.html') {
      document.body.classList.add('top');
    } else if (path.indexOf('/about/') !== -1) {
      document.body.classList.add('about', 'other');
    } else {
      document.body.classList.add('other');
    }
  }
  // run after the header partial is injected
  document.addEventListener('vgate:include-loaded', setAnchorLinks);
  // also run now in case header is already inlined
  setAnchorLinks();

  /* ------------------------------------------------------------------
   * 5. Language accordion — handled by assets/js/lang.js (4-lang support:
   *    ja, en, zh-CN, zh-TW with localStorage persistence).
   * ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
   * 6. Footer nav accordion on mobile — clicking an h3.img toggles its
   *    sibling <ul>. (Mirrors mashgroup mobile behaviour.)
   * ------------------------------------------------------------------ */
  document.addEventListener('click', function (e) {
    if (window.innerWidth > 480) return;
    const h3 = e.target.closest('footer .inner nav section div h3.img');
    if (h3) {
      e.preventDefault();
      const ul = h3.nextElementSibling;
      if (ul && ul.tagName === 'UL') {
        h3.classList.toggle('active');
      }
    }
  });

  /* ------------------------------------------------------------------
   * 7. Drawer sub-menu accordion (RECRUIT / ABOUT)
   * ------------------------------------------------------------------ */
  document.addEventListener('click', function (e) {
    const tb = e.target.closest('#g-nav ul li p.toggleBtn');
    if (tb) {
      e.preventDefault();
      tb.classList.toggle('active');
    }
  });

  /* ------------------------------------------------------------------
   * 8. Pagetop button — show on scroll, smooth-scroll to top
   * ------------------------------------------------------------------ */
  const pagetop = document.getElementById('pagetop');
  if (pagetop) {
    function onScrollTop() {
      if (window.scrollY > 200) {
        pagetop.classList.add('active');
      } else {
        pagetop.classList.remove('active');
      }
    }
    window.addEventListener('scroll', onScrollTop, { passive: true });
    onScrollTop();
    pagetop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------
   * 9. Strip hash on reload (matches mashgroup behaviour)
   * ------------------------------------------------------------------ */
  if (performance.getEntriesByType('navigation')[0]?.type === 'reload' && location.hash) {
    history.replaceState(null, '', location.href.replace(/#.*/, ''));
  }

})();
