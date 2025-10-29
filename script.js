// Unique, self-contained JS for portfolio interactions
(function () {
  'use strict';

  /* ====== Helpers ====== */
  function q(sel, root = document) { return root.querySelector(sel); }
  function qa(sel, root = document) { return Array.from((root || document).querySelectorAll(sel)); }

  /* ====== Menu toggle for small screens ====== */
  (function menuToggle() {
    const btn = q('#menuToggle');
    const nav = q('#mainNav');
    if (!btn || !nav) return;
   btn.addEventListener('click', () => {
  const isOpen = nav.style.display === 'flex';
  nav.style.display = isOpen ? '' : 'flex';
  nav.style.flexDirection = isOpen ? '' : 'column';
  nav.style.gap = isOpen ? '' : '12px';
});

  })();

  /* ====== Simple reveal on scroll (IntersectionObserver) ====== */
  (function revealOnScroll() {
    const items = qa('.reveal');
    if (!items.length) return;
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(it => io.observe(it));
  })();

  /* ====== Carousel logic (keyboard + buttons + drag) ====== */
  (function projectsCarousel() {
    const carousel = q('#projectCarousel');
    const btnPrev = q('#prevProject');
    const btnNext = q('#nextProject');
    if (!carousel) return;

    // calculate scroll offset based on first card width
    function cardOffset() {
      const first = carousel.querySelector('.project-card');
      if (!first) return 360;
      const style = getComputedStyle(first);
      const gap = parseFloat(getComputedStyle(carousel).gap || 16);
      return Math.round(first.offsetWidth + gap);
    }

    function scrollByDir(dir) {
      carousel.scrollBy({ left: dir * cardOffset(), behavior: 'smooth' });
    }

    btnPrev && btnPrev.addEventListener('click', () => scrollByDir(-1));
    btnNext && btnNext.addEventListener('click', () => scrollByDir(1));

    // keyboard navigation while focused
    carousel.addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowRight') scrollByDir(1);
      if (ev.key === 'ArrowLeft') scrollByDir(-1);
    });

    // drag-to-scroll for touch/mouse
    (function drag() {
      let active = false, startX = 0, scrollStart = 0;
     carousel.addEventListener('pointerup', (e) => {
  active = false;
  carousel.releasePointerCapture && carousel.releasePointerCapture(e.pointerId);
  carousel.classList.remove('dragging');

  // allow clicks only if no significant drag
  const dx = Math.abs(e.clientX - startX);
  if (dx < 5) {
    const link = e.target.closest('a');
    if (link) link.click();
  }
});

      carousel.addEventListener('pointermove', (e) => {
        if (!active) return;
        const dx = e.clientX - startX;
        carousel.scrollLeft = scrollStart - dx;
      });
      ['pointerup','pointercancel','pointerleave'].forEach(ev => {
        carousel.addEventListener(ev, (e) => {
          if (!active) return;
          active = false;
          carousel.releasePointerCapture && carousel.releasePointerCapture(e.pointerId);
          carousel.classList.remove('dragging');
        });
      });
    })();

    // keep cardOffset responsive on resize
    window.addEventListener('resize', () => {/* no-op but available if needed */});
  })();

  /* ====== Modal / message box ====== */
  (function messageModal() {
    const modal = q('#messageModal');
    const btn = q('#downloadCv');
    const ok = q('#modalOk');
    const txt = q('#modalMessage');

    if (!modal || !btn || !ok || !txt) return;

    function open(msg = '') {
      txt.textContent = msg;
      modal.setAttribute('aria-hidden', 'false');
    }
    function close() {
      modal.setAttribute('aria-hidden', 'true');
    }

    btn.addEventListener('click', () => open('Resume download initiated (demo).'));
    ok.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  })();

  /* ====== Initialize progress bars from inline style var (--p) ====== */
  (function initProgressVars() {
    // nothing to do: CSS reads --p values directly. Provided in HTML via style attr on spans.
    // but ensure they exist or fallback:
    qa('.skill-item dd span').forEach(sp => {
      const val = getComputedStyle(sp).getPropertyValue('--p').trim();
      if (!val) sp.style.setProperty('--p', '50%');
    });
  })();

  /* ====== Accessibility: smooth scroll for internal links ====== */
  (function smoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const target = a.getAttribute('href');
        if (target === '#' || target === '') return;
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  })();

})();

