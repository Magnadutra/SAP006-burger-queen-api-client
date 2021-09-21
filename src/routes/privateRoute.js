import React from "react";
import { Route , Redirect } from "react-router";
import { hasStorageKey } from '../services/storage';

const privateRoute = props => hasStorageKey()
    ? <Route {...props}/>
    : <Redirect to="./"/>

export default privateRoute;    