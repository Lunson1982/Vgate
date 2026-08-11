const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');
(async () => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9234');
  const context = browser.contexts()[0];
  let page = context.pages()[0] || await context.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  const errs = [];
  page.on('pageerror', e => errs.push({t:'pg',m:e.message.slice(0,300)}));
  page.on('console', msg => { if(['error','warning'].includes(msg.type())) errs.push({t:msg.type(),m:msg.text().slice(0,300)}); });
  const resp = await page.goto('https://www.highs.ltd/', {waitUntil:'commit', timeout:20000});
  await page.waitForTimeout(2000);
  const info = await page.evaluate(() => {
    const el = document.getElementById('vgate-header');
    const fo = document.getElementById('vgate-footer');
    return {
      bodyLen: document.body.innerHTML.length,
      headerEl: !!el,
      headerHtml: el ? el.innerHTML.slice(0,200) : 'null',
      footerEl: !!fo,
      footerHtml: fo ? fo.innerHTML.slice(0,200) : 'null',
      title: document.title,
      lang: document.documentElement.getAttribute('lang'),
    };
  });
  console.log(JSON.stringify({resp: resp.status(), info, errs}, null, 2));
  await browser.close();
})();
