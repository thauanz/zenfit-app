import React from 'react'

class ErrorHandler extends React.Component {
    formFieldError =  (field, message) => {
        return <li key={field}><strong>{field}:</strong> {message}</li>;
    }

    formError = (keys, errors) => {
        const itemsError = keys.map(key =>
            this.formFieldError(key, errors[key])
        );

        return (
            <div className="alert alert-warning">
                <h5 className="alert-heading">Ops!</h5>
                <ul>
                    { itemsError }
                </ul>
            </div>
        );
    }

    simpleMessage = (message) => {
        return (
            <div className="alert alert-warning">
                { message }
            </div>
        );
    }

    render() {
        const errors = this.props.errors;
        const keys = Object.keys(errors);
        const typeError = this.props.type;

        if (!typeError && keys.length > 0) {
            return this.formError(keys, errors);
        } else if (typeError === "alert" && keys.length > 0){
            return this.simpleMessage(errors.message);
        } else {
            return "";
        }
    }
}

export default ErrorHandler
