"""Full site audit — run against https://www.highs.ltd/ and sub-pages.
Emits JSON report: JS errors, console warnings, broken images,
duplicate IDs, missing header/footer, layout overflow, link targets.
"""
import asyncio, json, sys, os
from playwright.async_api import async_playwright

BROWSER = "/snap/chromium/3499/usr/lib/chromium-browser/chrome"
HEADLESS = True
# 1280x800 desktop viewport (larger than the 633 default so we get full page)
VIEWPORT = {"width": 1280, "height": 900}

URLS = [
    "https://www.highs.ltd/",
    "https://www.highs.ltd/hk/about/",
    "https://www.highs.ltd/hk/about/business/",
    "https://www.highs.ltd/hk/about/network/",
    "https://www.highs.ltd/hk/about/philosophy/",
    "https://www.highs.ltd/hk/about/ip-licensing/",
    "https://www.highs.ltd/hk/about/career/",
    "https://www.highs.ltd/hk/about/marketing/",
    "https://www.highs.ltd/hk/about/offices/",
    "https://www.highs.ltd/hk/brands/",
    "https://www.highs.ltd/hk/news/",
    "https://www.highs.ltd/hk/contact/",
    # English
    "https://www.highs.ltd/en/about/",
    "https://www.highs.ltd/en/about/network/",
    # Chinese
    "https://www.highs.ltd/cn/about/",
    "https://www.highs.ltd/cn/about/network/",
]

async def audit(url):
    report = {"url": url}
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(
                executable_path=BROWSER,
                headless=HEADLESS,
                args=["--no-sandbox", "--disable-dev-shm-usage"],
            )
            page = await browser.new_page(viewport=VIEWPORT)
            console_msgs = []
            js_errors = []
            broken_imgs = []
            page.on("console", lambda msg: console_msgs.append(
                {"type": msg.type, "text": msg.text[:200]}))
            page.on("pageerror", lambda err: js_errors.append(str(err)[:200]))

            resp = await page.goto(url, wait_until="commit", timeout=20000)
            # wait a bit for the include-parts fetches to settle
            await page.wait_for_timeout(1500)

            status = resp.status if resp else None
            final = page.url

            # Check DOM
            dom = await page.evaluate("""() => {
              const imgs = [...document.querySelectorAll('img')];
              const broken = imgs.filter(i => {
                try { return i.naturalWidth === 0 && i.src && !i.hidden; } catch(e){return false;}
              }).map(i => i.src);
              const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
              const seen = {}; const dups = [];
              ids.forEach(id => { seen[id] = (seen[id]||0)+1; });
              Object.entries(seen).forEach(([id,c]) => { if(c>1) dups.push(id); });
              const header = document.querySelector('header');
              const footer = document.querySelector('footer');
              const bodyOverflow = {
                scrollW: document.documentElement.scrollWidth,
                clientW: document.documentElement.clientWidth,
              };
              return {
                imgCount: imgs.length,
                brokenImgs: broken,
                dupIds: dups,
                hasHeader: !!header,
                hasFooter: !!footer,
                headerHeight: header ? header.getBoundingClientRect().height : null,
                footerHeight: footer ? footer.getBoundingClientRect().height : null,
                bodyOverflow,
                title: document.title,
              };
            }""")

            await browser.close()
            report.update({
                "status": status,
                "finalUrl": final,
                "dom": dom,
                "consoleErrors": [m for m in console_msgs if m["type"] == "error"],
                "consoleWarnings": [m for m in console_msgs if m["type"] == "warning"][:10],
                "jsErrors": js_errors,
                "ok": True,
            })
    except Exception as e:
        report["ok"] = False
        report["error"] = str(e)[:300]
    return report

async def main():
    results = []
    for url in URLS:
        r = await audit(url)
        print(json.dumps({"url": r["url"], "status": r.get("status"),
                          "ok": r["ok"],
                          "errors": r.get("jsErrors",[]),
                          "broken": len(r.get("dom",{}).get("brokenImgs",[])),
                          "dups": r.get("dom",{}).get("dupIds",[]),
                          "hasH": r.get("dom",{}).get("hasHeader"),
                          "hasF": r.get("dom",{}).get("hasFooter"),
                          "title": r.get("dom",{}).get("title"),
                          "consoleErrs": len(r.get("consoleErrors",[])),
                          "err": r.get("error"),
                          }), flush=True)

if __name__ == "__main__":
    asyncio.run(main())