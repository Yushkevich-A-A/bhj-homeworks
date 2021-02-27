'use strict'

const tabList = document.getElementsByClassName('tab');
const tabContentList = document.getElementsByClassName('tab__content');


function reset() {
    for (let item of tabList) {
        item.classList.remove('tab_active');
    }

    for (let item of tabContentList) {
        item.classList.remove('tab__content_active');
    }
}

function addActiveClass(index) {
    tabContentList[index].classList.add('tab__content_active');
}

function clicker() {
    reset();
    this.classList.add('tab_active');
    const index = [...tabList].indexOf(this);
    addActiveClass(index);
}

for (let item of tabList) {
    item.addEventListener('click', clicker);
}