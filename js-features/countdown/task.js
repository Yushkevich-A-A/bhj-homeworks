'use strict'

// задание 1

let timer = document.getElementById('timer');
const initialValueTimer = +timer.textContent;

function timerCounter() {
    let value = initialValueTimer;
    timer.textContent = `${value}`
    let timerSetInterval = setInterval(() => {
        if (value > 0) {
            timer.textContent = `${--value}`;
        } else { ;
            clearInterval(timerSetInterval);
            alert('Вы победили в конкурсе!');
            timerCounter();
        }
}, 1000);
}

timerCounter(); 

// задание #1

function clock(valueTime = '00:00:05') {
    const arr = valueTime.split(':');
    let timerDate = new Date();
    timerDate.setHours(arr[0], arr[1], arr[2]);
    let hours, minutes, seconds;

    let clockElement = document.createElement('div');
    timer.after(clockElement);

    let timerSetInterval = setInterval(() => {
        hours = (timerDate.getHours() < 10) ? '0' + timerDate.getHours() : timerDate.getHours();
        minutes = (timerDate.getMinutes() < 10) ? '0' + timerDate.getMinutes() : timerDate.getMinutes();
        seconds = (timerDate.getSeconds() < 10) ? '0' + timerDate.getSeconds() : timerDate.getSeconds();

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        timerDate.setSeconds(timerDate.getSeconds() - 1);
        if (hours == 0 && minutes == 0 && seconds == 0) {
            window.location.href = 'test.rar';
            clearInterval(timerSetInterval);

        }
    }, 1000);
}

clock();