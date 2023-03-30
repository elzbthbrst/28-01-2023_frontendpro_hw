"use strict"
const SELECTOR_LIST_ITEM = '.listElem'
const CLASS_DELETE_BTN = 'deleteBtn'

const todoList = document.querySelector('#todoList')
const form = document.querySelector('#todoForm')

form.addEventListener('submit', onFormSubmit)
todoList.addEventListener('click', onTodoListClick)

TodoApis
    .getList()
    .then((list) => {
        renderTodoList(list)
    })
    .catch((error) => {
        showError(error)
    })

function onFormSubmit(e) {
    e.preventDefault()
    const todo = getTodo()
    if (!isTodoValid(todo)) {
        showError(new Error('Enter Wrong Data'))
        return
    }
    TodoApis
        .create(todo)
        .then((newTodo) => {
            render(newTodo)
            clearForm()
        })
        .catch((error) => {
            showError(error)
        })


}

function onTodoListClick(e) {
    const target = e.target
    const todoEl = getTodoEl(target)
    if (isTodoElDeleteBtn(target)) {

        TodoApis
            .delete(todoEl)
            .catch((error) => {
                showError(error)
            })
        removeEl(todoEl)
    } else {
        changeBackground(todoEl)
    }
}

function getTodo() {
    return {
        title: form.msgInput.value
    }
}

function isTodoValid(todo) {
    return todo.title !== ''
}

function showError(error) {
    alert(error.message)
}

function render(todo) {
    const html = getTemplateTodo(todo)
    todoList.insertAdjacentHTML('beforeend', html)
}
function renderTodoList(list) {
    const html = list.map(getTemplateTodo).join('')
    todoList.innerHTML = html
}

function getTemplateTodo(todo) {
    return `<li class="listElem" id="${todo.id}">${todo.title}<button class="deleteBtn">Delete</button></li>`
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