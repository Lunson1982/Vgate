/** Full-site audit using playwright-core + remote Chrome on :9234 */
const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');

const URLS = [
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
  'https://www.highs.ltd/en/about/network/',
  'https://www.highs.ltd/cn/about/',
  'https://www.highs.ltd/cn/about/network/',
];

(async () => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9234');
  const context = browser.contexts()[0];
  let page = context.pages()[0] || await context.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  for (const url of URLS) {
    const jsErrors = [];
    const consoleErrs = [];
    page.on('pageerror', e => jsErrors.push(e.message.slice(0, 200)));
    page.on('console', msg => { if (msg.type() === 'error') consoleErrs.push(msg.text().slice(0, 200)); });

    const summary = { url };
    try {
      const resp = await page.goto(url, { waitUntil: 'commit', timeout: 20000 });
      await page.waitForTimeout(1200);
      const dom = await page.evaluate(() => {
        const imgs = [...document.querySelectorAll('img')];
        const broken = imgs.filter(i => { try { return i.naturalWidth === 0 && i.src && !i.hidden; } catch(e){return false;} }).map(i => i.src);
        const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
        const seen = {}; const dups = [];
        ids.forEach(id => { seen[id] = (seen[id]||0)+1; });
        Object.entries(seen).forEach(([id,c]) => { if(c>1) dups.push(id); });
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const bw = document.documentElement.scrollWidth;
        const cw = document.documentElement.clientWidth;
        // Check drawer overlap with header: drawer position
        const drawer = document.querySelector('#g-nav');
        const drawerStyle = drawer ? getComputedStyle(drawer) : null;
        // Check for absolutely-positioned elements covering content
        return {
          imgCount: imgs.length,
          brokenImgs: broken,
          dupIds: dups,
          hasHeader: !!header,
          hasFooter: !!footer,
          headerH: header ? Math.round(header.getBoundingClientRect().height) : 0,
          footerH: footer ? Math.round(footer.getBoundingClientRect().height) : 0,
          scrollW: bw,
          clientW: cw,
          hOverflow: bw > cw,
          title: document.title,
          h1: document.querySelector('h1') ? document.querySelector('h1').textContent.slice(0,80) : null,
          drawerPos: drawerStyle ? { position: drawerStyle.position, left: drawerStyle.left, top: drawerStyle.top, transform: drawerStyle.transform } : null,
        };
      });
      summary.status = resp.status();
      summary.finalUrl = page.url();
      summary.dom = dom;
      summary.jsErr = [...new Set(jsErrors)];
      summary.cErrList = [...new Set(consoleErrs)];
    } catch (e) {
      summary.err = e.message.slice(0, 300);
    }
    console.log(JSON.stringify(summary));
  }

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
