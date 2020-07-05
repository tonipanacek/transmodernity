// const foo = (() => Promise.resolve().then(() => console.log('Hello world')))();

const hamburger = document.querySelector('.nav-toggle');
const menu = document.querySelector('.main-nav');
hamburger.addEventListener('click', event => {
  menu.style.display = 'flex';
});

