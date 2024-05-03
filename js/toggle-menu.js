const menuClosebutton = document.querySelector('.navbar__toggle-menu-button-close');
const menuOpenbutton = document.querySelector('.navbar__toggle-menu-button-open');

menuClosebutton.addEventListener('click', () => {
  const navbarItemsContainer = document.querySelector('.navbar__items-container');
  const backdrop = document.querySelector('.backdrop');

  navbarItemsContainer.classList.remove('navbar__items-container--open');
  backdrop.classList.remove('backdrop--open');
});

menuOpenbutton.addEventListener('click', () => {
  const navbarItemsContainer = document.querySelector('.navbar__items-container');
  const backdrop = document.querySelector('.backdrop');

  navbarItemsContainer.classList.add('navbar__items-container--open');
  backdrop.classList.add('backdrop--open');
});
