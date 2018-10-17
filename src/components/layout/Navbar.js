import React from 'react'
import {Link} from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'
import '../../styles/navbar.css';
import paperplane from '../../resources/paper_plane.png';
import axios from 'axios';


const Navbar = () => {
  const token = localStorage.getItem('jwtToken');
  const links = token== null ? <SignedOutLinks/> : <SignedInLinks/>;

  return (<nav className="nav-wrapper grey darken-3">
    <div className="container">
      <div className="left" id="paperplane">
        <img src={paperplane}></img>
      </div>

      <Link to='/' className="brand-logo" id="nav">LuckyRead</Link>
      {links}
    </div>
  </nav>)
}

export default Navbar
