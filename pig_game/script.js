'use strict';

// max score
const MAXSCORE = 20;

// last winner

//total score
let score0El = 0;
let score1El = 0;

// current score
let currentScore0 = 0;
let currentScore1 = 0;

// dice
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

// players
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// change player activity
function whoActive() {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  document.querySelector('.dice').classList.remove('hidden');
  document.querySelector('.btn--roll').classList.remove('hidden');
  document.querySelector('.btn--hold').classList.remove('hidden');
}

// winner player
function isWinner(player) {
  player.classList.add('player--winner');
  document.querySelector('.dice').classList.add('hidden');
  document.querySelector('.btn--roll').classList.add('hidden');
  document.querySelector('.btn--hold').classList.add('hidden');
}

// current = 0 and show window
function currentScoreCalculate(id, currentScore, equal, sumOwnSelf) {
  let equality = sumOwnSelf ? currentScore + equal : equal;
  document.getElementById(`current--${id}`).textContent = equality;
  return equality;
}

// total score
function totalScoreCalculate(id, currentScore, equal, sumOwnSelf) {
  let equality = sumOwnSelf ? currentScore + equal : equal;
  document.getElementById(`score--${id}`).textContent = equality;
  return equality;
}

// when user click the roll dice button
document.querySelector('.btn--roll').addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  const rollDice = Math.trunc(Math.random() * 6 + 1);
  document.querySelector('.dice').setAttribute('src', `dice-${rollDice}.png`);
  // if dice = 1
  if (rollDice === 1) {
    if (player0.classList.contains('player--active')) {
      whoActive();
      currentScore0 = currentScoreCalculate(0, currentScore0, 0, false);
    } else {
      whoActive();
      currentScore1 = currentScoreCalculate(1, currentScore1, 0, false);
    }
  } else {
    if (player0.classList.contains('player--active')) {
      currentScore0 = currentScoreCalculate(0, currentScore0, rollDice, true);
    } else {
      currentScore1 = currentScoreCalculate(1, currentScore1, rollDice, true);
    }
  }
});

// when user click hold button
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    score0El = totalScoreCalculate(0, score0El, currentScore0, true);
    currentScore0 = currentScoreCalculate(0, currentScore0, 0, false);
    score0El >= MAXSCORE ? isWinner(player0) : whoActive();
  } else {
    score1El = totalScoreCalculate(1, score1El, currentScore1, true);
    currentScore1 = currentScoreCalculate(1, currentScore1, 0, false);
    score1El >= MAXSCORE ? isWinner(player1) : whoActive();
  }
});

// when user click new game button
document.querySelector('.btn--new').addEventListener('click', function () {
  score0El = totalScoreCalculate(0, score0El, 0, false);
  score1El = totalScoreCalculate(1, score1El, 0, false);
  currentScore0 = currentScoreCalculate(0, currentScore0, 0, false);
  currentScore1 = currentScoreCalculate(1, currentScore1, 0, false);
  whoActive();
});
