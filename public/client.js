import func, { eyes } from './func.js';

func();
eyes();

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    const randomColour = Math.round(Math.random() * 0xffffff);
    box.style.backgroundColor = `#${randomColour
      .toString(16)
      .padStart(6, '0')}`;
  });
});

boxes.forEach((box) => {
  box.addEventListener('dblclick', (e) => {
    e.stopPropagation();
  });
});
