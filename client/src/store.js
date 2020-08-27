import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(rootReucer, compose());

export default store;