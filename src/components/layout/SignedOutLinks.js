import React from 'react'

import '../../styles/navbar.css';
import LoginPage from '../SignUp_LogIn/LoginPage'
// import { login } from '../../actions/authActions';

const SignedOutLinks = () => {
  return (
  <div>
        <ul className="navbar-nav ml-auto">

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ingresar
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <LoginPage/>
      </div>
    </li>

    <div>

    </div>
        </ul>
  </div>)
}

export default SignedOutLinks
