const navToggle = document.getElementById('navToggle');
const primaryMenu = document.getElementById('primaryMenu');
navToggle.addEventListener('click', () => {
  const open = primaryMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = Array.from(track.children);
let current = 0;

function update() {
  track.style.transform = `translateX(-${current * 100}%)`;
}

function next() {
  current = (current + 1) % slides.length;
  update();
}

function prev() {
  current = (current - 1 + slides.length) % slides.length;
  update();
}

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

let interval = setInterval(next, 6000);
track.addEventListener('mouseenter', () => clearInterval(interval));
track.addEventListener('mouseleave', () => interval = setInterval(next, 6000));
