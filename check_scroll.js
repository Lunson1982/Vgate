const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');
const fs = require('fs');

(async () => {
  const b = await chromium.connectOverCDP('http://127.0.0.1:9234');
  const ctx = b.contexts()[0];
  let p = ctx.pages()[0] || await ctx.newPage();
  await p.setViewportSize({ width: 1280, height: 900 });

  // Screenshot 1: Homepage at top (resting state)
  await p.goto('https://www.highs.ltd/', { waitUntil: 'load', timeout: 20000 });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: '/tmp/scroll_home_resting.png', fullPage: false });
  console.log('Saved: /tmp/scroll_home_resting.png');

  // Screenshot 2: Homepage scrolled (active state)
  await p.evaluate(() => window.scrollTo(0, 600));
  await p.waitForTimeout(2000);
  await p.screenshot({ path: '/tmp/scroll_home_active.png', fullPage: false });
  console.log('Saved: /tmp/scroll_home_active.png');

  // Measure all key elements in active state
  const m = await p.evaluate(() => {
    const h = document.querySelector('header');
    const img = document.querySelector('header .inner .logo img');
    const pill = document.querySelector('header .language dl.accordion dt.lang-selected');
    const menu = document.querySelector('header .inner>dl>dd:nth-of-type(2) .openbtn');
    const switchIcon = document.querySelector('header .inner>dl>dd.language .switch');

    // Check if any element overflows the header
    const headerRect = h?.getBoundingClientRect();
    const elements = [
      { name: 'logo', rect: img?.getBoundingClientRect() },
      { name: 'pill', rect: pill?.getBoundingClientRect() },
      { name: 'menu', rect: menu?.getBoundingClientRect() },
      { name: 'switchIcon', rect: switchIcon?.getBoundingClientRect() },
    ];

    return {
      header: { top: headerRect?.top, h: headerRect?.height, bottom: headerRect?.bottom },
      elements: elements.map(e => ({
        name: e.name,
        rect: e.rect ? { top: Math.round(e.rect.top), bottom: Math.round(e.rect.bottom), left: Math.round(e.rect.left), w: Math.round(e.rect.width), h: Math.round(e.rect.height) } : null,
        overflows: e.rect && headerRect ? (e.rect.bottom > headerRect.bottom || e.rect.top < headerRect.top) : null,
      })),
      headerBg: h ? getComputedStyle(h).backgroundImage.slice(0, 200) : null,
    };
  });
  console.log('ACTIVE STATE MEASUREMENTS:', JSON.stringify(m, null, 2));

  // Now scroll back to top
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.waitForTimeout(2000);
  await p.screenshot({ path: '/tmp/scroll_home_resting2.png', fullPage: false });

  const m2 = await p.evaluate(() => {
    const h = document.querySelector('header');
    const img = document.querySelector('header .inner .logo img');
    const pill = document.querySelector('header .language dl.accordion dt.lang-selected');
    const menu = document.querySelector('header .inner>dl>dd:nth-of-type(2) .openbtn');
    const switchIcon = document.querySelector('header .inner>dl>dd.language .switch');
    const headerRect = h?.getBoundingClientRect();
    const elements = [
      { name: 'logo', rect: img?.getBoundingClientRect() },
      { name: 'pill', rect: pill?.getBoundingClientRect() },
      { name: 'menu', rect: menu?.getBoundingClientRect() },
      { name: 'switchIcon', rect: switchIcon?.getBoundingClientRect() },
    ];
    return {
      header: { top: headerRect?.top, h: headerRect?.height, bottom: headerRect?.bottom },
      elements: elements.map(e => ({
        name: e.name,
        rect: e.rect ? { top: Math.round(e.rect.top), bottom: Math.round(e.rect.bottom), left: Math.round(e.rect.left), w: Math.round(e.rect.width), h: Math.round(e.rect.height) } : null,
        overflows: e.rect && headerRect ? (e.rect.bottom > headerRect.bottom || e.rect.top < headerRect.top) : null,
      })),
    };
  });
  console.log('RESTING STATE MEASUREMENTS:', JSON.stringify(m2, null, 2));

  await b.close();
})().catch(e => { console.error(e); process.exit(1); });