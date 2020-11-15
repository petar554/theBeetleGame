const head = document.querySelector('#heading');
const beetle = document.querySelector('#beetle');
const gameBoard = document.querySelector('#gameBoard');
const play = document.querySelector('#play');
const btns = document.querySelectorAll('.btns');
const end = document.querySelector('#end');

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

    if (changeToNumber(beetle.style.top) < -10 || changeToNumber(beetle.style.top) > 370) {
        play.innerHTML = 'Play Again';
        burned();
    } else if (changeToNumber(beetle.style.left) < -10 || changeToNumber(beetle.style.left) > 935) {
        play.innerHTML = 'Play Again';
        burned();
    }


    for (let i = 0; i < btns.length; i++) {
        if (isTouching(beetle, greenArr[i])) {
            gameBoard.removeChild(greenArr[i]);
            counter = counter + 1;
            weightGain(beetle, 15);
        } else if (isTouching(beetle, redArr[i])) {
            head.innerText = 'You touched the red ball - Game Over';
            play.innerHTML = 'Play Again';
            //alert('GAME OVER')
        } else if (counter === 3 && isTouching(beetle, end)) {
            play.innerHTML = 'Play Again';
            gameBoard.style.backgroundImage = "url('https://image.shutterstock.com/image-vector/winner-sign-congratulations-win-banner-260nw-569199769.jpg')";
            document.body.style.backgroundColor = 'Darkmagenta'
        }
    }
});

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

function makeBalls() {
    head.innerText = 'Beetle Game'
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.top = randomNum();
        if (i % 2 === 0) {
            btns[i].classList.add('green');
            greenArr.push(btns[i]);
            gameBoard.appendChild(btns[i]);
        } else {
            btns[i].classList.add('red');
            redArr.push(btns[i]);
            gameBoard.appendChild(btns[i]);
        }
    }
}

function randomNum() {
    const h = Math.floor(Math.random() * 370);
    return `${h}px`
}

function burned() {
    beetle.style.top = `${200}px`
    beetle.style.left = `${250}px`
    head.innerText = 'You got burned'
}

function weightGain(beetle, value) {
    const currWidth = beetle.style.width;
    if (!currWidth) {
        var newValue = 60
        beetle.style.width = `${newValue + value}px`
    } else {
        const newWidth = parseInt(currWidth.slice(0, -2))
        beetle.style.width = `${newWidth + 10}px`
    }
}

play.addEventListener('click', function () {
    makeBalls();
    counter = 0;
    play.innerHTML = 'Play'
    beetle.style.width = `${60}px`
    beetle.style.top = `${200}px`
    beetle.style.left = `${250}px`
    gameBoard.style.backgroundImage = '';
    document.body.style.backgroundColor = '';
});
