// =============================================
// TECHO TRADERS — Main JS
// =============================================

// ── Navbar scroll effect ──
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const bars = hamburger.querySelectorAll('span');
    bars[0].style.transform = mobileMenu.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : '';
    bars[1].style.opacity = mobileMenu.classList.contains('open') ? '0' : '1';
    bars[2].style.transform = mobileMenu.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── Intersection Observer for fade-up ──
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => observer.observe(el));

// ── Animated counters ──
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const run = () => {
    start += step;
    if (start >= target) { el.textContent = target + (el.dataset.suffix || ''); return; }
    el.textContent = Math.floor(start) + (el.dataset.suffix || '');
    requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}

const counterEls = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target, parseInt(e.target.dataset.counter));
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
counterEls.forEach(el => counterObserver.observe(el));

// ── Geometric SVG animation in hero ──
const geoSvg = document.getElementById('heroGeo');
if (geoSvg) {
  let angle = 0;
  function rotateGeo() {
    angle += 0.2;
    geoSvg.style.transform = `translateY(-50%) rotate(${angle}deg)`;
    requestAnimationFrame(rotateGeo);
  }
  rotateGeo();
}
