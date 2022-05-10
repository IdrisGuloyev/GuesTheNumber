'use strict';

const secretNubmer = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = secretNubmer;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === secretNubmer) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
  } else if (guessingNumber > secretNubmer) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком много!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Игра окончена!';
    }
  } else if (guessingNumber < secretNubmer) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком мало!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Игра окончена!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
