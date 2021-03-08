'use strict'

const fontSize = document.getElementsByClassName('font-size');
const book = document.querySelector('.book');
const bookControlColorList = document.querySelector('.book__control_color').getElementsByClassName('color');
const bookControlBackgroundList = document.querySelector('.book__control_background').getElementsByClassName('color');


function removeClassActive(list, value) {
    for(let item of list) {
        item.classList.remove(value);
    }
}

function removeAndAddClassValue(list, addClass, ...removeClasses) {
    for (let item of removeClasses) {
        list.classList.remove(item);
    }
    if (addClass) {
       list.classList.add(addClass); 
    }
}

for (let item of fontSize) {
    item.addEventListener('click', event => {
        event.preventDefault();
        removeClassActive(fontSize, 'font-size_active');
        item.classList.add('font-size_active');
        if (item.dataset.size === 'small') {
            removeAndAddClassValue(book, 'book_fs-small', 'book_fs-big');
        } else if (item.dataset.size === 'big') {
            removeAndAddClassValue(book, 'book_fs-big', 'book_fs-small');
        } else {
            removeAndAddClassValue(book, null, 'book_fs-big', 'book_fs-small');
        }
    })
}

for (let item of bookControlColorList) {
    item.addEventListener('click', event => {
        event.preventDefault();
        removeClassActive(bookControlColorList, 'color_active');
        item.classList.add('color_active');
        if (item.dataset.textColor === 'black') {
            removeAndAddClassValue(book, 'book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        } else if (item.dataset.textColor === 'gray') {
            removeAndAddClassValue(book, 'book_color-gray', 'book_color-black', 'book_color-whitesmoke');
        } else {
            removeAndAddClassValue(book, 'book_color-whitesmoke', 'book_color-black', 'book_color-gray');
        }
    })
}

for (let item of bookControlBackgroundList) {
    item.addEventListener('click', event => {
        event.preventDefault();
        removeClassActive(bookControlBackgroundList, 'color_active');
        item.classList.add('color_active');
        if (item.dataset.bgColor === 'black') {
            removeAndAddClassValue(book, 'book_bg-black', 'book_bg-gray', 'book_bg-white');
        } else if (item.dataset.bgColor === 'gray') {
            removeAndAddClassValue(book, 'book_bg-gray', 'book_bg-black', 'book_bg-white');
        } else {
            removeAndAddClassValue(book, 'book_bg-white', 'book_bg-black', 'book_bg-gray');
        }
    })
}

