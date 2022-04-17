
var hamburger = document.querySelector(".hamburguer");

var fun = function(){
document.querySelector(".container").classList.toggle("show-menu");
};

hamburger.addEventListener("click", fun);