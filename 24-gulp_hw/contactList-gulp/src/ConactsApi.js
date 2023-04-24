class ContactsApi {
    static API = `https://6425805b7ac292e3cf0278f7.mockapi.io/api/contacts/`
    static request(url = '', method = 'GET', errorMessage, body) {
        return fetch(ContactsApi.API + url, {
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

                throw new Error(`${errorMessage}`);

            })
    }

    static getList() {
        return ContactsApi.request('', 'GET', 'cant retrieve contact list from server')
    }

    static create(contact) {
        return ContactsApi.request('', 'POST', 'cant create contact on server', contact)
    }
    static delete(id) {
        return ContactsApi.request(id, 'DELETE', 'cant delete contact on server')
    }

    static update(id, changes) {
        return ContactsApi.request(id, 'PUT', 'cant update contact on server', changes)
    }

}



