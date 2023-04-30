import {StudentsApi} from './StudentsApi'
import './style.css'
"use strict"
const CLASS_DELETE_BTN = 'deleteBtn'
const CLASS_STUDENT = 'student'
const CLASS_MARK_INPUT = 'mark-input'
const DEFAULT_MARKS = Array(10).fill(0)

const studentsContainer = document.querySelector('#students-container')
const form = document.querySelector('.saveForm')
const marks = document.querySelector('.marks')

let studentsList = []


StudentsApi.getList()
    .then((list) => {
        renderStudentsList(list)
        studentsList = list
    })
    .catch(e => showError(e))



form.addEventListener('submit', onFormSubmit)
studentsContainer.addEventListener('click', onStudentsContainerClick)
studentsContainer.addEventListener('focusout', onStudentsContainerFocusOut)

function onFormSubmit(e) {
    e.preventDefault()
    const student = getStudentData()
    if (!student.name) {
        showError('поле ввода не должно быть пустым')
    }

    StudentsApi.create(student)
        .then((student) => {
            studentsList.push(student)
            renderStudent(student)
            clearForm()
        })
        .catch(e => showError(e))
}

function onStudentsContainerClick(e) {
    const target = e.target
    if (isDeleteBtn(target)) {
        const student = getStudent(target)
        const id = student.dataset.id

        StudentsApi.delete(id)
            .then(() => {
                studentsList.filter(current => current.id !== id)
            })
            .catch(e => showError(e))

        student.remove()
    } 

}

function  onStudentsContainerFocusOut(e) {
    const target = e.target
    if (isMarksFormInput(target)) {
        const input = getMarksFormInput(target)
        const student = getStudent(target)
        updateMarks(student, input)
    }
}

function updateMarks(student, input) {
    const markIndex = input.id
    const id = student.dataset.id
    const studentEl = findElById(id)
    studentEl.marks[markIndex] = Number(input.value)

    StudentsApi.update(id, studentEl) 
    .then(() => {
        studentsList.map(el => el.id === id ? studentEl : el)
    })
    .catch(e => showError(e))
}


function renderStudent(student) {
    const html = getStudentTemplate(student)
    studentsContainer.insertAdjacentHTML('beforeend', html)
}

function renderStudentsList(list) {
    const html = list.map(getStudentTemplate).join(' ')
    studentsContainer.innerHTML = html
}

function getStudentTemplate(student) {
    const { name, id, marks } = student
    return `
    <div data-id="${id}" class="student" >
        <div class="name">${name}</div>
            <form class="marks">
                <input id="0" class="mark-input" type="text" value="${marks[0]}">
                <input id="1" class="mark-input" type="text" value="${marks[1]}">
                <input id="2" class="mark-input" type="text" value="${marks[2]}">
                <input id="3" class="mark-input" type="text" value="${marks[3]}">
                <input id="4" class="mark-input" type="text" value="${marks[4]}">
                <input id="5" class="mark-input" type="text" value="${marks[5]}">
                <input id="6" class="mark-input" type="text" value="${marks[6]}">
                <input id="7" class="mark-input" type="text" value="${marks[7]}">
                <input id="8" class="mark-input" type="text" value="${marks[8]}">
                <input id="9" class="mark-input" type="text" value="${marks[9]}">
            </form>
    
        <button class="deleteBtn">DELETE</button>
    
</div>
    `
}

function getStudentData() {
    return {
        name: form.name.value,
        marks: DEFAULT_MARKS
    }
}

function getStudent(el) {
    return el.closest('.' + CLASS_STUDENT)
}

function getMarksFormInput(el) {
    return el.closest('.' + CLASS_MARK_INPUT)
}

function findElById(id) {
    return studentsList.find(el => el.id === id)
}

function isDeleteBtn(el) {
    return el.classList.contains(CLASS_DELETE_BTN)
}

function isMarksFormInput(el) {
    return el.classList.contains(CLASS_MARK_INPUT)
}

function showError(e) {
    alert(e)
}

function clearForm() {
    form.reset()
}