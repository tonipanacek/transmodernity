// const foo = (() => Promise.resolve().then(() => console.log('Hello world')))();

const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.main-nav');
const nav = document.querySelector('#nav');
let isOpen = false;

toggle.addEventListener('click', event => {
  if (!isOpen) {
    nav.classList.add('mobile');
    menu.classList.add('flex');
    toggle.firstElementChild.innerText = 'close';
    isOpen = true;
  } else {
    nav.classList.remove('mobile');
    menu.classList.remove('flex');
    toggle.firstElementChild.innerText = 'menu';
    isOpen = false;
  }
});

