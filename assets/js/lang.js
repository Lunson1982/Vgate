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

  // ---- browser language auto-detection ----
  function guessBrowserLang() {
    var candidates = [];
    try {
      if (navigator.languages && navigator.languages.length) {
        candidates = navigator.languages;
      } else if (navigator.language) {
        candidates = [navigator.language];
      }
    } catch (e) {}
    for (var i = 0; i < candidates.length; i++) {
      var c = candidates[i].toLowerCase().replace('_', '-').replace('tw', '-hk').replace('cn', '-cn');
      if (LANGS.indexOf(c) !== -1) return c;
      // Match zh-Hant/* to zh-HK, zh-Hans/* to zh-CN
      var base = c.split('-')[0];
      if (base === 'zh') {
        if (c.indexOf('hant') !== -1 || c.indexOf('hk') !== -1 || c.indexOf('tw') !== -1) return 'zh-HK';
        if (c.indexOf('hans') !== -1 || c.indexOf('cn') !== -1) return 'zh-CN';
      }
      if (base === 'ja') return 'ja';
      if (base === 'en') return 'en';
    }
    return null;
  }

  // ---- current language resolution ----
  function resolveLang() {
    // 0) URL-path prefix (en/ cn/ hk/) — highest priority. This lets
    //    /en/about/ and /cn/about/ correctly show their own language
    //    regardless of the hardcoded <html lang> attribute.
    var p = window.location.pathname.split('/').filter(Boolean);
    if (p.length > 0) {
      var first = p[0];
      var pathLang = {'en':'en','cn':'zh-CN','hk':'zh-HK'}[first];
      if (pathLang) return pathLang;
    }
    // 1) ?lang=xx query param
    var q = new URLSearchParams(window.location.search).get('lang');
    if (q && LANGS.indexOf(q) !== -1) return q;
    // 2) localStorage
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    // 3) <html lang> attribute
    var htmlLang = document.documentElement.getAttribute('lang');
    if (htmlLang && LANGS.indexOf(htmlLang) !== -1) return htmlLang;
    // 4) Browser
    var guessed = guessBrowserLang();
    if (guessed) return guessed;
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

    // Hide any drawer-nav language block EXCEPT the currently active one.
    // (lang.js only set data-active on footer; mirror it here on drawer nav.)
    // IMPORTANT: query the language-block <ul> only — .brandList is also a <ul>
    // nested inside each language block, so '#g-nav-list ul' must NOT be used.
    document.querySelectorAll('#g-nav-list > .jpnCont, #g-nav-list > .engCont, #g-nav-list > .chnCont, #g-nav-list > .hkCont').forEach(function (ul) {
      var active = ul.hasAttribute('data-active') && ul.getAttribute('data-active') === 'true';
      if (active) {
        ul.style.display = '';
      } else {
        ul.style.display = 'none';
      }
    });

    // After setting data-active, enforce the footer 3-column flex layout.
    // This is the authoritative place where the active section is decided, so
    // the layout is guaranteed regardless of JS load order (defeats the race
    // between footer partial script injection and lang.js init).
    document.querySelectorAll('footer nav section[data-active]').forEach(function (sec) {
      sec.style.cssText =
        'display:flex !important;flex-wrap:wrap !important;justify-content:space-between ' +
        '!important;align-items:flex-start !important;gap:28px 32px !important;width:100% !important;';
      sec.querySelectorAll('.f-col').forEach(function (c) {
        c.style.cssText = 'display:flex !important;flex-direction:column !important;';
        if (c.classList.contains('col-about')) {
          c.style.cssText += ';flex:1 1 340px !important;max-width:380px !important;';
        } else if (c.classList.contains('col-brands') || c.classList.contains('col-more')) {
          c.style.cssText += ';flex:0 0 200px !important;';
        }
      });
    });

    // Also enforce the drawer nav's active language so only one <ul> shows
    // inside the slide-out menu (currently lang.js only touched the footer).
    // IMPORTANT: the language blocks are DIRECT children of #g-nav-list.
    // .brandList is ALSO a <ul> nested inside each language block, so
    // '#g-nav-list ul[data-active]' would accidentally hit brandList too.
    document.querySelectorAll('#g-nav-list > ul[data-active]').forEach(function (ul) {
      ul.style.display = '';
    });
    // Hide all drawer-nav language blocks EXCEPT the currently active one.
    // (lang.js only set data-active on footer; mirror it here on drawer nav.)
    Object.keys(CONT_CLASS).forEach(function (k) {
      var sel = '#g-nav-list .' + CONT_CLASS[k];
      document.querySelectorAll(sel).forEach(function (ul) {
        if (k === lang) {
          ul.setAttribute('data-active', 'true');
          ul.style.display = '';
        } else {
          ul.removeAttribute('data-active');
          ul.style.display = 'none';
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

    // Update dropdown dt label + code
    document.querySelectorAll('.lang-current-label').forEach(function (s) {
      s.textContent = LANG_LABEL[lang] || '日本語';
    });
    document.querySelectorAll('.lang-current-code').forEach(function (s) {
      var code = ({'ja':'JP','en':'EN','zh-CN':'CN','zh-HK':'HK'})[lang] || 'HK';
      s.textContent = code;
    });

    // Mark the active option in the dropdown
    document.querySelectorAll('.lang-opt').forEach(function (a) {
      if (a.getAttribute('data-lang') === lang) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });

    // Close the accordion after selection (new .dd.open pattern)
    var acc = document.querySelector('header .language .accordion.dd');
    if (acc) acc.classList.remove('open');

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
      var dd = e.target.closest('header .language .accordion.dd');
      if (!dd) return;
      dd.classList.toggle('open');
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
      if (e.target.closest('header .language .accordion')) return;
      var dd = document.querySelector('header .language .accordion.dd');
      if (dd) dd.classList.remove('open');
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
