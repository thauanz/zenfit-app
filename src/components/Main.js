import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import ZentimeList from './Zentimes/List';
import ZentimeForm from './Zentimes/Form';
import UserList from './Users/List';
import UserForm from './Users/Form';
import Authorization from '../modules/Authorization';

const ZentimeAuthorization = Authorization(['regular', 'admin']);
const UserAuthorization = Authorization(['manager', 'admin']);

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path='/' component={Authorization(['regular', 'manager', 'admin'])(Home)}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/zentimes/new' component={ZentimeAuthorization(ZentimeForm)} />
            <Route path='/zentimes/:id/edit' component={ZentimeAuthorization(ZentimeForm)} />
            <Route path='/zentimes' component={ZentimeAuthorization(ZentimeList)} />
            <Route path='/users/new' component={UserAuthorization(UserForm)}/>
            <Route path='/users/:id/edit' component={UserAuthorization(UserForm)}/>
            <Route path='/users' component={UserAuthorization(UserList)}/>
            <Route path='/logout' component={Logout}/>
        </Switch>
    </main>
)

export default Main
