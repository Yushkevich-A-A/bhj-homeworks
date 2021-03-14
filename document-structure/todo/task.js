'use strict'

const tasksAdd = document.getElementById('tasks__add');
const tasksInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');


tasksAdd.addEventListener('click', e => {
    e.preventDefault();
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskRemove = document.createElement('a');

    task.classList.add('task');
    taskTitle.classList.add('task__title');
    taskRemove.classList.add('task__remove');
    taskRemove.href = '#';

    taskTitle.textContent = tasksInput.value;
    taskRemove.innerHTML = '&times;';
    tasksInput.value = '';


    taskRemove.addEventListener('click', () => {
        taskRemove.closest('.task').remove();
    })

    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    tasksList.appendChild(task);

})
