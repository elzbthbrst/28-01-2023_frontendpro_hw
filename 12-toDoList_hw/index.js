"use strict"
const ul = document.querySelector('#todoList')
const input = document.querySelector('#msgInput')
const btn = document.querySelector('#msgButton')

btn.addEventListener('click', onBtnClick)

function onBtnClick() {
    if (input.value !== '') {
        const li = document.createElement('li')
        li.textContent = input.value
        ul.append(li)
    }
    input.value = ''
}

// На странице находится инпут и кнопка.
// Пользователь может ввести что-то в инпут и нажать на кнопку,
// после этого в списке выше должна отобразится строка с тем что было введено в инпуте.
// После этого инпут очищается.
// Добавить валидацию чтоб с пустым инпутом ничего не добавлялось.