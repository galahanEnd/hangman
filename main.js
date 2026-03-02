const words = ['виалончель', 'маяк', 'мышеловка', 'ваниль', 'сабор', 'гараж'];
const rusLetters = [
  "а","б","в","г","д","е","ё","ж","з","и","й",
  "к","л","м","н","о","п","р","с","т","у","ф",
  "х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"
];


const game2 = {
  word: words[Math.floor(Math.random() * (words.length))],
  wordLetters: [],
  usedLetters: [],
  remaining: 0,
  wrong: 0,
  maxWrong: 6,
  isActive: false,
};

let level = document.querySelector('.score');
let puzl = document.querySelector('.puzzle');
let letters = document.querySelector('.letters');
let btn = document.querySelector('button');


function startGame() {
  if (words.length !== 0) btn.style.display = 'none';
  game2.wordLetters = game2.word.split('');
  game2.remaining = game2.wordLetters.length;
  game2.usedLetters = [];
  game2.wrong = 0;
  game2.isActive = true;
  createTable();
}
function createTable() {
  puzl.innerHTML = '';
  letters.innerHTML = '';
  level.textContent = 0;
  puzl.style.border = '1px solid green';
  for (let i = 0; i < rusLetters.length; i ++) {
    if (i <  game2.wordLetters.length) {
      puzl.appendChild(builder('', 'answ'));
    }
    letters.appendChild(builder(rusLetters[i], 'boxE'));
  }

}
function builder(l, name) {
  let build = document.createElement('div');
  build.textContent = l;
  build.classList.add(name);
  return build;
}

btn.addEventListener('click', () => {
  startGame();
});

function cheker(target) {
  if (game2.usedLetters.includes(target.textContent)) return;
  let found = false;
  let targetT = target.textContent;
  game2.usedLetters.push(targetT);
  let answArr = document.querySelectorAll('.answ');
  for (let i = 0; i < game2.wordLetters.length; i += 1) {
    if (game2.wordLetters[i] === targetT) {
      game2.remaining -= 1;
      answArr[i].textContent = targetT;
      answArr[i].pointerEvents = 'none';
      found = true;
    }
  }
  if (found) {
    target.classList.add('corect');
  } else {
    game2.wrong++;
    target.classList.add('uncorect');
  }
  if (game2.wrong === game2.maxWrong) {
    alert('ты проиграл');
    startGame();
    level.textContent = 0;
  }
  else if (game2.remaining === 0) {
    alert("ты победил");
    startGame();
    level.textContent = +level.textContent + 1;
  }

}

letters.addEventListener('click', (event) => {
  let cell = event.target.closest('.boxE');
  if (!cell) return;

  cheker(cell);
})



 
