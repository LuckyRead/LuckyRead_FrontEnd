//Dependencies
import React, { Component } from 'react';

//Components
import Navigation from './Navigation';
import InitCenter from './InitCenter';
//styles
import '../styles/init.css';

//Data
//import items from '../data/menu.js'
//Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

//Add icons

library.add(faSmile)
library.add(faMeh)
library.add(faFrown)

export default Init
