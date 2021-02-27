'use strict' 

const dropdownValue = document.getElementsByClassName('dropdown__value');
const dropdownItems = document.getElementsByClassName('dropdown__item');

function clickdropdownValue () {
    this.nextElementSibling.classList.add('dropdown__list_active');
}

function clickItem () {
    this.parentElement.previousElementSibling.textContent = this.firstElementChild.textContent;
    this.parentElement.classList.remove('dropdown__list_active');
}

dropdownValue[0].addEventListener('click', clickdropdownValue);

for (let item of dropdownItems) {
    item.addEventListener('click', clickItem);
    item.firstElementChild.addEventListener('click', event => event.preventDefault());
}

