'use strict'

const menuLink = document.getElementsByClassName('menu__link');
const menuSub = document.getElementsByClassName('menu_sub');
const defaultClassSubMenu = menuSub[0].className;

for (let element of menuLink) {
    element.addEventListener('click',() => openSubMenu(element));
}

function openSubMenu(item) {
    if(!item.nextElementSibling){
        hideSubMenu();
        return;
    }
    event.preventDefault();
    addAndRemoteClass(item.nextElementSibling);
}

function addAndRemoteClass(item) {
    let arrClass = item.className.split(' ');
    if(item.className.includes('menu_active')) {
        arrClass.pop();
        item.className = arrClass.join(' ');
    } else {
        hideSubMenu();
        arrClass.push('menu_active');
        item.className = arrClass.join(' ');
    }
}

function hideSubMenu() {
    for (let element of menuSub) {
        element.className = defaultClassSubMenu;
    }
}