import React from 'react'
import {NavLink} from 'react-router-dom'

import '../../styles/navbar.css';
const SignedInLinks = () => {


  return (<div>

    <ul className="right">
      <li>
        <NavLink to='/categoriespage' id="nav">Categorias</NavLink>
      </li>
      <li>
        <NavLink to='/fragmentspage' id="nav">Home</NavLink>
      </li>
      <li>
        <NavLink to='/' id="nav">Salir</NavLink>
      </li>
    </ul>
  </div>)
}


export default SignedInLinks
