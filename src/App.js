import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Init from './components/Init/Init';
import About from './components/About/AboutPage';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp_LogIn/SignUpPage';
import LoginPage from './components/SignUp_LogIn/LoginPage';
import FragmentsPage from './components/FragmentsPage/FragmentsPage';
import Categories_List from './components/CategoriesPage/Categories_List';
import Fragment from './components/FragmentsPage/Fragment';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div className="App">
        <Navbar/>
      <Switch>
        <Route exact path='/' component={Init}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={LoginPage}/>
      <Route  path='/fragmentspage' component={FragmentsPage}/>
        {/* <Route exact="exact" path='/categoriespage' component={CategoriesPage}/> */}
      <Route path='/:fragment_id' component={Fragment}/>
    </Switch>
      </div>
    </BrowserRouter>);
  }
}

library.add(faSmile);
library.add(faMeh);
library.add(faFrown);
library.add(faCheck);


export default App;
