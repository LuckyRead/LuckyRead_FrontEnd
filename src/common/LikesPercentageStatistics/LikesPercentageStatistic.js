import React from "react";
import PropTypes from "prop-types";
import { PercentageContainer } from "./Styled";
import CircularProgressbar from "react-circular-progressbar";

export default class LikesPercentageStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
  }

  render() {
    const percentage = this.props.percentage
      ? this.props.percentage
      : this.state.percentage;
    if (this.props.typeReaction === "percentagelikes") {
      return (
        <PercentageContainer>
          <CircularProgressbar
            className="like"
            percentage={percentage}
            text={`${percentage}%`}
            initialAnimation="true"
          />
        </PercentageContainer>
      );
    } else if (this.props.typeReaction === "percentagedislikes") {
      return (
        <PercentageContainer>
          <CircularProgressbar
            className="dislike"
            percentage={percentage}
            text={`${percentage}%`}
            initialAnimation="true"
          />
        </PercentageContainer>
      );
    } else if (this.props.typeReaction === "percentagenoreaction") {
      return (
        <PercentageContainer>
          <CircularProgressbar
            className="noreaction"
            percentage={percentage}
            text={`${percentage}%`}
            initialAnimation="true"
          />
        </PercentageContainer>
      );
    }
  }
}
LikesPercentageStatistics.propTypes = {
  percentage: PropTypes.number.isRequired,
  typeReaction: PropTypes.string.isRequired
};
