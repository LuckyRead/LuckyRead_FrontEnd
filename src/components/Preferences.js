import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import '../styles/preferences.css';

class Preferences extends Component {
  constructor (props) {
    super(props);
  }


  render() {
    return (
      <div class="btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-info active">
          <input type="checkbox" autocomplete="off"/> {this.props.name}
        </label>
      </div>
    );
  }
}

export default Preferences;
