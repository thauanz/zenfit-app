import React from 'react';
import ApiZentimes from '../../services/ApiZentimes';
import { Link } from 'react-router-dom';
import BoxFilter from '../BoxFilter';
import TableZentime from './Table';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            zentimes: [],
            filter: {
                dateFrom: '',
                dateTo: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentWillMount() {
        this.Zentimes();
    }

    handleDelete(id, e){
        let index = e.target.attributes.index.value;
        if (window.confirm('Are you sure?')) {
            ApiZentimes.delete(id);
            var zentimes = [...this.state.zentimes];
            zentimes.splice(index, 1);
            this.setState({zentimes});
        }
    }

    Zentimes() {
        var cb = (data) => {
            this.setState({ zentimes: data });
        }

        ApiZentimes.getAll(cb, this.state.filter);
    }

    handleSearch(e){
        e.preventDefault();
        this.Zentimes();
    }

    handleChange(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        let filter = {...this.state.filter};
        filter[name] = value;
        this.setState({filter});
    }

    render() {
        const zentimes = this.state.zentimes;

        return (
            <div>
                <h2>Zentimes</h2>
                <p>
                    <Link to="/zentimes/new" className="btn btn-primary">New zentime</Link>
                </p>
                <div className="row">
                    <div className="col-sm">
                        <TableZentime items={zentimes} onDelete={this.handleDelete}/>
                    </div>
                    <div className="col-sm-2">
                        <BoxFilter dateFrom={this.state.filter.dateFrom}
                            dateTo={this.state.filter.dateTo}
                            onChange={this.handleChange}
                            onSubmit={this.handleSearch} />
                    </div>
                </div>
            </div>
        );
    }
}

export default List
