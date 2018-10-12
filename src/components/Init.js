import React, { Component } from 'react';
import book from '../resources/black_book.png';
import SignInForm from './SignInForm';
import '../styles/init.css';
import '../styles/navbar.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import InitCenter from './InitCenter';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'


import logo from '../resources/white_logo_luckyread.png';



class Init extends Component {

  constructor() {
    super();
  }

  render(){
    return(
  <div className="Init">
    <Navigation/>
  <InitCenter/>
      </div>
    )
  }

}

library.add(faAngleRight)
library.add(faExclamationTriangle)

export default Init
