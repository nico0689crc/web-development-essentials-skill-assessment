[...document.querySelectorAll('.fqa__item-question-icon')].forEach((collapseButton) => 
  collapseButton.addEventListener('click', ({target}) => 
    target.closest('.fqa__item') && 
      target.closest('.fqa__item').classList.toggle('fqa__item--open')
));