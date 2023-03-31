class TodoApis {
    static API = `https://6425805b7ac292e3cf0278f7.mockapi.io/api/todo`
    
    static getList() {
        return fetch(TodoApis.API)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('cant retrieve todo list from server')
            })
    }
    static create(todo) {
        return fetch(TodoApis.API, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('cant create todo on server')
            })
    }

    static delete(todoEl) {
        const id = todoEl.id
        return fetch(`https://6425805b7ac292e3cf0278f7.mockapi.io/api/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('cant delete todo on server')
            })
    }
    static update(id, colorStatus) {
        return fetch(`https://6425805b7ac292e3cf0278f7.mockapi.io/api/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                done: colorStatus,
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('cant update todo on server')
            })
    }

}



