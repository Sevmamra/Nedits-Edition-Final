// AOS Init
AOS.init();

// About section typewriter
document.addEventListener('DOMContentLoaded', function(){
  const about = document.getElementById('about-text');
  const full = about.textContent;
  about.textContent = '';
  let i = 0;
  function type() {
    if(i < full.length) {
      about.textContent += full.charAt(i++);
      setTimeout(type, 25);
    }
  }
  type();
});

// Hero slideshow random + overlay
(function(){
  const hero = document.querySelector('.hero');
  const imgs = [
    'images/hero-bg1.jpg', 'images/hero-bg2.jpg',
    'images/hero-bg3.jpg', 'images/hero-bg4.jpg',
    'images/hero-bg5.jpg', 'images/hero-bg6.jpg'
  ];
  let pool = [...imgs];
  function nextBg(){
    if(pool.length===0) pool = [...imgs];
    const idx = Math.floor(Math.random()*pool.length);
    const sel = pool.splice(idx,1)[0];
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('${sel}')`;
  }
  nextBg();
  setInterval(nextBg, 3000);
})();

// ============== EXPLORE BUTTON FLOATING ANIMATION ==============

exploreBtn.style.animation = "float 2s infinite ease-in-out";

// Services cards animation + click light border
(function(){
  const cards = document.querySelectorAll('.service-card');
  // scroll reveal
  window.addEventListener('scroll', ()=> {
    cards.forEach(c => {
      if(c.getBoundingClientRect().top < window.innerHeight - 50){
        c.classList.add('show');
      }
    });
  });
  // click active border
  cards.forEach(c => {
    c.addEventListener('click', ()=> {
      cards.forEach(x => x.classList.remove('active'));
      c.classList.add('active');
    });
  });
})();

// Testimonials slide animation
(function(){
  const tests = document.querySelectorAll('.testimonial');
  window.addEventListener('scroll', ()=> {
    tests.forEach((t,i) => {
      if(t.getBoundingClientRect().top < window.innerHeight - 50 && !t.classList.contains('shown')){
        t.classList.add('shown');
        t.style.transform = (i%2===0)? 'translateX(-100px)' : 'translateX(100px)';
        setTimeout(()=>{
          t.style.transition = 'all 0.6s';
          t.style.transform = 'translateX(0)';
          t.style.opacity = '1';
        }, 50);
      }
    });
  });
})();
