import * as flsFunctions from './modules/functions.js';
import { Splide } from '@splidejs/splide';

flsFunctions.isWebp();

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', flsFunctions.toggleMobileMenu);

const topSliderImg = new Splide('.top__slider-img', {
  type: 'fade',
  height: '550px',
  rewind: true,
  speed: 400,
  // autoplay: true,
  pauseOnFocus: true,
  pauseOnHover: true,
});

const topSliderTitle = new Splide('.top__slider-title', {
  type: 'fade',
  rewind: true,
  speed: 400,
  // autoplay: true,
  autoHeight: true,
  arrows: false,
  pagination: false,
  pauseOnFocus: true,
  pauseOnHover: true,
});

topSliderTitle.sync(topSliderImg);
topSliderTitle.mount();
topSliderImg.mount();

flsFunctions.tabs('top__tabs-btn', 'top__tabs-item', 'active');

const category = document.querySelector('#category');
const calcCategories = document.querySelectorAll('#category ~ .form__category');
const filmType = document.querySelector('#film-type');
const calcFilmTypes = document.querySelectorAll('.form__film-type');

category.addEventListener('change', (e) => {
  category.classList.add('form__input--hide');
  calcCategories.forEach((item, i) => {
    item.classList.remove('form__category--active');
    if (i === e.target.selectedIndex - 1) {
      item.classList.add('form__category--active');
    }
  });
});

filmType.addEventListener('change', (e) => {
  category.classList.add('form__input--hide');
  calcFilmTypes.forEach((item, i) => {
    item.classList.remove('form__category--active');
    if (i === e.target.selectedIndex - 1) {
      item.classList.add('form__category--active');
    }
  });
});
