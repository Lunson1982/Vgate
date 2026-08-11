const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');
(async () => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9234');
  const context = browser.contexts()[0];
  let page = context.pages()[0] || await context.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const checks = [
    { url: 'https://www.highs.ltd/', desc: 'Homepage HK default' },
    { url: 'https://www.highs.ltd/hk/about/network/', desc: 'HK stores' },
    { url: 'https://www.highs.ltd/en/about/', desc: 'EN about' },
    { url: 'https://www.highs.ltd/en/about/network/', desc: 'EN stores' },
    { url: 'https://www.highs.ltd/cn/about/', desc: 'CN about' },
    { url: 'https://www.highs.ltd/cn/about/network/', desc: 'CN stores' },
  ];

  for (const { url, desc } of checks) {
    const errs = [];
    page.on('pageerror', e => errs.push(e.message.slice(0,150)));
    page.on('console', msg => { if(msg.type()==='error') errs.push(msg.text().slice(0,150)); });

    const resp = await page.goto(url, {waitUntil:'commit', timeout:20000});
    await page.waitForTimeout(2500);

    const info = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const h2 = document.querySelector('h2');
      const bodyText = document.body.innerText.slice(0,200);
      // Count active lang blocks
      const activeLangs = {jpn:!!document.querySelector('.jpnCont[data-active="true"]'),
                          eng:!!document.querySelector('.engCont[data-active="true"]'),
                          chn:!!document.querySelector('.chnCont[data-active="true"]'),
                          hk: !!document.querySelector('.hkCont[data-active="true"]')};
      // Footer about links
      const footerLinks = [...document.querySelectorAll('footer .col-about a')].map(a => a.textContent.trim());
      // Header BRANDS link
      const brandsLink = document.querySelector('header .navItem-brand > a');
      return {
        h1: h1 ? h1.textContent.slice(0,60) : null,
        h2: h2 ? h2.textContent.slice(0,60) : null,
        activeLangs,
        bodySnip: bodyText,
        footerAboutLinks: footerLinks,
        brandsHref: brandsLink ? brandsLink.getAttribute('href') : null,
        title: document.title,
      };
    });

    console.log(JSON.stringify({desc, url: resp.status(), finalUrl: page.url(), info, errs:[...new Set(errs)]}));
  }

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
