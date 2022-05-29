'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const imgDice = document.querySelector('.dice');
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let playing = true;
function initialCondition() {
  imgDice.classList.add('hidden');
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  currentScore = 0;
  scores = [0, 0];
}
const switcPlayer = function () {
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//console.log(ranDice);
initialCondition();

//Roll Dice Features
rollDice.addEventListener('click', function () {
  if (playing) {
    let dice = imgDice.classList.remove('hidden');
    let ranDice = Number(Math.trunc(Math.random() * 6 + 1));
    imgDice.src = `dice${ranDice}.png`;
    if (ranDice !== 1) {
      currentScore += ranDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switcPlayer();
    }
  }
});

//Hold Dice Features
function scoreCurrent() {
  currentScore = 0;
  currentScore0.textContent = currentScore;
}
holdDice.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    if (scores[activePlayer] >= 10) {
      playing = false;
      document.querySelector(`#score--${activePlayer}`).textContent =
        scores[activePlayer];
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.add('name');
    } else {
      switcPlayer();
    }
  }
});

//New Game
newGame.addEventListener('click', function () {
  initialCondition();
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  activePlayer = 0;
  playing = true;
});
