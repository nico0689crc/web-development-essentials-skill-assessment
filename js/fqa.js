[...document.querySelectorAll('.fqa__item-question-icon')].forEach((collapseButton) => 
  collapseButton.addEventListener('click', ({target}) => {
    document.querySelector('.fqa__item--open')?.classList.remove('fqa__item--open');
    target.closest('.fqa__item') && target.closest('.fqa__item').classList.toggle('fqa__item--open')
  })
);