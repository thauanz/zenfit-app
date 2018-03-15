import React from 'react';
import { Redirect } from 'react-router';
import ErrorHandler from '../ErrorHandler';
import ApiZentimes from '../../services/ApiZentimes';
import FormatDate from '../FormatDate';
import ZentimeInput from '../Input';
import DateInput from '../DateInput';

class Form extends React.Component {
    constructor(props) {
        super(props)

        let id = props.match.params.id;

        this.state = {
            errors: {},
            isRedirectTo: false,
            isNewRecord: !id,
            zentime: {
                id: '',
                date_record: '',
                time_record: ''
            }
        };

        if (!this.state.isNewRecord) {
            this.getZentime(id);
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getZentime(zentime_id) {
        let cb = (data) => {
            this.setState({zentime: {
                id: data.id,
                date_record: FormatDate(data.date_record),
                time_record: data.time_record
            }});
        }
        ApiZentimes.get(zentime_id, cb);
    }

    handleChange(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        let zentime = {...this.state.zentime};
        zentime[name] = value;
        this.setState({zentime});
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
            ApiZentimes.create(this.state.zentime, cb);
        } else {
            ApiZentimes.update(this.state.zentime, cb);
        }
    }

    render(){
        const { isRedirectTo } = this.state;

        return (
            <div className="form">
                <ErrorHandler errors={this.state.errors} />

                <h2>Zentime</h2>
                <form onSubmit={this.handleSubmit} className="col-sm-7">
                    <DateInput onChange={this.handleChange}
                        value={this.state.zentime.date_record}
                        name='date_record'
                        placeholder='Date record'
                        className='form-control' />
                    <ZentimeInput type='number'
                        onChange={this.handleChange}
                        value={this.state.zentime.time_record}
                        name='time_record'
                        placeholder='Time in minutes' />
                    <div className="form-group">
                        <input type='submit' className='btn btn-primary' value='Save' />
                    </div>
                    { isRedirectTo && (<Redirect to='/zentimes' />) }
                </form>
            </div>
        );
    }
}

export default Form
