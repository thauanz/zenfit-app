import Request from './Request';

class ApiUsers {
    constructor() {
        this.params = {
            url_address: '',
            method: 'GET',
            callback: {},
            body: {}
        }
    }

    getAll(cb, filters) {
        this.params = {
            url_address: '/api/users',
            method: 'GET',
            callback: cb,
            body: {}
        };

        Request(this.params);
    }

    get(user_id, cb) {
        this.params = {
            url_address: '/api/users/' + user_id,
            method: 'GET',
            callback: cb,
            body: {}
        };

        Request(this.params);
    }

    delete(user_id, cb) {
        this.params = {
            url_address: '/api/users/' + user_id,
            method: 'DELETE',
            callback: cb,
            body: {}
        };

        Request(this.params);
    }

    create(user, cb) {
        var data = JSON.stringify({
            "user": {
                "email": user.email,
                "name": user.name,
                "role": user.role,
                "password": user.password
            }
        });

        this.params = {
            url_address: '/api/users/',
            method: 'POST',
            callback: cb,
            body: data
        };

        Request(this.params);
    }

    update(user, cb) {
        var data = JSON.stringify({
            "user": {
                "email": user.email,
                "name": user.name,
                "role": user.role,
                "password": user.password
            }
        });

       this.params = {
            url_address: '/api/users/' + user.id,
            method: 'PUT',
            callback: cb,
            body: data
        };

        Request(this.params);
    }
}

export default new ApiUsers();
