import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import state0 from './state0'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, state0, applyMiddleware(thunkMiddleware))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
