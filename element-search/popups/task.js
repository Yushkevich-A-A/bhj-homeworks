'use strict'

const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalList = document.getElementsByClassName('modal');
const modalCloseList = document.getElementsByClassName('modal__close');
const showSuccess = document.querySelector('.show-success');


function activateWindow(item) {
    item.className += (' ' + 'modal_active');
}


function closeWindow(item) {
    const parentElementForClose = item.closest('.modal');
    const arr = parentElementForClose.className.split(' ');
    arr.pop();
    parentElementForClose.className = arr.join(' ');
}


showSuccess.addEventListener('click', () => activateWindow(modalSuccess));


for (let item of modalCloseList) {
    item.addEventListener('click', () => closeWindow(item));
}


activateWindow(modalMain);

