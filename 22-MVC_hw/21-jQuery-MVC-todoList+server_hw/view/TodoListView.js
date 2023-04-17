class TodoListView {
    static SELECTOR_DELETE_BTN = '.deleteBtn'
    static SELECTOR_LIST_ITEM = '.listElem'
    static SELECTOR_EDIT_BTN = '.editBtn'

    constructor(options) {
        this.$listEl = this.init()
        this.options = options
    }

    init() {
        return $('<ul id="todoList"></ul>')
            .on('click', TodoListView.SELECTOR_DELETE_BTN, (e) => this.onDeleteBtnClick(e))
            .on('click', TodoListView.SELECTOR_EDIT_BTN, (e) => this.onEditBtnClick(e))
            .on('click', TodoListView.SELECTOR_LIST_ITEM, (e) => this.onListTextClick(e))
    }

    onDeleteBtnClick(e) {
        e.stopPropagation()
        const id = this.getTodoElId(e.target)
        this.options.onDelete(id)

    }

    onEditBtnClick(e) {
        e.stopPropagation()

        const id = this.getTodoElId(e.target)
        this.options.onEdit(id)
    }

    onListTextClick(e) {
        e.stopPropagation()

        const id = this.getTodoElId(e.target)
        this.options.onText(id)
    }

    getTodoElId (el) {
        return el.closest(TodoListView.SELECTOR_LIST_ITEM).dataset.id
    }
    removeEl(id) {
        this.$listEl.find(`[data-id= "${id}"]`).remove()
    }

    appendTo($el) {
        $el.append(this.$listEl)
    }

    replaceTodo(id, todo) {
        const oldTodo = this.$listEl.find(`[data-id= "${id}"]`)
        const newTodo = this.getTemplateTodo(todo)
        oldTodo.replaceWith(newTodo)
    }

    renderTodoItem(todo) {
        const html = this.getTemplateTodo(todo)
        this.$listEl.append(html)
    }

    renderTodoList(list) {
        const html = list.map(this.getTemplateTodo).join('')
        this.$listEl.html(html)
    }

    getTemplateTodo(todo) {
        const done = todo.done ? 'background-green' : ''

        return `<li 
        class="listElem ${done}" 
        data-id="${todo.id}"> 
        <span class="listElem-text ">
        ${todo.title}</span> 
        <button class="editBtn">EDIT</button>
        <button class="deleteBtn">Delete</button></li>`

    }
}