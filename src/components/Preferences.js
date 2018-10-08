import React, { Component } from 'react';
import '../styles/preferences.css';

class Preferences extends Component {
  constructor() {
    super();
  }

  handleCheckBox(){
    console.log('click');
  }

  render(){
    return(
            <div className="toggle-button toggle-button--vesi">
                <input id="toggleButton5" type="checkbox" />
                <label htmlFor="toggleButton5" data-on-text={this.props.name} data-off-text={this.props.name}></label>
                <div className="toggle-button__icon"></div>
            </div>

    )
  }

}

export default Preferences
