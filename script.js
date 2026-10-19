document.documentElement.classList.add('js-ready');

const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('[data-header]');
const navLinks = document.querySelectorAll('.primary-nav a');

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
}

menuToggle?.addEventListener('click', () => {
  setMenu(!document.body.classList.contains('menu-open'));
});

navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 18);
}, { passive: true });

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
