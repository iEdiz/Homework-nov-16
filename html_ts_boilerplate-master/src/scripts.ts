const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button');
const button1: HTMLButtonElement = document.querySelector('.js-button-1');
const button2: HTMLButtonElement = document.querySelector('.js-button-2');
const button3: HTMLButtonElement = document.querySelector('.js-button-3');
const button4: HTMLButtonElement = document.querySelector('.js-button-4');
const button5: HTMLButtonElement = document.querySelector('.js-button-5');
const button6: HTMLButtonElement = document.querySelector('.js-button-6');
const button7: HTMLButtonElement = document.querySelector('.js-button-7');
const square1: HTMLDivElement = document.querySelector('#js-square1');
const square5: HTMLDivElement = document.querySelector('#js-square5');
const input: HTMLInputElement = document.querySelector('.footer__input');

button1.addEventListener('click', () => {
  square1.style.backgroundColor = '#E7D52D';
});

button2.addEventListener('click', () => {
  document.getElementById('js-header-1').innerHTML = 'Success';
});

button3.addEventListener('click', () => {
  const square3 = document.getElementById('js-square3');

  square3.style.visibility = 'hidden';
});

button4.addEventListener('click', () => {
  const square4 = document.getElementById('js-square4');

  if (square4.style.visibility !== 'hidden') {
    square4.style.visibility = 'hidden';
  } else {
    square4.style.visibility = 'visible';
  }
});

button5.addEventListener('click', () => {
  const colorsArr = ['#A5FFD6', '#FC6471', '#7D5BA6', '#18FF6D', '#23B5D3'];

  square5.style.backgroundColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
});

button6.addEventListener('click', () => {
  const square6 = document.getElementById('js-square6');
  let counter = 1;
  const square6Interval = setInterval(() => {
    square6.innerHTML = counter.toString();
    square6.style.fontSize = '56px';
    counter += 1;

    if (counter > 10) {
      clearInterval(square6Interval);
    }
  }, 3000);
});

button7.addEventListener('click', () => {
  const allSquares = document.getElementsByClassName('square');
  const background = document.getElementById('js-background');

  for (let i = 0; i < allSquares.length; i += 1) {
    const element = allSquares[i] as HTMLElement;
    element.style.backgroundColor = '#18D5E1';
  }
  background.style.backgroundColor = '#000000';
  const text = document.getElementById('footer__header');
  text.style.color = 'white';
});

square1.addEventListener('mouseenter', () => {
  square1.style.backgroundColor = 'red';
});

square1.addEventListener('mouseleave', () => {
  square1.style.backgroundColor = '';
});

let counter = 0;
let square5Interval: any;
square5.addEventListener('mouseenter', () => {
  counter = 1;
  square5Interval = setInterval(() => {
    square5.innerHTML = counter.toString();
    square5.style.fontSize = '56px';
    counter++;
    if (counter > 10) {
      clearInterval(square5Interval);
    }
  }, 1000);
});

square5.addEventListener('mouseleave', () => {
  counter = 0;
  square5.innerHTML = counter.toString();
  square5.style.fontSize = '56px';
  clearInterval(square5Interval);
});

input.onkeyup = () => {
  document.getElementById('footer__header').innerHTML = input.value;
};

// Hover effects:

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener('mouseenter', () => {
    button.style.opacity = '0.7';
  });

  button.addEventListener('mouseleave', () => {
    button.style.opacity = '';
  });
}
