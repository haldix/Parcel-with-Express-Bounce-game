import bodyStuff, { eyes } from './func.js';

bodyStuff();
eyes();

export function colorBoxes() {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
      e.stopPropagation();
      const randomColour = Math.round(Math.random() * 0xffffff);
      box.style.backgroundColor = `#${randomColour
        .toString(16)
        .padStart(6, '0')}`;
    });
  });

  boxes.forEach((box) => {
    box.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      e.target.matches('.eyes, .box') ? box.remove() : null;
    });
  });
}
