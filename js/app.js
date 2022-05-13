/* #Hamburger
  ======================================================= */
const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header-hamburger');

headerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.toggle('show');
  body.classList.toggle('no-scroll');
});

/* #Header
  ======================================================= */

// Color Change
if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
}

/* #Numbers Animation
  ======================================================= */
gsap.registerPlugin(ScrollTrigger);

const numbers = document.querySelectorAll('.numbers .num');

ScrollTrigger.create({
  trigger: ".numbers",
  onEnter: () => {
    numbers.forEach((number) => {
      var zero = {
        val: 0
      };
      var num = number.innerHTML;

      gsap.to(zero, {
        val: num,
        duration: 3,
        scrollTrigger: numbers,
        onUpdate: function () {
          number.innerHTML = zero.val.toFixed(0);
        }
      });
    });
  }
});

/* #Product Slider
  ======================================================= */
if (document.querySelector('.process')) {
  swiper = new Swiper(".process .swiper", {
    loop: true,
    navigation: {
      nextEl: ".process .next",
      prevEl: ".process .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1
      },
      1024: {
        slidesPerView: 2.5
      }
    }
  });
}

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
});