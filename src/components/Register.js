import React from 'react';
import ApiRegister from '../services/ApiRegister';
import { Redirect } from 'react-router';
import ErrorHandler from './ErrorHandler';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            isRedirectTo: false,
            user: {
                name: '',
                email: '',
                password: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var cb = (data) => {
            if (data.errors) {
                this.setState({ errors: data.errors });
            } else {
                this.setState({ isRedirectTo: true, errors: {} });
           }
        };

        ApiRegister.post(this.state.user, cb);
        return;
    }

    handleChange(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        let user = {...this.state.user};
        user[name] = value;
        this.setState({user});
    }

    render(){
        const { isRedirectTo } = this.state;

        return (
            <div className="form">
                <ErrorHandler errors={this.state.errors} />

                <form onSubmit={this.handleSubmit} className="col-sm-7">
                    <h2>Register</h2>
                    <div className="form-group">
                        <input type='text'
                            onChange={this.handleChange}
                            value={this.state.user.name}
                            name='name'
                            placeholder='Full name'
                            className='form-control' />
                    </div>
                    <div className="form-group">
                        <input type='email'
                            onChange={this.handleChange}
                            value={this.state.user.email}
                            name='email'
                            placeholder='Email address'
                            className='form-control' />
                    </div>
                    <div className="form-group">
                        <input type='password'
                            onChange={this.handleChange}
                            value={this.state.user.password}
                            name='password'
                            placeholder='Password'
                            className='form-control' />
                    </div>
                    <div className="form-group">
                        <input type='submit' className='btn btn-primary' value='Register' />
                    </div>
                    { isRedirectTo && (<Redirect to='/login' />) }
                </form>
            </div>
        );
    }
}

export default Register
