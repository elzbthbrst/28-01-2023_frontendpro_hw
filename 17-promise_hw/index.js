"use strict"
const inputUser = document.querySelector('#enter-user-name')
const findUserBtn = document.querySelector('#find-user')
const userContainer = document.querySelector('#user-container')

findUserBtn.addEventListener('click' , onFindUserBtnClick)


function onFindUserBtnClick () {
    const userName = inputUser.value

    fetch(` https://api.github.com/users/${userName}`)
    .then((response) => {
        return response.json()
    })

    .then((userData) =>{
        renderUser(userData)
    })

    clearInput()
}

function renderUser (userInform) {
    const html = createUserTemplate(userInform)
    userContainer.innerHTML = html
}

function createUserTemplate (userInform) {
    return `
    <div>
        <div> <img src="${userInform.avatar_url}" ></div>
        <h3>Repositories ${userInform.public_repos}</h3>
        <h3>Followers ${userInform.followers}</h3>
        <h3>Following ${userInform.following}</h3>
    </div> 
`
}

function clearInput() {
    inputUser.value = ''
}