document.body.onload = function(){

  var preLoad = document.querySelector(".sessao-pre-load");
  var container = document.querySelector(".container");
    
  setTimeout(function(){
    
  container.style.display = "block";
  preLoad.style.display = "none";
  
  }, 5000);
    
  };


var hamburger = document.querySelector(".hamburguer").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("show-menu");
});

