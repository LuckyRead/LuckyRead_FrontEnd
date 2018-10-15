import React from 'react'
import { Link } from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import '../../styles/navbar.css';

const Navbar = () => {
  const links =  <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container" >
        <Link to='/' className="brand-logo" id="nav">LuckyRead</Link>
        {links}
      </div>
    </nav>
  )
}


export default Navbar
