/** Full website audit v2 — code + layout + assets + a11y */
const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');

const PAGES = [
  'https://www.highs.ltd/',
  'https://www.highs.ltd/hk/',
  'https://www.highs.ltd/en/',
  'https://www.highs.ltd/cn/',
  'https://www.highs.ltd/hk/about/',
  'https://www.highs.ltd/hk/about/business/',
  'https://www.highs.ltd/hk/about/network/',
  'https://www.highs.ltd/hk/about/philosophy/',
  'https://www.highs.ltd/hk/about/ip/',
  'https://www.highs.ltd/hk/about/access/',
  'https://www.highs.ltd/hk/about/marketing/',
  'https://www.highs.ltd/hk/careers/',
  'https://www.highs.ltd/hk/news/',
  'https://www.highs.ltd/hk/contact/',
  'https://www.highs.ltd/en/about/',
  'https://www.highs.ltd/en/about/business/',
  'https://www.highs.ltd/en/about/network/',
  'https://www.highs.ltd/en/about/philosophy/',
  'https://www.highs.ltd/en/about/ip/',
  'https://www.highs.ltd/en/about/access/',
  'https://www.highs.ltd/en/about/marketing/',
  'https://www.highs.ltd/en/careers/',
  'https://www.highs.ltd/en/news/',
  'https://www.highs.ltd/en/contact/',
  'https://www.highs.ltd/cn/about/',
  'https://www.highs.ltd/cn/about/business/',
  'https://www.highs.ltd/cn/about/network/',
  'https://www.highs.ltd/cn/about/philosophy/',
  'https://www.highs.ltd/cn/about/ip/',
  'https://www.highs.ltd/cn/about/access/',
  'https://www.highs.ltd/cn/about/marketing/',
  'https://www.highs.ltd/cn/careers/',
  'https://www.highs.ltd/cn/news/',
  'https://www.highs.ltd/cn/contact/',
];

(async () => {
  let browser;
  for (let attempt = 0; attempt < 5; attempt++) {
    try { browser = await chromium.connectOverCDP('http://127.0.0.1:9234'); break; }
    catch(e) { if (attempt === 4) { console.error('CDP connect failed'); process.exit(1); } await new Promise(r => setTimeout(r, 2000)); }
  }
  const ctx = browser.contexts()[0];
  const results = [];
  for (let i = 0; i < PAGES.length; i++) {
    const url = PAGES[i];
    process.stdout.write(`[${i+1}/${PAGES.length}] `);
    let page = ctx.pages()[0] || await ctx.newPage();
    await page.setViewportSize({ width: 1280, height: 900 });
    const jsErrs = [];
    const consoleErrs = [];
    const failedResources = [];
    page.on('pageerror', e => jsErrs.push(e.message.slice(0, 300)));
    page.on('console', msg => {
      if (msg.type() === 'error' && !/Cookie|deprecated|trickle|cross-origin|favicon/i.test(msg.text()))
        consoleErrs.push(msg.text().slice(0, 300));
    });
    page.on('requestfailed', req => {
      const u = req.url();
      if (!/favicon|\.otf|\.ttf/i.test(u)) failedResources.push(u.slice(0, 150) + ' :: ' + (req.failure()?.errorText||''));
    });
    let status = 0;
    try {
      const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      status = resp?.status() || 0;
      await page.waitForTimeout(2500);
    } catch(e) {
      results.push({ url, status, error: e.message.slice(0,120), jsErrs, consoleErrs, failedResources });
      process.stdout.write('NAV-FAIL\n');
      continue;
    }
    const data = await page.evaluate(() => {
      const header = document.querySelector('header') || document.querySelector('#vgate-header');
      const footer = document.querySelector('footer');
      const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
      const dupes = ids.filter((id, idx) => ids.indexOf(id) !== idx && id);
      const imgs = [...document.querySelectorAll('img')];
      const brokenImgs = imgs.filter(im => {
        const hasSrc = im.getAttribute('src') && im.getAttribute('src') !== '';
        return hasSrc && (im.complete && im.naturalWidth === 0);
      }).map(im => (im.getAttribute('src')||'').slice(-60));
      const overflowX = document.body.scrollWidth - window.innerWidth;
      const h1s = [...document.querySelectorAll('h1')].map(h => h.textContent.trim().slice(0,40));
      const missingAlt = imgs.filter(im => {
        const s = im.getAttribute('src')||'';
        return s && !s.includes('data:') && im.getAttribute('alt') === null;
      }).length;
      const sections = [...document.querySelectorAll('section, .contWrap > div')];
      const emptySections = sections.filter(s => s.textContent.trim().length === 0 && s.offsetHeight > 50).length;
      const smallText = [];
      document.querySelectorAll('*').forEach(el => {
        if (!el.textContent.trim() || el.children.length > 0) return;
        const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs > 0 && fs < 11 && el.offsetHeight > 0) {
          smallText.push({txt: el.textContent.trim().slice(0,25), fs: Math.round(fs*100)/100});
        }
      });
      const smallTargets = [...document.querySelectorAll('a, button, .openbtn, .closebtn, .lang-selected')].filter(e => {
        const r = e.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && r.height < 44;
      }).length;
      return {
        title: document.title,
        hasHeader: !!header,
        hasFooter: !!footer,
        dupes, brokenImgs, imgCount: imgs.length, overflowX, h1s,
        missingAlt, emptySections, smallText: smallText.slice(0, 8),
        smallTargets, bodyHeight: document.body.scrollHeight,
        lang: document.documentElement.lang,
      };
    }).catch(e => ({ evalError: e.message.slice(0,150) }));
    results.push({ url, status, jsErrs, consoleErrs, failedResources, data });
    const flags = [];
    if (jsErrs.length) flags.push(`JS:${jsErrs.length}`);
    if (data.brokenImgs?.length) flags.push(`IMG:${data.brokenImgs.length}`);
    if (data.dupes?.length) flags.push(`DUPID:${data.dupes.length}`);
    if (data.overflowX > 5) flags.push(`OFX:${data.overflowX}`);
    if (!data.hasHeader) flags.push('NOHDR');
    if (!data.hasFooter) flags.push('NFOOT');
    if (data.missingAlt > 0) flags.push(`NOALT:${data.missingAlt}`);
    if (data.emptySections > 0) flags.push(`EMPTY:${data.emptySections}`);
    if (data.smallText?.length) flags.push(`SMALLFS:${data.smallText.length}`);
    process.stdout.write((flags.length ? '⚠ ' + flags.join(',') : '✓') + '\n');
  }
  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  const problems = results.filter(r => (r.jsErrs?.length || r.data?.brokenImgs?.length || r.data?.dupes?.length || (r.data?.overflowX || 0) > 5 || !r.data?.hasHeader || !r.data?.hasFooter));
  console.log(`Total pages: ${results.length}`);
  console.log(`Pages with issues: ${problems.length}`);
  if (problems.length) {
    console.log('\nISSUE DETAILS:');
    problems.forEach(r => {
      console.log(`\n${r.url}`);
      if (r.jsErrs?.length) r.jsErrs.forEach(e => console.log(`  JS: ${e}`));
      if (r.data?.brokenImgs?.length) r.data.brokenImgs.forEach(e => console.log(`  BROKEN IMG: ${e}`));
      if (r.data?.dupes?.length) console.log(`  DUP IDs: ${r.data.dupes.join(', ')}`);
      if (r.data?.overflowX > 5) console.log(`  OVERFLOW X: ${r.data.overflowX}`);
      if (!r.data?.hasHeader) console.log('  NO HEADER');
      if (!r.data?.hasFooter) console.log('  NO FOOTER');
      if (r.data?.emptySections) console.log(`  EMPTY SECTIONS: ${r.data.emptySections}`);
      if (r.data?.smallText?.length) {
        console.log('  SMALL TEXT (<11px):');
        r.data.smallText.forEach(t => console.log(`    ${t.fs}px: "${t.txt}"`));
      }
      if (r.failedResources?.length) r.failedResources.forEach(e => console.log(`  FAILED RES: ${e}`));
    });
  }
  console.log('\n' + '='.repeat(70));
  console.log('GLOBAL: small text distribution (<11px)');
  console.log('='.repeat(70));
  const allSmall = [];
  results.forEach(r => { if (r.data?.smallText?.length) r.data.smallText.forEach(t => allSmall.push({...t})); });
  const uniqueFs = {};
  allSmall.forEach(t => { uniqueFs[t.fs] = (uniqueFs[t.fs]||0) + 1; });
  Object.entries(uniqueFs).sort((a,b) => parseFloat(b[0]) - parseFloat(a[0])).forEach(([fs, cnt]) => console.log(`  ${fs}px: ${cnt}`));
  const navFails = results.filter(r => r.status !== 200);
  if (navFails.length) {
    console.log('\nNON-200 STATUS:');
    navFails.forEach(r => console.log(`  ${r.status}: ${r.url}`));
  }
  await browser.close();
})();
