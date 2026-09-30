/* network.js — VGate Stores page: filter-aware chain list + brand-tag clicks */
window.addEventListener('DOMContentLoaded', function () {
  if (!window.VGATE || !VGATE.shops) return;

  var LANG = window.VGATE_LANG || 'en';
  var shops = VGATE.shops;
  var t = VGATE.t;
  var storeBrands = VGATE.storeBrands || [];

  var filterEl = document.getElementById('brand-filter');
  var chainListEl = document.getElementById('chain-list');
  var shopListEl = document.getElementById('shop-list');
  var noResultsEl = document.getElementById('no-results');

  if (!filterEl || !shopListEl) return;

  // ── 1. Build filter buttons ──
  storeBrands.forEach(function (brand) {
    var btn = document.createElement('button');
    btn.dataset.brand = brand;
    btn.textContent = brand;
    filterEl.appendChild(btn);
  });

  // ── 2. Build shop cards ──
  shops.forEach(function (shop) {
    var card = document.createElement('article');
    card.className = 'vg-shop';
    card.id = shop.anchor;
    card.dataset.brands = shop.brands.join(',');

    var hasPhoto = shop.photo && shop.photo.trim() !== '';
    if (!hasPhoto) card.classList.add('vg-shop--no-photo');

    var photoHtml = hasPhoto
      ? '<div class="vg-shop-photo"><img src="/assets/img/shops/' + shop.photo + '" alt="' + t(shop.shop, LANG) + '" loading="lazy"></div>'
      : '';

    var hoursRaw = t(shop.hours, LANG);
    var hoursHtml = hoursRaw ? '<p class="vg-shop-hours"><strong>BUSINESS HOURS</strong> ' + hoursRaw + '</p>' : '';

    var phoneDigits = shop.phone.replace(/\D/g, '');

    var brandsHtml = '<ul class="vg-shop-brands">' +
      shop.brands.map(function (b) {
        return '<li data-brand="' + b + '" role="button" tabindex="0" class="vg-brand-tag">' + b + '</li>';
      }).join('') +
      '</ul>';

    card.innerHTML =
      photoHtml +
      '<div class="vg-shop-body">' +
        '<p class="vg-shop-no">NO. ' + String(shop.no).padStart(2, '0') + '</p>' +
        '<h3 class="vg-shop-name">' + t(shop.shop, LANG) + '</h3>' +
        '<p class="vg-shop-loc"><strong>LOCATION</strong> ' + t(shop.location, LANG) + '</p>' +
        '<p class="vg-shop-phone"><strong>PHONE</strong> <a href="tel:' + phoneDigits + '">' + shop.phone + '</a></p>' +
        hoursHtml +
        brandsHtml +
      '</div>';

    shopListEl.appendChild(card);
  });

  // ── 3. Build chain list (data-driven) ──
  var chainMap = {};
  shops.forEach(function (shop) {
    var colonIdx = shop.shop.en.indexOf(':');
    var chain = colonIdx > -1 ? shop.shop.en.substring(0, colonIdx).trim() : shop.shop.en.trim();
    if (!chainMap[chain]) chainMap[chain] = [];
    chainMap[chain].push(shop);
  });

  var chainOrder = [
    'USAGI ONLINE STORE', 'NIJI SELECT', 'SNIDEL', 'Maison Cielune',
    'gelato pique', 'LILY BROWN', 'gelato pique cafe', 'Cosme Kitchen'
  ];

  if (chainListEl) {
    chainOrder.forEach(function (chain) {
      var shopsInChain = chainMap[chain];
      if (!shopsInChain || shopsInChain.length === 0) return;

      var chainDiv = document.createElement('div');
      chainDiv.className = 'vg-chain';
      chainDiv.dataset.chain = chain;

      var head = document.createElement('div');
      head.className = 'vg-chain-head';
      head.innerHTML =
        '<h3>' + chain + '</h3>' +
        '<span class="vg-chain-count"><span class="vg-chain-count-num">' + shopsInChain.length + '</span> SHOPS</span>';

      var locs = document.createElement('div');
      locs.className = 'vg-chain-locs';

      shopsInChain.forEach(function (shop) {
        var a = document.createElement('a');
        a.href = '#' + shop.anchor;
        a.dataset.target = shop.anchor;
        a.dataset.brands = shop.brands.join(',');
        var district = t(shop.district, LANG);
        var mall = t(shop.mall, LANG);
        a.innerHTML = '<span class="vg-loc-district">' + district + '</span><span class="vg-loc-mall">' + mall + '</span>';
        a.addEventListener('click', function (ev) {
          ev.preventDefault();
          var target = document.getElementById(shop.anchor);
          if (!target) return;
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          target.classList.remove('vg-shop--active');
          void target.offsetWidth;
          target.classList.add('vg-shop--active');
          clearTimeout(target._highlightTimer);
          target._highlightTimer = setTimeout(function () {
            target.classList.remove('vg-shop--active');
          }, 2000);
        });
        locs.appendChild(a);
      });

      chainDiv.appendChild(head);
      chainDiv.appendChild(locs);
      chainListEl.appendChild(chainDiv);
    });
  }

  // ── 4. Filtering logic ──
  var activeBrand = '';

  function applyFilter(brand) {
    activeBrand = brand;
    var visibleCount = 0;

    // Update filter button states
    filterEl.querySelectorAll('button').forEach(function (b) {
      b.classList.toggle('is-on', b.dataset.brand === brand);
    });

    // Update shop cards
    shopListEl.querySelectorAll('.vg-shop').forEach(function (card) {
      var brands = card.dataset.brands.split(',');
      var match = !brand || brands.indexOf(brand) > -1;
      card.classList.toggle('is-filtered-out', !match);
      if (match) visibleCount++;
    });

    // Update chain sections — show/hide + update counts
    chainListEl.querySelectorAll('.vg-chain').forEach(function (chainDiv) {
      var visibleInChain = 0;
      chainDiv.querySelectorAll('.vg-chain-locs a').forEach(function (a) {
        var brands = a.dataset.brands.split(',');
        var match = !brand || brands.indexOf(brand) > -1;
        a.style.display = match ? '' : 'none';
        if (match) visibleInChain++;
      });
      // Update count
      var countEl = chainDiv.querySelector('.vg-chain-count-num');
      if (countEl) countEl.textContent = brand ? visibleInChain : chainDiv.querySelectorAll('.vg-chain-locs a').length;
      // Hide entire chain if no visible shops
      chainDiv.style.display = (brand && visibleInChain === 0) ? 'none' : '';
    });

    // Show/hide no-results message
    if (noResultsEl) {
      noResultsEl.style.display = visibleCount === 0 ? '' : 'none';
    }
  }

  // ── 5. Event listeners ──

  // Filter buttons
  filterEl.addEventListener('click', function (e) {
    var btn = e.target.closest('.vg-filter button');
    if (!btn) return;
    applyFilter(btn.dataset.brand);
  });

  // Brand tags inside shop cards
  shopListEl.addEventListener('click', function (e) {
    var tag = e.target.closest('.vg-brand-tag');
    if (!tag) return;
    applyFilter(tag.dataset.brand);
    // Scroll to top of filter bar
    var topY = filterEl.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: topY, behavior: 'smooth' });
  });

  // Keyboard support for brand tags
  shopListEl.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var tag = e.target.closest('.vg-brand-tag');
    if (!tag) return;
    e.preventDefault();
    applyFilter(tag.dataset.brand);
    var topY = filterEl.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: topY, behavior: 'smooth' });
  });

  // ── 6. Init AOS ──
  if (window.AOS) AOS.init();
});
