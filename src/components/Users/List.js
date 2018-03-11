import React from 'react';
import ApiUsers from '../../services/ApiUsers';
import { Link } from 'react-router-dom';
import TableUsers from './Table';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount() {
        this.Users();
    }

    handleDelete(id, e){
        let index = e.target.attributes.index.value;
        if (window.confirm('Are you sure?')) {
            ApiUsers.delete(id);
            var users = [...this.state.users];
            users.splice(index, 1);
            this.setState({users});
        }
    }

    Users() {
        var cb = (data) => {
            this.setState({ users: data });
        }

        ApiUsers.getAll(cb);
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <p>
                    <Link to="/users/new" className="btn btn-primary">New user</Link>
                </p>
                <div className="row">
                    <div className="col-sm">
                        <TableUsers items={this.state.users} onDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default List
