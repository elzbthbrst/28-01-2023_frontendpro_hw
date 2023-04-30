import {StudentsApi} from './StudentsApi'


export class Collection {
    #studentsList = []


    fetch() {
        return StudentsApi.getList()
            .then((list) => {
                this.#studentsList = list
            })
    }

    update(id, student) {
        return StudentsApi.update(id, student)
            .then((id, newStudent) => {
                this.updateList(id, newStudent)

                return newStudent
            })
    }

    create(student) {
        return StudentsApi.create(student)
            .then((newStudent) => {
                this.addStudent(newStudent)

                return newStudent
            })
    }

    delete(id) {
        this.deleteStudent(id)
        return StudentsApi.delete(id)
    }




    getList() {
        return this.#studentsList
    }

    updateList(id, newStudent) {
        this.#studentsList.map(el => el.id === id ? newStudent : el)
    }

    addStudent(student) {
        this.#studentsList.push(student)
    }

    deleteStudent(id) {
        this.#studentsList.filter(current => current.id !== id)
    }

    findElById(id) {
        return this.#studentsList.find(el => el.id === id)
    }

}