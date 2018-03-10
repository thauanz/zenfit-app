import LoginActions from '../actions/LoginActions';

class ApiLogin {
    login(email, password, cb) {
        var data = JSON.stringify({
            "user": {
                "email": email,
                "password": password
            }
        });

        fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        })
            .then((response) => response.json())
            .then((responseJson) => {
                var jwt = responseJson.token;
                LoginActions.loginUser(jwt);
                return responseJson;
            })
            .then(cb)
            .catch((error) => {
                console.error(error);
            });
    }

    logout() {
        LoginActions.logoutUser();
    }
}

export default new ApiLogin();
