export default function func() {
  console.log('Hi Funcs!');
}

export function eyes() {
  const boxes = document.querySelectorAll('.box');
  console.log('boxes', boxes);
  const eyesHtml = `<div class="eyes-cont"><div class="eye"></div><div class="eye"></div></div>`;

  boxes.forEach((box) => {
    box.insertAdjacentHTML('afterbegin', eyesHtml);
  });
}
