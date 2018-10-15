import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Init from './components/Init/Init';
import About from './components/About/AboutPage';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp_LogIn/SignUp';
import LogIn from './components/SignUp_LogIn/LogIn';
import HomePage from './components/HomePage/HomePage';


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

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
