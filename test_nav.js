
const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');
(async () => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9234');
  const ctx = browser.contexts()[0];
  let page = ctx.pages()[0] || await ctx.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  try {
    const resp = await page.goto('https://www.highs.ltd/', { waitUntil: 'networkidle2', timeout: 30000 });
    console.log('STATUS', resp?.status());
    console.log('TITLE', await page.title());
  } catch(e) {
    console.log('ERROR:', e.message);
  }
  await browser.close();
})();
