import { colorBoxes } from './client.js';

export default function bodyStuff() {
  const body = document.querySelector('body');
  body.addEventListener('click', () => {
    const bgc = bodyColor();
    body.style.backgroundColor = `${bgc[0]}`;
    body.style.color = `${bgc[1]}`;
  });

  body.addEventListener('dblclick', (e) => {
    addBall();
    e.stopPropogation();
  });
}

function bodyColor() {
  const colors = [
    ['#8CE6E6', '#000000'],
    ['#FFA6CE', '#000000'],
    ['#AAFFA6', '#000000'],
    ['#260E66', '#ffffff'],
    ['#FCF7B1', '#000000'],
    ['#910011', '#ffffff'],
    ['#911B00', '#ffffff'],
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function addBall() {
  const ballCont = document.querySelector('.ball-cont');
  const ball = `<div class="box"></div>`;

  ballCont.insertAdjacentHTML('beforeend', ball);
  eyes();
  colorBoxes();
}

export function eyes() {
  const boxes = document.querySelectorAll('.box');
  const eyesHtml = `<div class="eyes-cont"><div class="eye"></div><div class="eye"></div></div>`;

  boxes.forEach((box) => {
    box.insertAdjacentHTML('afterbegin', eyesHtml);
  });
}

const instructionsBtn = document.getElementById('btn-instructions');
const instrText = document.querySelector('.instructions-text');
const closeBtn = document.getElementById('btn-close');

instructionsBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  instrText.className = 'show';
  this.className = 'hide';
  closeBtn.className = 'show';
});

closeBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  instrText.className = 'hide';
  this.className = 'hide';
  instructionsBtn.className = 'show';
});
