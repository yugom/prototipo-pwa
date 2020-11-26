import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Home } from './pages/home'
import { About } from './pages/about'
import { Header } from './components/mol.header/header'

export const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    );
}