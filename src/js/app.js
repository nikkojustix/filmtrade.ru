import * as flsFunctions from './modules/functions.js';
import { Splide } from '@splidejs/splide';
import fslightbox from 'fslightbox';

flsFunctions.isWebp();

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', flsFunctions.toggleMobileMenu);

let topSliderImg, topSliderTitle;

if (document.querySelector('.top__slider-img') != null && document.querySelector('.top__slider-title') != null) {
  topSliderImg = new Splide('.top__slider-img', {
    type: 'fade',
    height: '550px',
    rewind: true,
    speed: 400,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    breakpoints: {
      767: {
        destroy: true,
      },
    },
  });

  topSliderTitle = new Splide('.top__slider-title', {
    type: 'fade',
    rewind: true,
    speed: 400,
    width: '100%',
    autoplay: true,
    autoHeight: true,
    arrows: false,
    pagination: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    breakpoints: {
      767: {
        arrows: true,
      },
    },
  });

  topSliderTitle.sync(topSliderImg);
  topSliderTitle.mount();
  topSliderImg.mount();
}

if (document.querySelector('.top__tabs-btn') != null) {
  flsFunctions.tabs('top__tabs-btn', 'top__tabs-item', 'active');
}

const category = document.querySelector('#category');
const calcCategories = document.querySelectorAll('#category ~ .form__category');
const filmType = document.querySelector('#film-type');
const calcFilmTypes = document.querySelectorAll('.form__film-type');

if (category != null) {
  category.addEventListener('change', (e) => {
    category.classList.add('form__input--hide');
    calcCategories.forEach((item, i) => {
      item.classList.remove('form__category--active');
      if (i === e.target.selectedIndex - 1) {
        item.classList.add('form__category--active');
      }
    });
  });
}
if (filmType != null) {
  filmType.addEventListener('change', (e) => {
    category.classList.add('form__input--hide');
    calcFilmTypes.forEach((item, i) => {
      item.classList.remove('form__category--active');
      if (i === e.target.selectedIndex - 1) {
        item.classList.add('form__category--active');
      }
    });
  });
}

let equipSlider;
if (document.querySelector('.equip__slider') != null) {
  equipSlider = new Splide('.equip__slider', {
    type: 'fade',
    rewind: true,
    speed: 400,
    width: 780,
    autoplay: true,
    autoHeight: true,
    arrows: true,
    pagination: false,
    pauseOnFocus: true,
    pauseOnHover: true,
  });
  equipSlider.mount();
}

let productSlider;
let productThumbs;
if (document.querySelector('.product__main-image') != null && document.querySelector('.product__thumbs') != null) {
  productSlider = new Splide('.product__main-image', {
    fixedWidth: 380,
    fixedHeight: 300,
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
    breakpoints: {
      767: {
        fixedWidth: 280,
        fixedHeight: 150,
      },
    },
  });

  productThumbs = new Splide('.product__thumbs', {
    fixedWidth: 100,
    fixedHeight: 80,
    cover: true,
    gap: 10,
    perPage: 3,
    rewind: false,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      767: {
        fixedWidth: 70,
        fixedHeight: 50,
      },
    },
  });

  productSlider.sync(productThumbs);
  productSlider.mount();
  productThumbs.mount();
}

if (document.querySelector('.product__tabs-btn') != null) {
  flsFunctions.tabs('product__tabs-btn', 'product__tabs-item', 'active');
}

flsFunctions.accordion();

let filmOptions = [];

if (document.querySelector('.form--calc-film-price') != null) {
  const form = document.querySelector('.form--calc-film-price');
  filmOptions = flsFunctions.calcPrice();
  const orderModal = document.querySelector('.form--order-modal');
  const inputWidth = document.createElement('input');
  inputWidth.type = 'hidden';
  inputWidth.name = 'width';
  inputWidth.value = filmOptions[0];
  orderModal.insertBefore(inputWidth, orderModal.firstChild);
  const inputLength = document.createElement('input');
  inputLength.type = 'hidden';
  inputLength.name = 'length';
  inputLength.value = filmOptions[1];
  orderModal.insertBefore(inputLength, orderModal.firstChild);
  form.addEventListener('change', () => {
    filmOptions = flsFunctions.calcPrice();
    inputWidth.value = filmOptions[0];
    inputLength.value = filmOptions[1];
  });
}

flsFunctions.bindModal('.open-modal-callback', '.modal--callback', '.modal__close');

flsFunctions.bindModal('.open-modal-order', '.modal--order', '.modal__close');
