'use script'

const rotatorAd = document.getElementsByClassName('rotator');


function startTimer(itemRotator) {
    let activeAdIndex = Array.from(itemRotator).findIndex(item => item.classList.contains('rotator__case_active'));
    let timer = setTimeout(function f() {
        itemRotator[activeAdIndex].classList.toggle('rotator__case_active');
        activeAdIndex++;
        
        if (activeAdIndex === itemRotator.length) {
            activeAdIndex = 0;
        }
        itemRotator[activeAdIndex].classList.toggle('rotator__case_active');
        itemRotator[activeAdIndex].style.color = itemRotator[activeAdIndex].dataset.color;

        timer = setTimeout(f, itemRotator[activeAdIndex].dataset.speed || 1000);
    }, itemRotator[activeAdIndex].dataset.speed || 1000);
}

for(let item of rotatorAd) {
    startTimer(item.children);
}
