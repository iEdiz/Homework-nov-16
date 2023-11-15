const button1 = document.querySelector('.js-button-1');
const button2 = document.querySelector('.js-button-2');
const button3 = document.querySelector('.js-button-3');
const button4 = document.querySelector('.js-button-4');
const button5 = document.querySelector('.js-button-5');
const button6 = document.querySelector('.js-button-6');
const button7 = document.querySelector('.js-button-7');
const square1 = document.querySelector('js-square1');

button1.addEventListener('click', () => {
  const square1 = document.getElementById('js-square1');

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
  const square5 = document.getElementById('js-square5');

  square5.style.backgroundColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
});

button6.addEventListener('click', () => {
  const square6 = document.getElementById('js-square6');
  let counter = 1;
  const square6Interval = setInterval(() => {
    square6.innerHTML = counter.toString();
    square6.style.fontSize = '56px';
    counter++;

    if (counter > 10) {
      clearInterval(square6Interval);
    }
  }, 3000);
});

button7.addEventListener('click', () => {
  const allSquares = document.getElementsByClassName('square');
  const background = document.getElementById('js-background');

  for (let i = 0; i < allSquares.length; i++) {
    const element = allSquares[i] as HTMLElement;
    element.style.backgroundColor = '#18D5E1';
  }
  background.style.backgroundColor = '#000000';
});

square1.addEventListener('mouseenter', () => {
  const squareElement = square1 as HTMLElement;
  squareElement.style.backgroundColor = 'red';
});
