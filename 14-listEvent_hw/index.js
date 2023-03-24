"use strict"
const SELECTOR_LIST_ITEM = '.listElem'
const CLASS_DELETE_BTN = 'deleteBtn'

const todoList = document.querySelector('#todoList')
const form = document.querySelector('#todoForm')

form.addEventListener('submit', onFormSubmit)
todoList.addEventListener('click', onTodoListClick)

function onFormSubmit(e) {
    e.preventDefault()
    const todo = getTodo()
    if (!isTodoValid(todo)) {
        showError()
        return
    }
    render(todo)
    clearForm()
}

function onTodoListClick(e) {
    const target = e.target
    const todoEl = getTodoEl(target)
    if (isTodoElDeleteBtn(target)) {
        removeEl(todoEl)
    } else {
        changeBackground(todoEl)
    }
}

function getTodo() {
    return {
        message: form.msgInput.value
    }
}

function isTodoValid(todo) {
    return todo.message !== ''
}

function showError() {
    alert('Enter Wrong Data')
}

function render(todo) {
    const html = getTemplateTodo(todo)
    todoList.insertAdjacentHTML('beforeend', html)
}

function getTemplateTodo(todo) {
    return `<li class="listElem">${todo.message}<button class="deleteBtn">Delete</button></li>`
}

function clearForm() {
    form.reset()
}



function getTodoEl(element) {
    return element.closest(SELECTOR_LIST_ITEM)
}

function isTodoElDeleteBtn(element) {
    return element.classList.contains(CLASS_DELETE_BTN)
}

function removeEl(element) {
    element.remove()
}

function changeBackground(element) {
    if (element.style.background === 'lightgreen') {
        element.style.background = 'white'
    } else {
        element.style.background = 'lightgreen'
    }
}