import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label} from 'recharts';
import ApiReport from '../../services/ApiReport';
import BoxFilter from '../BoxFilter';

class Show extends React.Component {
    constructor(props) {
        super(props)

        let userId = props.match.params.user_id;

        this.state = {
            data: [],
            filter: {
                dateFrom: '',
                dateTo: '',
                userId: userId
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.requestReport = this.requestReport.bind(this);
    }

    componentWillMount() {
        this.requestReport();
    }

    requestReport(){
        var cb = (report) => {
            this.setState({ data: report.data })
        };

        ApiReport.getAll(cb, this.state.filter);
        return;
   }

    handleSearch(e){
        e.preventDefault();
        this.requestReport();
    }

    handleChange(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        let filter = {...this.state.filter};
        filter[name] = value;
        this.setState({filter});
    }

    render () {
        return (
            <div>
                <h2>Report per Week</h2>
                <div className="row">
                    <div className="col-sm">
                        <BarChart width={730} height={300} data={this.state.data}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="label" tick={false}>
                                <Label value="Weeks" offset={0} position="insideBottom" />
                            </XAxis>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Bar dataKey="average" fill="#198c2e" />
                        </BarChart>
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

export default Show;
