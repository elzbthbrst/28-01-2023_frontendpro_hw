"use strict"
const SELECTOR_LIST_ITEM = 'listElem'
const SELECTOR_LIST_ITEM_TEXT = 'listElem-text'
const CLASS_DELETE_BTN = 'deleteBtn'
const CLASS_EDIT_BTN = 'editBtn'


const $todoList = $('#todoList')
const form = document.querySelector('#todoForm')
let todoListEls = []

form.addEventListener('submit', onFormSubmit)
$todoList
    .on('click', '.' + CLASS_DELETE_BTN, onDeleteBtnClick)
    .on('click', '.' + CLASS_EDIT_BTN, onEditBtnClick)
    .on('click', '.' + SELECTOR_LIST_ITEM_TEXT, onListItemTextClick)

TodoApis
    .getList()
    .then((list) => {
        renderTodoList(list)
        todoListEls = list
    })
    .catch(e => showError(e))



function onFormSubmit(e) {
    e.preventDefault()
    const todo = getTodo()
    if (!todo) {
        showError(new Error('Enter Wrong Data'))
        return
    }
    if (todo.id) {
        updateTodo(todo)
    } else {
        createTodo(todo)
    }
}


function onDeleteBtnClick(e) {
    const todo = getTodoEl(e.target)
    const id = findElId(todo)
    TodoApis
        .delete(id)
        .catch(e => showError(e))
    todoListEls = todoListEls.filter(todoEl => todoEl.id !== id)
    todo.remove()
}

function onEditBtnClick(e) {
    const id = findElId(e.target)
    const todo = findElById(id)
    fillForm(todo)
}


function onListItemTextClick(e) {
    const todoText = getToggleEl(e.target)
    if (!todoText) {
        return
    }
    const id = findElId(e.target)
    const todo = findElById(id)
    todo.done = !todo.done
    TodoApis
        .update(id, todo)
        .then(() => {
            todoListEls = todoListEls.map(element => element.id === id ? todo : element)
        })
        .catch(e => showError(e))
    todoText.classList.toggle('background-green')
}

function updateTodo(todo) {
    TodoApis
            .update(todo.id, todo)
            .then((newTodo) => {
                replaceTodo(todo.id, newTodo)
                todoListEls = todoListEls.map(element => element.id === todo.id ? newTodo : element)
                clearForm()
            })
            .catch(e => showError(e))
}

function createTodo(todo) {
    TodoApis
            .create(todo)
            .then((newTodo) => {
                render(newTodo)
                clearForm()
                todoListEls.push(newTodo)

            })
            .catch(e => showError(e))
}


function replaceTodo(id, todo) {
    const oldTodo = document.querySelector(`[data-id= "${id}"]`)
    const newTodo = getTemplateTodo(todo)
    oldTodo.outerHTML = newTodo
}

function render(todo) {
    const html = getTemplateTodo(todo)
    $todoList.append(html)
}
function renderTodoList(list) {
    const html = list.map(getTemplateTodo).join('')
    $todoList.html(html)
}

function getTemplateTodo(todo) {
    const done = todo.done ? 'background-green' : ''

    return `<li class="listElem " data-id="${todo.id}"> <span class="listElem-text ${done}">${todo.title}</span> <button class="editBtn">EDIT</button><button class="deleteBtn">Delete</button></li>`

}


function getTodo() {
    const id = form.id.value
    const todo = findElById(id) || {}
    return {
        ...todo,
        title: form.title.value
    }
}

function findElById(id) {
    return todoListEls.find(todoEl => todoEl.id === id)
}

function getTodoEl(element) {
    return element.closest('.' + SELECTOR_LIST_ITEM)
}

function findElId(el) {
    const todoEl = getTodoEl(el)
    return todoEl.dataset.id
}

function getToggleEl(el) {
    return el.closest('.' + SELECTOR_LIST_ITEM_TEXT)
}



function clearForm() {
    form.id.value = ''
    form.reset()
}

function fillForm(todo) {
    form.title.value = todo.title
    form.id.value = todo.id
}

function showError(error) {
    alert(error.message)
}