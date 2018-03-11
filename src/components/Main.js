import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import ZentimeList from './Zentimes/List';
import ZentimeForm from './Zentimes/Form';

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/zentimes/new' component={ZentimeForm}/>
            <Route path='/zentimes/:id/edit' component={ZentimeForm}/>
            <Route path='/zentimes' component={ZentimeList}/>
            <Route path='/logout' component={Logout}/>
        </Switch>
    </main>
)

export default Main
