import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../styles/navbar.css';
import LoginPage from '../SignUp_LogIn/LoginPage'
// import { login } from '../../actions/authActions';

const SignedOutLinks = () => {
  return (
  <div>
        <ul class="navbar-nav ml-auto">
    {/* <li class="nav-item active">
  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
</li> */
    }
    {/* <li class="nav-item">
  <a class="nav-link" href="#">Link</a>
</li> */
    }
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ingresar
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <LoginPage/>
        {/* <a class="dropdown-item " href="#">Another action</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Something else here</a> */
        }
      </div>
    </li>
    {/* <li class="nav-item">
  <a class="nav-link disabled" href="#">Disabled</a>
</li> */
    }
    <div>
    {/*<ul className="right">
      <li><NavLink to='/signup' id="nav">Registrarme</NavLink></li>
      <li><NavLink to='/login' id="nav">Ingresar</NavLink></li>
    </ul> */}
    </div>
        </ul>
  </div>)
}

export default SignedOutLinks
