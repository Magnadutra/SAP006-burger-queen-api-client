import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import isAuthenticated from './services/auth'
import Register from './Pages/Register/RegisterForm'
import Login from './Pages/Login/Login'
import Tables from './Pages/Tables/Tables'
import OrderStatus from './Pages/OrderStatus/OrderStatus'
import Kitchen from './Pages/Kitchen/Kitchen'
import NotFound from './Pages/NotFound/NotFound'
import PrivateRoute from './PrivateRoute';

// const PrivateRoute = ({ component:Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         isAuthenticated() ? (
//             <Tables {...props} />
//         ) : (
//             <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//         )
//     )} />
// )

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                {/* <PrivateRoute path='/app' component={Tables} /> */}
                <Route path='/register' component={Register} />
                <PrivateRoute path='/tables' component={Tables} />
                <PrivateRoute path='/orders-status' component={OrderStatus} />
                <PrivateRoute path='/kitchen' component={Kitchen} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;