
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
    delay: 3000,
  },
  loop: true,
});

$(function(){
  $("#phone").mask("+7 (999) 999-99-99");
});

const headerButton = document.querySelector('#header__button');
const modalWindow = document.querySelector('.modal-window-disabled');
const modalOverlay = document.querySelector('.modal-overlay-disabled');
const modalClose = document.querySelector('.modal__close');
const modalThanks = document.querySelector('.modal-thanks-disabled');
const modalSubmit = document.querySelector('.modal__submit');
const modalThanksClose = document.querySelector('.modal-thanks__button');

headerButton.addEventListener('click', function () {
  modalWindow.classList.add('modal-window-active');
  modalWindow.classList.remove('modal-window-disabled');
  modalOverlay.classList.add('modal-overlay-active');
  modalOverlay.classList.remove('modal-overlay-disabled');
});

modalClose.addEventListener('click', function () {
  modalWindow.classList.remove('modal-window-active');
  modalWindow.classList.add('modal-window-disabled');
  modalOverlay.classList.remove('modal-overlay-active');
  modalOverlay.classList.add('modal-overlay-disabled');
});

modalSubmit.addEventListener('click', function () {
  modalWindow.classList.remove('modal-window-active');
  modalWindow.classList.add('modal-window-disabled');
  modalThanks.classList.remove('modal-thanks-disabled');
  modalThanks.classList.add('modal-thanks-active');
});

modalThanksClose.addEventListener('click', function () {
  modalThanks.classList.remove('modal-thanks-active');
  modalThanks.classList.add('modal-thanks-disabled');
  modalOverlay.classList.remove('modal-overlay-active');
  modalOverlay.classList.add('modal-overlay-disabled');
});

$('#modalForm').submit(function(e){
  e.preventDefault();
  $.ajax({
    url: "mail.php",
    type: "POST",
    data: $('#modalForm').serialize(),
    success: function(response) {
      //обработка успешной отправки
    },
    error: function(response) {
      //обработка ошибок при отправке
   }
  });
});

const burger = document.querySelector('.mobile-nav__burger');
const navMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', function () {
  navMenu.classList.toggle('mobile-menu-active');
  burger.classList.toggle('mobile-nav__burger-close');
})