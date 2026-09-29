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


function updateCountdown() {
  const now = new Date();
  const title = document.getElementById('cd-title');
  const boxes = document.getElementById('cd-boxes');

  if (now.getMonth() === 9 && now.getDate() === 1) {
    title.textContent = "Bugun — Ustozlar va murabbiylar kuni! 🎉";
    boxes.style.display = 'none';
    return;
  }
  boxes.style.display = 'flex';

  let target = new Date(now.getFullYear(), 9, 1);
  if (now > target) target = new Date(now.getFullYear() + 1, 9, 1);

  const diff = target - now;
  document.getElementById('cd-days').textContent = Math.floor(diff / 86400000);
  document.getElementById('cd-hours').textContent = Math.floor(diff / 3600000) % 24;
  document.getElementById('cd-mins').textContent = Math.floor(diff / 60000) % 60;
  document.getElementById('cd-secs').textContent = Math.floor(diff / 1000) % 60;
}

updateCountdown();
setInterval(updateCountdown, 1000);
