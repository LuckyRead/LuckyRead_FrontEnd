import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './reducers/rootReducer'
//
// const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
