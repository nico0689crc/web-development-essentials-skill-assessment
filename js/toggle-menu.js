const menuCloseButton = document.querySelector('.navbar__toggle-menu-button-close');
const menuOpenButton = document.querySelector('.navbar__toggle-menu-button-open');
const searchInputOpenButton = document.querySelector('.navbar__toggle-search-input-button');
const searchInputCloseButton = document.querySelector('.navbar__close-search-input-button');

menuCloseButton.addEventListener('click', () => {
  const navbarItemsContainer = document.querySelector('.navbar__items-container');

  navbarItemsContainer.classList.remove('navbar__items-container--open');
});

menuOpenButton.addEventListener('click', () => {
  const navbarItemsContainer = document.querySelector('.navbar__items-container');

  navbarItemsContainer.classList.add('navbar__items-container--open');
});

searchInputOpenButton.addEventListener('click', () => {
  const navbarInputSearch = document.querySelector('.navbar__input-search');

  navbarInputSearch.classList.add('navbar__input-search--open');
});

searchInputCloseButton.addEventListener('click', () => {
  const navbarInputSearch = document.querySelector('.navbar__input-search');

  navbarInputSearch.classList.remove('navbar__input-search--open');
});
