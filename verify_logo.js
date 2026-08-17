const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');
(async () => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9234');
  const context = browser.contexts()[0];
  let page = context.pages()[0] || await context.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const checks = [
    { url: 'https://www.highs.ltd/', desc: 'Homepage' },
    { url: 'https://www.highs.ltd/hk/about/', desc: 'HK about' },
    { url: 'https://www.highs.ltd/en/about/', desc: 'EN about' },
  ];
  for (const {url,desc} of checks) {
    const errs=[];
    page.on('pageerror', e => errs.push(e.message.slice(0,120)));
    await page.goto(url, {waitUntil:'commit', timeout:15000});
    await page.waitForTimeout(1200);
    const logo = await page.evaluate(() => {
      const img = document.querySelector('header .inner .logo img');
      if(!img) return null;
      const cs = getComputedStyle(img);
      return {
        csTransform: cs.transform,
        csWidth: cs.width,
        csHeight: cs.height,
        csOrigin: cs.transformOrigin,
        rect: img.getBoundingClientRect().toJSON ? {x:Math.round(img.getBoundingClientRect().x), y:Math.round(img.getBoundingClientRect().y), w:img.naturalWidth, h:img.naturalHeight} : null,
        attr: img.getAttribute('src'),
      };
    });
    const scrollY = await page.evaluate(() => window.scrollY);
    console.log(JSON.stringify({desc, http: resp.status(), errs, scrollY, logo}));
  }
  await browser.close();
})();
