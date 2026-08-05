/*==========================================================
  include-parts.js — Vgate
  Loads header / footer partials via fetch().
  Automatically determines the rootDir from the current URL,
  so every page depth works correctly.
==========================================================*/

async function loadInclude(targetEl, url) {
  try {
    var res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status + " on " + url);
    var html = await res.text();
    // Replace {$root} placeholder with the computed rootDir
    var m = url.match(/^((?:\.\.\/)+)/);
    var rootDir = m ? m[0] : './';
    html = html.replace(/\{\$root\}/g, rootDir);
    targetEl.innerHTML = html;
    // Force footer 3-column flex layout after load (defeat CSS cascade / cache issues)
    if (targetEl.id === 'vgate-footer') {
      var sec = targetEl.querySelector('footer nav section[data-active=true]');
      if (sec) {
        sec.style.cssText = 'display:flex !important;flex-wrap:wrap !important;justify-content:space-between !important;align-items:flex-start !important;gap:28px 32px !important;width:100% !important;';
        sec.querySelectorAll('.f-col').forEach(function(c){
          c.style.cssText = 'display:flex !important;flex-direction:column !important;';
          if(c.classList.contains('col-about')){ c.style.cssText += 'flex:1 1 340px !important;max-width:380px !important;'; }
          else if(c.classList.contains('col-brands') || c.classList.contains('col-more')){ c.style.cssText += 'flex:0 0 200px !important;'; }
        });
      }
    }
    document.dispatchEvent(new CustomEvent('vgate:include-loaded', { detail: { id: targetEl.id } }));
  } catch (err) {
    console.warn('[vgate] include load failed:', err);
  }
}

function header() {
  var el = document.getElementById('vgate-header');
  if (!el) return;
  var depth = window.location.pathname.split('/').filter(Boolean).length;
  var rootDir = depth === 0 ? './' : '../'.repeat(depth);
  loadInclude(el, rootDir + 'assets/include/inc_header');
}

function footer() {
  var el = document.getElementById('vgate-footer');
  if (!el) return;
  var depth = window.location.pathname.split('/').filter(Boolean).length;
  var rootDir = depth === 0 ? './' : '../'.repeat(depth);
  loadInclude(el, rootDir + 'assets/include/inc_footer?v=7');
}
