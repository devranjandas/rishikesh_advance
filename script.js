// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .course-card, .info-card, .packing-col').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Register form (demo — no backend)
const form = document.getElementById('registerForm');
const formSuccess = document.getElementById('formSuccess');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.style.display = 'none';
  formSuccess.style.display = 'block';
  window.scrollTo({ top: document.getElementById('register').offsetTop, behavior: 'smooth' });
});
