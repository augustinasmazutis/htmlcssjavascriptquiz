// Variables
let headerElement = document.querySelector('header');

// Funtions
const createNavigation = () => {
  // -- creating navigation elements
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');
  const a4 = document.createElement('a');

  // -- adding links to menu items
  const isHomePage = location.pathname.includes('index');
  a1.href = isHomePage ? './index.html' : '../index.html';
  a2.href = isHomePage ? './pages/html.html' : './html.html';
  a3.href = isHomePage ? './pages/css.html' : './css.html';
  a4.href = isHomePage ? './pages/js.html' : './js.html';

  // -- adding text to menu items
  a1.innerHTML = `<i class="fa-solid fa-house"></i>`;
  a2.innerText = 'HTML quiz';
  a3.innerText = 'CSS quiz';
  a4.innerText = 'JavaScript quiz';

  // -- appending elements
  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
  li4.appendChild(a4);

  ul.append(li1, li2, li3, li4);
  nav.appendChild(ul);
  headerElement.appendChild(nav);

  // -- changing header background color based on page
  if (location.href.includes('index.html')) {
    headerElement.style.backgroundColor = 'var(--dark-color)';
  } else if (location.href.includes('html.html')) {
    headerElement.style.backgroundColor = 'var(--html-quiz-color)';
  } else if (location.href.includes('css.html')) {
    headerElement.style.backgroundColor = 'var(--css-quiz-color)';
  } else if (location.href.includes('js.html')) {
    headerElement.style.backgroundColor = 'var(--js-quiz-color)';
  }
};

// Events
document.addEventListener('DOMContentLoaded', createNavigation);
