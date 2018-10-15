import React, { Component } from 'react';

//Components
import Navigation from './Navigation';
import FragmentContainer from './FragmentContainer';
import Reactions from './Reactions';


class AllFragment extends Component {

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
