particlesJS.load('particles-container', 'particlesjs-config.json');
particlesJS.load('particles-membros', 'particlesjs-config.json');
particlesJS.load('particles-servicos', 'particlesjs-config.json');

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






