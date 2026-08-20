const { chromium } = require('/home/alan/.hermes/hermes-agent/node_modules/playwright-core');
(async () => {
  const b = await chromium.connectOverCDP('http://127.0.0.1:9234');
  const ctx = b.contexts()[0];
  let p = ctx.pages()[0] || await ctx.newPage();
  await p.setViewportSize({ width: 1280, height: 900 });
  const out = { errors: [] };
  p.on('pageerror', e => out.errors.push(e.message));
  await p.goto('https://www.highs.ltd/', { waitUntil: 'commit', timeout: 15000 });
  await p.waitForTimeout(2000);
  out.resting = await p.evaluate(() => {
    const logo = document.querySelector('header .inner .logo');
    const img = document.querySelector('header .inner .logo img');
    const pill = document.querySelector('header .language .accordion.dt, header .language dl.accordion dt');
    const menu = document.querySelector('header .inner>dl>dd:nth-of-type(2) .openbtn');
    const hdr = document.querySelector('header');
    return {
      hdrH: hdr?.offsetHeight,
      logo:{ r: logo?.getBoundingClientRect(), cs: logo?getComputedStyle(logo):null },
      img: { r: img?.getBoundingClientRect(), cs: img?getComputedStyle(img):null, nat: img?{w:img.naturalWidth,h:img.naturalHeight}:null },
      pill:{ r: pill?.getBoundingClientRect(), cs: pill?getComputedStyle(pill):null, codeColor: pill?.querySelector('.lang-current-label')?.style.color },
      menu:{ r: menu?.getBoundingClientRect(), cs: menu?getComputedStyle(menu):null },
    };
  });
  // scroll down to trigger active
  await p.evaluate(() => window.scrollTo(0, 400));
  await p.waitForTimeout(1000);
  out.active = await p.evaluate(() => {
    const logo = document.querySelector('header .inner .logo');
    const img = document.querySelector('header .inner .logo img');
    const pill = document.querySelector('header .language .accordion.dt, header .language dl.accordion dt');
    const menu = document.querySelector('header .inner>dl>dd:nth-of-type(2) .openbtn');
    const hdr = document.querySelector('header');
    return {
      hdrH: hdr?.offsetHeight,
      hdrCls: hdr?.className,
      logo:{ r: logo?.getBoundingClientRect() },
      img: { r: img?.getBoundingClientRect(), cs: img?getComputedStyle(img):null },
      pill:{ r: pill?.getBoundingClientRect() },
      menu:{ r: menu?.getBoundingClientRect() },
    };
  });
  console.log(JSON.stringify(out, null, 2));
  await b.close();
})();