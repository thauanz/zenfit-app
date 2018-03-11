import React from 'react';

class BoxFilter extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input type="text"
                    onChange={this.props.onChange}
                    name="dateFrom"
                    value={this.props.dateFrom}
                    className="form-control mb-2"
                    placeholder="Date from"/>
                <input type="text"
                    onChange={this.props.onChange}
                    name="dateTo"
                    value={this.props.dateTo}
                    className="form-control mb-2"
                    placeholder="Date to"/>
                <button type='submit' className='btn btn-secondary mb-2'>Search</button>
            </form>
        )
    }
}

export default BoxFilter
