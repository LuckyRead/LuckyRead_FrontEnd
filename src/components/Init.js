//Dependencies
import React, { Component } from 'react';

import book from '../resources/black_book.png';
import SignUpForm from './SignUpForm';
import '../styles/init.css';
import '../styles/navbar.css';

import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import InitCenter from './InitCenter';

//Data
//import items from '../data/menu.js'
//Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'



class Init extends Component {

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
library.add(faSmile)
library.add(faMeh)
library.add(faFrown)

export default Init
