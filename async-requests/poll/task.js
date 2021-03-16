'use strict' 
const pollTitle = document.getElementById('poll__title');
const pollAnswers =document.getElementById('poll__answers');

sendRequest();

function sendRequest() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.responseType = 'json';
    xhr.send();
    
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4) {
            pollTitle.textContent = xhr.response.data.title;
            const listAnswer = xhr.response.data.answers;
            for (let i of listAnswer) {
                const button = document.createElement('button');
                button.classList.add('poll__answer');
                button.textContent = i;
                pollAnswers.appendChild(button);
                button.addEventListener('click', () => {
                    sendResponse( xhr.response.id, listAnswer.findIndex(item => item === i));
                    alert('Спасибо, ваш голос засчитан!');
                })
            }
        }
    })
}


function sendResponse(idSurvey, answerIndex) {
    const xhrResponse = new XMLHttpRequest();
    xhrResponse.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhrResponse.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhrResponse.responseType = 'json';
    xhrResponse.send(`vote=${idSurvey}&${answerIndex}`);
    xhrResponse.addEventListener('readystatechange', () => {
        if (xhrResponse.readyState === 4) {
            pollAnswers.innerHTML = '';
            let totalValue = xhrResponse.response.stat.reduce((sum, current) => sum + current.votes, 0);
            for (let i of xhrResponse.response.stat) {
                const div = document.createElement('div');
                div.textContent = i.answer + ': ';
                const span = document.createElement('span');
                span.classList.add('percent');
                span.textContent = (i.votes / totalValue * 100).toFixed(2) + '%';
                div.appendChild(span);
                pollAnswers.appendChild(div);
            }
        }
    })
}
  