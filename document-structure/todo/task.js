'use strict'

const tasksAdd = document.getElementById('tasks__add');
const tasksInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const localStorageArray = (localStorage.getItem('todo')) ? localStorage.getItem('todo').split(',') : [];

for (let i of localStorageArray) {
    createTackElement(i);
}


tasksAdd.addEventListener('click', e => {
    if(tasksInput.value.trim() === '') {
        return;
    }

    e.preventDefault(); 

    const currantInputValue = tasksInput.value.trim();
    createTackElement(currantInputValue);
    tasksInput.value = '';
    localStorageArray.push(currantInputValue);
    localStorage.setItem('todo', localStorageArray.join(','));
})

function createTackElement(item) {
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskRemove = document.createElement('a');

    task.classList.add('task');
    taskTitle.classList.add('task__title');
    taskRemove.classList.add('task__remove');
    taskRemove.href = '#';

    taskTitle.textContent = item;
    taskRemove.innerHTML = '&times;';


    taskRemove.addEventListener('click', () => {
        taskRemove.closest('.task').remove();
        localStorageArray.splice(localStorageArray.findIndex(value => value === item), 1)
        localStorage.setItem('todo', localStorageArray.join(','));
        if (!localStorage['todo']) {
            localStorage.removeItem('todo');
        }
    })

    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    tasksList.appendChild(task);
}
