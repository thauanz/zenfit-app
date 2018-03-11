import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Zenfit</Link>
            <div className="collapse navbar-collapse">
                { Auth.isLoggedIn() ? (
                    <div className="navbar-nav">
                        <Link to='/' className='nav-item nav-link'>Home</Link>
                        <Link to='/zentimes' className='nav-item nav-link'>Zentimes</Link>
                        <Link to='/users' className='nav-item nav-link'>Users</Link>
                        <Link to='/logout' className='nav-item nav-link'>Logout</Link>
                    </div>
                ) : (
                    <div className="navbar-nav">
                        <Link to='/login' className='nav-item nav-link'>Login</Link>
                        <Link to='/register' className='nav-item nav-link'>Register</Link>
                    </div>
                )}
            </div>
        </nav>
    </header>
)

export default Header
