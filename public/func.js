export default function func() {
  const body = document.querySelector('body');
  body.addEventListener('dblclick', () => {
    body.classList.toggle('body-styles');
  });
}

export function eyes() {
  const boxes = document.querySelectorAll('.box');
  const eyesHtml = `<div class="eyes-cont"><div class="eye"></div><div class="eye"></div></div>`;

  boxes.forEach((box) => {
    box.insertAdjacentHTML('afterbegin', eyesHtml);
  });
}
