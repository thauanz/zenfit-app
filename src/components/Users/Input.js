import React from 'react';

class Input extends React.Component {
    render() {
        if (this.props.isVisible) {
            return "";
        }
        return (
            <div className="form-group">
                <input type={this.props.type}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    className='form-control'
                />
            </div>
        );
    }
}

export default Input;
