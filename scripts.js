// // Mobile nav toggle
// document.addEventListener('DOMContentLoaded', () => {
//   const mobileBtn = document.getElementById('mobileMenuButton');
//   const mobileMenu = document.getElementById('mobileMenu');
//   const yearSpan = document.getElementById('year');
//   if (yearSpan) yearSpan.textContent = new Date().getFullYear();

//   if (mobileBtn && mobileMenu) {
//     mobileBtn.addEventListener('click', () => {
//       const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
//       mobileBtn.setAttribute('aria-expanded', String(!expanded));
//       mobileMenu.classList.toggle('hidden');
//     });
//   }

//   const parallaxEl = document.querySelector('[data-parallax]');
//   const speed = parseFloat(parallaxEl?.getAttribute('data-parallax-speed') || '0.3');
//   const onScroll = () => {
//     if (!parallaxEl) return;
//     const y = window.scrollY * speed;
//     parallaxEl.style.transform = `translateY(${y}px)`;
//   };
//   window.addEventListener('scroll', onScroll, { passive: true });
//   onScroll();

//   // Lightbox modal
//   const lightboxModal = document.getElementById('lightboxModal');
//   const lightboxImage = document.getElementById('lightboxImage');
//   const lightboxClose = document.getElementById('lightboxClose');
//   const openLightbox = (src) => {
//     if (!lightboxModal || !lightboxImage) return;
//     lightboxImage.src = src;
//     lightboxModal.classList.remove('hidden');
//     document.body.style.overflow = 'hidden';
//   };
//   const closeLightbox = () => {
//     if (!lightboxModal || !lightboxImage) return;
//     lightboxModal.classList.add('hidden');
//     lightboxImage.src = '';
//     document.body.style.overflow = '';
//   };
//   document.addEventListener('click', (e) => {
//     const target = e.target;
//     if (target.closest('[data-lightbox-src]')) {
//       const btn = target.closest('[data-lightbox-src]');
//       const src = btn.getAttribute('data-lightbox-src');
//       if (src) openLightbox(src);
//     }
//   });
//   lightboxClose?.addEventListener('click', closeLightbox);
//   lightboxModal?.addEventListener('click', (e) => {
//     if (e.target === lightboxModal) closeLightbox();
//   });
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') closeLightbox();
//   });

//   // Testimonials carousel
//   const track = document.querySelector('[data-carousel-track]');
//   const dots = Array.from(document.querySelectorAll('[data-carousel-dot]'));
//   const prevBtn = document.getElementById('carouselPrev');
//   const nextBtn = document.getElementById('carouselNext');
//   let index = 0;
//   const slidesCount = track ? track.children.length : 0;

//   const updateCarousel = () => {
//     if (!track) return;
//     const offset = -index * 100;
//     track.style.transform = `translateX(${offset}%)`;
//     dots.forEach((dot, i) => dot.setAttribute('data-active', String(i === index)));
//   };
//   const goTo = (i) => {
//     index = (i + slidesCount) % slidesCount;
//     updateCarousel();
//   };
//   prevBtn?.addEventListener('click', () => goTo(index - 1));
//   nextBtn?.addEventListener('click', () => goTo(index + 1));
//   dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

//   let autoplay = setInterval(() => goTo(index + 1), 4000);
//   const carouselContainer = document.getElementById('carouselTrack');
//   carouselContainer?.addEventListener('mouseenter', () => clearInterval(autoplay));
//   carouselContainer?.addEventListener('mouseleave', () => (autoplay = setInterval(() => goTo(index + 1), 4000)));
//   updateCarousel();

//   // Pricing toggle
//   const pricingToggle = document.getElementById('pricingToggle');
//   const priceEls = Array.from(document.querySelectorAll('[data-price]'));
//   const setPrices = () => {
//     const yearly = pricingToggle?.checked;
//     priceEls.forEach((el) => {
//       const monthly = el.getAttribute('data-monthly');
//       const yearlyVal = el.getAttribute('data-yearly');
//       el.textContent = yearly ? (yearlyVal || '') : (monthly || '');
//     });
//     pricingToggle?.setAttribute('aria-checked', yearly ? 'true' : 'false');
//   };
//   pricingToggle?.addEventListener('change', setPrices);
//   setPrices();
// });


