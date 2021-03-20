'use strict'

const productQuantityControl = document.getElementsByClassName('product__quantity-control');
const productAdd = document.getElementsByClassName('product__add');
const cartProducts = document.querySelector('.cart__products');
const card = document.querySelector('.cart');
let  localStorageArr = [];


if (localStorage.getItem('cart')) {
    localStorageArr = JSON.parse(localStorage.getItem('cart'));
    for (let i of localStorageArr) {
        addNewProductToCart(i);
    }
} else {
    card.classList.add('hidden');
}


function addNewProductToCart(obj) {
    const cartProduct = document.createElement('div');
    const productImage = document.createElement('img');
    const cartProductCount = document.createElement('div');
    const buttomDeleteProduct = document.createElement('div');

    cartProduct.className = 'cart__product';
    productImage.className = 'cart__product-image';
    cartProductCount.className = 'cart__product-count';
    buttomDeleteProduct.className = 'cart__product-delete';

    cartProduct.dataset.id = obj.id;
    productImage.src = obj.src;
    cartProductCount.textContent = obj.amount;

    cartProduct.appendChild(productImage);
    cartProduct.appendChild(cartProductCount);
    cartProduct.appendChild(buttomDeleteProduct);
    cartProducts.appendChild(cartProduct);

    if (cartProducts.children.length !== 0) {
        card.classList.remove('hidden');
    }

    buttomDeleteProduct.addEventListener('click', () => removeProduct(buttomDeleteProduct));

    return cartProduct;
}

function removeProduct(buttonProductRemove) {
    localStorageArr.splice(localStorageArr.findIndex(item => item.id === buttonProductRemove.closest('.cart__product').dataset.id), 1);
    localStorage.setItem('cart', JSON.stringify(localStorageArr));
    buttonProductRemove.closest('.cart__product').remove();
        if (cartProducts.children.length === 0) {
            card.classList.add('hidden');
    }
    if (localStorageArr.length === 0) {
        localStorage.removeItem('cart');
    }
};

function smoothMovementProductToCart(startElement, endElement) {
    const movieImage = startElement.cloneNode();
    document.body.appendChild(movieImage);
    movieImage.className ='movie__image';
    movieImage.style.width = startElement.getBoundingClientRect().width + 'px';
    movieImage.style.left = startElement.getBoundingClientRect().left + 'px';
    movieImage.style.top = startElement.offsetTop + 'px';

    let stepRight = (endElement.getBoundingClientRect().left - parseFloat(movieImage.style.left)) / 100;
    let stepTop = (parseFloat(movieImage.style.top) - (endElement.getBoundingClientRect().top + ((endElement.getBoundingClientRect().height - movieImage.getBoundingClientRect().height) / 2))) / 100;
    let timerId = setTimeout(function f() {
        const currentValueLeft = parseFloat(movieImage.style.left);
        const currentValueTop = parseFloat(movieImage.style.top);


        if (currentValueLeft >= endElement.getBoundingClientRect().left || currentValueTop <= endElement.getBoundingClientRect().top) {
            movieImage.remove();
            return;
        } else {
            movieImage.style.left = currentValueLeft + stepRight + 'px';
            movieImage.style.top = currentValueTop - stepTop + 'px';
            timerId = setTimeout(f, 5);
        }
    }, 5);
}



for (let i of productQuantityControl) {
    i.addEventListener('click', () => {
        if(i.classList.contains('product__quantity-control_dec') && i.nextElementSibling.textContent > 1) {
            i.nextElementSibling.textContent--;
        }

        if(i.classList.contains('product__quantity-control_inc')) {
            i.previousElementSibling.textContent++;
        }
    });
}

for (let i of productAdd) {
    i.addEventListener('click', () => {
        const parentElementProduct = i.closest('.product');
        const elementId = Array.from(cartProducts.children).findIndex(item => item.dataset.id === parentElementProduct.dataset.id);
        const startElement = parentElementProduct.querySelector('.product__image');
        let endElement;
        const objectCartProduct = {};

        objectCartProduct.id = +parentElementProduct.dataset.id;
        objectCartProduct.src = parentElementProduct.querySelector('.product__image').src;


        if (elementId !== -1) {
            const countValue = +cartProducts.children[elementId].textContent + +parentElementProduct.querySelector('.product__quantity-value').textContent;
            cartProducts.children[elementId].getElementsByClassName('cart__product-count')[0].textContent = countValue;
            objectCartProduct.amount = countValue;
            endElement = cartProducts.children[elementId].querySelector('.cart__product-image');
        } else {
            objectCartProduct.amount = +parentElementProduct.querySelector('.product__quantity-value').textContent;
            endElement = addNewProductToCart(objectCartProduct);
        }

        if (localStorageArr.find(item => item.id === objectCartProduct.id)) {
        localStorageArr.splice(localStorageArr.findIndex(item => item.id === objectCartProduct.id), 1, objectCartProduct);
        } else {
        localStorageArr.push(objectCartProduct);
        }
        localStorage.setItem('cart', JSON.stringify(localStorageArr));
        smoothMovementProductToCart(startElement, endElement);
        
    });
}

            