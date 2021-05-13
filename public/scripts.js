particlesJS.load('particles-container', 'particlesjs-config.json');
particlesJS.load('particles-membros', 'particlesjs-config.json');
particlesJS.load('particles-servicos', 'particlesjs-config.json');


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});

mybutton = document.getElementById("bttbutton");

window.onscroll = function() {
  scrollFunction()
};


//Mostra o botão quando move 100px para baixo do topo
function scrollFunction() {
  if (document.body.scrollTop > 100 //para safari
    || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Quando clica no botão volta para o topo
function backToTop() {
  document.body.scrollTop = 0; //para safari
  document.documentElement.scrollTop = 0;
}

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
}




