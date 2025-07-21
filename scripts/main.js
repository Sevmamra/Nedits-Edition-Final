// Wait for DOM ready
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Nav Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navMenu.classList.toggle("hidden");
  });

  // Close nav on link click (mobile)
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
        navMenu.classList.add("hidden");
      }
    });
  });

  // AOS Animation Init
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Slick Hero Slideshow
  $('.hero-slideshow').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    speed: 1000,
    cssEase: 'ease-in-out'
  });

  // Slick Testimonials Slider
  $('.testimonials-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    speed: 800,
    adaptiveHeight: true
  });

  // Slick Brand Logos Slider
  $('.brands-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
