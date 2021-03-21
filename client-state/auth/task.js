'use strict'

const singin = document.getElementById('signin');
const singinForm = document.getElementById('signin__form');
const buttonLogIn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const welcomeSpan = document.getElementById('user_id');
const buttonLogOut = document.getElementById('log-out');

if (localStorage.getItem('auth')) {
    welcomeSpan.textContent = localStorage.getItem('auth');
    singin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
} else {
    singin.classList.add('signin_active');
}

buttonLogIn.addEventListener('click', event => {
    const formdata = new FormData(singinForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4) {
            let value;
            try{
                value = JSON.parse(xhr.responseText);
            } catch(e) {
                alert('Ответ c сервера пришел с ошибкой');
            }
            if (value.success) {
                localStorage.setItem('auth', value.user_id);
                welcomeSpan.textContent = value.user_id;
                singin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
            } else {
                alert('Неверный логин/пароль');
                singinForm.reset();
            }
        }
    })
    xhr.send(formdata);

    event.preventDefault();
});

buttonLogOut.addEventListener('click', () => {
    singin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
    localStorage.removeItem('auth');
})