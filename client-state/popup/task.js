'use strict'

const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = subscribeModal.querySelector('.modal__close');

setTimeout(() => subscribeModal.classList.add('modal_active') )

modalClose.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');
    let date = new Date().setMinutes(1);
    date = date.toString().split(' ');
    // document.cookie = 'name=true;';
    // document.cookie
})
// Expires=${date[0]}, ${date[2]} ${date[1]} ${date[3]} ${date[4]} ${date[5]}