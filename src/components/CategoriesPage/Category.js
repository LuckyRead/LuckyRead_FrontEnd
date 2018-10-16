import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import '../../styles/preferences.css';

//Icons

class Category extends Component {
  constructor (props) {
    super(props);
  }
  

  render() {
    return (
      <div key={this.props.id}>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={this.props.id}/>
          <label className="custom-control-label" htmlFor={this.props.id}>{this.props.title}</label>
        </div>
      </div>
    );
  }
}

export default Category;
