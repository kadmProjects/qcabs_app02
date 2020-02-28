import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginComponent from '../modules/authentication/auth-component/LoginComponent';

export default function Routes() {

    return (
        <Switch>
            <Route path="/" component={ LoginComponent } exact />
            <Route path="/login" component={ LoginComponent } exact />
            <Route path="/dashboard" component={ LoginComponent } exact />
        </Switch>
    );
}