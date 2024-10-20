'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]; //arrays are 0 based and hence player1 becomes player 0 to respect this logic
let currentScore = 0;
let activePlayer = 0;

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice
  diceEl.classList.remove('hidden');

  diceEl.src = `dice-${dice}.png`;

  //   //check for rolled 1... if true, switch to next player
  if (dice !== 1) {
    //currentScore = currentScore + dice;
    // or
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore; //change in future to hold dynamically//show the current player
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
