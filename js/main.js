
var mySwiper1 = new Swiper('.swiper-container-s1', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow',
  },
  pagination: {
    el: '.slider-pagination',
    bulletClass: 'slider-bullet',
    bulletActiveClass: 'slider-bullet-active'
  },
});

const menu = document.querySelector('.header__menu');
const links = document.querySelector('.header__links');

const offset = menu.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset >= offset) {
    menu.classList.add('header__menu_fixed');
    links.classList.add('header__links_fixed');
  } else {
    menu.classList.remove('header__menu_fixed');
    links.classList.remove('header__links_fixed');
  }
};

var mySwiper2 = new Swiper('.swiper-container-s2', {
  effect: 'fade',
  speed: 2000,
  autoplay: {
    delay: 7500,
  },
  loop: true,
});