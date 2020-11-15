const head = document.querySelector('#heading');
const beetle = document.querySelector('#beetle');
const gameBoard = document.querySelector('#gameBoard');
const playAgain = document.querySelector('#playAgain');
const btns = document.querySelectorAll('.btns');
const end = document.querySelector('#end');

function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}