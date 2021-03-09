'use strict'

const interestCheck = document.getElementsByClassName('interest__check');

for (let item of interestCheck) {
    item.addEventListener('change', event => {
        
        const blockInternalCheckbox = item.closest('label').nextElementSibling;
        if (blockInternalCheckbox) {
            for (let i of blockInternalCheckbox.getElementsByClassName('interest__check')) {
                i.checked = item.checked;
            }
            return;
        }

        const blockExternalCheckbox = item.closest('ul.interests').previousElementSibling;
        console.log(blockExternalCheckbox);
        if (blockExternalCheckbox) {
            blockExternalCheckbox.getElementsByClassName('interest__check')[0].checked = item.checked;
            return;
        }

    })
}