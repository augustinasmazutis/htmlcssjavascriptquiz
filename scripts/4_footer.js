// Variables
const footerElement = document.querySelector('footer');
const currentYearElement = document.querySelector('#current-year');

// Funtions
const addFooterBackground = () => {
  if (location.href.includes('index.html')) {
    footerElement.style.backgroundColor = 'var(--dark-color)';
  } else if (location.href.includes('html.html')) {
    footerElement.style.backgroundColor = 'var(--html-quiz-color)';
  } else if (location.href.includes('css.html')) {
    footerElement.style.backgroundColor = 'var(--css-quiz-color)';
  } else if (location.href.includes('js.html')) {
    footerElement.style.backgroundColor = 'var(--js-quiz-color)';
  }
};
const addDate = () =>
  (currentYearElement.innerText = `${new Date().getFullYear()}`);

// Events
document.addEventListener('DOMContentLoaded', () => {
  addFooterBackground();
  addDate();
});
