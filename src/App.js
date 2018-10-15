import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import {Route, BrowserRouter} from 'react-router-dom';
import Init from './components/Init/Init';
import About from './components/About/AboutPage';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp_LogIn/SignUp';
import LogIn from './components/SignUp_LogIn/LogIn';
import FragmentsPage from './components/FragmentsPage/FragmentsPage';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';
import Fragment from './components/FragmentsPage/Fragment';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact="exact" path='/Init' component={Init}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route exact="exact" path='/signup' component={SignUp}/>
        <Route exact="exact" path='/login' component={LogIn}/>
        <Route exact="exact" path='/' component={FragmentsPage}/>
        <Route exact="exact" path='/categoriespage' component={CategoriesPage}/>
      <Route path='/:fragment_id' component={Fragment}/>
      </div>
    </BrowserRouter>);
  }
}

export default App;
