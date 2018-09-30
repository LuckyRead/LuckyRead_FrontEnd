import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/Init';
import SignIn from './components/SignIn';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
         <div>
             <Route exact path='/' component={App} />
             <Route  path='/signIn' component={SignIn} />
         </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
