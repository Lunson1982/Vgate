/*==========================================================
  include-parts.js — Vgate
  Loads header / footer partials via fetch() (vanilla JS).
  Replaces mashgroup's jQuery document.write approach.
==========================================================*/

async function loadInclude(targetEl, url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
    let html = await res.text();
    // Replace {$root} placeholder with the actual rootDir passed in
    const rootDirMatch = url.match(/^(\.\.?\/)/);
    const rootDir = rootDirMatch ? rootDirMatch[0] : './';
    html = html.replace(/\{\$root\}/g, rootDir);
    targetEl.innerHTML = html;
    // Fire a custom event so per-page scripts can react after injection
    document.dispatchEvent(new CustomEvent('vgate:include-loaded', { detail: { id: targetEl.id } }));
  } catch (err) {
    console.warn('[vgate] include load failed:', err);
  }
}

function header(rootDir) {
  const el = document.getElementById('vgate-header');
  if (el) loadInclude(el, rootDir + 'assets/include/inc_header');
}

function footer(rootDir) {
  const el = document.getElementById('vgate-footer');
  if (el) loadInclude(el, rootDir + 'assets/include/inc_footer');
}
