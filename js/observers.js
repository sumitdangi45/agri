// Intersection observer for section reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));

// Initialize Lucide icons
lucide.createIcons();
