class Collection {
    static DEFAULT_TODO = {
        done: false
    }
    #todoList = []


    fench() {
        return TodoApis
            .getList()
            .then((list) => {
                this.#todoList = list
            })
    }

    create(todo) {
        return TodoApis
            .create({
                ...Collection.DEFAULT_TODO,
                ...todo
            })
            .then((newTodo) => {
                this.addtListItem(newTodo)

                return newTodo
            })
    }

    update(id, todo) {
        return TodoApis
            .update(id, todo)
            .then((newTodo) => {
                this.editListItem(id, newTodo)

                return newTodo
            })
    }

    delete(id) {
        this.deleteListItem(id)
        return TodoApis.delete(id) //нужна ли заглушка для промиса???
    }

    getList() {
        return this.#todoList
    }

    deleteListItem(id) {
        this.#todoList = this.#todoList
            .filter(todoEl => todoEl.id !== id)
    }

    editListItem(id, todo) {
        this.#todoList = this.#todoList
            .map(element => element.id === id ? todo : element)

    }

    addtListItem(todo) {
        this.#todoList.push(todo)
    }

    find(id) {
        return this.#todoList.find(todoEl => todoEl.id === id)
    }
}