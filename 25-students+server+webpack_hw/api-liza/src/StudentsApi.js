export class StudentsApi {
    static API = `https://644a5e56a8370fb3214c6c71.mockapi.io/api/students/`

    static REQUEST(error,  method = 'GET', id = '', body) {
        return fetch(StudentsApi.API + id, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(error)

            })
    }

    static getList() {
        return StudentsApi.REQUEST('Cant get students from server')
    }
    
    static create(student) {
        return  StudentsApi.REQUEST('cant post students on server', 'POST', '', student)
    }

    static delete(id) {
        return StudentsApi.REQUEST('cant delete students on server', 'DELETE', id)
    }

    static update(id, student) {
        return StudentsApi.REQUEST('cant update students on server', 'PUT', id, student)
    }
}






