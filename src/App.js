import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Init from './components/Init/Init';
import About from './components/About/AboutPage';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp_LogIn/SignUpPage';
import LoginPage from './components/SignUp_LogIn/LoginPage';
import FragmentsPage from './components/FragmentsPage/FragmentsPage';
import Categories_List from './components/CategoriesPage/Categories_List';
import Fragment from './components/FragmentsPage/Fragment';
import FragmentPDF from './components/FragmentsPage/FragmentPDF';
import ProfileContainer from './components/Profile/ProfileContainer';



import requireAuth from './utils/requireAuth';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Init}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/profile' component={requireAuth(ProfileContainer)}/>
          <Route path='/fragmentspage' component={requireAuth(FragmentsPage)}/>
          <Route path='/categoriespage' component={requireAuth(Categories_List)}/>
          <Route path='/pdf/:fragment_id' component={requireAuth(FragmentPDF)}/>
          <Route path='/:fragment_id' component={requireAuth(Fragment)}/>

        </Switch>
      </div>
    </BrowserRouter>);
  }
}



export default App;
