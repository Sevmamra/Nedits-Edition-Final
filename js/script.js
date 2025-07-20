// AOS Initialization
AOS.init({
  duration: 800,
  once: true
});

// ================================
// Navbar Scroll Fix
// ================================
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ================================
// Hero Background Slideshow (Random Non-repeating)
// ================================
const hero = document.querySelector('.hero');
const bgImages = [
  'images/hero-bg1.jpg',
  'images/hero-bg2.jpg',
  'images/hero-bg3.jpg',
  'images/hero-bg4.jpg',
  'images/hero-bg5.jpg',
  'images/hero-bg6.jpg',
  'images/hero-bg7.jpg',
  'images/hero-bg8.jpg',
  'images/hero-bg9.jpg',
  'images/hero-bg10.jpg'
];

let bgPool = [...bgImages];

function changeHeroBg() {
  if (bgPool.length === 0) {
    bgPool = [...bgImages];
  }

  const randomIndex = Math.floor(Math.random() * bgPool.length);
  const selected = bgPool.splice(randomIndex, 1)[0];
  
  hero.style.backgroundImage = `url('${selected}')`;
}

setInterval(changeHeroBg, 3000);

// ================================
// Typewriter Effect - About Us
// ================================
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

window.addEventListener('load', typeWriter);

// ================================
// Services Card Click Animation
// ================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove active from all
    serviceCards.forEach(c => {
      c.classList.remove('active', 'tilt');
    });
    // Add to clicked one
    card.classList.add('active', 'tilt');
  });
});

// ================================
// Testimonials Animation
// ================================
window.addEventListener('load', () => {
  const testimonials = document.querySelectorAll('.testimonial');

  testimonials.forEach((testi, index) => {
    setTimeout(() => {
      if (index % 2 === 0) {
        testi.classList.add('testimonial-left');
      } else {
        testi.classList.add('testimonial-right');
      }
    }, index * 400);
  });
});

// ================================
// Achievement Counter Animation
// ================================
const counters = document.querySelectorAll('.counter h3');

const runCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;

  const update = () => {
    const increment = Math.ceil(target / 100);
    if (count < target) {
      count += increment;
      counter.textContent = count > target ? target : count;
      setTimeout(update, 30);
    } else {
      counter.textContent = target;
    }
  };

  update();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target.querySelector('h3');
      runCounter(el);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
  observer.observe(counter);
});

// ================================
// Contact Form Google Forms Integration Example
// ================================
// NOTE: Replace YOUR_FORM_URL with your Google Form URL (submit link)

const contactForm = document.querySelector('.contact-form form');
if(contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    const googleFormURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
    
    const formData = new FormData();
    formData.append('entry.YOUR_NAME_ENTRY_ID', name);
    formData.append('entry.YOUR_EMAIL_ENTRY_ID', email);
    formData.append('entry.YOUR_MESSAGE_ENTRY_ID', message);

    fetch(googleFormURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    }).then(() => {
      alert("Message sent successfully!");
      contactForm.reset();
    }).catch(() => {
      alert("There was an error!");
    });
  });
}
