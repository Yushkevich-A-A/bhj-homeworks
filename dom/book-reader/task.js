'use strict'

const fontSize = document.getElementsByClassName('font-size');
const book = document.querySelector('.book');

function removeClass(list, value) {
    for(let item of list) {
        item.classList.remove(value);
    }
}

for(let item of fontSize) {
    item.addEventListener('click', event => {
        event.preventDefault();
        removeClass(fontSize, 'font-size_active');
        item.classList.add('font-size_active');
        if (item.dataset.size === 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if (item.dataset.size === 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    })
}