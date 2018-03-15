import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../modules/Auth';

const LinkReport = (props) => {
    if (props.role === "regular" && !Auth.isManagerUser()) {
        return (
            <Link
                to={`/reports/${props.userId}`}
                className="btn btn-info">
                Report
            </Link>
        )
    } else {
        return "";
    }
};

const TableRow = (props) => {
    return props.items.map((user, index) => {
        return (<tr key={index}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                <div className="btn-group btn-group-sm">
                    <Link
                        to={`/users/${user.id}/edit`}
                        className="btn btn-primary">
                        Edit
                    </Link>
                    <button
                        onClick={props.onDelete.bind(this, user.id)}
                        index={index}
                        className="btn btn-danger">
                        Delete
                    </button>
                    <LinkReport role={user.role} userId={user.id} />
                </div>
            </td>
        </tr>);
    });
}

class Table extends React.Component {
    render() {
        if (this.props.items.length <= 0) {
            return <div className="alert alert-info">Sorry, we don't find user</div>;
        }

        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Role</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow items={this.props.items} onDelete={this.props.onDelete}/>
                </tbody>
            </table>
        );
    }
}

export default Table;
