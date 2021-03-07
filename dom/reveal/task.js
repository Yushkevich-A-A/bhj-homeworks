'use strict'

const revealBlock = document.querySelector('.reveal');

document.addEventListener('scroll', () => {
    let valuerevealBlock = revealBlock.getBoundingClientRect();

    if(valuerevealBlock.top <= window.innerHeight && valuerevealBlock.bottom >= 0) {
        if(!revealBlock.classList.contains('reveal_active')) {
            revealBlock.classList.add('reveal_active');
        }
    } else {
        if(revealBlock.classList.contains('reveal_active')) {
            revealBlock.classList.remove('reveal_active');
        }
    }
})

