import func, { eyes } from './func.js';

func();
eyes();

const box = document.querySelector('.box');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  box.classList.toggle('colors');
});
