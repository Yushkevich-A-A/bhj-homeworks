'use strict'

const wordElement = document.querySelector('.word');
const symbolClass = wordElement.firstElementChild.classList[0];
const symbolClassList = document.getElementsByClassName('symbol');
const statusWins = document.querySelector('.status__wins');
const statusLoss = document.querySelector('.status__loss');
const statusCounter = document.querySelector('.status__counter');
let countIndex = 0;
const words = [
    'bob',
    'awesome',
    'netology',
    'hello',
    'kitty',
    'rock',
    'youtube',
    'popcorn',
    'cinema',
    'love',
    'javascript',
];

// document.addEventListener('keypress',)

resetFieldWord();
randomWord();



function splitWords(word) {
    return word.split('');
}

function randomWord() {
    let currentWordIndex = Math.floor(Math.random() * words.length);
    let arrWord = splitWords(words[currentWordIndex]);
    return addWordToHtml(arrWord);

}

function resetFieldWord() {
    wordElement.innerHTML = '';
}

function addWordToHtml(arrWord) {
    for (let i = 0; i < arrWord.length; i++) {
        wordElement.innerHTML += `<span class="symbol">${arrWord[i]}</span>`
    }
}

function checkWin() {
    let value = +statusWins.textContent;
    statusWins.textContent = value += 1;
    if (value === 10) {
        windowWinOrLose('You win!')
        return;
    }
}

function checkLose() {
    let value = +statusLoss.textContent;
    statusLoss.textContent = value += 1;
    if (value === 5) {
        windowWinOrLose('You lose!')
        return;
    }
}

function windowWinOrLose(text) {
    alert(text);
}

function keyListener(item) {
    
}



