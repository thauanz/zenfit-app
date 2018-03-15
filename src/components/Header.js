import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

const NavBarLinks = () => {
    let linkToZentimes = () => {
        return <Link to='/zentimes' key='zentime' className='nav-item nav-link'>Zentimes</Link>;
    };

    let linkToReport = () => {
        return <Link to='/reports' key='report' className='nav-item nav-link'>Report</Link>;
    };

    let linkToUsers = () => {
        return <Link to='/users' key='user' className='nav-item nav-link'>Users</Link>;
    };

    let linkToHome = () => {
        return <Link to='/' key='home' className='nav-item nav-link'>Home</Link>;
    }

    let linkToLogout = () => {
        return <Link to='/logout' key='logout' className='nav-item nav-link'>Logout</Link>;
    }

    if (Auth.isLoggedIn()){
        if (Auth.isRegularUser()) {
            return [
                linkToHome(),
                linkToZentimes(),
                linkToReport(),
                linkToLogout()
            ];
        }
        if (Auth.isManagerUser()) {
            return [
                linkToHome(),
                linkToUsers(),
                linkToLogout()
            ];
        }
        if (Auth.isAdminUser()) {
            return [
                linkToHome(),
                linkToUsers(),
                linkToZentimes(),
                linkToLogout()
            ];
        }
    }
    else {
        return [
            <Link to='/login' key='login' className='nav-item nav-link'>Login</Link>,
            <Link to='/register' key='register' className='nav-item nav-link'>Register</Link>
        ]
    }
};

const Header = () => {
    return (<header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Zenfit</Link>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <NavBarLinks />
                </div>
            </div>
        </nav>
    </header>);
}
export default Header
