'use strict'

const productQuantityControl = document.getElementsByClassName('product__quantity-control');
const productAdd = document.getElementsByClassName('product__add');
const cartProducts = document.querySelector('.cart__products');
const card = document.querySelector('.cart');

card.classList.add('hidden');

function addNewProductToCart(item) {
    const cartProduct = item.cloneNode();
    const productImage = item.getElementsByClassName('product__image')[0].cloneNode();
    const cartProductCount = document.createElement('div');
    const buttomDeleteProduct = document.createElement('div');

    cartProduct.className = 'cart__product';
    productImage.className = 'cart__product-image';
    cartProductCount.className = 'cart__product-count';
    buttomDeleteProduct.className = 'cart__product-delete';

    cartProductCount.textContent = item.querySelector('.product__quantity-value').textContent;

    cartProduct.appendChild(productImage);
    cartProduct.appendChild(cartProductCount);
    cartProduct.appendChild(buttomDeleteProduct);
    cartProducts.appendChild(cartProduct);

    if (cartProducts.children.length !== 0) {
        card.classList.remove('hidden');
    }

    buttomDeleteProduct.addEventListener('click', () => {
        buttomDeleteProduct.closest('.cart__product').remove();
        if (cartProducts.children.length === 0) {
            card.classList.add('hidden');
        }
    });

    return productImage;
}

for( let i of productQuantityControl) {
    i.addEventListener('click', () => {
        if(i.classList.contains('product__quantity-control_dec') && i.nextElementSibling.textContent > 1) {
            i.nextElementSibling.textContent--;
        }

        if(i.classList.contains('product__quantity-control_inc')) {
            i.previousElementSibling.textContent++;
        }
    })
}

for (let i of productAdd) {
    i.addEventListener('click', () => {
        const parentElementProduct = i.closest('.product');
        const elementId = Array.from(cartProducts.children).findIndex(item => item.dataset.id === parentElementProduct.dataset.id)
        const startElement = parentElementProduct.querySelector('.product__image');
        let endElement;

        if (elementId !== -1) {
            const countValue = +cartProducts.children[elementId].textContent;
            cartProducts.children[elementId].getElementsByClassName('cart__product-count')[0].textContent = countValue + +parentElementProduct.querySelector('.product__quantity-value').textContent;
            endElement = cartProducts.children[elementId].querySelector('.cart__product-image');
        } else {
            endElement = addNewProductToCart(parentElementProduct);
        }
        smoothMovementProductToCart(startElement, endElement);
    })
}

function smoothMovementProductToCart(startElement, endElement) {
    debugger;
    const movieImage = startElement.cloneNode();
    document.body.appendChild(movieImage);
    movieImage.className ='movie__image';
    movieImage.style.width = startElement.getBoundingClientRect().width + 'px';
    movieImage.style.left = startElement.getBoundingClientRect().left + 'px';
    movieImage.style.top = startElement.getBoundingClientRect().top + 'px';




    let stepRight = Math.round(Math.abs(parseFloat(movieImage.style.left) - endElement.getBoundingClientRect().left) / 100)
    let stepTop = Math.round(Math.abs(endElement.getBoundingClientRect().top - parseFloat(movieImage.style.top)) / 100)
    let timerId = setTimeout(function f() {
        const currentValueLeft = parseFloat(movieImage.style.left);
        const currentValueTop = parseFloat(movieImage.style.top);


        if(currentValueLeft >= endElement.getBoundingClientRect().left || currentValueTop <= endElement.getBoundingClientRect().top) {
            movieImage.remove();
            return;
        } else {
            movieImage.style.left = currentValueLeft + stepRight + 'px';
            movieImage.style.top = currentValueTop - stepTop + 'px';
            timerId = setTimeout(f, 5);
        }
    }, 10)

}