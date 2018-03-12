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

    static user() {
        if (this.isLoggedIn()){
            return JSON.parse(window.atob(this.getToken().split(".")[1]))
        } else {
            // return a fake user
            return {
                role: null
            }
        }
    }
}

export default Auth;
