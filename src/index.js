import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Init from './components/Init';
import SignUp from './components/SignUp';
import CategoriesPage from './components/CategoriesPage';
import HomePage from './components/HomePage/HomePage';
import HomePage_Categories_List from './components/HomePage/HomePage_Categories_List';
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
             <Route exact path='/' component={Init} />
             <Route  path='/SignUp' component={SignUp} />
      	     <Route  path='/categoriesPage' component={CategoriesPage} />
           <Route  path='/HomePage' component={HomePage} />
         <Route  path='/HomePage_Categories_List' component={HomePage_Categories_List} />
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
