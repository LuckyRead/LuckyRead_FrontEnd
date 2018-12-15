import React from "react";
import PropTypes from "prop-types";
import { CategoryTagContainer } from "./Styled";

export default class CategoryTag extends React.Component {
  render() {
    return <CategoryTagContainer>{this.props.name}</CategoryTagContainer>;
  }
}

CategoryTag.propTypes = {
  name: PropTypes.string.isRequired
};
