import React from 'react';
import { render } from 'react-dom';

import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer'
//
// const store = createStore(rootReducer);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const store = createStore(
  (state= {}) => state,
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
