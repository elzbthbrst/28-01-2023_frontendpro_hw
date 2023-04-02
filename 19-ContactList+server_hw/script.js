'use strict'
const SELECTOR_CONTACT_INFORM = '#contactInform'
const CLASS_DELETE_BTN = 'deleteBtn'
const CLASS_EDIT_BTN = 'editBtn'


const form = document.querySelector('#contactsForm')
const contactsContainer = document.querySelector('#contactsContainer')
let contactList = []

form.addEventListener('submit', onFormSubmit)
contactsContainer.addEventListener('click', onUsersContainerClick)


ContactsApi
    .getList()
    .then((list) => {
        renderContactsList(list)
        contactList = list
    })
    .catch((e) => showError(e))


function onFormSubmit(e) {
    e.preventDefault()
    const contact = getContactData()
    if (!isValidData(contact)) {
        showError(new Error('enter wrong data'))
        return
    }
    if (contact.id) {
        updateContact(contact)
    } else {
        createNewContact(contact)
    }

}

function onUsersContainerClick(e) {
    const target = e.target
    const contactEl = getContactEl(target)
    if (isDeleteBtn(target)) {
        deleteContact(contactEl)
    } else if (isEditBtn(target)) {
        editContact(contactEl)
    }
}

function updateContact(contact) {
    ContactsApi
        .update(contact.id, contact)
        .then((newContact) => {
            replaceContact(contact.id, newContact)
            clearForm()
            contactList = contactList.map(contact => contact.id === newContact.id ? newContact : contact)
        })
        .catch((e) => showError(e))
}

function createNewContact(contact) {
    ContactsApi
        .create(contact)
        .then((newContact) => {
            renderContact(newContact)
            contactList.push(newContact)
            clearForm()
        })
        .catch((e) => showError(e))
}

function deleteContact(contactEl) {
    const id = findElemettId(contactEl)
    ContactsApi
        .delete(id)
        .then(() => {
            contactEl.remove()
            contactList = contactList.filter(contact => contact.id !== id)
        })
        .catch((e) => showError(e))
}

function editContact(contactEl) {
    const id = findElemettId(contactEl)
    const contact = findElById(id)
    fillForm(contact)
}


function getContactEl(element) {
    return element.closest(SELECTOR_CONTACT_INFORM)
}
function isDeleteBtn(element) {
    return element.classList.contains(CLASS_DELETE_BTN)
}

function isEditBtn(element) {
    return element.classList.contains(CLASS_EDIT_BTN)
}

function isValidData(contact) {
    return contact.firstName
        && contact.lastName
        && contact.phone
        && !isNaN(contact.phone)
}

function getContactData() {
    const id = form.id.value
    const contact = findElById(id) || {}
    return {
        ...contact,
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        phone: form.phone.value
    }
}

function replaceContact(id, contact) {
    const oldContact = document.querySelector(`[data-id = "${id}"]`)
    const newContact = getTemplateContsct(contact)
    oldContact.outerHTML = newContact
}

function renderContactsList(list) {
    const html = list.map(getTemplateContsct).join('')
    contactsContainer.insertAdjacentHTML("afterbegin", html)
}

function renderContact(contact) {
    const html = getTemplateContsct(contact)
    contactsContainer.insertAdjacentHTML("beforeend", html)
}
function getTemplateContsct(contact) {

    return `
    <tr id = "contactInform" 
    data-id = "${contact.id}">
        <td>${contact.firstName}</td>
        <td>${contact.lastName}</td>
        <td>${contact.phone}</td>
        <td><button class="${CLASS_EDIT_BTN}">Edit</button></td>
        <td><button class="${CLASS_DELETE_BTN}">Delete</button></td>
    </tr> 
    `
}

function findElemettId(el) {
    return el.dataset.id
}

function findElById(id) {
    return contactList.find(contact => contact.id === id)
}

function fillForm(contact) {
    form.firstName.value = contact.firstName
    form.lastName.value = contact.lastName
    form.phone.value = contact.phone
    form.id.value = contact.id
}

function clearForm() {
    form.reset()
}

function showError(e) {
    alert(e.message)
}