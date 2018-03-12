import React from 'react';
import { Redirect } from 'react-router';
import ErrorHandler from '../ErrorHandler';
import ApiUsers from '../../services/ApiUsers';
import UserInput from '../Input.js';

class Form extends React.Component {
    constructor(props) {
        super(props)

        let id = props.match.params.id;

        this.state = {
            errors: {},
            isRedirectTo: false,
            isNewRecord: !id,
            user: {
                id: '',
                name: '',
                email: '',
                role: 'regular',
                password: ''
            }
        };

        if (!this.state.isNewRecord) {
            this.getUser(id);
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getUser(user_id) {
        let cb = (data) => {
            this.setState({user: {
                id: data.id,
                email: data.email,
                role: data.role,
                name: data.name
            }});
        }
        ApiUsers.get(user_id, cb);
    }

    handleChange(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        let user = {...this.state.user};
        user[name] = value;
        this.setState({user});
    }

    handleSubmit(e) {
        e.preventDefault();

        let cb = (data) => {
            if (data.errors) {
                this.setState({ errors: data.errors });
            } else {
                this.setState({ isRedirectTo: true, errors: {} });
            }
        }

        if (this.state.isNewRecord){
            ApiUsers.create(this.state.user, cb);
        } else {
            ApiUsers.update(this.state.user, cb);
        }
    }

    render(){
        const { isRedirectTo } = this.state;

        const passwordField = () => {
            if (this.state.isNewRecord) {
                return (<UserInput type="password"
                    value={this.state.user.password}
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange} />)
            }
        };

        return (
            <div className="form">
                <ErrorHandler errors={this.state.errors} />

                <h2>User</h2>
                <form onSubmit={this.handleSubmit} className="col-sm-7">
                    <UserInput type="text"
                        value={this.state.user.name}
                        name="name"
                        placeholder="Name"
                        onChange={this.handleChange} />
                    <UserInput type="text"
                        value={this.state.user.email}
                        name="email"
                        placeholder="E-mail"
                        onChange={this.handleChange} />
                    { passwordField() }
                   <div className="form-group">
                        <select value={this.state.user.role} onChange={this.handleChange} name="role">
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="regular">Regular</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type='submit' className='btn btn-primary' value='Save' />
                    </div>
                    { isRedirectTo && (<Redirect to='/users' />) }
                </form>
            </div>
        );
    }
}

export default Form
