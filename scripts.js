particlesJS.load('particles-container', 'particlesjs-config.json');
particlesJS.load('particles-membros', 'particlesjs-config.json');
particlesJS.load('particles-servicos', 'particlesjs-config.json');


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1366: {
      slidesPerView: 3
    },
    1920: {
      sliderPerView: 4
    },
    1048: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 1
    },
    280: {
      slidesPerView: 1
    }
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});

navbar = document.getElementById("desktop-navbar");
window.onscroll = function() {
  navbarFunction()
};

function navbarFunction() {
  if(document.body.scrollTop > window.innerHeight
    || document.documentElement.scrollTop > window.innerHeight) {
      navbar.style.background = "#123b77";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.1)";
    }
};




