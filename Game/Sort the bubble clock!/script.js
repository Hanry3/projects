// Get the number value from the text content of an element
const number = (el) => parseInt(el.querySelector('text').textContent, 10);

// Compare positions of two elements
const round = (e1, e2) => {
  const r1 = parseInt(e1.dataset.position, 10);
  const r2 = parseInt(e2.dataset.position, 10);
  return r1 - r2;
}

// Rotate an element to the given position
const rotate = (el, i) => {
  el.style.transform = 'rotate(' + (i * 30) + 'deg)';
  el.dataset.position = i;
  el.querySelector('text').style.transform = 'rotate(' + (i * -30) + 'deg)';
}

// Get all the dots and swaps
const dots = [...document.querySelectorAll('#outer>g')];
const swaps = [...document.querySelectorAll('#swapper use')];
const svg = document.querySelector('svg');

// Shuffle the positions of the dots
function shuffle() {
  const order = [];
  order[0] = 1 + (Math.random() * 11) | 0;
  order[11] = (order[0] + 1 + (Math.random() * (12 - order[0])) | 0) % 12;
  
  let i = 1;
  while (i < 11) {
    let no = (Math.random() * 12) | 0;
    if (order.indexOf(no) < 0) {
      order[i++] = no;
    }
  }

  order.forEach((no, k) => rotate(dots[k], no));
}

// Check if the sorting is finished
function testEnd() {
  if (swaps.some(el => el.dataset.low)) return;
  document.querySelector('#clock').style.transform = document.querySelector('#at12').style.transform;
  svg.classList.add('finished');
}

// Connect the dots in the correct order
function connect() {
  const pos = dots.toSorted(round);

  pos.forEach((el, i) => {
    const self = number(el);
    const classList = [];
    
    delete el.dataset.changeDown;
    delete el.dataset.changeUp;

    const before = number(pos[(i + 11) % 12]);
    if ((self - before + 12) % 12 === 1) {
      classList.push('after');
    }

    const after = number(pos[(i + 1) % 12]);
    if ((after - self + 12) % 12 === 1) {
      classList.push('before');
    }
    if (after < self && !(after == 1 && self == 12)) {
      swaps[i].dataset.low = el.id;
      swaps[i].dataset.high = pos[(i + 1) % 12].id;
    } else {
      delete swaps[i].dataset.low;
      delete swaps[i].dataset.high;
    }
    
    el.setAttribute('class', classList.join(' '));
  });
  
  testEnd();
}

// Handle the swapper click event
document.querySelector('#swapper').addEventListener('click', event => {
  const target = [...event.currentTarget.childNodes].find(el => el.contains(event.target));
  const {low, high} = target.dataset;

  const el1 = document.querySelector('#' + low);
  const el2 = document.querySelector('#' + high);

  if (el1.style.transform == 'rotate(330deg)' && el2.style.transform == 'rotate(0deg)') {
    el1.style.transform = 'rotate(360deg)';
    el1.querySelector('text').style.transform = 'rotate(-360deg)';
    el1.dataset.position = 0;

    el2.style.transform = 'rotate(-30deg)';
    el2.querySelector('text').style.transform = 'rotate(30deg)';
    el2.dataset.position = 11;

    setTimeout(() => {
      el1.style.transform = 'rotate(0deg)';
      el1.querySelector('text').style.transform = 'rotate(0deg)';

      el2.style.transform = 'rotate(330deg)';
      el2.querySelector('text').style.transform = 'rotate(-330deg)';

      svg.classList.toggle('passive', true);

      connect();

      setTimeout(() => {
        svg.classList.toggle('passive', false);
      }, 200);
    }, 500);
  } else {
    const trans = el1.dataset.position;
    rotate(el1, el2.dataset.position);
    rotate(el2, trans);

    setTimeout(connect, 500);
  }
});

// Initialize the clock hands rotation animations
(() => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  
  document.querySelector('#clock .hours').style.animation = 'round 43200s -' + (hour*3600 + minute*60 + second) + 's linear infinite';
  document.querySelector('#clock .minutes').style.animation = 'round 3600s -' + (minute*60 + second) + 's linear infinite';
})();

// Start the shuffle and connect process
shuffle();
connect();