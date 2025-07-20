// AOS Animation Init
AOS.init();

// Typewriter Effect (About Section)
window.addEventListener('load', () => {
  const aboutText = document.getElementById('about-text');
  const fullText = aboutText.textContent;
  aboutText.textContent = '';
  let idx = 0;

  function typeWriter() {
    if (idx < fullText.length) {
      aboutText.textContent += fullText.charAt(idx);
      idx++;
      setTimeout(typeWriter, 30);
    }
  }

  typeWriter();
});

// Hero Background Slideshow
const heroSection = document.querySelector('.hero');
const images = [
  'images/hero-bg1.jpg',
  'images/hero-bg2.jpg',
  'images/hero-bg3.jpg',
  'images/hero-bg4.jpg'
];
let currentIndex = 0;

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
}

setInterval(changeBackground, 3000);

// Achievements Counter Animation
const counters = document.querySelectorAll('.count');
let counterStarted = false;

function runCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-count');
    let count = 0;

    const increment = target / 100;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.textContent = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target;
      }
    };

    updateCount();
  });
}

// Check if counters are in viewport
function checkCounters() {
  const section = document.querySelector('.achievements');
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight && !counterStarted) {
    counterStarted = true;
    runCounters();
  }
}

window.addEventListener('scroll', checkCounters);
