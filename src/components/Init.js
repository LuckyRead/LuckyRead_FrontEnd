import React, { Component } from 'react';
import book from '../resources/black_book.png';

import '../styles/init.css';
import '../styles/navbar.css';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import InitCenter from './InitCenter';

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

export default Init
