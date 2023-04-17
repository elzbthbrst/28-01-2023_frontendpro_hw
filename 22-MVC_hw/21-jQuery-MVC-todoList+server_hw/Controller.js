class Controller {
    constructor($rootEl) {
        this.todoCollection = new Collection()
        this.todoFormView = new TodoFormView({ onSubmit: this.save.bind(this) })
        this.todoListView = new TodoListView({
            onDelete: this.deleteTodo.bind(this),
            onEdit: this.editTodo.bind(this),
            onText: this.toggleDone.bind(this)
        })

        this.todoFormView.appendTo($rootEl)
        this.todoListView.appendTo($rootEl)

        this.todoCollection.fench().then(() => {
            this.todoListView.renderTodoList(this.todoCollection.getList())
        })
            .catch(e => this.showError(e))

    }
    save(todo) {
        if (todo.id) {
            this.updateTodo(todo)

        } else {
            this.createTodo(todo)
        }
    }

    updateTodo(todo) {
        this.todoCollection.update(todo.id, todo).then((newTodo) => {
            this.todoListView.replaceTodo(todo.id, newTodo)
            this.todoFormView.clearForm()
        })
            .catch(e => this.showError(e))
    }

    createTodo(todo) {
        this.todoCollection.create(todo).then((newTodo) => {
            this.todoListView.renderTodoItem(newTodo)
            this.todoFormView.clearForm()
        })
            .catch(e => this.showError(e))
    }

    deleteTodo(id) {
        this.todoCollection.delete(id).catch(e => this.showError(e))
        this.todoListView.removeEl(id)
    }

    editTodo(id) {
        const todo = this.findElById(id)
        this.todoFormView.fillForm(todo)
    }


    toggleDone(id) {
        const todo = this.findElById(id)

        todo.done = !todo.done

        this.todoCollection.update(todo.id, todo).catch(e => showError(e))

        this.todoListView.replaceTodo(id, todo)
    }


    findElById(id) {
        return this.todoCollection.find(id)
    }

    showError(error) {
        alert(error.message)
    }
}