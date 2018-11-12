import React from "react";
import PropTypes from "prop-types";
import { Palette, PercentageContainer } from "./Styled";
import CircularProgressbar from "react-circular-progressbar";

export default class LikesPercentageStatistics extends React.Component {
  render() {
    const percentage = this.props.percentage;
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
