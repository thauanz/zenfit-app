import Auth from '../modules/Auth';

const UNAUTHORIZED = 401;

const Request = (params) => {
    const checkStatus = (response) => {
        if (response.status === UNAUTHORIZED) {
            Auth.deauthenticate();
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        } else {
            return response;
        }
    };

    fetch('http://localhost:3001' + params.url_address, {
        method: params.method,
        headers: {
            Authorization: 'Bearer ' + Auth.getToken(),
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: params.body
    })
        .then(checkStatus)
        .then((response) => response.json())
        .then(params.callback)
        .catch((error) => {
            console.error(error);
        });
}

export default Request;
