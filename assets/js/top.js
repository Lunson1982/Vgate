/*==========================================================
  top.js — Vgate homepage
  Swiper banner carousel (loop, centered, autoplay).
  Subtitle rise-in animation on hero load.
==========================================================*/

(function () {
  'use strict';

  /* ---------- Hero subtitle rise-in (200ms after load) ---------- */
  function animateHero() {
    const subSpan = document.querySelector('#mainVisual .titleWrap h1 span.subTitle span');
    if (subSpan) {
      // reset then animate
      subSpan.style.transition = 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)';
      subSpan.style.transform = 'translateY(0)';
    }
    const btn = document.querySelector('#mainVisual .btnArea a.btn');
    if (btn) {
      btn.style.transition = 'transform 1.2s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 1s cubic-bezier(0, 0.7, 0, 1)';
      btn.style.transform = 'translateY(0)';
    }
  }
  window.addEventListener('load', function () {
    setTimeout(animateHero, 200);
  });

  /* ---------- Swiper banner carousel ---------- */
  function initBanner() {
    if (typeof Swiper === 'undefined') return;
    const el = document.querySelector('.swiper-banner');
    if (!el) return;

    new Swiper(el, {
      loop: true,
      loopAdditionalSlides: 7,
      speed: 1000,
      slidesPerView: 'auto',
      initialSlide: 0,
      spaceBetween: 18,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        540: { slidesPerView: 'auto' },
        768: { slidesPerView: 'auto', spaceBetween: 36 },
      },
    });
  }
  // Init once the partials are in (in case header load is async) — but
  // the banner lives in index.html directly, so document is ready now.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }
})();
