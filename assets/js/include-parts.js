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
  loadInclude(el, rootDir + 'assets/include/inc_footer?v=6');
}
