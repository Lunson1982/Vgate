/*==========================================================
  vgate-data.js — VGate Company Limited — master content data
  Generated 2026-09-30 from client handoff files (files930/):
    - VGate+website+20260930.docx (section spec + brand tables)
    - Corporate Milestones.xlsx (2007-2026 timeline)
    - Shop Details.xlsx (21 shops, EN/HK/CN)
    - VGate Company Profile (Jun 2026) EN.pptx (brand stories)
  Loaded via <script> on every page. All 4 languages (en/hk/cn/jp).
==========================================================*/

(function () {
  'use strict';

  var VGATE = {};

  /* ─────────────────────────────────────────────────────────
     SOCIAL — Instagram accounts (docx §INDEX PAGE / FOOTER)
     ───────────────────────────────────────────────────────── */
  VGATE.social = [
    { handle: '@usagionline_hk',       url: 'https://www.instagram.com/usagionline_hk/' },
    { handle: '@snidelhk',             url: 'https://www.instagram.com/snidelhk/' },
    { handle: '@gelatopiquehk',        url: 'https://www.instagram.com/gelatopiquehk/' },
    { handle: '@gelato_pique_cafe_hk', url: 'https://www.instagram.com/gelato_pique_cafe_hk/' },
    { handle: '@lilybrownhk',          url: 'https://www.instagram.com/lilybrownhk/' },
    { handle: '@maison.cielune',       url: 'https://www.instagram.com/maison.cielune/' },
    { handle: '@cosmekitchenhk',       url: 'https://www.instagram.com/cosmekitchenhk/' }
  ],

  /* ─────────────────────────────────────────────────────────
     BRANDS — logo files in assets/img/brands/, by category
     (Our Businesses page). 4 tables from the .docx.
     f = filename, n = display name, u = url ('' = no link)
     ───────────────────────────────────────────────────────── */
  VGATE.categories = [
    {
      id: 'fashion',
      title: { en: 'FASHION', hk: '時尚', cn: '时尚', jp: 'ファッション' },
      blurb: {
        en: 'Japanese and Korean fashion houses represented by VGate across the Greater China region — from contemporary womenswear to select-shop concept stores.',
        hk: 'VGate 於中華地區代理的日韓時尚品牌 — 從現代女裝到選物店概念店。',
        cn: 'VGate 于中华地区代理的日韩时尚品牌 — 从现代女装到选物店概念店。',
        jp: 'VGate が中華地区で扱う日韓ファッションブランド — モダンなレディースからセレクトショップまで。'
      },
      brands: [
        { f: 'usagi-online-store.png', n: 'USAGI ONLINE STORE', u: 'https://www.usagi-online.com.hk/', ig: 'https://www.instagram.com/usagionline_hk/', d: "VGate's flagship e-commerce and physical retail store, offering curated Japanese and Korean fashion brands under one roof in premium shopping malls." },
        { f: 'niji-select.png', n: 'NIJI SELECT', u: '', d: 'A leading Japanese curated boutique specializing in natural and organic beauty, featuring internationally certified sustainable skincare.' },
        { f: 'snidel.png', n: 'SNIDEL', u: 'https://snidel.com/', ig: 'https://www.instagram.com/snidelhk/', d: 'A Japanese fashion brand established in 2005, known for its versatile contemporary womenswear that blends sophistication with everyday style. Currently has stores in Japan, China, Hong Kong, Taiwan, Singapore, and Thailand.' },
        { f: 'snidel-home.png', n: 'SNIDEL HOME', d: "Home goods extension of SNIDEL, bringing the brand's refined aesthetic to interior living with lifestyle products and homeware." },
        { f: 'gelato-pique.png', n: 'gelato pique', u: 'https://gelatopique.com/', ig: 'https://www.instagram.com/gelatopiquehk/', d: "A room wear brand launched in Autumn 2008. With the core concept of 'Desserts for Adults', the brand is dedicated to providing supreme comfort and touch. gelato pique offers stylish room wear for men and women of all ages." },
        { f: 'lily-brown.png', n: 'LILY BROWN', u: 'https://lily-brw.com/', ig: 'https://www.instagram.com/lilybrownhk/', d: 'A vintage-featured clothing brand from Mash Style Lab Japan, communicating modernised beauty with emphasised vintage elements to each creation.' },
        { f: 'maison-cielune-logo.png', n: 'Maison Cielune', u: 'https://maisoncielune.com/', ig: 'https://www.instagram.com/maison.cielune/', d: 'A fashion brand inspired by the breathtaking beauty of the sky. The brand\'s vision embodies a soft, dreamy, and playful aesthetic that captures the essence of nature\'s most enchanting canvas. Maison Cielune\'s garments encourage you to embrace your multifaceted self, like the ever-changing sky.' },
        { f: 'kanalili.png', n: 'KanaLili', u: 'https://www.kanalili.com/', ig: 'https://www.instagram.com/kanalili/', d: 'Founded in 2013 by Lilian Kan, a rising fashion designer in Hong Kong. Celebrating beauty, delicacy, art and fantasies through a contemporary and enchanting approach, KanaLili is a label that offers a wide range of whimsical clothing and accessories, from Prêt-à-Porter to couture.' },
        { f: 'fray-id.png', n: 'FRAY I.D', d: 'A Japanese fashion brand that seamlessly blends traditional craftsmanship with contemporary design, emphasising new mode career fashion with a unique blend of elegance.' },
        { f: 'celford.png', n: 'CELFORD', d: "Crafted around the concept of 'Vintage Feature Dress', the brand integrates vintage craftsmanship with modern daily wear, featuring bold color combinations and eye-catching details." },
        { f: 'lip-service.png', n: 'LIP SERVICE', d: 'A Japanese clothing brand started around the early 2000s, popular among many styles of gyaru. A women\'s style brand with the concept of [LADY CONSCIOUS].' },
        { f: 'rojita.png', n: 'ROJITA', u: '', d: 'A Japanese fashion brand known for Jirai Kei and Lolita-inspired styles, featuring frill blouses, layered dresses, and girly, dreamy designs.' },
        { f: 'furfur.png', n: 'FURFUR', d: 'A women\'s fashion brand based on the concept of \'Feminine Mode Wears\', supple and elegant yet powerful with a little humor and essence of mode.' },
        { f: 'kashiko.png', n: 'Kashiko', d: 'A South Korean fashion brand established in 2021, inspired by the nostalgia surrounding the 90s and the Y2K era.' },
        { f: 'not-your-rose.png', n: 'NOT YOUR ROSE', d: 'A women\'s clothing brand that presents beautiful silhouettes with classic designs and lovely elements, adding sweetness to the classic mood with a rose motif.' },
        { f: 'rose-frantz.png', n: 'Rose Frantz', d: 'Introduces refined romantic styling combined with minimalist and street looks, fusing witty graphics with mismatched elements.' },
        { f: 'pain-or-pleasure.png', n: 'Pain or pleasure', d: 'A designer brand launched in Seoul in 2017, focusing on fit and silhouette that shows the beauty of women\'s bodies, combining contrasting elements.' }
      ]
    },
    {
      id: 'beauty',
      title: { en: 'BEAUTY・WELLNESS', hk: '美容・健康', cn: '美容・健康', jp: 'ビューティー・ウェルネス' },
      blurb: {
        en: 'Natural and organic beauty brands — from cell science to clean beauty derived from fashion houses.',
        hk: '天然及有機美容品牌 — 由細胞科學到源自時裝品牌的純淨美容。',
        cn: '天然及有机美容品牌 — 由细胞科学到源自时装品牌的纯净美容。',
        jp: 'ナチュラル＆オーガニックのビューティーブランド — セルサイエンスからファッションブランド発のクリーンビューティーまで。'
      },
      brands: [
        { f: 'cosme-kitchen.png', n: 'Cosme Kitchen', u: 'https://www.cosmekitchen-webstore.jp/CosmeKitchen/', ig: 'https://www.instagram.com/cosmekitchenhk/', d: 'In the natural and organic beauty industry, curating a diverse selection of natural and organic skincare and makeup products, dedicated to highlighting each customer\'s unique personality and enhancing their natural beauty.' },
        { f: 'celvoke-logo.png', n: 'Celvoke', d: 'A beauty brand created by Mash Beauty Lab, with Ms. Yoko Tagami as Brand Director. Cell + Voke = Celvoke. Listening to the voice of your cells, Celvoke responds to your skin\'s desires, unleashing the exquisite radiance hidden deep within.' },
        { f: 'snidel-beauty.png', n: 'SNIDEL BEAUTY', d: "Launched in spring 2021, a beauty brand originated from fashion brand SNIDEL. Guided by the philosophy of 'Clean Beauty', SNIDEL BEAUTY uses natural ingredients and sustainable production." },
        { f: 'toone.png', n: 'to/one', d: "'to/one' combines two meanings: 'tone' evokes bringing out the most beautiful shades in your complexion, while 'to one' means letting your personality shine." },
        { f: 'f-organics.png', n: 'F ORGANICS', d: 'A brand that specializes in skincare products based on international organic certification standards. Its skincare line features four common ingredients — large-leaved thistle, Damask rose, pomegranate, and frankincense.' },
        { f: 'o-by-f.png', n: 'O by F', d: 'A beauty brand focused on organic and natural skincare with a minimalist approach to beauty.' },
        { f: 'femmue.png', n: 'FUMMUE', d: 'A beauty brand offering skincare and cosmetic products with a focus on natural ingredients and efficacy.' },
        { f: 'highs-canada.svg', n: 'HIGHS CANADA', u: 'https://highs.online/', fb: 'https://www.facebook.com/HighsHK/', ig: 'https://www.instagram.com/highsbeauty_hk/', d: 'A coffee-essence focused spa-care brand from Canada.' }
      ]
    },
    {
      id: 'ecommerce',
      title: { en: 'E-COMMERCE', hk: '電子商務', cn: '电子商务', jp: 'EC' },
      blurb: {
        en: 'VGate’s own online retail platform — a curated destination for Japanese and Korean lifestyle brands in Hong Kong.',
        hk: 'VGate 自有線上零售平台 — 香港日本及韓國生活品牌精選採購站。',
        cn: 'VGate 自有线上零售平台 — 香港日本及韩国生活品牌精选采购站。',
        jp: 'VGate オリジナルのオンライン小売プラットフォーム — 香港における日韓ライフスタイルブランドのキュレーション拠点。'
      },
      brands: [
        { f: 'usagi-online.png', n: 'USAGI ONLINE (HONG KONG)', u: 'https://www.usagi-online.com.hk/', ig: 'https://www.instagram.com/usagionline_hk/', d: "VGate's e-commerce platform for Japanese and Korean fashion brands, offering online shopping convenience to customers across Hong Kong." }
      ]
    },
    {
      id: 'fnb',
      title: { en: 'FOOD & BEVERAGE', hk: '餐飲', cn: '餐饮', jp: 'フード＆ビバレッジ' },
      blurb: {
        en: '“Desserts for Adults” — a signature café experience co-created with gelato pique, with two Hong Kong locations opened in 2025 and 2026.',
        hk: '「成人的甜品」— 與 gelato pique 合作創設的標誌性咖啡體驗，2025 及 2026 年於香港開設兩家分店。',
        cn: '「成年人的甜品」— 与 gelato pique 合作创立的标志性咖啡体验，2025 及 2026 年于香港开设两家分店。',
        jp: '“Desserts for Adults” — gelato pique と共同創出するシグネチャーカフェ体験。2025年・2026年に香港で2店舗をオープン。'
      },
      brands: [
        { f: 'gelato-pique-cafe.png', n: 'gelato pique cafe', u: 'https://pique-cafe.com/', ig: 'https://www.instagram.com/gelato_pique_cafe_hk/', d: "A popular cafe created in collaboration with gelato pique, the renowned Japanese loungewear brand. Opened first Hong Kong location at Kai Tak AIRSIDE in 2025, followed by Shatin New Town Plaza in 2026. Embodying the brand's signature Pique Blue and French crêpes." }
      ]
    },
    {
      id: 'ip',
      title: { en: 'IP LICENSING', hk: 'IP 授權', cn: 'IP 授权', jp: 'IPライセンシング' },
      blurb: {
        en: 'VGate and its brother company KING Enterprises jointly manage “Chibi Maruko-chan” IP licensing in Greater China — retail stores, pop-ups, character merchandise and large-scale exhibitions.',
        hk: 'VGate 與兄弟公司 KING Enterprises 共同管理「櫻桃小丸子」在中華地區的 IP 授權 — 零售店、快閃店、角色商品及大型展覽。',
        cn: 'VGate 与兄弟公司 KING Enterprises 共同管理「樱桃小丸子」在中华地区的 IP 授权 — 零售店、快闪店、角色商品及大型展览。',
        jp: 'VGate は兄弟会社の KING Enterprises とともに、“ちびまる子ちゃん”の中華地区におけるIPライセンス事業を共同で運営 — 実店舗、ポップアップ、キャラクターグッズ、大規模展示会。'
      },
      brands: []
    }
  ],

  /* ─────────────────────────────────────────────────────────
     FEATURED BRANDS — homepage grid (docx Table 0, 12 brands)
     ───────────────────────────────────────────────────────── */
  VGATE.featured = [
    { f: 'niji-select.png', n: 'NIJI SELECT', u: '' },
    { f: 'usagi-online.png', n: 'USAGI ONLINE (HONG KONG)', u: 'https://www.usagi-online.com.hk/', ig: 'https://www.instagram.com/usagionline_hk/' },
    { f: 'usagi-online-store.png', n: 'USAGI ONLINE STORE', u: 'https://www.usagi-online.com.hk/', ig: 'https://www.instagram.com/usagionline_hk/' },
    { f: 'snidel.png', n: 'SNIDEL', u: 'https://snidel.com/', ig: 'https://www.instagram.com/snidelhk/', d: 'A leading Japanese fashion brand known for its versatile contemporary womenswear that blends sophistication with everyday style.' },
    { f: 'gelato-pique.png', n: 'gelato pique', u: 'https://gelatopique.com/', ig: 'https://www.instagram.com/gelatopiquehk/', d: "A room wear brand launched in 2008 with the core concept of 'Desserts for Adults', dedicated to supreme comfort and touch." },
    { f: 'lily-brown.png', n: 'LILY BROWN', u: 'https://lily-brw.com/', ig: 'https://www.instagram.com/lilybrownhk/', d: 'A Japanese fashion brand inspired by vintage fashion, offering classic and preppy styles with a modern sensibility.' },
    { f: 'maison-cielune-logo.png', n: 'Maison Cielune', u: 'https://maisoncielune.com/', ig: 'https://www.instagram.com/maison.cielune/', d: 'A Hong Kong fashion brand inspired by the beauty of the sky, embodying a soft, dreamy, and playful aesthetic.' },
    { f: 'kanalili.png', n: 'KanaLili', u: 'https://www.kanalili.com/', ig: 'https://www.instagram.com/kanalili/', d: 'Founded in 2013 by designer Lilian Kan, celebrating beauty, delicacy, art and fantasies through a contemporary approach.' },
    { f: 'rojita.png', n: 'ROJITA', u: '', d: 'A Japanese brand known for its distinctive design philosophy and creative approach to fashion and lifestyle.' },
    { f: 'gelato-pique-cafe.png', n: 'gelato pique cafe', u: 'https://pique-cafe.com/', ig: 'https://www.instagram.com/gelato_pique_cafe_hk/', d: "A popular cafe in collaboration with gelato pique, featuring the brand's signature Pique Blue and French crêpes." },
    { f: 'cosme-kitchen.png', n: 'Cosme Kitchen', u: 'https://www.cosmekitchen-webstore.jp/CosmeKitchen/', ig: 'https://www.instagram.com/cosmekitchenhk/', d: 'In the natural and organic beauty industry, curating a diverse selection of natural and organic skincare and makeup products.' },
    { f: 'highs-canada.svg', n: 'HIGHS CANADA', u: 'https://highs.online/', fb: 'https://www.facebook.com/HighsHK/', ig: 'https://www.instagram.com/highsbeauty_hk/' }
  ],

  /* ─────────────────────────────────────────────────────────
     ABOUT — company overview / philosophy / footprint
     (docx Tables 1, 2, 3 — 4 languages each)
     ───────────────────────────────────────────────────────── */
  VGATE.about = {
    overview: {
      en: [
        '20+ Years of Track Record in Representing Japanese Brands',
        'Premier Fashion Enterprise in the Greater China Region',
        'VGate Company Limited was established in Hong Kong in 2005, focusing on fashion, lifestyle goods, and fashion accessories. Through strategies such as exclusive distribution rights, joint ventures, and self-owned brand development, we actively drive business diversification.',
        'Starting from a single retail store, the company expanded rapidly. At its peak, VGate operated over 30 branches across premier core shopping malls in Hong Kong, Mainland China, Taiwan, Macau, and Singapore, demonstrating robust business growth and retail operational strength.'
      ],
      hk: [
        '擁有超過 20 年代理日本品牌的實績',
        '中華地區首屈一指的時尚企業',
        'VGate Company Limited 於 2005 年在香港成立，業務聚焦於時裝、生活精品及時尚配飾。我們透過取得品牌獨家代理、合資經營及自營開發等策略，積極推動多元化業務拓展。',
        '從最初一間門市發展至今，公司於高峰期在香港、中國內地、台灣、澳門及新加坡的一線核心商場營運超過 30 間分店，展現強勁的業務增長與零售營運實力。'
      ],
      cn: [
        '拥有超过 20 年代理日本品牌的实绩',
        '中华地区首屈一指的时尚企业',
        'VGate Company Limited 于 2005 年在香港成立，业务聚焦于时装、生活精品及时尚配饰。我们透过取得品牌独家代理、合资经营及自营开发等策略，积极推动多元化业务拓展。',
        '从最初一间门市发展至今，公司于高峰期在香港、中国内地、台湾、澳门及新加坡的一线核心商场营运超过 30 间分店，展现强劲的业务增长与零售营运实力。'
      ],
      jp: [
        '20年以上の日本ブランド代理実績',
        '中華地区トップクラスのファッション企業',
        '2005年、香港発の VGate Company Limited は、ファッション、ライフスタイル、アクセサリー市場を中心に、独占販売権の取得やジョイントベンチャーなど、多角的な事業拡大を行ってまいりました。',
        '1店舗から始まり、ピーク時には香港、中国、台湾、マカオ、シンガポールの一流ショッピングモールに30店舗以上を展開するまでに急成長を遂げています。'
      ]
    },
    philosophy: {
      en: [
        'As one of the fastest-growing fashion and lifestyle brand retailers in the region, we are committed to introducing and crafting high-quality, accessible fashion apparel, footwear, handbags, and lifestyle accessories for customers who pursue taste and style.',
        'We aim to create unique spaces where fashion enthusiasts can showcase their personal charm, while delivering a one-of-a-kind shopping experience.'
      ],
      hk: [
        '作為區域內發展迅速的時尚與生活品牌零售商，我們致力為追求品味與風格的顧客，引進及打造優質且價格親民的時尚服飾、鞋履、手袋及生活配件等。',
        '我們希望為所有熱愛時尚的人士，打造能展現個人魅力的專屬空間，並帶來獨一無二的購物體驗。'
      ],
      cn: [
        '作为区域内发展迅速的时尚与生活品牌零售商，我们致力为追求品味与风格的顾客，引进及打造优质且价格亲民的时尚服饰、鞋履、手袋及生活配件等。',
        '我们希望为所有热爱时尚的人士，打造能展现个人魅力的专属空间，并带来独一无二的购物体验。'
      ],
      jp: [
        '香港で最も目覚ましい成長を遂げる企業の一つとして、洗練されたスタイルを求めるすべてのお客様へ、高品質で手頃な価格のファッション（ウェア、シューズ、バッグ、アクセサリー等）をご提供します。',
        'ファッションを愛するすべての方へ、自分らしいスタイルを楽しめる魅力的な空間と、特別なショッピング体験をお届けすることを目指しています。'
      ]
    },
    footprint: {
      en: 'With its headquarters in Hong Kong, VGate has successfully expanded its operations to key Asian regions such as Macau, Shenzhen, Shanghai, Taipei and Singapore.',
      hk: 'VGate 以香港總部為中心，成功將業務拓展至澳門、深圳、上海、台北及新加坡等亞洲主要地區。',
      cn: 'VGate 以香港总部为中心，成功将业务拓展至澳门、深圳、上海、台北及新加坡等亚洲主要地区。',
      jp: '香港に拠点を置くVGateは、マカオ、深圳、上海、台北、シンガポールをはじめとするアジアの主要エリアにおいて、着実な事業拡大を図っております。'
    },
    footprintCities: [
      { city: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' }, role: { en: 'Headquarters', hk: '總部', cn: '总部', jp: '本社' } },
      { city: { en: 'Macau', hk: '澳門', cn: '澳门', jp: 'マカオ' } },
      { city: { en: 'Shenzhen', hk: '深圳', cn: '深圳', jp: '深圳' } },
      { city: { en: 'Shanghai', hk: '上海', cn: '上海', jp: '上海' } },
      { city: { en: 'Taipei', hk: '台北', cn: '台北', jp: '台北' } },
      { city: { en: 'Singapore', hk: '新加坡', cn: '新加坡', jp: 'シンガポール' } }
    ],
    /* Store counts derived from Shop Details.xlsx + PPT slides 18-20 */
    stats: [
      { value: '2005', label: { en: 'Founded', hk: '成立年份', cn: '成立年份', jp: '創業' } },
      { value: '21',   label: { en: 'Retail Stores', hk: '零售分店', cn: '零售分店', jp: '出店数' } },
      { value: '6',    label: { en: 'Asian Markets', hk: '亞洲市場', cn: '亚洲市场', jp: 'アジア市場' } },
      { value: '40+',  label: { en: 'Brands Represented', hk: '代理品牌', cn: '代理品牌', jp: '取扱ブランド' } }
    ]
  },

  /* ─────────────────────────────────────────────────────────
     CORPORATE MILESTONES — Corporate Milestones.xlsx (2007-2026)
     Each item: year, en, hk, cn, jp
     ───────────────────────────────────────────────────────── */
  VGATE.milestones = [
    { year: '2007', en: "Acquired Hong Kong distribution rights for FREE'S INTERNATIONAL Co., Ltd. (Japan) and opened the first overseas Pinky Girls boutique at Times Square.", hk: "取得日本 FREE'S INTERNATIONAL 株式會社的香港代理權，於時代廣場開設海外首間 Pinky Girls 專門店。", cn: "取得日本 FREE'S INTERNATIONAL 株式会社的香港代理权，于时代广场开设海外首间 Pinky Girls 专门店。", jp: "株式会社 FREE'S INTERNATIONAL の香港代理権取得、第一号海外店「Pinky Girls」タイムズスクエアにて開店。" },
    { year: '2009', en: 'Partnered with Sanyo Shokai (Japan) to host the LOVELESS pop-up store in Hong Kong.', hk: '與日本三陽商會合作於香港舉辦 LOVELESS 快閃店。', cn: '与日本三阳商会合作于香港举办 LOVELESS 快闪店。', jp: '三陽商会と提携し、香港で「LOVELESS」のポップアップストアを開催。' },
    { year: '2011', en: 'Established partnership with Mash Style Lab (Japan) to open the first overseas boutiques for SNIDEL, gelato pique, and Cosme Kitchen at Harbour City LCX.', hk: '與日本 Mash Style Lab 展開合作夥伴關係，於海港城 LCX 開設海外首間 SNIDEL、gelato pique 及 Cosme Kitchen 專門店。', cn: '与日本 Mash Style Lab 展开合作伙伴关系，于海港城 LCX 开设海外首间 SNIDEL、gelato pique 及 Cosme Kitchen 专门店。', jp: '株式会社 Mash Style Lab とのパートナーシップを開始、第一号海外店ハーバーシティ LCX にて「SNIDEL」「gelato pique」「Cosme Kitchen」を開店。' },
    { year: '2011', en: 'Provided brand management and consulting services for COCO DEAL.', hk: '為 COCO DEAL 提供品牌管理及顧問諮詢服務。', cn: '为 COCO DEAL 提供品牌管理及顾问咨询服务。', jp: '「COCO DEAL」のブランドマネジメントおよびコンサルティングの提供。' },
    { year: '2012', en: 'Assisted Samantha Thavasa in entering the Hong Kong market with store openings, followed by two years of comprehensive support for store expansions in Shanghai and Beijing.', hk: '協助 Samantha Thavasa 進軍香港市場並開設門市，其後兩年亦全面支援其於上海及北京的開店和業務拓展。', cn: '协助 Samantha Thavasa 进军香港市场并开设门市，其后两年亦全面支援其于上海及北京的开店和业务拓展。', jp: '「Samantha Thavasa」の香港進出・出店を支援、その後2年間で上海や北京における店舗展開・出店も全面的にサポート。' },
    { year: '2012', en: 'Opened the first Lily Brown branch in Hong Kong.', hk: '開設 Lily Brown 首間香港分店。', cn: '开设 Lily Brown 首间香港分店。', jp: '「Lily Brown」の第1号香港店を開店。' },
    { year: '2013', en: 'Established partnership with LIP SERVICE.', hk: '與 LIP SERVICE 展開合作夥伴關係。', cn: '与 LIP SERVICE 展开合作伙伴关系。', jp: '「LIP SERVICE」とのパートナーシップを開始。' },
    { year: '2014', en: 'Established partnership with Noela.', hk: '與 Noela 展開合作夥伴關係。', cn: '与 Noela 展开合作伙伴关系。', jp: '「Noela」とのパートナーシップを開始。' },
    { year: '2014', en: 'Opened the first Fray I.D branch in Hong Kong.', hk: '開設 Fray I.D 首間香港分店。', cn: '开设 Fray I.D 首间香港分店。', jp: '「Fray I.D」の第1号香港店を開店。' },
    { year: '2015', en: 'Established partnerships with ABAHOUSE, GRAMN INC.「Q-pot.」and Chinese handbag brand DISSONA.', hk: '與 ABAHOUSE、GRAMN INC.「Q-pot.」及中國手袋品牌 DISSONA 展開合作夥伴關係。', cn: '与 ABAHOUSE、GRAMN INC.「Q-pot.」及中国手袋品牌 DISSONA 展开合作伙伴关系。', jp: '「ABAHOUSE」、株式会社グラム「Q-pot.」、中国のハンドバッグブランド「DISSONA」とのパートナーシップを開始。' },
    { year: '2016', en: 'Established partnerships with Chinese fashion brands Mjstyle and Topfeeling, including the opening of a large flagship store (10,000 sq. ft.) in Hong Kong. Acquired exclusive Hong Kong distribution rights for Ungrid and merry jenny under MARK STYLER (Japan). Provided marketing consultancy for Arpege Story market expansion in Hong Kong.', hk: '與中國時裝品牌 Mjstyle 及 Topfeeling 展開合作，於香港開設大型旗艦店（佔地 10,000 平方呎）。取得日本 MARK STYLER 旗下 Ungrid 及 merry jenny 的香港獨家代理權，並為 Arpege Story 進軍香港提供市場推廣顧問服務。', cn: '与中国时装品牌 Mjstyle 及 Topfeeling 展开合作，于香港开设大型旗舰店（占地 10,000 平方呎）。取得日本 MARK STYLER 旗下 Ungrid 及 merry jenny 的香港独家代理权，并为 Arpege Story 进军香港提供市场推广顾问服务。', jp: '中国ファッションブランド「MJstyle」「Topfeeling」とのパートナーシップを開始、香港にて大型フラッグシップショップをオープン（10,000 平方フィート）。MARK STYLER 日本より「Ungrid」「merry jenny」の独占販売権を取得。香港市場向け「Arpege Story」のコンサルテーション。' },
    { year: '2017', en: 'Established partnerships with Pinky & Dianne, Natural Beauty and BOSCH.', hk: '與 Pinky & Dianne、Natural Beauty、BOSCH 展開合作夥伴關係。', cn: '与 Pinky & Dianne、Natural Beauty、BOSCH 展开合作伙伴关系。', jp: '「Pinky & Dianne」「Natural Beauty」「BOSCH」とのパートナーシップを開始。' },
    { year: '2018', en: 'Established partnership with Belgian jewelry brand Diamanti Per Tutti, and opened the Chinese restaurant Lian Yuan.', hk: '與比利時首飾品牌 Diamanti Per Tutti 展開合作夥伴關係，並開設中菜餐廳「蓮苑」。', cn: '与比利时首饰品牌 Diamanti Per Tutti 展开合作伙伴关系，并开设中菜餐厅「莲苑」。', jp: 'ベルギーのジュエリーブランド「Diamanti Per Tutti」とのパートナーシップを開始、中華料理レストラン「蓮苑」を開店。' },
    { year: '2019', en: 'Expanded into the Singapore market via the local office, opening 4 stores including SNIDEL, FRAY I.D and Diamanti Per Tutti.', hk: '透過新加坡辦公室，於當地相繼開設 MASH Holdings（SNIDEL / FRAY I.D）及 Diamanti Per Tutti 共 4 間分店。', cn: '透过新加坡办公室，于当地相继开设 MASH Holdings（SNIDEL / FRAY I.D）及 Diamanti Per Tutti 共 4 间分店。', jp: 'シンガポールオフィスを通じて、シンガポール国内に MASH Holdings（SNIDEL / FRAY I.D）、Diamanti Per Tutti の計4店舗を連続出店。' },
    { year: '2020', en: 'Launched the USAGI ONLINE e-commerce platform and opened the first USAGI ONLINE STORE in Hong Kong.', hk: '於香港推出 USAGI ONLINE 網購平台並開設 USAGI ONLINE STORE 實體店。', cn: '于香港推出 USAGI ONLINE 网购平台并开设 USAGI ONLINE STORE 实体店。', jp: '「USAGI ONLINE」ECサイトおよび「USAGI ONLINE STORE」実店舗を香港で展開。' },
    { year: '2021', en: "Provided consultancy for Baroque Japan Limited's brand MOUSSY for its Hong Kong market expansion.", hk: '為 Baroque Japan Limited 旗下品牌 MOUSSY 拓展香港市場提供顧問諮詢服務。', cn: '为 Baroque Japan Limited 旗下品牌 MOUSSY 拓展香港市场提供顾问咨询服务。', jp: 'バロックジャパンリミテッド（香港）の「Moussy」に対するコンサルテーション。' },
    { year: '2023', en: 'Opened the first NIJI SELECT (12,500 sq. ft.), a select shop for Japanese and Korean fashion brands in Hong Kong. Established partnerships with Pain or pleasure, Kashiko, NOT YOUR ROSE and ROSE FRANTZ.', hk: '開設日韓時裝品牌選物店 NIJI SELECT 首間香港分店（佔地 12,500 平方呎），並與韓國時裝品牌 Pain or pleasure、Kashiko、NOT YOUR ROSE、ROSE FRANTZ 展開合作夥伴關係。', cn: '开设日韩时装品牌选物店 NIJI SELECT 首间香港分店（占地 12,500 平方呎），并与韩国时装品牌 Pain or pleasure、Kashiko、NOT YOUR ROSE、ROSE FRANTZ 展开合作伙伴关系。', jp: '日韓ファッションのセレクトショップ「NIJI SELECT」の第1号香港店を開店（12,500 平方フィート）。韓国ファッションブランド「Pain or pleasure」「Kashiko」「NOT YOUR ROSE」「ROSE FRANTZ」を展開。' },
    { year: '2025', en: "Founded and launched the women's fashion brand Maison Cielune in Hong Kong and Mainland China. Introduced SNIDEL BEAUTY in the Hong Kong market. Opened the first gelato pique cafe in Hong Kong.", hk: '於香港及中國開創並經營女裝品牌 Maison Cielune。拓展 SNIDEL BEAUTY 香港業務市場。開設 gelato pique cafe 首間香港分店。', cn: '于香港及中国开创并经营女装品牌 Maison Cielune。拓展 SNIDEL BEAUTY 香港业务市场。开设 gelato pique cafe 首间香港分店。', jp: 'レディースブランド「Maison Cielune」を香港と中国で展開。「SNIDEL BEAUTY」を香港で展開。「gelato pique cafe」第1号香港店を開店。' },
    { year: '2026', en: 'Opened the second gelato pique cafe in Hong Kong, and expanding ROJITA market presence in China.', hk: '開設 gelato pique cafe 第二間香港分店，並拓展 ROJITA 中國業務市場。', cn: '开设 gelato pique cafe 第二间香港分店，并拓展 ROJITA 中国市场。', jp: '「gelato pique cafe」第2号香港店を開店。「ROJITA」を中国で展開。' }
  ],

  /* ─────────────────────────────────────────────────────────
     SHOPS — 21 stores, EN/HK/CN (docx §OUR STORES + Shop Details.xlsx)
     ───────────────────────────────────────────────────────── */
  VGATE.shops = [
    { no: 1,  area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'USAGI ONLINE STORE: K11 ART MALL', hk: 'USAGI ONLINE STORE: K11 藝術購物中心', cn: 'USAGI ONLINE STORE: K11 艺术购物中心', jp: 'USAGI ONLINE STORE: K11 ART MALL' },
      location: { en: 'SHOP 103, 1/F, K11 ART MALL, 18 Hanoi Road, Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀河內道 18 號 K11 藝術購物中心 1 樓 103 號舖', cn: '九龙尖沙咀河内道 18 号 K11 艺术购物中心 1 楼 103 号铺', jp: 'SHOP 103, 1/F, K11 ART MALL, 18 HANOI ROAD, TSIM SHA TSUI, KOWLOON' },
      mall: { en: 'K11 ART MALL', hk: 'K11 藝術購物中心', cn: 'K11 艺术购物中心', jp: 'K11 ART MALL' },
      district: { en: 'Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀', cn: '九龙尖沙咀', jp: 'TSIM SHA TSUI, KOWLOON' },
      phone: '+852 2769 3768',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 22:00', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 22:00', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 22:00', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 22:00' },
      brands: ['SNIDEL', 'FRAY I.D', 'LILY BROWN'], photo: 'usagi-k11.jpg', anchor: 'shop-1' },

    { no: 2,  area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'USAGI ONLINE STORE: HARBOUR CITY LCX', hk: 'USAGI ONLINE STORE: 海港城 LCX', cn: 'USAGI ONLINE STORE: 海港城 LCX', jp: 'USAGI ONLINE STORE: HARBOUR CITY LCX' },
      location: { en: 'SHOP 9, LEVEL 3, LCX, Ocean Terminal, Harbour City, Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀海港城海運大廈 LCX 3 樓 9 號舖', cn: '九龙尖沙咀海港城海运大厦 LCX 3 楼 9 号铺', jp: 'SHOP 9, LEVEL 3, LCX, OCEAN TERMINAL, HARBOUR CITY, TSIM SHA TSUI, KOWLOON' },
      mall: { en: 'Harbour City LCX', hk: '海港城 LCX', cn: '海港城 LCX', jp: 'HARBOUR CITY LCX' },
      district: { en: 'Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀', cn: '九龙尖沙咀', jp: 'TSIM SHA TSUI, KOWLOON' },
      phone: '+852 9199 5018',
      hours: { en: 'SUN-THU: 10:00 - 22:00 / FRI-SAT & PUBLIC HOLIDAY: 10:00 - 22:00', hk: '日-四: 10:00 - 22:00 / 五-六及公眾假期: 10:00 - 22:00', cn: '日-四: 10:00 - 22:00 / 五-六及公眾假期: 10:00 - 22:00', jp: 'SUN-THU: 10:00 - 22:00 / FRI-SAT & PUBLIC HOLIDAY: 10:00 - 22:00' },
      brands: ['LILY BROWN', 'gelato pique', 'Maison Cielune'], photo: 'usagi-lcx.jpg', anchor: 'shop-2' },

    { no: 3,  area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'USAGI ONLINE STORE: FESTIVAL WALK', hk: 'USAGI ONLINE STORE: 又一城', cn: 'USAGI ONLINE STORE: 又一城', jp: 'USAGI ONLINE STORE: FESTIVAL WALK' },
      location: { en: 'UNIT UG-15, LEVEL UG, Festival Walk, 80 Tat Chee Avenue, Kowloon Tong, Kowloon', hk: '九龍九龍塘達之路 80 號又一城 UG 層 UG-15 號舖', cn: '九龙九龙塘达之路 80 号又一城 UG 层 UG-15 号铺', jp: 'UNIT UG-15, LEVEL UG, FESTIVAL WALK, 80 TAT CHEE AVENUE, KOWLOON TONG, KOWLOON' },
      mall: { en: 'Festival Walk', hk: '又一城', cn: '又一城', jp: 'FESTIVAL WALK' },
      district: { en: 'Kowloon Tong, Kowloon', hk: '九龍九龍塘', cn: '九龙九龙塘', jp: 'KOWLOON TONG, KOWLOON' },
      phone: '+852 6127 5952',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:00', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:00', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:00', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:00' },
      brands: ['SNIDEL HOME', 'gelato pique'], photo: 'usagi-fw.jpg', anchor: 'shop-3' },

    { no: 4,  area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'USAGI ONLINE STORE: THE WAI', hk: 'USAGI ONLINE STORE: 圍方', cn: 'USAGI ONLINE STORE: 围方', jp: 'USAGI ONLINE STORE: THE WAI' },
      location: { en: 'SHOP 230-231, 2/F, The Wai, 18 Che Kung Miu Road, Tai Wai, New Territories', hk: '新界大圍車公廟路 18 號圍方 2 樓 230-231 號舖', cn: '新界大围车公庙路 18 号围方 2 楼 230-231 号铺', jp: 'SHOP 230-231, 2/F, THE WAI, 18 CHE KUNG MIU ROAD, TAI WAI, NEW TERRITORIES' },
      mall: { en: 'The Wai', hk: '圍方', cn: '围方', jp: 'THE WAI' },
      district: { en: 'Tai Wai, New Territories', hk: '新界大圍', cn: '新界大围', jp: 'TAI WAI, NEW TERRITORIES' },
      phone: '+852 2833 6862',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30' },
      brands: ['SNIDEL', 'FRAY I.D', 'LILY BROWN', 'gelato pique', 'Maison Cielune'], photo: 'usagi-wai.jpg', anchor: 'shop-4' },

    { no: 5,  area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'NIJI SELECT: HYSAN PLACE', hk: 'NIJI SELECT: 希慎廣場', cn: 'NIJI SELECT: 希慎广场', jp: 'NIJI SELECT: HYSAN PLACE' },
      location: { en: 'SHOP 703-704, 7/F, Hyson Place, 500 Hennessy Road, Causeway Bay, Hong Kong', hk: '香港銅鑼灣軒尼詩道 500 號希慎廣場 7 樓 703 & 704 號舖', cn: '香港铜锣湾轩尼诗道 500 号希慎广场 7 楼 703 & 704 号铺', jp: 'SHOP 703-704, 7/F, HYSAN PLACE, 500 HENNESSY ROAD, CAUSEWAY BAY, HONG KONG' },
      mall: { en: 'Hyson Place', hk: '希慎廣場', cn: '希慎广场', jp: 'HYSAN PLACE' },
      district: { en: 'Causeway Bay, Hong Kong', hk: '香港銅鑼灣', cn: '香港铜锣湾', jp: 'CAUSEWAY BAY, HONG KONG' },
      phone: '+852 2180 0830',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:00', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:00', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:00', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:00' },
      brands: ['gelato pique', 'Maison Cielune'], photo: 'niji-hysan.jpg', anchor: 'shop-5' },

    { no: 6,  area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'NIJI SELECT: THE ONE', hk: 'NIJI SELECT: The ONE', cn: 'NIJI SELECT: The ONE', jp: 'NIJI SELECT: THE ONE' },
      location: { en: 'SHOPS UG101-108 & UG117-126, Upper Ground 1, The One, 100 Nathan Road, Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀彌敦道 100 號 The ONE, UG1 樓 UG101-UG108 及 UG117-UG126 號舖', cn: '九龙尖沙咀弥敦道 100 号 The One, UG1 楼 UG101-UG108 及 UG117-UG126 号铺', jp: 'SHOPS UG101-108 & UG117-126, UPPER GROUND 1, THE ONE, 100 NATHAN ROAD, TSIM SHA TSUI, KOWLOON' },
      mall: { en: 'The One', hk: 'The ONE', cn: 'The One', jp: 'THE ONE' },
      district: { en: 'Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀', cn: '九龙尖沙咀', jp: 'TSIM SHA TSUI, KOWLOON' },
      phone: '+852 5931 2037',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30' },
      brands: ['SNIDEL', 'SNIDEL HOME', 'LILY BROWN', 'gelato pique', 'FRAY I.D', 'Maison Cielune', 'CELFORD', 'KanaLili', 'PAIN OR PLEASURE', 'NOT YOUR ROSE', 'Rose Frantz', 'Lip Service', 'ROJITA', 'REFLEM', 'TRAVAS TOKYO', 'DimMoire', 'AMAVEL', 'axesfemme', 'Happy Yarn'], photo: 'niji-theone.jpg', anchor: 'shop-6' },

    { no: 7,  area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'NIJI SELECT: AIRSIDE', hk: 'NIJI SELECT: AIRSIDE', cn: 'NIJI SELECT: AIRSIDE', jp: 'NIJI SELECT: AIRSIDE' },
      location: { en: 'SHOP L306 & L307, 3/F, AIRSIDE, 2 Concorde Road, Kai Tak, Kowloon City, Kowloon', hk: '九龍九龍城啟德協調道 2 號 AIRSIDE 3 樓 L306 & L307 號舖', cn: '九龙九龙城启德协调道 2 号 AIRSIDE 3 楼 L306 & L307 号铺', jp: 'SHOP L306 & L307, 3/F, AIRSIDE, 2 CONCORDE ROAD, KAI TAK, KOWLOON CITY, KOWLOON' },
      mall: { en: 'AIRSIDE', hk: 'AIRSIDE', cn: 'AIRSIDE', jp: 'AIRSIDE' },
      district: { en: 'Kai Tak, Kowloon City, Kowloon', hk: '九龍九龍城啟德', cn: '九龙九龙城启德', jp: 'KAI TAK, KOWLOON CITY, KOWLOON' },
      phone: '+852 2111 1096',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:00', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:00', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:00', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:00' },
      brands: ['SNIDEL', 'LILY BROWN', 'gelato pique', 'FRAY I.D', 'Maison Cielune', 'CELFORD'], photo: 'niji-select-airside.jpg', anchor: 'shop-7' },

    { no: 8,  area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'SNIDEL: HYSAN PLACE', hk: 'SNIDEL: 希慎廣場', cn: 'SNIDEL: 希慎广场', jp: 'SNIDEL: HYSAN PLACE' },
      location: { en: 'SHOP 207-208, 2/F, Hyson Place, 500 Hennessy Road, Causeway Bay, Hong Kong', hk: '香港銅鑼灣軒尼詩道 500 號希慎廣場 2 樓 207-208 號舖', cn: '香港铜锣湾轩尼诗道 500 号希慎广场 2 楼 207-208 号铺', jp: 'SHOP 207-208, 2/F, HYSAN PLACE, 500 HENNESSY ROAD, CAUSEWAY BAY, HONG KONG' },
      mall: { en: 'Hyson Place', hk: '希慎廣場', cn: '希慎广场', jp: 'HYSAN PLACE' },
      district: { en: 'Causeway Bay, Hong Kong', hk: '香港銅鑼灣', cn: '香港铜锣湾', jp: 'CAUSEWAY BAY, HONG KONG' },
      phone: '+852 3695 0310',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 22:00', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 22:00', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 22:00', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 22:00' },
      brands: ['SNIDEL', 'SNIDEL HOME'], photo: 'snidel-hysan.jpg', anchor: 'shop-8' },

    { no: 9,  area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'SNIDEL: CITYPLAZA TAI KOO', hk: 'SNIDEL: 太古城中心', cn: 'SNIDEL: 太古城中心', jp: 'SNIDEL: CITYPLAZA TAI KOO' },
      location: { en: 'SHOP 263, 2/F, Cityplaza, 18 Tai Koo Shan Road, Tai Koo, Hong Kong', hk: '香港太古太古城道 18 號太古城中心 2 樓 263 號舖', cn: '香港太古太古城道 18 号太古城中心 2 楼 263 号铺', jp: 'SHOP 263, 2/F, CITYPLAZA, 18 TAI KOO SHAN ROAD, TAI KOO, HONG KONG' },
      mall: { en: 'Cityplaza Tai Koo', hk: '太古城中心', cn: '太古城中心', jp: 'CITYPLAZA' },
      district: { en: 'Tai Koo, Hong Kong', hk: '香港太古', cn: '香港太古', jp: 'TAI KOO, HONG KONG' },
      phone: '+852 9682 9605',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30' },
      brands: ['SNIDEL', 'SNIDEL HOME'], photo: 'snidel-cp.jpg', anchor: 'shop-9' },

    { no: 10, area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'SNIDEL: HARBOUR CITY LCX', hk: 'SNIDEL: 海港城 LCX', cn: 'SNIDEL: 海港城 LCX', jp: 'SNIDEL: HARBOUR CITY LCX' },
      location: { en: 'SHOP 12, LEVEL 3, LCX, Ocean Terminal, Harbour City, Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀海港城海運大廈 LCX 3 樓 12 號舖', cn: '九龙尖沙咀海港城海运大厦 LCX 3 楼 12 号铺', jp: 'SHOP 12, LEVEL 3, LCX, OCEAN TERMINAL, HARBOUR CITY, TSIM SHA TSUI, KOWLOON' },
      mall: { en: 'Harbour City LCX', hk: '海港城 LCX', cn: '海港城 LCX', jp: 'HARBOUR CITY LCX' },
      district: { en: 'Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀', cn: '九龙尖沙咀', jp: 'TSIM SHA TSUI, KOWLOON' },
      phone: '+852 2730 0281',
      hours: { en: 'SUN-THU: 10:00 - 22:00 / FRI-SAT & PUBLIC HOLIDAY: 10:00 - 22:00', hk: '日-四: 10:00 - 22:00 / 五-六及公眾假期: 10:00 - 22:00', cn: '日-四: 10:00 - 22:00 / 五-六及公眾假期: 10:00 - 22:00', jp: 'SUN-THU: 10:00 - 22:00 / FRI-SAT & PUBLIC HOLIDAY: 10:00 - 22:00' },
      brands: ['SNIDEL', 'SNIDEL HOME'], photo: 'snidel-lcx.jpg', anchor: 'shop-10' },

    { no: 11, area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'SNIDEL: MIRA PLACE 1', hk: 'SNIDEL: 美麗華廣場一期', cn: 'SNIDEL: 美丽华广场一期', jp: 'SNIDEL: MIRA PLACE 1' },
      location: { en: 'SHOP G20 & G21, G/F, Mira Place 1, 132 Nathan Road, Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀彌敦道 132 號美麗華廣場一期 G 樓 G20,G21 號舖', cn: '九龙尖沙咀弥敦道 132 号美丽华广场一期 G 楼 G20,G21 号铺', jp: 'SHOP G20 & G21, G/F, MIRA PLACE 1, 132 NATHAN ROAD, TSIM SHA TSUI, KOWLOON' },
      mall: { en: 'Mira Place 1', hk: '美麗華廣場一期', cn: '美丽华广场一期', jp: 'MIRA PLACE 1' },
      district: { en: 'Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀', cn: '九龙尖沙咀', jp: 'TSIM SHA TSUI, KOWLOON' },
      phone: '+852 2317 8808',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 22:00', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 22:00', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 22:00', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 22:00' },
      brands: ['SNIDEL', 'gelato pique'], photo: 'snidel-mira.jpg', anchor: 'shop-11' },

    { no: 12, area: 'overseas', region: { en: 'Macao', hk: '澳門', cn: '澳门', jp: 'マカオ' },
      shop: { en: 'SNIDEL: THE VENETIAN', hk: 'SNIDEL: 威尼斯人', cn: 'SNIDEL: 威尼斯人', jp: 'SNIDEL: THE VENETIAN' },
      location: { en: 'SHOP 881A, Grand Canal Street, The Venetian Macao, Taipa, Macao', hk: '澳門威尼斯人® 度假村酒店大運河購物中心大運河街 881A 號舖', cn: '澳门威尼斯人®度假村酒店大运河购物中心大运河街 881A 号铺', jp: 'SHOP 881A, GRAND CANAL STREET, THE VENETIAN MACAO, TAIPA, MACAO' },
      mall: { en: 'The Venetian', hk: '威尼斯人', cn: '威尼斯人', jp: 'THE VENETIAN' },
      district: { en: 'Taipa, Macao', hk: '澳門路環', cn: '澳门路环', jp: 'TAIPA, MACAO' },
      phone: '+853 6677 5847',
      hours: { en: 'SUN-THU: 10:00 - 22:30 / FRI-SAT & PUBLIC HOLIDAY: 10:00 - 22:30', hk: '日-四: 10:00 - 22:30 / 五-六及公眾假期: 10:00 - 22:30', cn: '日-四: 10:00 - 22:30 / 五-六及公眾假期: 10:00 - 22:30', jp: 'SUN-THU: 10:00 - 22:30 / FRI-SAT & PUBLIC HOLIDAY: 10:00 - 22:30' },
      brands: ['SNIDEL', 'SNIDEL HOME'], photo: 'snidel-macao.jpg', anchor: 'shop-12' },

    { no: 13, area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'Maison Cielune: K11 ART MALL', hk: 'Maison Cielune: K11 藝術購物中心', cn: 'Maison Cielune: K11 艺术购物中心', jp: 'Maison Cielune: K11 ART MALL' },
      location: { en: 'SHOP 104C, 1/F, K11 ART MALL, 18 Hanoi Road, Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀河內道 18 號 K11 藝術購物中心 1 樓 104C 號舖', cn: '九龙尖沙咀河内道 18 号 K11 艺术购物中心 1 楼 104C 号铺', jp: 'SHOP 104C, 1/F, K11 ART MALL, 18 HANOI ROAD, TSIM SHA TSUI, KOWLOON' },
      mall: { en: 'K11 ART MALL', hk: 'K11 藝術購物中心', cn: 'K11 艺术购物中心', jp: 'K11 ART MALL' },
      district: { en: 'Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀', cn: '九龙尖沙咀', jp: 'TSIM SHA TSUI, KOWLOON' },
      phone: '+852 2882 2380',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30' },
      brands: ['Maison Cielune'], photo: 'mc-k11.jpg', anchor: 'shop-13' },

    { no: 14, area: 'overseas', region: { en: 'Shenzhen, China', hk: '中國深圳', cn: '中国深圳', jp: '深圳, 中国' },
      shop: { en: 'Maison Cielune: COCO PARK', hk: 'Maison Cielune: 星河 COCO Park', cn: 'Maison Cielune: 星河 COCO Park', jp: 'Maison Cielune: COCO PARK' },
      location: { en: 'SHOP L2-095, Phase 1, Galaxy COCO Park, Futian District, Shenzhen', hk: '深圳市福田區星河 COCO Park 一期 L2-095 號舖', cn: '深圳市福田区星河 COCO Park 一期 L2-095 号铺', jp: 'SHOP L2-095, PHASE 1, GALAXY COCO PARK, FUTIAN DISTRICT, SHENZHEN' },
      mall: { en: 'GALAXY COCO PARK', hk: '星河 COCO Park', cn: '星河 COCO Park', jp: 'COCO PARK' },
      district: { en: 'Shenzhen, China', hk: '中國深圳', cn: '中国深圳', jp: 'SHENZHEN, CHINA' },
      phone: '+852 2833 6862',
      hours: { en: '', hk: '', cn: '', jp: '' },
      brands: ['Maison Cielune'], photo: '', anchor: 'shop-14' },

    { no: 15, area: 'overseas', region: { en: 'Shenzhen, China', hk: '中國深圳', cn: '中国深圳', jp: '深圳, 中国' },
      shop: { en: 'Maison Cielune: UPPERHILLS', hk: 'Maison Cielune: 深業上城', cn: 'Maison Cielune: 深业上城', jp: 'Maison Cielune: UPPERHILLS' },
      location: { en: 'SHOP T3033, L3, Phase 1 (South Area) UpperHills, 5001 Huanggang Road, Futian District, Shenzhen', hk: '深圳市福田區皇崗路 5001 號深業上城(南區)一期 L3 層小鎮 T3033 號舖', cn: '深圳市福田区皇岗路 5001 号深业上城(南区)一期 L3 层小镇 T3033 号铺', jp: 'SHOP T3033, L3, PHASE 1 (SOUTH AREA) UPPERHILLS, 5001 HUANGGANG ROAD, FUTIAN DISTRICT, SHENZHEN' },
      mall: { en: 'Shum Yip UpperHills', hk: '深業上城', cn: '深业上城', jp: 'UPPERHILLS' },
      district: { en: 'Shenzhen, China', hk: '中國深圳', cn: '中国深圳', jp: 'SHENZHEN, CHINA' },
      phone: '+852 2833 6862',
      hours: { en: '', hk: '', cn: '', jp: '' },
      brands: ['Maison Cielune'], photo: '', anchor: 'shop-15' },

    { no: 16, area: 'overseas', region: { en: 'Shanghai, China', hk: '中國上海', cn: '中国上海', jp: '上海, 中国' },
      shop: { en: 'Maison Cielune: XINTIANDI STYLE II', hk: 'Maison Cielune: 新天地時尚 II', cn: 'Maison Cielune: 新天地时尚 II', jp: 'Maison Cielune: XINTIANDI STYLE II' },
      location: { en: 'SHOP B108, B1 Level, Xintiandi Style II, 245 Madang Road, Shanghai', hk: '上海市黃浦區馬當路 245 號新天地時尚 II 地下一層 B108 號舖', cn: '上海市黄浦区马当路 245 号新天地时尚 II 地下一层 B108 号铺', jp: 'SHOP B108, B1 LEVEL, XINTIANDI STYLE II, 245 MADANG ROAD, SHANGHAI' },
      mall: { en: 'Xintiandi Style II', hk: '新天地時尚 II', cn: '新天地时尚 II', jp: 'XINTIANDI STYLE II' },
      district: { en: 'Shanghai, China', hk: '中國上海', cn: '中国上海', jp: 'SHANGHAI, CHINA' },
      phone: '+852 2833 6862',
      hours: { en: '', hk: '', cn: '', jp: '' },
      brands: ['Maison Cielune', 'ROJITA'], photo: '', anchor: 'shop-16' },

    { no: 17, area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'gelato pique: K11 ART MALL', hk: 'gelato pique: K11 藝術購物中心', cn: 'gelato pique: K11 艺术购物中心', jp: 'gelato pique: K11 ART MALL' },
      location: { en: 'SHOP 114, 1/F, K11 ART MALL, 18 Hanoi Road, Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀河內道 18 號 K11 藝術購物中心 1 樓 114 號舖', cn: '九龙尖沙咀河内道 18 号 K11 艺术购物中心 1 楼 114 号铺', jp: 'SHOP 114, 1/F, K11 ART MALL, 18 HANOI ROAD, TSIM SHA TSUI, KOWLOON' },
      mall: { en: 'K11 ART MALL', hk: 'K11 藝術購物中心', cn: 'K11 艺术购物中心', jp: 'K11 ART MALL' },
      district: { en: 'Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀', cn: '九龙尖沙咀', jp: 'TSIM SHA TSUI, KOWLOON' },
      phone: '+852 2391 9218',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 21:30', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 21:30' },
      brands: ['gelato pique'], photo: 'pique-k11.jpg', anchor: 'shop-17' },

    { no: 18, area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'LILY BROWN: MIRA PLACE 1', hk: 'LILY BROWN: 美麗華廣場一期', cn: 'LILY BROWN: 美丽华广场一期', jp: 'LILY BROWN: MIRA PLACE 1' },
      location: { en: 'SHOP G20 & G21, G/F, Mira Place 1, 132 Nathan Road, Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀彌敦道 132 號美麗華廣場一期 G 樓 G20,G21 號舖', cn: '九龙尖沙咀弥敦道 132 号美丽华广场一期 G 楼 G20,G21 号铺', jp: 'SHOP G20 & G21, G/F, MIRA PLACE 1, 132 NATHAN ROAD, TSIM SHA TSUI, KOWLOON' },
      mall: { en: 'Mira Place 1', hk: '美麗華廣場一期', cn: '美丽华广场一期', jp: 'MIRA PLACE 1' },
      district: { en: 'Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀', cn: '九龙尖沙咀', jp: 'TSIM SHA TSUI, KOWLOON' },
      phone: '+852 2317 8808',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 22:00', hk: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 22:00', cn: '日-四: 11:30 - 21:00 / 五-六及公眾假期: 11:30 - 22:00', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 22:00' },
      brands: ['LILY BROWN'], photo: 'lily-brown-mira.jpg', anchor: 'shop-18' },

    { no: 19, area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'gelato pique cafe: AIRSIDE', hk: 'gelato pique cafe: AIRSIDE', cn: 'gelato pique cafe: AIRSIDE', jp: 'gelato pique cafe: AIRSIDE' },
      location: { en: 'SHOP L306 & L307, 3/F, AIRSIDE, 2 Concorde Road, Kai Tak, Kowloon City, Kowloon', hk: '九龍九龍城啟德協調道 2 號 AIRSIDE 3 樓 L306 & L307 號舖', cn: '九龙九龙城启德协调道 2 号 AIRSIDE 3 楼 L306 & L307 号铺', jp: 'SHOP L306 & L307, 3/F, AIRSIDE, 2 CONCORDE ROAD, KAI TAK, KOWLOON CITY, KOWLOON' },
      mall: { en: 'AIRSIDE', hk: 'AIRSIDE', cn: 'AIRSIDE', jp: 'AIRSIDE' },
      district: { en: 'Kai Tak, Kowloon City, Kowloon', hk: '九龍九龍城啟德', cn: '九龙九龙城启德', jp: 'KAI TAK, KOWLOON CITY, KOWLOON' },
      phone: '+852 3460 5606',
      hours: { en: 'SUN-THU: 12:00 - 21:00 (Last Order : 20:30) / FRI-SAT : 12:00 - 21:30 (Last Order : 21:00)', hk: '日-四: 12:00 - 21:00 (Last Order : 20:30) / 五-六 : 12:00 - 21:30 (Last Order : 21:00)', cn: '日-四: 12:00 - 21:00 (Last Order : 20:30) / 五-六 : 12:00 - 21:30 (Last Order : 21:00)', jp: 'SUN-THU: 12:00 - 21:00 (Last Order : 20:30) / FRI-SAT : 12:00 - 21:30 (Last Order : 21:00)' },
      brands: ['gelato pique cafe'], photo: 'cafe-airside.jpg', anchor: 'shop-19' },

    { no: 20, area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'gelato pique cafe: NEW TOWN PLAZA I', hk: 'gelato pique cafe: 新城市廣場一期', cn: 'gelato pique cafe: 新城市广场一期', jp: 'gelato pique cafe: NEW TOWN PLAZA I' },
      location: { en: 'SHOP 158, 1/F, New Town Plaza Phase I, 18-19 Sha Tin Centre Street, Sha Tin, New Territories', hk: '新界沙田沙田正街 18-19 號新城市廣場一期 1 樓 158 號舖', cn: '新界沙田沙田正街 18-19 号新城市广场一期 1 楼 158 号铺', jp: 'SHOP 158, 1/F, NEW TOWN PLAZA PHASE I, 18-19 SHA TIN CENTRE STREET, SHA TIN, NEW TERRITORIES' },
      mall: { en: 'New Town Plaza', hk: '新城市廣場', cn: '新城市广场', jp: 'NEW TOWN PLAZA' },
      district: { en: 'Sha Tin, New Territories', hk: '新界沙田', cn: '新界沙田', jp: 'SHA TIN, NEW TERRITORIES' },
      phone: '+852 2833 6862',
      hours: { en: 'MON-THU: 12:00 - 21:30 (Last Order : 21:00) / FRI-SUN & PUBLIC HOLIDAY: 11:30 - 22:00 (Last Order : 21:30)', hk: '一-四: 12:00 - 21:30 (Last Order : 21:00) / 五-日及公眾假期: 11:30 - 22:00 (Last Order : 21:30)', cn: '一-四: 12:00 - 21:30 (Last Order : 21:00) / 五-日及公眾假期: 11:30 - 22:00 (Last Order : 21:30)', jp: 'MON-THU: 12:00 - 21:30 (Last Order : 21:00) / FRI-SUN & PUBLIC HOLIDAY: 11:30 - 22:00 (Last Order : 21:30)' },
      brands: ['gelato pique cafe'], photo: 'cafe-ntp.jpg', anchor: 'shop-20' },

    { no: 21, area: 'hongkong', region: { en: 'Hong Kong', hk: '香港', cn: '香港', jp: '香港' },
      shop: { en: 'Cosme Kitchen: MIRA PLACE 1', hk: 'Cosme Kitchen: 美麗華廣場一期', cn: 'Cosme Kitchen: 美丽华广场一期', jp: 'Cosme Kitchen: MIRA PLACE 1' },
      location: { en: 'SHOP G20 & G21, G/F, Mira Place 1, 132 Nathan Road, Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀彌敦道 132 號美麗華廣場一期 G 樓 G20,G21 號舖', cn: '九龙尖沙咀弥敦道 132 号美丽华广场一期 G 楼 G20,G21 号铺', jp: 'SHOP G20 & G21, G/F, MIRA PLACE 1, 132 NATHAN ROAD, TSIM SHA TSUI, KOWLOON' },
      mall: { en: 'Mira Place 1', hk: '美麗華廣場一期', cn: '美丽华广场一期', jp: 'MIRA PLACE 1' },
      district: { en: 'Tsim Sha Tsui, Kowloon', hk: '九龍尖沙咀', cn: '九龙尖沙咀', jp: 'TSIM SHA TSUI, KOWLOON' },
      phone: '+852 2317 8808',
      hours: { en: 'SUN-THU: 11:30 - 21:00 / FRI-SAT & PUBLIC HOLIDAY: 11:30 - 22:00', hk: '日-四: 11:30 - 21:00 / 五-日及公眾假期: 11:30 - 22:00', cn: '日-四: 11:30 - 21:00 / 五-日及公眾假期: 11:30 - 22:00', jp: 'SUN-THU: 11:30 - 21:00 / FRI-SUN & PUBLIC HOLIDAY: 11:30 - 22:00' },
      brands: ['Cosme Kitchen'], photo: 'ck-mira.jpg', anchor: 'shop-21' }
  ];

  /* ─────────────────────────────────────────────────────────
     BRAND STORIES — VGate Company Profile (Jun 2026) EN.pptx
     (slides 8-17). Shown on the featured/businesses pages.
     ───────────────────────────────────────────────────────── */
  VGATE.brandStories = [
    { brand: 'SNIDEL', text: "Launched in April 2005 by MASH Style Lab. in Tokyo, the capital of Asian fashion. Based on the concept of \u201cStreet x Formal\u201d, it blends street culture with elegance to offer a unique style. With meticulous attention to details and a commitment to showcasing the beautiful feminine silhouette, it is a global brand dedicated to women around the world who love fashion." },
    { brand: 'gelato pique', text: 'A room wear brand launched in Autumn 2008. With the core concept of \u201cDesserts for Adults\u201d, the brand is dedicated to providing supreme comfort and touch. gelato pique offers stylish room wear for men and women of all ages, tailored to each individual\u2019s lifestyle, transforming moments of relaxation at home into a unique experience.' },
    { brand: 'LILY BROWN', text: 'Crafted around the concept of \u201cVintage Feature Dress\u201d, the brand integrates the exquisite craftsmanship and original designs of vintage pieces with modern daily wear. Paying homage to fashion history, the brand features bold color combinations and eye-catching details, embodying both a free-spirited sensibility and a refined aesthetic.' },
    { brand: 'Maison Cielune', text: "A fashion brand inspired by the breathtaking beauty of the sky. The brand\u2019s vision embodies a soft, dreamy, and playful aesthetic that captures the essence of nature\u2019s most enchanting canvas. Sometimes girls want to feel girly, other times playful, or a little edgy. Maison Cielune\u2019s garments encourage you to embrace your multifaceted self, like the ever-changing sky." },
    { brand: 'KanaLili', text: 'Cr\u00e9er les beaut\u00e9s \u00b7 Create beauties. Founded in 2013 by Lilian Kan, a rising fashion designer in Hong Kong. Celebrating beauty, delicacy, art and fantasies through a contemporary and enchanting approach, KanaLili is a label that offers a wide range of whimsical clothing and accessories, from Pr\u00eat-\u00e0-Porter to couture, providing a magical wardrobe that suits customers\u2019 daily needs as well as memorable occasions.' },
    { brand: 'Cosme Kitchen', text: 'A leading Japanese curated boutique specializing in natural and organic beauty products, featuring internationally certified sustainable skincare products that prioritize eco-friendly, natural, and organic concepts. We also carefully select beauty products and health food from around the world to offer a comprehensive beauty solution.' },
    { brand: 'Celvoke', text: 'A beauty brand created by Mash Beauty Lab, with Ms. Yoko Tagami as Brand Director. Cell \uFF0B Voke (voice) \uFF1D Celvoke. Listening to the voice of your cells, Celvoke responds to your skin\u2019s desires, unleashing the exquisite radiance hidden deep within. The commitment to natural ingredients and contemporary aesthetics create a sense of transparency and lightness, bestowing your skin with captivating color and luminosity. A unique beauty that embodies serene confidence and a resilient grace.' },
    { brand: 'SNIDEL BEAUTY', text: 'Launched in the spring of 2021, this beauty brand originated from the fashion brand SNIDEL. Guided by the philosophy of \u201cClean Beauty \u2013 beauty that can transform your lifestyle\u201d, SNIDEL BEAUTY is committed to using natural ingredients and sustainable production to bring out each person\u2019s unique beauty. This is a new-era clean beauty brand dedicated to everyone who cherishes the future.' },
    { brand: 'to/one', text: '\u201cto/one\u201d combines two meanings: \u201ctone\u201d evokes \u201cbringing out the most beautiful shades in your complexion\u201d, while \u201cto one\u201d refers to \u201cletting your personality shine and revealing your unique colors\u201d. The brand is dedicated to offering carefully curated skincare and makeup products that allow your personal charm to shine.' },
    { brand: 'F ORGANICS', text: 'A brand that specializes in skincare products based on international organic certification standards. Its skincare line features four common ingredients \u2014 large-leaved thistle, Damask rose, pomegranate, and frankincense \u2014 and harnesses the synergistic effects of skincare and aromatherapy to help women achieve optimal balance.' },
    { brand: 'gelato pique cafe', text: 'A popular cafe created in collaboration with gelato pique, the renowned Japanese loungewear brand. In 2025, we partnered with gelato pique to open our first Hong Kong location at Kai Tak AIRSIDE. A second cafe was opened at Shatin New Town Plaza in 2026. Embodying the brand\u2019s core concept of \u201cdesserts for adults\u201d, the space features the brand\u2019s signature Pique Blue to create a soothing atmosphere, using carefully selected ingredients to craft authentic French cr\u00eapes, a variety of exquisite light bites, and limited-time menus.' },
    { brand: 'IP LICENSING', text: 'VGate Company Limited and KING Enterprises work closely together as brother companies to manage the IP licensing and related business operations for \u201cChibi Maruko-chan\u201d in Greater China. In Mainland China, Hong Kong, and Macau, we have successfully planned and executed a wide range of initiatives, including operating retail stores, launching pop-up stores, and leveraging the character IP to launch diverse promotional campaigns and large-scale exhibitions.' }
  ];

  /* ─────────────────────────────────────────────────────────
     CONTACT — PPT slide 26
     ───────────────────────────────────────────────────────── */
  VGATE.contacts = [
    { name: 'Nicholas Wang', title: 'CEO', email: 'nicholas@vgatehk.com', phones: ['+852 3568 9860', '+852 9880 7952'] },
    { name: 'Jonathan Chu', title: 'Assistant Business Development Manager', email: 'jon.cpz@vgatehk.com', phones: ['+852 3709 6783', '+852 9289 6427'] },
    { name: 'Tracy Chung', title: 'Marketing & Operation Executive', email: 'tracy.chn@vgatehk.com', phones: ['+852 3568 9865', '+852 6142 0235'] }
  ];

  /* ─────────────────────────────────────────────────────────
     Helper: resolve a localized field
     t({en,hk,cn,jp}, lang) -> string
     ───────────────────────────────────────────────────────── */
  VGATE.t = function (obj, lang) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en || '';
  };

  /* Derive the list of all brands present in any store
     (used for the shop filter chips). */
  VGATE.storeBrands = (function () {
    var set = {};
    VGATE.shops.forEach(function (s) { s.brands.forEach(function (b) { set[b] = true; }); });
    var out = Object.keys(set);
    // Stable, sensible order: featured first, then alphabetical
    var order = ['USAGI ONLINE STORE', 'NIJI SELECT', 'SNIDEL', 'SNIDEL HOME', 'gelato pique',
                 'LILY BROWN', 'Maison Cielune', 'gelato pique cafe', 'Cosme Kitchen'];
    var first = order.filter(function (b) { return set[b]; });
    var rest = out.filter(function (b) { return order.indexOf(b) === -1; }).sort();
    return first.concat(rest);
  })();

  window.VGATE = VGATE;
})();
