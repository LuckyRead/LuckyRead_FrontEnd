import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'
import '../../styles/navbar.css';
import paperplane from '../../resources/paper_plane.png';


class Navbar extends Component {
  render(){
    const token = localStorage.getItem('jwtToken');
    const links = token == null
      ? <SignedOutLinks/>
      : <SignedInLinks/>;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
          <div className="navbar-brand" id="paperplane">
            <img src={paperplane} alt="paperplane"></img>
          </div>
          { token==null ?
                  <Link to='/' className="navbar-brand" id="brand">LuckyRead</Link>
                  :
                  <a className="navbar-brand" id="brand">LuckyRead</a>
          }

          {/*
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {links}
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
      </nav> */
        }
        </div>
      </div>
    )
  }
}

export default Navbar
