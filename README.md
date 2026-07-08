# Vgate Group — Corporate Website

A high-end Japanese corporate website modeled on the **mashgroup.jp** layout pattern.
Pure static HTML/CSS/JS, deploys directly to **Cloudflare Pages**.

## Architecture (1:1 with mashgroup.jp)

```
vgate/
├── index.html              ← Homepage: hero, banner carousel, commitment, brands, companies, recruit, news
├── about/
│   ├── index.html          ← About landing — photoInner 7-tile grid
│   ├── policy.html         ← Corporate philosophy (sample inner page)
│   └── history.html        ← Timeline (sample inner page)
├── news/
│   └── index.html          ← News list, year-grouped
├── assets/
│   ├── css/
│   │   ├── reset.css       ← ONZE-style reset
│   │   ├── aos.css         ← Vendored from mashgroup
│   │   ├── swiper-bundle.min.css  ← Vendored from mashgroup
│   │   ├── common.min.css  ← Header, drawer, footer, pagetop, base typography
│   │   ├── top.min.css     ← Homepage section styles
│   │   └── other.min.css   ← Secondary-page styles (photoInner grid, timeline, officer table)
│   ├── js/
│   │   ├── aos.js          ← Vendored from mashgroup
│   │   ├── swiper-bundle.min.js   ← Vendored from mashgroup
│   │   ├── include-parts.js  ← Vanilla fetch() — replaces jQuery .write()
│   │   ├── common.js       ← Drawer, header shrink, pagetop, body fade, anchor links
│   │   ├── top.js          ← Swiper init + hero subtitle rise
│   │   └── other.js        ← Reserved for per-page behaviour
│   ├── include/
│   │   ├── inc_header.html  ← Header partial (injected into <div id="vgate-header">)
│   │   └── inc_footer.html  ← Footer partial (injected into <div id="vgate-footer">)
│   └── img/
│       ├── common/         ← nav, menu letters, footer logo
│       ├── companies/      ← group logo (top-left)
│       └── *.svg           ← Section heading SVGs (commitment_title.svg, brands_title.svg, etc.)
├── _redirects              ← Cloudflare Pages redirect rules
├── _headers                ← Security headers + immutable cache for /assets
├── robots.txt
├── sitemap.xml
└── README.md
```

## Key Technical Choices

| Concern | Implementation |
| --- | --- |
| **No jQuery** | Vanilla JS throughout (`common.js`, `top.js`, `include-parts.js`) — modern, smaller, no IE legacy baggage |
| **Partials** | `<script>header('./');</script>` invokes a `fetch()`-based loader that injects HTML into a target `<div>`. Fires `vgate:include-loaded` event for downstream scripts |
| **Animations** | AOS (`data-aos="fade-up"`) for scroll reveals; Swiper for the banner carousel; pure CSS for drawer slide, pagetop dasharray, hero text rise |
| **Typography** | Noto Sans JP + Noto Sans EN/SC/TC via Google Fonts. Base 13px desktop, scales to 3.49vw on mobile (≤480px) |
| **Color tokens** | `#1A1A1A` primary, `#3a3a3a` drawer, `#F5F4F2` section background (warm off-white), `#d2d2d2` footer, `#767676` muted text |
| **Breakpoints** | Desktop ≥769px, tablet 481-768px, mobile ≤480px (`.pcOnly`/`.tabSpOnly`/`.spOnly` helpers) |
| **A11y** | `aria-label` on icon buttons, focus rings preserved, `prefers-reduced-motion` respected, semantic `<header>/<nav>/<footer>/<main>` |
| **Performance** | Immutable cache for `/assets/*` (1y), security headers via `_headers`, font preconnect, lazy AOS init |
| **Header** | Fixed top, full-width white. Logo collapses on scroll (`>10px`). 300px right-side drawer with M-E-N-U letter animation |
| **Hero** | 56.4% aspect-ratio desktop, 120% tablet, 150% mobile. Subtitle rises from `translateY(200px)` after 200ms. Bottom button is white-bordered, fills white on hover |
| **Banner carousel** | Swiper loop, `slidesPerView: 'auto'`, `centeredSlides: true`, autoplay 3s with hover-pause, 18px→36px gap at tablet |
| **Section pattern** | 750px max-width, 2-col `dt(58.66%)+dd(37.33%)` for brands/companies/recruit. Alternating bg `#F5F4F2` |
| **Footer** | Grey `#d2d2d2`, 4-col nav (About/Commitment/Recruit/links), brand list, Instagram icon, © line. On mobile ≤480px, h3 headers become accordion toggles |
| **Pagetop** | 50px circle, `stroke-dasharray: 0,50` → `50,0` on hover draws the border. Scrolls into view after 200px scroll |

## Color palette (override these in `common.min.css` to rebrand)

```css
/* in common.min.css */
header .inner>dl { border-bottom:1px solid #1A1A1A; }   /* primary ink */
#brand { background:#F5F4F2; }                            /* warm section bg */
.contWrap footer { background:#d2d2d2; }                  /* footer grey */
header #g-nav { background:#3a3a3a; }                     /* drawer dark */
#pagetop:before { background:#3a3a3a; }                   /* pagetop dot */
```

## Replace placeholders before launch

The site intentionally ships **without** real photos. The following `<figure aria-label="placeholder">` elements and `.ph` divs need final assets:

- `index.html` → `figure[aria-label="placeholder"]` inside `#brand`, `#companies`, `#recruit` (3 spots)
- `index.html` → `.ph` divs inside the Swiper banner (7 spots — currently labelled with category placeholders)
- `index.html` → `#mainVisual .mainSlider .slide01` (currently a CSS gradient; replace with `<img>` or `<video>`)
- `about/index.html` → first 4 `<figure>` elements in the photoInner grid (4 spots — corporate philosophy / message / business / group)

Swap method: replace `<figure aria-label="placeholder"></figure>` with `<figure><img src="path/to/img.jpg" alt="..."></figure>`.

## Local preview

```bash
cd /home/alan/vgate
python3 -m http.server 8000
# → open http://localhost:8000
```

## Deploy to Cloudflare Pages

Once the user provides the custom domain:

1. Create a new GH repo `vgate` and push the contents of `/home/alan/vgate/`
2. Cloudflare dashboard → Pages → Connect to Git → select repo
3. Build settings: **Framework preset: None**, Build command: (empty), Build output: `/`
4. Custom domain: add the user's domain in the Pages project
5. Verify: `curl -sI https://<domain>/` returns 200, then `?v=$TS` on any new asset path

## Link targets to wire up later

- About / Commitment / Recruit / News / Contact page URLs — currently point to `/about/`, `/commitment/sustainability.html`, `/recruit/`, `/news/`, `/contact/`
- Recruit sub-links (graduate / career / intern) — same placeholders
- Footer brand list (`Vgate Holdings`, `Vgate Technology`, etc.) — currently `#`
- Banner carousel slides (7 slots) — currently labelled PRESS RELEASE / PARTNERSHIP / etc.
- SNS icons (Instagram, LinkedIn) — currently `#`
- Page-section link targets inside `about/` (policy.html, message.html, business.html, group.html, officer.html, access.html) — `policy.html` and `history.html` exist as templates; copy them to fill the rest
