const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
let current = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => goToSlide(current + 1));
document.querySelector('.prev').addEventListener('click', () => goToSlide(current - 1));


setInterval(() => goToSlide(current + 1), 5000);
