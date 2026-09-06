const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');

(async () => {
  const b = await chromium.connectOverCDP('http://127.0.0.1:9234');
  const ctx = b.contexts()[0];
  let p = ctx.pages()[0] || await ctx.newPage();
  await p.setViewportSize({ width: 1280, height: 900 });
  await p.goto('https://www.highs.ltd/', { waitUntil: 'load', timeout: 20000 });
  await p.waitForTimeout(3000);

  const imgs = await p.evaluate(() => {
    return [...document.querySelectorAll('img')]
      .filter(i => i.src.includes('brands') || i.src.includes('logos') || i.src.includes('companies'))
      .map(i => ({
        src: i.src.slice(-60),
        nw: i.naturalWidth,
        nh: i.naturalHeight,
        complete: i.complete,
      }));
  });
  console.log(JSON.stringify(imgs, null, 2));
  await b.close();
})().catch(e => { console.error(e); process.exit(1); });