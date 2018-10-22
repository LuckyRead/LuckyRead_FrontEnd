import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import '../../styles/navbar.css';
import { logout } from '../../actions/authActions.js';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';




class SignedInLinks extends React.Component {
  constructor (props) {
    super(props);
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout()}

  render(){
    return (<div>

      <ul className="right">
        <li>
          <NavLink to='/categoriespage' id="nav">Categorias</NavLink>
        </li>
        <li>
          <NavLink to='/fragmentspage' id="nav">Leer algo</NavLink>
        </li>
        <li>
          <NavLink to='/' id="nav" onClick={this.handleLogout}>Salir</NavLink>
        </li>
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
