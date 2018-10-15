import React, { Component } from 'react';
import fragment from "../fragment.json";
//Components
import Navigation from './Navigation';
import FragmentContainer from './FragmentContainer';
import Reactions from './Reactions';


class AllFragment extends Component {
<<<<<<< HEAD
  constructor (props) {
    super(props);
    this.state = {
      fragment
    }
  }
=======

>>>>>>> 4203fe63930110c1bd702a2a77a17a21d0152d56
  render(){
    console.log(fragment);
    return(
      <div>
        <Navigation/>
        <br/>
        <FragmentContainer title = {fragment.title} introduction = {fragment.introduction} content = {fragment.content} image = {fragment.image}/>
        <br/>
        <Reactions/>
      </div>
    )
  }

}

export default AllFragment
