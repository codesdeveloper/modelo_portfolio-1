document.body.onload = function() {
  setTimeout(function() {
    var preLoad = document.querySelector(".sessao-pre-load");
    var container = document.querySelector(".container");
    container.style.display = "block";
    preLoad.style.display = "none";
  }, 2000);
}

var hamburger = document.querySelector(".hamburguer").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("show-menu");
});