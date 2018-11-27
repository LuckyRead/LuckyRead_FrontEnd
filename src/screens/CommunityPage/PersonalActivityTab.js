import React from "react";
import PropTypes from "prop-types";
import { Palette, TabContent } from "./Styled";
import StatisticLabel from "./StatisticLabel";

export default class PersonalActivityTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head1: "¡Has realizado",
      number1: 100,
      foot1: "comentarios en total!"
    };
  }
  render() {
    return (
      <TabContent>
        <StatisticLabel
          head={this.state.head1}
          number={this.state.number1}
          foot={this.state.foot1}
        />
      </TabContent>
    );
  }
}

PersonalActivityTab.propTypes = {};
