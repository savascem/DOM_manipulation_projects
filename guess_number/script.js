'use strict';

let highScore = 0;
let score = 20;

// random number
let secretNumber;
let randomNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
randomNumber();

// .message content
let showMessage = function (content) {
  document.querySelector('.message').textContent = content;
};

// .score content
let showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// backgroundcolor
let bgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// when user guessing
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // when guess === ' ', 0
  if (!guess) {
    showMessage('Please input correct number!!');

    // when user find secret number
  } else if (guess === secretNumber) {
    // when user get new high score
    if (score > highScore) {
      highScore = score;
    }

    bgColor('#4edf3b');
    showMessage('Congrulations !!');
    score = 20;
    showScore(score);
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    randomNumber();

    // when user cannot find the number
  } else if (guess !== secretNumber) {
    showMessage(guess > secretNumber ? 'Too HIGH..' : 'Too LOW..');
    bgColor(guess > secretNumber ? '#0164f8' : '#e4a213');
    score--;
    showScore(score);
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highScore = 0;
  showScore(score);
  bgColor('#222');
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
});
