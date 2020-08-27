import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReucer from './reducers/rootReducer';

const middleware = [thunk];

const store = createStore(rootReucer, compose(applyMiddleware(...middleware),  window.__REDUX_DEVTOOLS_EXTENSION__
? window.__REDUX_DEVTOOLS_EXTENSION__()
: (a) => a));

export default store;