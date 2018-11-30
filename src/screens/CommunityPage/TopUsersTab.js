import React from "react";
import PropTypes from "prop-types";
import { Palette, TabContent } from "./Styled";
import StatisticLabel from "./StatisticLabel";
//  Nada mas es borrar el state y cambiar el contenido a que lea de props
export default class PersonalActivityTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top_users: []
    };
  }
  render() {
    return <TabContent />;
  }
}

PersonalActivityTab.propTypes = {
  top_users: PropTypes.array.isRequired
};
