'use strict'

const editor = document.getElementById('editor');
const buttonReset = document.querySelector('.button-reset');

if (localStorage.getItem('text-editor')) {
    editor.value = localStorage.getItem('text-editor');
}

editor.addEventListener('input', () => {
    localStorage.setItem('text-editor', editor.value);
    if(!localStorage.getItem('text-editor')) {
        localStorage.removeItem('text-editor');
    }
})

buttonReset.addEventListener('click', () => {
    localStorage.removeItem('text-editor');
})