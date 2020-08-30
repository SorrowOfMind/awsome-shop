import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Main} />
        </Switch>
    )
}

export default Routes;