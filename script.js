'use strict';
// document.querySelector('.message').textContent = 'Congratgulations🥳';
// document.querySelector('.score').textContent = 50;
// document.querySelector('.highscore').textContent = 800;
// document.querySelector('.number').textContent = 17;
// document.querySelector('.guess').value = 50;
let score = 0;
document.querySelector('.score').textContent = score;
let highscore = score;

document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value);
    document.querySelector('body').style.backgroundColor = 'black';
    let x = Math.floor(Math.random() * 1 + 1);
    document.querySelector('.number').textContent = x;
    if (document.querySelector('.guess').value == x) {
        document.querySelector('.message').textContent = 'Congragulations';
        document.querySelector('.score').textContent = score++;
        document.querySelector('body').style.backgroundColor = 'blue';
    } else {
        document.querySelector('.message').textContent =
            'Better Luck for next time';
        document.querySelector('.score').textContent = score--;
        document.querySelector('body').style.backgroundColor = 'red';
    }
    document.querySelector('.highscore').textContent = Math.max(
        document.querySelector('.highscore').textContent,
        document.querySelector('.score').textContent
    );
});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = 'Start Guessing !';
    document.querySelector('.guess').value = '';
});