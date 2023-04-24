'use strict'
const SELECTOR_CONTACT_INFORM = '#contactInform'
const CLASS_DELETE_BTN = 'deleteBtn'
const CLASS_EDIT_BTN = 'editBtn'


const form = document.querySelector('#contactsForm')
const $contactsContainer = $('#contactsContainer')

let contactList = []

form.addEventListener('submit', onFormSubmit)
$contactsContainer
    .on('click', '.' + CLASS_DELETE_BTN, deleteContact)
    .on('click', '.' + CLASS_EDIT_BTN, editContact)


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
        .catch(e => showError(e))
}

function deleteContact(e) {
    const contactEl = getContactEl(e.target)
    const id = findElemettId(contactEl)
    ContactsApi
        .delete(id)
        .catch(e => showError(e))
    contactList = contactList.filter(contact => contact.id !== id)
    contactEl.remove()
}

function editContact(e) {
    const id = findElemettId(e.target)
    const contact = findElById(id)
    fillForm(contact)
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
    const html = list.map(getTemplateContsct)
    $contactsContainer.html(html)
}

function renderContact(contact) {
    const html = getTemplateContsct(contact)
    $contactsContainer.append(html)
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

function getContactEl(element) {
    return element.closest(SELECTOR_CONTACT_INFORM)
}

function findElemettId(el) {
    const contactEl = getContactEl(el)
    return contactEl.dataset.id
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
    form.id.value = ''
    form.reset()
}

function showError(e) {
    alert(e.message)
}