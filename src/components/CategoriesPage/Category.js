import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import '../../styles/preferences.css';

//Icons

class Category extends Component {
  constructor (props) {
    super(props);
  }

  showSubCategories(){
    console.log('subcategories');
  }


  render() {
    return (
      <li className="list-group-item">{this.props.name}</li>
      /*<div key={this.props.topic_id}>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={this.props.id} onClick={this.showSubCategories}/>
          <label className="custom-control-label" htmlFor={this.props.id}>{this.props.name}</label>
        </div>
      </div>*/
    );
  }
}

export default Category;
