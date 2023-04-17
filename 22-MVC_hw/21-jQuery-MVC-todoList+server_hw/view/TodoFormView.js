class TodoFormView {
    constructor(options) {
        this.$form = this.init()
        this.$inputs = this.$form.find('input')
        this.options = options
    }

    init() {
        return $(`
        <form action="" id="todoForm">
        <input id="id" type="hidden">
        <input id="title" type="text">
        <button>Отправить</button>
        </form>
        `)
            .on('submit', (e) => this.onFormSubmit(e))
    }

    onFormSubmit(e) {
        e.preventDefault()
        const data = this.getTodo()
        if (!this.isTodoValid(data)) {
            showError(new Error('Enter Wrong Data'))
            return
        }
        this.options.onSubmit(data)
    }

    isTodoValid(todo) {
        return todo.title !== ''
    }

    appendTo($el) {
        $el.append(this.$form)
    }

    getTodo() {
        const data = {}
        for (const input of this.$inputs) {
            data[input.id] = input.value
        }
        return data
    }

    clearForm() {
        for (const input of this.$inputs) {
            input.value = ''
        }
    }

    fillForm(data) {
        for (const input of this.$inputs) {
            input.value = data[input.id]
        }
    }



}