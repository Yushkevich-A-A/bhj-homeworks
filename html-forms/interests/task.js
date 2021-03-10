'use strict'

const interestCheck = document.getElementsByClassName('interest__check');


for (let item of interestCheck) {
    item.addEventListener('change', event => {
        let arr = [];
        checkingChildElements (item);
        checkingParentElements (item);

    })
}

function checkingChildElements(item) {
    let parentRootElement = item.closest('label');
    if (parentRootElement.nextElementSibling) {
        let siblingCheckedElements = parentRootElement.nextElementSibling.getElementsByClassName('interest__check');
        for (let i of siblingCheckedElements) {
            i.checked = item.checked;
        }
    }
}

function checkingParentElements(item) {

    if (!item.closest('ul.interests')) {
        return;
    }
    let itemInput = item.closest('ul.interests').previousElementSibling.getElementsByClassName('interest__check')[0];
    let listInterestCheck = item.closest('ul.interests').children;

    for (let i of listInterestCheck) {
        i = i.getElementsByClassName('interest__check')[0];
        if (i.checked) {
            itemInput.checked = i.checked;
            itemInput.indeterminate = !i.checked;
            continue;
        } 
        itemInput.checked = i.checked;
        break;
    }

    if (!itemInput.checked) {
        for (let i of listInterestCheck) {
            if (i.checked) {
                itemInput.indeterminate = false;
                continue;
            }
            itemInput.indeterminate = true;
        }
    }

    checkingParentElements(itemInput);
}