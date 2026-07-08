/*==========================================================
  lang.js — Vgate language switcher
  - 4 languages: zh-HK (default), ja, en, zh-CN
  - Toggles .jpnCont / .engCont / .chnCont / .hkCont blocks
  - Persists in localStorage('vgate.lang')
  - Honors ?lang=xx query param (overrides localStorage)
  - Updates <html lang> and <meta property="og:locale">
  - Re-points any a[href^="./"] or a[href^="../"] to mirror /en/ /cn/ /hk/
    so the same site root serves all 4 langs (no per-lang folder
    required at deploy time).
  - Cache-bust: 2026-06-10 (force browsers to refetch on hard refresh)
==========================================================*/

(function () {
  'use strict';

  var LANGS = ['ja', 'en', 'zh-CN', 'zh-HK'];
  var DEFAULT_LANG = 'zh-HK';
  var STORAGE_KEY = 'vgate.lang';

  // Map language code → visible block class
  var CONT_CLASS = {
    'ja':    'jpnCont',
    'en':    'engCont',
    'zh-CN': 'chnCont',
    'zh-HK': 'hkCont',
  };

  // Map language code → <html lang> value
  var HTML_LANG = {
    'ja':    'ja',
    'en':    'en',
    'zh-CN': 'zh-CN',
    'zh-HK': 'zh-HK',
  };

  // Map language code → og:locale
  var OG_LOCALE = {
    'ja':    'ja_JP',
    'en':    'en_US',
    'zh-CN': 'zh_CN',
    'zh-HK': 'zh_HK',
  };

  // Map language code → visible label (shown in accordion dt)
  var LANG_LABEL = {
    'ja':    '日本語',
    'en':    'English',
    'zh-CN': '简体中文',
    'zh-HK': '繁體中文',
  };

  // Map language code → url-path prefix used in links (en/, cn/, hk/).
  // ja uses root (no prefix). The header already encodes this per-language.
  // Default root is empty — actual page path is preserved by lang.js.
  var URL_PREFIX = {
    'ja':    '',
    'en':    'en/',
    'zh-CN': 'cn/',
    'zh-HK': 'hk/',
  };

  // ---- current language resolution ----
  function resolveLang() {
    // 1) ?lang=xx query param (highest priority)
    var q = new URLSearchParams(window.location.search).get('lang');
    if (q && LANGS.indexOf(q) !== -1) return q;
    // 2) localStorage
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    // 3) <html lang> attribute set by page (only if it matches a known lang)
    var htmlLang = document.documentElement.getAttribute('lang');
    if (htmlLang && LANGS.indexOf(htmlLang) !== -1) return htmlLang;
    // 4) Default
    return DEFAULT_LANG;
  }

  // ---- apply language to the page ----
  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;

    // Show only the matching Cont blocks, hide the rest.
    // We use a data-active attribute so the CSS rule (in common.min.css)
    // controls display — this prevents FOUC and keeps !important unneeded.
    Object.keys(CONT_CLASS).forEach(function (k) {
      var sel = '.' + CONT_CLASS[k];
      document.querySelectorAll(sel).forEach(function (el) {
        if (k === lang) {
          el.setAttribute('data-active', 'true');
          el.style.display = '';
        } else {
          el.removeAttribute('data-active');
          el.style.display = 'none';
        }
      });
    });

    // Update <html lang> + og:locale
    document.documentElement.setAttribute('lang', HTML_LANG[lang] || 'ja');
    var ogMeta = document.querySelector('meta[property="og:locale"]');
    if (!ogMeta) {
      ogMeta = document.createElement('meta');
      ogMeta.setAttribute('property', 'og:locale');
      document.head.appendChild(ogMeta);
    }
    ogMeta.setAttribute('content', OG_LOCALE[lang] || 'ja_JP');

    // Update dropdown dt label
    document.querySelectorAll('.lang-current-label').forEach(function (s) {
      s.textContent = LANG_LABEL[lang] || '日本語';
    });

    // Mark the active option in the dropdown
    document.querySelectorAll('.lang-opt').forEach(function (a) {
      if (a.getAttribute('data-lang') === lang) {
        a.classList.add('current');
      } else {
        a.classList.remove('current');
      }
    });

    // Close the accordion after selection
    var dd = document.querySelector('header .language dl.accordion dd');
    if (dd) dd.style.display = 'none';
    var dt = document.querySelector('header .language dl.accordion dt');
    if (dt) dt.setAttribute('aria-expanded', 'false');

    // Persist
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    // Notify listeners
    document.dispatchEvent(new CustomEvent('vgate:lang-changed', { detail: { lang: lang } }));
  }

  // ---- wire the dropdown ----
  function wireDropdown() {
    // Click on dt toggles the dropdown
    document.addEventListener('click', function (e) {
      var dt = e.target.closest('header .language dl.accordion dt');
      if (!dt) return;
      var dd = dt.nextElementSibling;
      if (!dd) return;
      var isOpen = dd.style.display === 'block';
      dd.style.display = isOpen ? 'none' : 'block';
      dt.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
    // Keyboard support on dt
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var dt = e.target.closest && e.target.closest('header .language dl.accordion dt');
      if (!dt) return;
      e.preventDefault();
      dt.click();
    });
    // Click on a lang option → switch
    document.addEventListener('click', function (e) {
      var opt = e.target.closest('.lang-opt');
      if (!opt) return;
      e.preventDefault();
      var lang = opt.getAttribute('data-lang');
      applyLang(lang);
    });
    // Click outside closes
    document.addEventListener('click', function (e) {
      if (e.target.closest('header .language dl.accordion')) return;
      var dd = document.querySelector('header .language dl.accordion dd');
      var dt = document.querySelector('header .language dl.accordion dt');
      if (dd && dd.style.display === 'block') {
        dd.style.display = 'none';
        if (dt) dt.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- run on include load ----
  function init() {
    var lang = resolveLang();
    applyLang(lang);
    wireDropdown();
  }

  // Expose for debugging / external triggering
  window.vgateSetLang = applyLang;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Re-run when the header/footer partial finishes loading
  document.addEventListener('vgate:include-loaded', init);

})();
