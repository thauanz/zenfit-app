import React from 'react';
import ApiLogin from '../services/ApiLogin';
import { Redirect } from 'react-router';
import ErrorHandler from './ErrorHandler';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            isRedirectTo: false,
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: this.refs.email.value, password: this.refs.password.value });

        var cb = (data) => {
            if (data.error) {
                this.setState({ errors: { message: data.error }});
            } else {
                this.setState({ isRedirectTo: true, errors: {} });
           }
        };

        ApiLogin.login(this.state.email, this.state.password, cb);

        return;
    }

    render(){
        const { isRedirectTo } = this.state;

        return (
            <div className="form">
                <ErrorHandler errors={this.state.errors} type='alert' />
                <form onSubmit={this.handleSubmit} className="col-sm-7">
                    <h2>Login</h2>
                    <div className="form-group">
                        <input type='email' ref='email' placeholder='Email address' className='form-control' />
                    </div>
                    <div className="form-group">
                        <input type='password' ref='password' placeholder='Password' className='form-control' />
                    </div>
                    <div className="form-group">
                        <input type='submit' className='btn btn-primary' value='Login' />
                    </div>
                    { isRedirectTo && (<Redirect to='/' />) }
                </form>
            </div>
        );
    }
}

export default Login
