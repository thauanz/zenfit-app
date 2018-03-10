import React from 'react';
import ApiLogin from '../services/ApiLogin';
import { Redirect } from 'react-router'

class Logout extends React.Component {
    render(){
        ApiLogin.logout();

        return (
            <Redirect to='/login' />
        );
    }
}

export default Logout
