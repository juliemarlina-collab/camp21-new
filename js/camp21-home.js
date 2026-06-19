// CAMP21 V14 Clean Homepage JS
// Purpose: mobile navigation only. No legacy data or Google Sheet wiring yet.

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.v11-main-nav');

menuBtn?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});
