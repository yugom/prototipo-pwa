import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Home } from './pages/home'
import { About } from './pages/about'
import { Login } from './pages/login'
import { Header } from './components/mol.header/header'
import { isAuthenticated } from './Auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.locations } }} />
                )
        }
    />
)

export const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />
            </Switch>
        </Router>
    );
}
