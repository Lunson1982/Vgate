const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');
(async () => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9234');
  const context = browser.contexts()[0];
  let page = context.pages()[0] || await context.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message.slice(0,200)));
  page.on('console', msg => { if(msg.type()==='error') errs.push(msg.text().slice(0,200)); });

  for (const url of ['https://www.highs.ltd/en/about/','https://www.highs.ltd/cn/about/','https://www.highs.ltd/en/about/network/','https://www.highs.ltd/cn/about/network/']) {
    await page.goto(url, {waitUntil:'commit', timeout:20000});
    await page.waitForTimeout(2500);
    const info = await page.evaluate(() => {
      const html = document.documentElement;
      const h1 = document.querySelector('h1');
      const h2 = document.querySelector('h2');
      const active = {jpn:!!document.querySelector('.jpnCont[data-active="true"]'),
                     eng:!!document.querySelector('.engCont[data-active="true"]'),
                     chn:!!document.querySelector('.chnCont[data-active="true"]'),
                     hk: !!document.querySelector('.hkCont[data-active="true"]')};
      return {
        url: location.href,
        htmlLang: html.getAttribute('lang'),
        htmlLangAttrOnBody: html.outerHTML.slice(0,80),
        h1Text: h1 ? h1.textContent.slice(0,80) : null,
        h2Text: h2 ? h2.textContent.slice(0,80) : null,
        activeLangs: active,
        storedLang: localStorage.getItem('vgate.lang'),
        title: document.title,
      };
    });
    console.log(JSON.stringify(info));
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
