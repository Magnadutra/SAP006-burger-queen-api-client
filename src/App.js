import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import './global.css';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Hall from './pages/Hall';


function App() {
    const user = true;

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
                <Route path='/hall'> 
                    {user ? <Hall /> : <Redirect to="/" />}  
                </Route>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
