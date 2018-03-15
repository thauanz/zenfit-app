import React from 'react';
import Auth from './Auth';

const Authorization = (allowedRoles) => {
    return (WrappedComponent) => {
        return class WithAuthorization extends React.Component {
            constructor(props) {
                super(props)

                this.state = { user: Auth.getUser() }
            }
            render() {
                const { role } = this.state.user
                if (allowedRoles.includes(role)) {
                    return <WrappedComponent {...this.props} />
                } else {
                    return <p className="alert alert-danger">You do not have permission to access this page</p>
                }
            }
        }
    }
}

export default Authorization;
