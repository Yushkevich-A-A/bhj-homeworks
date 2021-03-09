'use strict'

const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const chatWidgetMessages = document.getElementById('chat-widget__messages');
let timer;

const listAnswers = [
    'Добрый день! До свидания',
    'Вы не купили ниодного товара для того чтобы с нами так разговаривать!',
    'Где ваша совесть?',
    'Кто тут?',
    'К сожалению, все операторы сейчас заняты! Не пишите нам больше!',
    'Мы ничего не будем вам продавать',
]

function getNowTime() {
    const nowTime = new Date ();
    let hours = (nowTime.getHours() < 10) ? '0' + nowTime.getHours() : nowTime.getHours();
    let minute = (nowTime.getMinutes() < 10) ? '0' + nowTime.getMinutes() : nowTime.getMinutes();
    return `${hours}:${minute}`;
}

function getRandomAnswer() {
    return listAnswers[Math.floor(Math.random() * listAnswers.length)];
}

function answerOfBot() {
    chatWidgetMessages.innerHTML += `<div class="message">
                                         <div class="message__time">${getNowTime()}</div>
                                         <div class="message__text">${getRandomAnswer()}</div>
                                     </div>`;
    chatWidgetMessages.scrollIntoView(false);
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

chatWidgetInput.addEventListener('keyup', e => {
    clearTimeout(timer);
    if (e.code === 'Enter' && chatWidgetInput.value !== "") {
        chatWidgetMessages.innerHTML += `<div class="message message_client">
                                             <div class="message__time">${getNowTime()}</div>
                                             <div class="message__text">${chatWidgetInput.value.trim()}</div>
                                         </div>`;
        chatWidgetInput.value = '';
        answerOfBot();
    }
    timer = setTimeout(function f() {
        answerOfBot();
        timer = setTimeout(f, 30000);
    }, 30000);

});