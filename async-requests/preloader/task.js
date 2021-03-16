'use strict'
const loader = document.getElementById('loader');
const items = document.getElementById('items');
const item = items.getElementsByClassName('item')[0];


if(localStorage.getItem('old')) {
    loader.classList.remove('loader_active');
    items.innerHTML = localStorage.getItem('old');
}


const xhr = new XMLHttpRequest() ;
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        items.innerHTML = '';
        localStorage.removeItem('old');
        const listValue = xhr.response.response.Valute;
        const listKeys = Object.keys(listValue);
        for (let i of listKeys){
            addValuteToHTML(listValue[i]);
        }
        localStorage.setItem('old', items.innerHTML);

    }
});

function addValuteToHTML(obj) {
    const div = item.cloneNode();

    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.textContent = obj.CharCode;
    div.appendChild(itemCode);

    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.textContent = obj.Value;
    div.appendChild(itemValue);

    const itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб.';
    div.appendChild(itemCurrency);
    
    items.insertAdjacentElement('beforeend', div)
}

