/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__toggle');
const mapFrame = document.querySelector('.contacts__frame');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--close');
navToggle.classList.remove('main-header__toggle--nojs');
navToggle.classList.add('main-header__toggle--close');
mapFrame.classList.remove('contacts__frame--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');
    navToggle.classList.add('main-header__toggle--open');
    navToggle.classList.remove('main-header__toggle--close');
  } else {
    navMain.classList.add('main-nav--close');
    navMain.classList.remove('main-nav--open');
    navToggle.classList.remove('main-header__toggle--open');
    navToggle.classList.add('main-header__toggle--close');
  }
});
