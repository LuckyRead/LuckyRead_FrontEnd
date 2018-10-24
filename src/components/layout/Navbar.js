import React from 'react'
import {Link} from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'
import '../../styles/navbar.css';
import paperplane from '../../resources/paper_plane.png';
import LoginPage from '../SignUp_LogIn/LoginPage'


const Navbar = () => {
  const token = localStorage.getItem('jwtToken');
  const links = token== null ? <SignedOutLinks/> : <SignedInLinks/>;

  return (

    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-brand" id="paperplane">
        <img src={paperplane} alt="paperplane"></img>
      </div>
      <a class="navbar-brand" href="#">LuckyRead</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> */}
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ingresar
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <LoginPage/>
          {/* <a class="dropdown-item " href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a> */}
        </div>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
  </div>
</nav>





<div>
    {/* <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <div className="left" id="paperplane">
        <img src={paperplane} alt="paperplane"></img>
      </div>

      <Link to='/' className="brand-logo" id="nav">LuckyRead</Link>
      {links}
    </div>
  </nav> */}
</div>
</div>
)
}

export default Navbar
