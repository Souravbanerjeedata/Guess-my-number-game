'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input

  if (!guess) {
    displayMessage('⛔ No Number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#124b1f';

    document.querySelector('.number').style.width = '30rem';

    //it saves the hoghscore

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when the guess is high or low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '↗ Too high!' : '↘ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤕 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//when play wants to play again

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#150a12';
  document.querySelector('.number').style.width = '15rem';
});
