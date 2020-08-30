import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Main} />
            <Route exact path="/products/:id" component={ProductDetails} />
        </Switch>
    )
}

export default Routes;