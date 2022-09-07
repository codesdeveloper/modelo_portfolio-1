var hamburger = document.querySelector(".hamburguer").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("show-menu");
});

window.setTimeout(() =>{
  document.querySelector('.preload').style.display = 'none';
  document.querySelector('.container').style.display = 'block';
}, 1500);