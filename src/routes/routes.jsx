import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import isAuthenticated from './services/auth'
import Register from '../Pages/Register/RegisterForm'
import Login from '../Pages/Login/Login'
import Tables from '../Pages/Tables/Tables'
import OrderStatus from '../Pages/OrderStatus/OrderStatus'
import Kitchen from '../Pages/Kitchen/Kitchen'
import NotFound from '../Pages/NotFound/NotFound'
import privateRoute from './privateRoute';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/register' component={Register} />
                <privateRoute path='/tables' component={Tables} />
                <privateRoute path='/orders-status' component={OrderStatus} />
                <privateRoute path='/kitchen' component={Kitchen} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;