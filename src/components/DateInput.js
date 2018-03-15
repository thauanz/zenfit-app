import React from 'react';
import InputMask from 'react-input-mask';

class DateInput extends React.Component {
    render() {
        let className = this.props.className;
        if(!className) {
            className = 'form-control';
        }

        return (
            <div className="form-group">
                <InputMask onChange={this.props.onChange}
                    value={this.props.value}
                    name={this.props.name}
                    className={className}
                    placeholder={this.props.placeholder}
                    mask="99/99/9999"
                    maskChar=" " />
            </div>
        );
    }
}

export default DateInput;
