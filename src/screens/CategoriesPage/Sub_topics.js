import React, { Component } from "react";

import "./preferences.css";

//Icons

class Sub_topics extends Component {
  showSubCategories() {
    console.log("subcategories");
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

export default Sub_topics;
