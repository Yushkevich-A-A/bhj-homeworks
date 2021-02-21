'use strict'

const collectionDivHole = document.getElementsByClassName('hole');
const spanDead = document.getElementById('dead');
const spanlost = document.getElementById('lost');

let spanDeadCounter = +spanDead.textContent;
let spanlostCounter = +spanlost.textContent;

for (let value of collectionDivHole) {
    value.addEventListener('click', () => getHole(value));
}

function getHole(value) {
    (value.classList.contains('hole_has-mole')) ?
        spanDeadCounter += 1 :
        spanlostCounter += 1;
        spanDead.textContent = spanDeadCounter;
        spanlost.textContent = spanlostCounter;
    setTimeout(checkWinner, 0);
}

function checkWinner() {
    if (spanDeadCounter === 10) {
        alert('Вы победили!');
        reset();
    } else if(spanlostCounter === 5) {
        alert('Вы проиграли!');
        reset();
    }
}

function reset() {
    spanDead.textContent = spanDeadCounter = 0;
    spanlost.textContent = spanlostCounter = 0;
}
