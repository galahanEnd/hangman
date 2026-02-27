const words = ['виалончель', 'маяк', 'мышеловка', 'ваниль', 'сабор', 'гараж'];
const rusLetters = [
  "а","б","в","г","д","е","ё","ж","з","и","й",
  "к","л","м","н","о","п","р","с","т","у","ф",
  "х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"
];
const game = {
  answer: words.pop(),  //words[Math.floor(Math.random() * (words.length - 1))]
  answerLetter: '',
  letArr: [],
  answerCheck: function() {
  },
};
let score = document.querySelector('.score');
let puzl = document.querySelector('.puzzle');
let letters = document.querySelector('.letters');
let btn = document.querySelector('button');


function startGame() {
  if (words.length !== 0) btn.style.display = 'none';
  game.answerLetter = game.answer.split('');
  clearTable();
  score.textContent = 0;
}
function clearTable() {
  puzl.innerHTML = '';
  letters.innerHTML = '';
  for (let i = 0; i < rusLetters.length; i ++) {
    if (game.answerLetter[i]) {
      let cell = builder(game.answerLetter[i]);
      cell.style.display = 'none';
      puzl.appendChild(cell);
    }
    letters.appendChild(builder(rusLetters[i]));
  }

}
function builder(l) {
  let build = document.createElement('div');
  build.textContent = l;
  build.classList.add('boxE');
  return build;
}

btn.addEventListener('click', () => {
  startGame();
});

letters.addEventListener('click', event => {

});