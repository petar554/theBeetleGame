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

let redArr = [];
let greenArr = [];
let counter = 0;

window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveSnakeVertically(beetle, -10, head.innerText);
    }
    else if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveSnakeVertically(beetle, 10, head.innerText);
    } else if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveSnakeHorizontally(beetle, 10, head.innerText);
    }
    else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveSnakeHorizontally(beetle, -10, head.innerText);
    }
});

function moveSnakeVertically(b, amount, text) {
    if (text === 'Beetle Game') {
        const value = changeToNumber(b.style.top);
        b.style.top = `${value + amount}px`
    } else {
        b.style.top = `${200}px`;
    }
}

function moveSnakeHorizontally(b, amount, text) {
    if (text === 'Beetle Game') {
        const value = changeToNumber(b.style.left);
        b.style.left = `${value + amount}px`
    } else {
        b.style.top = `${200}px`;
    }
}


function changeToNumber(pos) {
    if (!pos) return 200
    return parseInt(pos.slice(0, -2));
}