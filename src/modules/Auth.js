class Auth {
    static authenticate(token) {
        localStorage.setItem('jwt', token);
        localStorage.setItem('user', window.atob(token.split(".")[1]));
    }

    static deauthenticate() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
    }

    static isLoggedIn() {
        return localStorage.getItem('jwt') !== null;
    }

    static getToken() {
        return localStorage.getItem('jwt');
    }

    static getUser() {
        if (this.isLoggedIn()){
            return JSON.parse(localStorage.getItem('user'));
        } else {
            // return a fake user
            return {
                role: null
            }
        }
    }

    static isRegularUser() {
        return this.getUser().role === "regular";
    }

    static isManagerUser() {
        return this.getUser().role === "manager";
    }

    static isAdminUser() {
        return this.getUser().role === "admin";
    }

}

export default Auth;
