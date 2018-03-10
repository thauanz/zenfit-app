import Auth from '../modules/Auth'

export default {
    loginUser: (jwt) => {
        var savedJwt = localStorage.getItem('jwt');

        if (savedJwt !== jwt) {
            Auth.authenticate(jwt);
        }
    },
    logoutUser: () => {
        Auth.deauthenticate();
    }
}
