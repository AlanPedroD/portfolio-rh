// Hamburger
const btn = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(l => {
  l.addEventListener('click', () => {
    btn.classList.remove('open');
    menu.classList.remove('open');
  });
});

// Nav scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// Skill bars
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.hab-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelector('.hab-grid') && barObserver.observe(document.querySelector('.hab-grid'));
