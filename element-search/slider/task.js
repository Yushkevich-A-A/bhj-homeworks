'use strict'

const arrowPreview = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const slideItemList = document.getElementsByClassName('slider__item');
const dotItemList = document.getElementsByClassName('slider__dot');
const disactiveClassSlider = slideItemList[0].classList[0];
const disactiveClassDot = dotItemList[0].classList[0];

for (let i = 0; i < dotItemList.length; i++ ) {
    dotItemList[i].addEventListener('click',() => addActiveClass(i));
}

arrowPreview.addEventListener('click', () => clickArrow(0));
arrowNext.addEventListener('click', () => clickArrow());



function clickArrow(value = 1) {
    const arrSlide = Array.from(slideItemList);
    let currentIndexSlide = arrSlide.findIndex(item => item.className.includes('slider__item_active'));
    
    (value === 0) ?
        currentIndexSlide -= 1 :
        currentIndexSlide += 1;

    if (currentIndexSlide < 0) {
        currentIndexSlide = arrSlide.length - 1;
    } else if (currentIndexSlide >= arrSlide.length) {
        currentIndexSlide = 0;
    }

    addActiveClass(currentIndexSlide);

}


function addActiveClass(index) {
    for ( let item of slideItemList) {
        item.className = disactiveClassSlider;
    }

    for ( let item of dotItemList) {
        item.className = disactiveClassDot;
    }

    slideItemList[index].className += (' ' + 'slider__item_active');
    dotItemList[index].className += (' ' + 'slider__dot_active');
}


addActiveClass(0);


