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
  console.log(groups);
  groups.forEach((group) => {
    const items = group.children;
    console.log(items);
  });
  // items.forEach((item) => {
  //   item.addEventListener('click', () => {
  //     const parent = item.parentNode;
  //     if (parent.classList.contains('accordion__item--active')) {
  //       parent.classList.remove('accordion__item--active');
  //     } else {
  //       document.querySelectorAll('.accordion__item').forEach((child) => child.classList.remove('accordion__item--active'));
  //       parent.classList.add('accordion__item--active');
  //     }
  //   });
  // });
}
