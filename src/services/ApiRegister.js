class ApiRegister {
    post(user, cb) {
        var data = JSON.stringify({
            "user": {
                "name": user.name,
                "email": user.email,
                "password": user.password
            }
        });

        fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        })
            .then((response) => response.json())
            .then(cb)
            .catch((error) => {
                console.error(error);
            });
    }
}

export default new ApiRegister();
