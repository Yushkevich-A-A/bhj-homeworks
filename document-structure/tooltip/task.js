'use strict'

const hasTooltip = document.getElementsByClassName('has-tooltip');
const tooltipList = document.getElementsByClassName('tooltip');

function resetClassActive() {
    for (let i of tooltipList) {
        i.classList.remove('tooltip_active');
    }
}

function positionToolTip (item) {
    const itemClculate = item.closest('.has-tooltip');
    switch (item.dataset.position) {
        case 'left':
            item.style.left = itemClculate.getBoundingClientRect().left - item.getBoundingClientRect().width + 'px';
            item.style.top = itemClculate.getBoundingClientRect().top + 'px';
            break;
        case 'top':
            item.style.left = itemClculate.getBoundingClientRect().left + 'px';
            item.style.top = itemClculate.getBoundingClientRect().top - item.getBoundingClientRect().height + 'px';
            break;
        case 'right':
            item.style.left = itemClculate.getBoundingClientRect().left + itemClculate.getBoundingClientRect().width + 'px';
            item.style.top = itemClculate.getBoundingClientRect().top + 'px';
            break;
        case 'bottom':
            item.style.left = itemClculate.getBoundingClientRect().left + 'px';
            item.style.top = itemClculate.getBoundingClientRect().top + itemClculate.getBoundingClientRect().height + 'px';
            break;
    }
}

for (let i of hasTooltip) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = i.title;

    i.insertAdjacentElement('beforeend', tooltip);
    i.addEventListener('click', e => {
        e.preventDefault();
        if (tooltip.classList.contains('tooltip_active')){
            tooltip.classList.toggle('tooltip_active');
        } else {
            resetClassActive();
            tooltip.classList.toggle('tooltip_active');
        }
        tooltip.dataset.position = (tooltip.closest('.has-tooltip').getAttribute('data-position')) ? tooltip.closest('.has-tooltip').dataset.position :'bottom';
        positionToolTip (tooltip);
    });
}

document.addEventListener('scroll', e => {
    const tooltipActive = document.getElementsByClassName('tooltip_active')[0];
    if (tooltipActive) {
        positionToolTip (tooltipActive);
    }
})
