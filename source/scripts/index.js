document.addEventListener('DOMContentLoaded', () => {
  const navMain = document.querySelector('.main-nav');
  const navMainList = document.querySelector('.main-nav__list');
  const navToggle = document.querySelector('.main-nav__toggle');

  if (navMainList) { // Проверяем, существует ли navMainList
    navMain.classList.remove('main-nav--nojs');

    const toggleMenu = () => {
      if (navMainList.classList.contains('main-nav__list--closed')) {
        navMainList.classList.remove('main-nav__list--closed');
        navMainList.classList.add('main-nav__list--opened');
        navToggle.classList.remove('main-nav__toggle--closed');
        navToggle.classList.add('main-nav__toggle--opened');
      } else {
        navMainList.classList.add('main-nav__list--closed');
        navMainList.classList.remove('main-nav__list--opened');
        navToggle.classList.add('main-nav__toggle--closed');
        navToggle.classList.remove('main-nav__toggle--opened');
      }
    };

    navToggle.addEventListener('click', toggleMenu);
    navToggle.addEventListener('touchstart', (event) => {
      event.preventDefault();
      toggleMenu();
    });
  }
});
