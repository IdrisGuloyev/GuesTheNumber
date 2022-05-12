'use strict';

let secretNubmer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  // No input
  if (!guessingNumber) {
    // document.querySelector('.guess-message').textContent = 'Введите число!';
    displayGuessMessage('Введите число!');

    // Player won
  } else if (guessingNumber === secretNubmer) {
    // document.querySelector('.guess-message').textContent = 'Правильно!';
    displayGuessMessage('Правильно!');
    document.querySelector('.question').textContent = secretNubmer;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNubmer) {
    if (score > 1) {
      // document.querySelector('.guess-message').textContent =
      // guessingNumber > secretNubmer ? 'Слишком много!' : 'Слишком мало!';
      displayGuessMessage(
        guessingNumber > secretNubmer ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.guess-message').textContent = 'Игра окончена!';
      displayGuessMessage('Игра окончена!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   // Too high
  // else if (guessingNumber > secretNubmer) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Слишком много!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Игра окончена!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //Too low
  // } else if (guessingNumber < secretNubmer) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Слишком мало!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Игра окончена!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Again
document.querySelector('.again').addEventListener('click', function () {
  secretNubmer = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  // document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';

  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
