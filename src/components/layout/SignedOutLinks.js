import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../styles/navbar.css';
// import { login } from '../../actions/authActions';

const SignedOutLinks = () => {
  return (<div>

    <ul className="right">
      <li>
        <NavLink to='/signup' id="nav">Signup</NavLink>
      </li>
      <li>
        <NavLink to='/login' id="nav">Login</NavLink>
      </li>
    </ul>
  </div>)
}

export default SignedOutLinks
