import React from 'react';
import LoginActions from '../actions/LoginActions';
import ApiLogin from '../services/ApiLogin';
import { Redirect } from 'react-router';
import ErrorHandler from './ErrorHandler';
import LoginInput from './Input';

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
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var cb = (data) => {
            if (data.error) {
                this.setState({ errors: { message: data.error }});
            } else {
                var jwt = data.token;
                LoginActions.loginUser(jwt);
                this.setState({ isRedirectTo: true, errors: {} });
            }
        };

        ApiLogin.login(this.state.email, this.state.password, cb);

        return;
    }

    handleChange(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        this.setState({[name]: value});
    }

    render(){
        const { isRedirectTo } = this.state;

        return (
            <div className="form">
                <ErrorHandler errors={this.state.errors} type='alert' />
                <form onSubmit={this.handleSubmit} className="col-sm-7">
                    <h2>Login</h2>
                    <LoginInput type='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        name='email'
                        placeholder='Email address' />
                    <LoginInput type='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='password'
                        placeholder='Password' />
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
