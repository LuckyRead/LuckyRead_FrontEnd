import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Init from './components/Init/Init';
import About from './components/About/AboutPage';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp_LogIn/SignUp';
import LogIn from './components/SignUp_LogIn/LogIn';
import HomePage from './components/HomePage/HomePage';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';
import AllFragment from './components/FragmentsPage/AllFragment';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Init}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/login' component={LogIn}/>
          <Route exact path='/homepage' component={HomePage}/>
          <Route exact path='/categoriespage' component={CategoriesPage}/>
          <Route exact path='/FragmentsPage' component={AllFragment}/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
