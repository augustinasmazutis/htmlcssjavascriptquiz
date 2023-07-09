// VARIABLES
const wrapperElement = document.querySelector('#wrapper');

// FUNTIONS
const addMainBackground = () => {
  if (location.href.includes('html.html')) {
    wrapperElement.style.backgroundColor = 'var(--html-quiz-color)';
  } else if (location.href.includes('css.html')) {
    wrapperElement.style.backgroundColor = 'var(--css-quiz-color)';
  } else if (location.href.includes('js.html')) {
    wrapperElement.style.backgroundColor = 'var(--js-quiz-color)';
  }
};

// EVENTS
document.addEventListener('DOMContentLoaded', addMainBackground);
