import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Init from './components/Init';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
         <div>
             <Route exact path='/' component={Init} />
         </div>
  </BrowserRouter>
  , document.getElementById('root')
);

registerServiceWorker();
