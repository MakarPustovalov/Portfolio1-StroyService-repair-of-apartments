const menu = document.querySelector('.header__menu');

const offset = menu.offsetTop;

window.onscro = () => {
  if (window.pageYOffset >= offset) {
    menu.classList.add('header__menu_fixed');
  } else {
    menu.classList.remove('header__menu_fixed');
  }
};

console.log("menu", menu);