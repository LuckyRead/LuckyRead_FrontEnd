import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class Preferences extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div>
          <Button color="info" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>{this.props.name}</Button>

      </div>

    );
  }
}

export default Preferences;
