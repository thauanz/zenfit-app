class Auth {
    static authenticate(token) {
        localStorage.setItem('jwt', token);
    }

    static deauthenticate() {
        localStorage.removeItem('jwt');
    }
    static isLoggedIn() {
        return localStorage.getItem('jwt') !== null;
    }

    static getToken() {
        return localStorage.getItem('jwt');
    }
}

export default Auth;
