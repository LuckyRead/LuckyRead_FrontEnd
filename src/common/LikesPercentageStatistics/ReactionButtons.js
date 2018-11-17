import React from "react";
import PropTypes from "prop-types";
import LikesPercentageStatistics from "./LikesPercentageStatistic";
import { Button, Row } from "reactstrap";
import {
  Palette,
  ReactionButtonsContainer,
  StatisticsContainer
} from "./Styled";

export default class ReactionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: this.props.response.percentagelikes,
      typeReaction: "percentagelikes"
    };
  }

  setReaction(reaction) {
    switch (reaction) {
      case "like":
        this.setState({
          percentage: this.props.response.percentagelikes,
          typeReaction: "percentagelikes"
        });

        break;
      case "noreaction":
        this.setState({
          percentage: this.props.response.percentagenoreaction,
          typeReaction: "percentagenoreaction"
        });

        break;
      case "dislike":
        this.setState({
          percentage: this.props.response.percentagedislikes,
          typeReaction: "percentagedislikes"
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Row>
          <ReactionButtonsContainer>
            <Button
              className="ReactionButton"
              color="success"
              onClick={() => this.setReaction("like")}
            >
              Like
            </Button>
            <Button
              className="ReactionButton"
              color="warning"
              onClick={() => this.setReaction("noreaction")}
            >
              Meh
            </Button>
            <Button
              className="ReactionButton"
              color="danger"
              onClick={() => this.setReaction("dislike")}
            >
              Dislike
            </Button>
          </ReactionButtonsContainer>
        </Row>
        <Row>
          <StatisticsContainer>
            <LikesPercentageStatistics
              percentage={this.state.percentage}
              typeReaction={this.state.typeReaction}
            />
          </StatisticsContainer>
        </Row>
      </div>
    );
  }
}
ReactionButtons.propTypes = {
  response: PropTypes.object
};
