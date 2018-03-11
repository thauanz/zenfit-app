import React from 'react';
import FormatDate from '../FormatDate';
import { Link } from 'react-router-dom';

const TableRow = (props) => {
    return props.items.map((zentime, index) => {
        return (<tr key={index}>
            <th scope="row">{zentime.id}</th>
            <td>{FormatDate(zentime.date_record)}</td>
            <td>{zentime.time_record}</td>
            <td>
                <div className="btn-group btn-group-sm">
                    <Link
                        to={`/zentimes/${zentime.id}/edit`}
                        className="btn btn-primary">
                        Edit
                    </Link>
                    <button
                        onClick={props.onDelete.bind(this, zentime.id)}
                        index={index}
                        className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </td>
        </tr>);
    });
}

class Table extends React.Component {
    render() {
        if (this.props.items.length <= 0) {
            return <div className="alert alert-info">Sorry, we don't find Zentime</div>;
        }

        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date Record</th>
                        <th scope="col">Time</th>
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
