export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support == true ? 'webp' : 'no-webp';
    document.querySelector('html').classList.add(className);
  });
}

export function toggleMobileMenu(e) {
  e.preventDefault();
  const menu = document.querySelector('.burger__menu');
  const btnInner = document.querySelector('.burger__btn-inner');
  const wrapper = document.querySelector('.wrapper');
  menu.classList.toggle('burger__menu--active');
  btnInner.classList.toggle('burger__btn-inner--active');
  wrapper.classList.toggle('locked');
}

export function tabs(btnClass, itemClass, activeModifire) {
  const btns = document.querySelectorAll(`.${btnClass}`);
  const items = document.querySelectorAll(`.${itemClass}`);
  console.log(btns);

  function showContent(i = 0) {
    btns[i].classList.add(`${btnClass}--${activeModifire}`);
    items[i].classList.add(`${itemClass}--${activeModifire}`);
  }
  function hideContent() {
    items.forEach((item) => {
      item.classList.remove(`${itemClass}--${activeModifire}`);
    });
    btns.forEach((btn) => {
      btn.classList.remove(`${btnClass}--${activeModifire}`);
    });
  }

  hideContent();
  showContent();

  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      hideContent();
      showContent(i);
    });
  });
}

export function accordion() {
  const groups = document.querySelectorAll('.accordion__group');
  groups.forEach((group) => {
    const items = group.children;
    for (const item of items) {
      const trigger = item.querySelector('.accordion__trigger');
      const num = item.querySelector('.accordion__trigger-num');
      if (item.querySelectorAll('.accordion__item').length > 0) {
        num.textContent = item.querySelectorAll('.accordion__item').length;
      } else {
        num.textContent = item.querySelectorAll('.accordion__link').length;
      }
      const content = item.querySelector('.accordion__content');
      trigger.addEventListener('click', (e) => {
        slideToggle(content);
        // e.preventDefault();
        // if (item.classList.contains('accordion__item--active')) {
        //   item.classList.remove('accordion__item--active');
        //   slideUp(content);
        //   trigger.ariaExpanded = false;
        //   // content.style.maxHeight = 0;
        // } else {
        //   for (const item of items) {
        //     item.classList.remove('accordion__item--active');
        //     item.querySelector('.accordion__trigger').ariaExpanded = false;
        //     slideUp(item.querySelector('.accordion__content'));
        //     // item.querySelector('.accordion__content').style.maxHeight = 0;
        //   }
        //   item.classList.add('accordion__item--active');
        //   slideDown(content);
        //   // content.style.maxHeight = content.scrollHeight + 'px';
        //   // if (item.parentNode.parentNode.classList.contains('accordion__content')) {
        //   //   slideDown(item.parentNode.parentNode);
        //   //   // item.parentNode.parentNode.style.maxHeight = item.parentNode.parentNode.scrollHeight + content.scrollHeight + 'px';
        //   // }
        //   trigger.ariaExpanded = true;
        // }
      });
    }
  });
}

function slideUp(target, duration = 5500) {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    //alert("!");
  }, duration);
}

function slideDown(target, duration = 5500) {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none') display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

const slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

export function calcPrice() {
  const priceValue = document.querySelector('.product__price-value');
  const COST_PER_KILO = 370;
  const filmThickness = parseFloat(
    document
      .querySelector('h1')
      .innerText.replace(/[^0-9,\,]/g, '')
      .replace(',', '.')
  );
  const filmWidth = +document.querySelector('.form__select[name="width"]').value;
  const filmLength = +document.querySelector('.form__select[name="length"]').value;
  parseFloat('Полиолефиновая плёнка POLYXFILMS (полурукав 12,5 мкм)'.replace(/[^0-9,\,]/g, '').replace(',', '.'));

  let price = filmWidth * filmThickness * filmLength * 0.000001 * COST_PER_KILO;
  if (document.querySelector('h1').innerText.includes('полурукав')) {
    price *= 2;
  }
  price *= filmThickness === 35 ? 0.93 : 0.92;
  priceValue.innerText = Math.round(price).toLocaleString() + ' руб';
  return [filmWidth, filmLength];
}

export function bindModal(trigger, modal, close) {
  trigger = document.querySelectorAll(trigger);
  modal = document.querySelector(modal);
  close = document.querySelectorAll(close);

  var openModalFunc = openModal(modal);
  const body = document.body;
  if (trigger != null) {
    trigger.forEach((trig) => {
      trig.addEventListener('click', openModalFunc, false);
    });
  }
  close.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      body.classList.remove('locked');
    });
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      body.classList.remove('locked');
    }
  });
}

const openModal = function (modal) {
  return function () {
    event.preventDefault();
    modal.style.display = 'flex';
    document.body.classList.add('locked');
  };
};

export function unbindModal(trigger, form) {
  trigger = document.querySelector(trigger);
  form = document.querySelector(form);

  const body = document.body;
  if (trigger != null) {
    const newBtn = trigger.cloneNode(true);
    form.removeChild(trigger);
    form.appendChild(newBtn);
  }
}
