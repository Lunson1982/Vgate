/** Full website audit — checks JS errors, broken images, duplicate IDs, header/footer presence, overflow, title accuracy, pill readability, logo position, language-content correctness */
const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');

const PAGES = [
  'https://www.highs.ltd/',
  'https://www.highs.ltd/hk/about/',
  'https://www.highs.ltd/hk/about/business/',
  'https://www.highs.ltd/hk/about/network/',
  'https://www.highs.ltd/hk/about/philosophy/',
  'https://www.highs.ltd/hk/about/ip-licensing/',
  'https://www.highs.ltd/hk/about/career/',
  'https://www.highs.ltd/hk/about/marketing/',
  'https://www.highs.ltd/hk/about/offices/',
  'https://www.highs.ltd/hk/brands/',
  'https://www.highs.ltd/hk/news/',
  'https://www.highs.ltd/hk/contact/',
  'https://www.highs.ltd/en/about/',
  'https://www.highs.ltd/en/about/business/',
  'https://www.highs.ltd/en/about/network/',
  'https://www.highs.ltd/en/about/philosophy/',
  'https://www.highs.ltd/en/about/ip-licensing/',
  'https://www.highs.ltd/en/about/career/',
  'https://www.highs.ltd/en/about/marketing/',
  'https://www.highs.ltd/en/about/offices/',
  'https://www.highs.ltd/en/brands/',
  'https://www.highs.ltd/en/news/',
  'https://www.highs.ltd/en/contact/',
  'https://www.highs.ltd/cn/about/',
  'https://www.highs.ltd/cn/about/business/',
  'https://www.highs.ltd/cn/about/network/',
  'https://www.highs.ltd/cn/about/philosophy/',
  'https://www.highs.ltd/cn/about/ip-licensing/',
  'https://www.highs.ltd/cn/about/career/',
  'https://www.highs.ltd/cn/about/marketing/',
  'https://www.highs.ltd/cn/about/offices/',
  'https://www.highs.ltd/cn/brands/',
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
    page.on('pageerror', e => jsErrs.push(e.message.slice(0, 300)));
    page.on('console', msg => {
      if (msg.type() === 'error' && !/Cookie|deprecated|trickle|cross-origin/i.test(msg.text()))
        consoleErrs.push(msg.text().slice(0, 300));
    });
    const r = { url };
    try {
      const resp = await page.goto(url, { waitUntil: 'commit', timeout: 15000 });
      await page.waitForTimeout(1500);
      r.status = resp.status();
      r.finalUrl = page.url();
      const dom = await page.evaluate(() => {
        const imgs = [...document.querySelectorAll('img')];
        const broken = imgs.filter(i => { try { return i.naturalWidth === 0 && i.src && !i.hidden && !i.src.startsWith('data:'); } catch(e){return false;} }).map(i => i.src.slice(0,150));
        const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
        const seen = {}; const dups = [];
        ids.forEach(id => { seen[id] = (seen[id]||0)+1; });
        Object.entries(seen).forEach(([id,c]) => { if(c>1) dups.push(id); });
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const bw = document.documentElement.scrollWidth;
        const cw = document.documentElement.clientWidth;
        const pill = document.querySelector('.lang-selected, .accordion.dt');
        const pillStyle = pill ? { bg: getComputedStyle(pill).backgroundColor, color: getComputedStyle(pill).color, borderColor: getComputedStyle(pill).borderColor, pillText: pill.innerText.slice(0,25) } : null;
        const logoImg = document.querySelector('header .inner .logo img');
        const logoRect = logoImg ? logoImg.getBoundingClientRect() : null;
        const hdrRect = header ? header.getBoundingClientRect() : null;
        const brandCards = [...document.querySelectorAll('.brand-card, .brand-card a')].length;
        const navEn = [...document.querySelectorAll('header .inner>dl dd a')].map(a => a.textContent.trim()).filter(t => t && t !== 'LANG');
        return {
          imgCount: imgs.length,
          brokenImgs: broken,
          dupIds: dups,
          hasHeader: !!header,
          hasFooter: !!footer,
          headerH: header ? Math.round(header.getBoundingClientRect().height) : 0,
          footerH: footer ? Math.round(footer.getBoundingClientRect().height) : 0,
          hOverflow: bw > cw ? (bw - cw) : 0,
          title: document.title,
          h1: document.querySelector('h1') ? document.querySelector('h1').textContent.slice(0,60) : null,
          pillStyle,
          logoRect: logoRect ? { top: Math.round(logoRect.top), bottom: Math.round(logoRect.bottom), left: Math.round(logoRect.left), w: Math.round(logoRect.width), h: Math.round(logoRect.height) } : null,
          hdrRect: hdrRect ? { top: Math.round(hdrRect.top), bottom: Math.round(hdrRect.bottom), h: Math.round(hdrRect.height) } : null,
          brandCards,
          bodyClasses: [...document.body.classList],
          bodyLang: document.body.lang || null,
          htmlLang: document.documentElement.lang || null,
        };
      });
      r.dom = dom;
      r.jsErrs = [...new Set(jsErrs)];
      r.consoleErrs = [...new Set(consoleErrs)];
    } catch (e) { r.err = e.message.slice(0, 400); }
    results.push(r);
    const issues = [];
    if ((r.status||0) >= 400) issues.push('HTTP '+r.status);
    if (r.err) issues.push('ERR:'+r.err.slice(0,40));
    if (!r.dom) { console.log('❌ NO DOM'); continue; }
    if (!r.dom.hasHeader) issues.push('no header');
    if (!r.dom.hasFooter) issues.push('no footer');
    if (r.dom.hOverflow > 10) issues.push('overflow +'+r.dom.hOverflow+'px');
    if (r.dom.brokenImgs.length) issues.push(r.dom.brokenImgs.length+' broken imgs');
    if (r.dom.dupIds.length) issues.push('dup ids:'+r.dom.dupIds.join(','));
    if (r.jsErrs.length) issues.push('JS:'+r.jsErrs[0].slice(0,40));
    if (r.consoleErrs.length) issues.push('console:'+r.consoleErrs[0].slice(0,40));
    if (r.dom.pillStyle && r.dom.pillStyle.bg === 'rgb(20, 20, 20)') issues.push('pill DARK bg');
    if (r.dom.title.includes('株式会社') && url.includes('/en/')) issues.push('title in JP not EN');
    if (r.dom.title.includes('Vgate') && !r.dom.title.includes('|')) issues.push('title missing pipe');
    console.log(issues.length ? '❌ '+issues.join('; ') : '✅ '+r.dom.title.slice(0,35));
  }
  console.log('\n=== SUMMARY ===');
  console.log('Total: '+results.length);
  const errs = results.filter(r => (r.status||0)>=400 || r.err || !r.dom?.hasHeader || !r.dom?.hasFooter || r.dom?.hOverflow>10 || r.dom?.brokenImgs.length || r.dom?.dupIds.length || r.jsErrs.length || r.consoleErrs.length || (r.dom?.pillStyle?.bg === 'rgb(20, 20, 20)'));
  console.log('Issues: '+errs.length);
  errs.forEach(r => {
    let s = '❌ '+r.url;
    if ((r.status||0)>=400) s += ' HTTP'+r.status;
    if (r.err) s += ' ERR:'+(r.err||'');
    if (r.dom && !r.dom.hasHeader) s += ' NO_HEADER';
    if (r.dom && !r.dom.hasFooter) s += ' NO_FOOTER';
    if (r.dom && r.dom.hOverflow > 10) s += ' OVERFLOW+'+r.dom.hOverflow;
    if (r.dom?.brokenImgs?.length) s += ' BROKEN_IMGS:'+r.dom.brokenImgs.join(',');
    if (r.dom?.dupIds?.length) s += ' DUP_IDS:'+r.dom.dupIds.join(',');
    if (r.jsErrs.length) s += ' JS:'+r.jsErrs[0];
    if (r.consoleErrs.length) s += ' CONSOLE:'+r.consoleErrs[0];
    if (r.dom?.pillStyle?.bg === 'rgb(20, 20, 20)') s += ' PILL_DARK';
    if (r.dom?.title?.includes('株式会社') && r.url.includes('/en/')) s += ' TITLE_JP_ON_EN';
    console.log(s);
  });
  // Language pill summary
  console.log('\n=== PILL READABILITY ===');
  results.forEach(r => {
    if (r.dom?.pillStyle) {
      console.log(`  ${r.url}: bg=${r.dom.pillStyle.bg} color=${r.dom.pillStyle.color} border=${r.dom.pillStyle.borderColor}`);
    }
  });
  // Logo position summary
  console.log('\n=== LOGO POSITION (should be ~y=21-102 at top of page) ===');
  results.slice(0, 6).forEach(r => {
    if (r.dom?.logoRect) {
      console.log(`  ${r.url}: top=${r.dom.logoRect.top} bottom=${r.dom.logoRect.bottom} left=${r.dom.logoRect.left} w=${r.dom.logoRect.w} h=${r.dom.logoRect.h}`);
    }
  });
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
