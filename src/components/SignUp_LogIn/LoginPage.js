import React from 'react';
import LoginForm from './LoginForm';
import '../../styles/login.css';


class LoginPage extends React.Component {
  render() {
    return (
      <div className="row" id="loginpage">
          <div className="col-md-12" id="RegistrationForm">
          <LoginForm />
      </div>
      </div>
    );
  }
}

export default LoginPage;
