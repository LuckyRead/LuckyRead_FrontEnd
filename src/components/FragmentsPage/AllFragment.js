import React, { Component } from 'react';
import fragment from "./fragment.json";
//Components
import FragmentContainer from './FragmentContainer';
import Reactions from './Reactions';


class AllFragment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      fragment
    }
  }
  render(){
    console.log(fragment);
    return(
      <div>
        <br/>
        <FragmentContainer title = {fragment.title} introduction = {fragment.introduction} content = {fragment.content} image = {fragment.image}/>
        <br/>

      </div>
    )
  }

}

export default AllFragment
