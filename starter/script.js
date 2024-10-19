'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition
score0El.texContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//rolling dice functionality

btnRoll.addEventListener('click', function () {
  //generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice
  diceEl.classList.remove('hidden');

  diceEl.src = `dice-${dice}.png`;

  //check for rolled dice... if true, switch to next player
});
