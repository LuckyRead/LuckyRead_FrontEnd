import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/Init';
import SignIn from './components/SignIn';
import CategoriesPage from './components/CategoriesPage';
import HomepageWithOutLogin from './components/HomepageWithOutLogin';
import Homepage from './components/Homepage';
import AllFragment from './components/AllFragment';
import Account from './components/Account';
import Community from './components/Community';
import FragmentCreation from './components/FragmentCreation';
import EventCreation from './components/EventCreation';
import Help from './components/Help';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
         <div>
             <Route exact path='/' component={App} />
             <Route  path='/signIn' component={SignIn} />
      	     <Route  path='/categoriesPage' component={CategoriesPage} />
      	     <Route  path='/homepageWithOutLogin' component={HomepageWithOutLogin} />
      	     <Route  path='/hompage' component={Homepage} />
      	     <Route  path='/allFragment' component={AllFragment} />
      	     <Route  path='/account' component={Account} />
      	     <Route  path='/community' component={Community} />
      	     <Route  path='/fragmentCreation' component={FragmentCreation} />
      	     <Route  path='/eventCreation' component={EventCreation} />
      	     <Route  path='/help' component={Help} />
         </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
