'use strict'
const userName = document.querySelector('#userName')
const userSurname = document.querySelector('#userSurname')
const userPhone = document.querySelector('#userPhone')
const inputUser = document.querySelector('#inputUser')
const button = document.querySelector('button')

button.addEventListener('click', onButtonClick)

function onButtonClick() {
    const newUser = getUserData()
    if (!isValidData(newUser)) {
        showError()
        return
    }
    renderUser(newUser)
    clearInput()
}

function getUserData() {
    return {
        name: userName.value,
        surname: userSurname.value,
        phone: userPhone.value
    }
}

function isValidData(newUser) {
    return newUser.name !== ''
        && newUser.surname !== ''
        && newUser.phone !== ''
        && !isNaN(newUser.phone)
}

function showError() {
    alert('Error data')
}

function renderUser(newUser) {
    const htmlTableStr = `
    <tr>
        <td>${newUser.name}</td>
        <td>${newUser.surname}</td>
        <td>${newUser.phone}</td>
        
    </tr> 
    `
    inputUser.insertAdjacentHTML("beforebegin", htmlTableStr)
}
function clearInput() {
    userName.value = ''
    userSurname.value = ''
    userPhone.value = ''
}

