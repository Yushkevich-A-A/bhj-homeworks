'use strict' 

const progress = document.getElementById('progress');
const form = document.getElementById('form');
const button = document.getElementById('send');
const file = document.getElementsByName('file')[0];

form.addEventListener('submit', event => {
    const formData = new FormData();
    formData.append('file', file.files[0]);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    // xhr.upload.addEventListener('progress', e => console.log(xhr.upload));
    xhr.send(formData);
    event.preventDefault();
})

