import React, { Component } from 'react';

//Components
import Navigation from './Navigation';
import FragmentContainer from './FragmentContainer';
import Reactions from './Reactions';


class AllFragment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }
  render(){
    return(
      <div>
        <Navigation/>
        <br/>
        <FragmentContainer/>
        <br/>
        <Reactions/>
      </div>
    )
  }

}

export default AllFragment
