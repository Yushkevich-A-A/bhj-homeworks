'use strict' 

const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', event => {
    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', event => {
        progress.value = (event.loaded / event.total).toFixed(2);
    })

    xhr.send(formData);
    event.preventDefault();

})

