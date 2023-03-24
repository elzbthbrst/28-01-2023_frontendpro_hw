'use strict'
const SELECTOR_USER_INFORM = '#userInform'
const CLASS_DELETE_BTN = 'deleteBtn'


const form = document.querySelector('#userForm')
const usersContainer = document.querySelector('#usersContainer')

form.addEventListener('submit', onFormSubmit)
usersContainer.addEventListener('click', onUsersContainerClick)

renderUser({
    name : 'alla',
    surname : 'beret',
    phone : 666
})
renderUser({
    name : 'irina',
    surname : 'corch',
    phone : 32165
})
function onFormSubmit(e) {
    e.preventDefault()
    const newUser = getUserData()
    if (!isValidData(newUser)) {
        showError()
        return
    }
    renderUser(newUser)
    clearInput()
}

function onUsersContainerClick(e) {
    const target = e.target
    const userEl = getUserEl(target)
    if (isTargetBtn(target)) {
        removeUser(userEl)
    } else {
        changeBackgroundColor(userEl)
    }
}

function getUserEl (element) {
    return element.closest(SELECTOR_USER_INFORM)
}
function isTargetBtn (element) {
    return element.classList.contains(CLASS_DELETE_BTN)
}
function removeUser(userEl) {
    userEl.remove()
}
function changeBackgroundColor(userEl) {
    if (userEl.style.background === 'green' ) {
        userEl.style.background = 'white'
    } else {
        userEl.style.background = 'green'
    }
}



function getUserData() {
    return {
        name: form.userName.value,
        surname: form.userSurname.value,
        phone: form.userPhone.value
    }
}

function isValidData(newUser) {
    return newUser.name
        && newUser.surname
        && newUser.phone
        && !isNaN(newUser.phone)
}

function showError() {
    alert('Error data')
}

function renderUser(newUser) {
    const htmlTableStr =  getTemplateUser(newUser)
    usersContainer.insertAdjacentHTML("beforeEnd", htmlTableStr)
}
function getTemplateUser (newUser) {
    return `
    <tr id = "userInform">
        <td>${newUser.name}</td>
        <td>${newUser.surname}</td>
        <td>${newUser.phone}</td>
        <td><button class="deleteBtn">Delete</button></td>
        
    </tr> 
    `
}
function clearInput() {
    form.reset()
}

// Доработать todo-list из 12 урока:
// - Добавить к каждому элементу в списке кнопку удалить. При клике удаляет элемент.
// - При клике на элемент в любом месте - окрашивает элемент в зеленый цвет, при нажатии повторно убирает зеленый цвет.
// - Обработка событий должна быть сделана через делегирование
// - Корректная обработка магических символов
// - Дробление на функции и организация кода, ивентлистенеры вверху