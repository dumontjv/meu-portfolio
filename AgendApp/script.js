// Testimonials Slider
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) =>
    t.classList.toggle('active', i === index)
  );
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// Inicializa o slider
showTestimonial(0);

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
    answer.style.maxHeight = isOpen ? '0' : answer.scrollHeight + 'px';
  });
});