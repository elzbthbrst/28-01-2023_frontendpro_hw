import {Collection} from './model/Collection'
import {FormView} from './view/FormView'
import {StudentsListView} from './view/StudentsView'






export class Controller {
    constructor(container) {
        this.container = container
        this.collection = new Collection
        this.formView = new FormView(this.container, { onSubmit: this.createStudent.bind(this) })
        this.studentsListView = new StudentsListView(this.container,
            {
                onDelete: this.deleteStudent.bind(this),
                onInput: this.updateMarks.bind(this)
            })

            this.collection.fetch()
            .then(() => {
                this.studentsListView.renderStudentsList(this.collection.getList())
            })
            .catch(e => this.showError(e))
    }

    createStudent (student) {
        this.collection.create(student)
            .then((newStudent) => {
                this.studentsListView.renderStudent(newStudent)
                this.formView.clearForm()
            })
            .catch(e => this.showError(e))
    }

    deleteStudent(id, student) {
        this.collection.delete(id).catch(e => this.showError(e))
        student.remove()
    }
    
    updateMarks(id, index, newMark) {
        const studentEl = this.collection.findElById(id) 
        studentEl.marks[index] = newMark
        this.collection.update(id, studentEl).catch(e => this.showError(e))
    }

    showError(e) {
        alert(e)
    }
}