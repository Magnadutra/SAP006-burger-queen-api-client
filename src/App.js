import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Hall from './pages/Hall/Hall';
import Kitchen from './pages/Kitchen/Kitchen';
import AllOrders from './pages/Hall/AllOrders';
import ReadyOrders from './pages/Hall/ReadyOrders';
import './global.css';

function App(user) {
    // const user = true;
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>  
                    <Login />
                </Route>
                <Route path='/login' >
                    <Login />
                </Route>
                <Route path='/register'> 
                    <Register />
                </Route>
                <Route path='/salao'> 
                    {user ? <Hall /> : <Redirect to="/" />}  
                </Route>
                <Route path='/cozinha'> 
                    {user ? <Kitchen /> : <Redirect to="/" />}  
                </Route>
                <Route path='/finalizados'>
                    {user ? <AllOrders /> : <Redirect to="/" />}
                </Route>
                <Route path='/servir'>
                    {user ? <ReadyOrders /> : <Redirect to="/" />}
                </Route>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
