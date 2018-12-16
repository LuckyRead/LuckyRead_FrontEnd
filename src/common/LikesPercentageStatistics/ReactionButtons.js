import React from "react";
import PropTypes from "prop-types";
import LikesPercentageStatistics from "./LikesPercentageStatistic";
import { Button, Row } from "reactstrap";
import { ReactionButtonsContainer, StatisticsContainer } from "./Styled";

export default class ReactionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      typeReaction: "percentagelikes"
    };
  }
  screenshotComponent() {}

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

  react(number, id_fragment) {
    switch (number) {
      case -1:
        console.log("Clickeaste dislike al fragmento ", id_fragment);
        break;

      case 0:
        console.log("Clickeaste meh al fragmento ", id_fragment);
        break;

      case 1:
        console.log("Clickeaste like al fragmento ", id_fragment);
        break;
      default:
        break;
    }
  }

  clickedReaction(reaction, number, id_fragment) {
    this.setReaction(reaction);
    this.react(number, id_fragment);
  }

  render() {
    return (
      <div>
        <Row>
          <ReactionButtonsContainer>
            <Button
              className="ReactionButton"
              color="success"
              onClick={() =>
                this.clickedReaction("like", 1, this.props.id_fragment)
              }
            >
              Like
            </Button>
            <Button
              className="ReactionButton"
              color="warning"
              onClick={() =>
                this.clickedReaction("noreaction", 0, this.props.id_fragment)
              }
            >
              Meh
            </Button>
            <Button
              className="ReactionButton"
              color="danger"
              onClick={() =>
                this.clickedReaction("dislike", -1, this.props.id_fragment)
              }
            >
              Dislike
            </Button>
          </ReactionButtonsContainer>
        </Row>
        <Row>
          <div id="statistics" style={{ width: "100%" }}>
            <StatisticsContainer>
              <LikesPercentageStatistics
                percentage={this.state.percentage}
                typeReaction={this.state.typeReaction}
              />
            </StatisticsContainer>
          </div>
        </Row>
      </div>
    );
  }
}
ReactionButtons.propTypes = {
  response: PropTypes.object.isRequired,
  id_fragment: PropTypes.number.isRequired
};
