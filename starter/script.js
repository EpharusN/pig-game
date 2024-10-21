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
let scores, currentScore, activePlayer, playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //generating a random dice
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

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
    }
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to active players score
    // console.log('hold button');
    scores[activePlayer] += currentScore;

    //scores[1] = scores[1] +currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if players score is >= 10
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      //finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
  } else {
    switchPlayer;
  }
});

btnNew.addEventListener('click', init);
