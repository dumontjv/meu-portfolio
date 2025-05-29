/* script.js */
// Smooth scroll
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll reveal módulos
const modules = document.querySelectorAll('.module');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('module--visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
modules.forEach(mod => observer.observe(mod));

// Chart.js skills chart
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['JavaScript', 'React', 'Node.js', 'Python'],
    datasets: [{ label: 'Nível (%)', data: [90, 80, 75, 70], backgroundColor: 'rgba(0,216,255,0.6)' }]
  },
  options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
});