/*==========================================================
  brands.js — Vgate brands grid
  Renders a responsive grid of brand logos from a manifest.
  Drop files into /assets/img/brands/ and add their filename
  to BRAND_FILES, plus an optional entry in BRAND_META for a
  human-readable name and brand URL.

  Public API:
    vgateAddBrand(filename, [name], [url])  — add a brand at runtime
    vgateClearBrands()                      — empty the grid
    vgateBrands()                           — get the current list
==========================================================*/

(function () {
  'use strict';

  var BRANDS_DIR = 'assets/img/brands/';

  // ─────────────────────────────────────────────────────────
  // Brand manifest. Order = display order.
  // filename : exact file in /assets/img/brands/
  // name     : human-readable brand name
  // url      : link target. Set to '' (empty) or '#' or leave unset
  //            to render the brand as a non-clickable logo (no link).
  //            Set to a real URL to make the card clickable.
  // ─────────────────────────────────────────────────────────
  var BRAND_META = [
    { f: 'CELFORD_logo_RGB_2000px_300dpi-BK.jpg',                         n: 'CELFORD' },
    { f: 'Cosme+Kitchen_logo_RGB_2000px_300dpi-BK.jpg',                   n: 'Cosme Kitchen' },
    { f: 'FRAY+ID_logo_RGB_2000px_300dpi-BK.jpg',                         n: 'FRAY I.D' },
    { f: 'FURFUR_logo_RGB_2000px_300dpi-BK.jpg',                          n: 'FURFUR' },
    { f: 'LILY+BROWN_logo_RGB_2000px_300dpi-BK.jpg',                      n: 'LILY BROWN' },
    { f: 'Maison+Cielune_logo_RGB_2000px_300dpi-BK.jpg',                  n: 'Maison Cielune' },
    { f: 'NIJI+SELECT_logo_RGB_2000px_300dpi-BK.jpg',                     n: 'NIJI SELECT' },
    { f: 'SNIDEL+HOME_logo_RGB_2000px_300dpi-BK.jpg',                     n: 'SNIDEL HOME' },
    { f: 'SNIDEL_logo_RGB_2000px_300dpi-BK.jpg',                          n: 'SNIDEL' },
    { f: 'USAGI+ONLINE+STORE_logo_RGB_2000px_300dpi-BK.jpg',              n: 'USAGI ONLINE STORE' },
    { f: 'USAGI+ONLINE_logo_RGB_2000px_300dpi-BK.jpg',                    n: 'USAGI ONLINE' },
    { f: 'gelato+pique_logo_RGB_2000px_GELATO+PIQUE+CAFE+ICON_300dpi-BK.jpg', n: 'gelato pique CAFE' },
    { f: 'gelato+pique_logo_RGB_2000px_OFFICIAL+LOGO+MARK_300dpi-BK.jpg', n: 'gelato pique' },
  ];
  var BRAND_FILES = BRAND_META.map(function (b) { return b.f; });

  var SUPPORTED_EXT = ['svg', 'png', 'jpg', 'jpeg', 'webp', 'gif'];

  function fileExt(name) {
    var m = name.toLowerCase().match(/\.([a-z0-9]+)$/);
    return m ? m[1] : '';
  }

  function getMeta(filename) {
    for (var i = 0; i < BRAND_META.length; i++) {
      if (BRAND_META[i].f === filename) return BRAND_META[i];
    }
    return { f: filename, n: filename.replace(/\.[^.]+$/, '').replace(/[+_-]+/g, ' '), u: '#' };
  }

  function escapeAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function buildCard(filename, idx) {
    var meta = getMeta(filename);
    var src = BRANDS_DIR + filename;
    var name = meta.n;
    var url  = meta.u || '#';
    var card = document.createElement('div');
    card.className = 'brand-card';
    card.setAttribute('data-brand', filename);
    card.style.animationDelay = (idx * 50) + 'ms';
    // If the URL is a placeholder (#, empty, javascript:, etc.), render a
    // non-interactive <div> instead of a dead <a href="#"> link. This prevents
    // clicking a brand from opening a new tab to the current page (which
    // trips localtunnel's IP-gate interstitial) and also avoids confusing
    // users with a 404-looking page.
    var isPlaceholder = !url || url === '#' || url === '' || /^javascript:/i.test(url);
    if (isPlaceholder) {
      card.classList.add('brand-card--no-link');
      card.innerHTML =
        '<div class="brand-card-inner" role="img" aria-label="' + escapeAttr(name) + '">' +
          '<img src="' + escapeAttr(src) + '" alt="' + escapeAttr(name) + '" decoding="async" width="200" height="200">' +
        '</div>';
    } else {
      card.innerHTML =
        '<a href="' + escapeAttr(url) + '" aria-label="' + escapeAttr(name) + '" target="_blank" rel="noopener">' +
          '<img src="' + escapeAttr(src) + '" alt="' + escapeAttr(name) + '" decoding="async" width="200" height="200">' +
        '</a>';
    }
    // Belt-and-suspenders: if any descendant still has an href (e.g. from a
    // stale cached version of brands.js), strip it. This prevents the dead
    // link from being clickable even if the user's browser is loading an
    // older version of the JS.
    card.querySelectorAll('a[href="#"]').forEach(function (a) {
      a.removeAttribute('href');
    });
    return card;
  }

  function renderEmptyState(host) {
    host.innerHTML =
      '<div class="brands-empty">' +
        '<p class="brands-empty-title">No brand logos loaded yet.</p>' +
        '<p class="brands-empty-hint">Drop <code>*.svg</code> / <code>*.png</code> / <code>*.jpg</code> files into <code>/assets/img/brands/</code> and add their filenames to <code>BRAND_META</code> in <code>assets/js/brands.js</code>.</p>' +
      '</div>';
  }

  function renderBrands() {
    var hosts = document.querySelectorAll('#brands-grid, .brands-grid');
    if (!hosts.length) return;

    hosts.forEach(function (host) {
      host.innerHTML = '';
      var entries = BRAND_FILES.filter(function (f) {
        return SUPPORTED_EXT.indexOf(fileExt(f)) !== -1;
      });

      if (!entries.length) {
        renderEmptyState(host);
        return;
      }
      entries.forEach(function (f, i) {
        host.appendChild(buildCard(f, i));
      });
    });
  }

  // Public API
  window.vgateAddBrand = function (filename, name, url) {
    if (BRAND_FILES.indexOf(filename) === -1) {
      BRAND_FILES.push(filename);
      var entry = { f: filename, n: name || filename };
      if (url) entry.u = url;
      BRAND_META.push(entry);
    }
    renderBrands();
  };
  window.vgateRemoveBrand = function (filename) {
    BRAND_FILES = BRAND_FILES.filter(function (f) { return f !== filename; });
    BRAND_META  = BRAND_META.filter(function (b) { return b.f !== filename; });
    renderBrands();
  };
  window.vgateClearBrands = function () {
    BRAND_FILES.length = 0;
    BRAND_META.length = 0;
    renderBrands();
  };
  window.vgateBrands = function () { return BRAND_FILES.slice(); };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderBrands);
  } else {
    renderBrands();
  }
})();
