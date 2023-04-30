import containerTemplate from './StudentsContainerTemplate.html'

export class StudentsListView {
    static CLASS_DELETE_BTN = 'deleteBtn'
    static CLASS_STUDENT = 'student'
    static CLASS_MARK_INPUT = 'mark-input'
    static SELECTOR_STUDENTS_CONTAINER = '#students-container'

    constructor(container, options) {
        this.container = container
        this.createStudentsContainer()
        this.studentsContainer = document.querySelector(StudentsListView.SELECTOR_STUDENTS_CONTAINER)
        this.options = options
        this.init()

    }

    init() {
        return this.studentsContainer.addEventListener('click', this.onStudentsContainerClick.bind(this)),
            this.studentsContainer.addEventListener('focusout', this.onStudentsContainerFocusOut.bind(this))

    }

    onStudentsContainerClick(e) {
        const target = e.target
        if (this.isDeleteBtn(target)) {
            const student = this.getStudent(target)
            const id = student.dataset.id

            this.options.onDelete(id, student)
        }
    }

    onStudentsContainerFocusOut(e) {
        const target = e.target
        if (this.isMarksFormInput(target)) {
            const input = this.getMarksFormInput(target)
            const student = this.getStudent(target)
            const id = student.dataset.id
            const newMark = Number(input.value)
            const index = input.id

            this.options.onInput(id, index, newMark)
        }

    }

    createStudentsContainer() {
        const html = containerTemplate
        this.container.insertAdjacentHTML('afterbegin', html)

    }

    renderStudentsList(list) {
        const html = list.map(this.getStudentTemplate).join(' ')
        this.studentsContainer.insertAdjacentHTML('beforeend', html)
    }

    renderStudent(student) {
        const html = this.getStudentTemplate(student)
        this.studentsContainer.insertAdjacentHTML('beforeend', html)
    }

    getStudentTemplate(student) {
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

    getStudent(el) {
        return el.closest('.' + StudentsListView.CLASS_STUDENT)
    }

    getMarksFormInput(el) {
        return el.closest('.' + StudentsListView.CLASS_MARK_INPUT)
    }

    isMarksFormInput(el) {
        return el.classList.contains(StudentsListView.CLASS_MARK_INPUT)
    }

    isDeleteBtn(el) {
        return el.classList.contains(StudentsListView.CLASS_DELETE_BTN)
    }

}