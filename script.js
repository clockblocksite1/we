const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const closeMenu = document.querySelector('.close-menu');

burger.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
});

closeMenu.addEventListener('click', () => {
  burgerMenu.classList.remove('open');
});