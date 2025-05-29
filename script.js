/* script.js */
// Scroll suave
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Gráfico de skills (Chart.js)
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['JavaScript', 'React', 'Node.js', 'Python'],
    datasets: [{ label: 'Nível (%)', data: [90, 80, 75, 70], backgroundColor: 'rgba(78,84,200,0.6)' }]
  },
  options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
});