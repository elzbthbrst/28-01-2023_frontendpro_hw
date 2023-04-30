import fotmTemplate from './FormViewTemplate.html'

export class FormView {
    static DEFAULT_MARKS = Array(10).fill(0)
    static SAVEFORM_SELECTOR = '.saveForm'

    constructor(container, options) {
        this.container = container
        this.options = options
        this.renderForm()
        this.form = document.querySelector(FormView.SAVEFORM_SELECTOR)
        this.init()
    }

    init() {
        this.form.addEventListener('submit', this.onFormSubmit.bind(this))

    }

    onFormSubmit(e) {
        e.preventDefault()
        const student = this.getStudentData()
        if (!student.name) {
            this.showError('поле ввода не должно быть пустым')
            return
        }
        this.options.onSubmit(student)
    }
    
    renderForm() {
        const html = fotmTemplate
        this.container.innerHTML = html
    }

    getStudentData() {
        return {
            name: this.form.name.value,
            marks: FormView.DEFAULT_MARKS
        }
    }

    clearForm() {
        this.form.reset()
    }

    showError(e) {
        alert(e)
    }
}