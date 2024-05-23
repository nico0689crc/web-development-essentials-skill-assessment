[...document.querySelectorAll('.fqa__item-question-icon')].forEach((collapseButton) => {
  collapseButton.addEventListener('click', ({target}) => {
    const fqaItem = target.closest('.fqa__item');
    
    if(fqaItem) {
      fqaItem.classList.toggle('fqa__item--open')
    }
  });
});