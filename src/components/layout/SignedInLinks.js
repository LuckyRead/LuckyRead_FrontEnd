import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import '../../styles/navbar.css';
import { logout } from '../../actions/authActions.js';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';




class SignedInLinks extends Component {


  handleLogout = event => {
    event.preventDefault();
    this.props.logout()}





  render(){
    return (
      <div>
        <ul className="navbar-nav ml-auto">
       <li className="nav-item">
      <Link to='fragmentspage' className="nav-link" >Leer algo <span className="sr-only">(current)</span></Link>
    </li>
       <li className="nav-item">
      <Link to='categoriespage' className="nav-link">Categorias</Link>
    </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Perfil
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
           <a className="dropdown-item " disabled>{localStorage.current_user}</a>
        <div className="dropdown-divider"></div>
      <Link to='/' className="dropdown-item" onClick={this.handleLogout} id="exitButton">Salir</Link>
          </div>
        </li>
        {/* <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li> */}

      {/* <ul className="right">
        <li>
          <NavLink to='/categoriespage' id="nav">Categorias</NavLink>
        </li>
        <li>
          <NavLink to='/fragmentspage' id="nav">Leer algo</NavLink>
        </li>
        <li>
          <NavLink to='/' id="nav" onClick={this.handleLogout}>Salir</NavLink>
        </li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          DC
        </NavLink></li>
      </ul>*/}
              </ul>
    </div>)


  }
}



SignedInLinks.propTypes = {
  logout: PropTypes.func.isRequired
}

SignedInLinks.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { logout })(SignedInLinks);
