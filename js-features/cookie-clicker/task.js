'use strict'

const clickerCounter = document.getElementById('clicker__counter');
const cockieImg = document.getElementById('cookie');
const cockieImgWidth = cockieImg.width;

function clickWrap() {
    let date = Date.now();
    const timeCounterclicerDiv = document.createElement('div');
    timeCounterclicerDiv.textContent = 'Скорость клика равна: ';
    const timeCounterclicerSpan = document.createElement('span');

    clickerCounter.after(timeCounterclicerDiv);
    timeCounterclicerDiv.append(timeCounterclicerSpan);

    return function () {
        let currentDate = Date.now();
        let valueSpeedOfClick = 1000 / (currentDate - date);
        let click = +clickerCounter.textContent;
        click += 1;
        clickerCounter.textContent = click;
        timeCounterclicerSpan.textContent = valueSpeedOfClick.toFixed(2);
        cockieImg.width = (cockieImg.width === cockieImgWidth) ?
            cockieImgWidth * 1.2 :
            cockieImgWidth;
        date = Date.now();
    }   
}

let click = clickWrap();

cockieImg.addEventListener('click', click);



