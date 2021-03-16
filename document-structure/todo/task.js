'use strict'

const tasksAdd = document.getElementById('tasks__add');
const tasksInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

const localKeysList = Object.keys(localStorage);

for (let i of localKeysList) {
    tasksList.insertAdjacentHTML('beforeend', localStorage[i]);
    const taskRemove = tasksList.lastChild.querySelector('.task__remove');
    taskRemove.addEventListener('click', () => {
        taskRemove.closest('.task').remove();
        localStorage.removeItem(i);
    })
}


tasksAdd.addEventListener('click', e => {
    e.preventDefault();
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskRemove = document.createElement('a');
    const indexCurrentelement = tasksList.children.length;

    task.classList.add('task');
    taskTitle.classList.add('task__title');
    taskRemove.classList.add('task__remove');
    taskRemove.href = '#';

    taskTitle.textContent = tasksInput.value;
    taskRemove.innerHTML = '&times;';
    tasksInput.value = '';


    taskRemove.addEventListener('click', () => {
        taskRemove.closest('.task').remove();
        localStorage.removeItem(taskTitle.textContent);
    })

    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    tasksList.appendChild(task);
    localStorage.setItem(taskTitle.textContent, task.outerHTML);
})
