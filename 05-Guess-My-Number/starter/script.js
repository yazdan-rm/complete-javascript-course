'use strict';

// document.querySelector('.message').textContent = `Hello Yazdan :)`;
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;
//
// document.querySelector('.guess').value = 123;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber){
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🍕 Correct Number!';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  }else if( guess !== secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent =
        guess < secretNumber ?'📉 Too low': '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber){
  //   if(score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }else{
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }else if (guess < secretNumber){
  //   if(score > 1){
  //     document.querySelector('.message').textContent = '📉 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }else{
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});


document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});









