import React from "react";
import PropTypes from "prop-types";
import LikesPercentageStatistics from "./LikesPercentageStatistic";
import { Button, Row } from "reactstrap";
import {
  Palette,
  ReactionButtonsContainer,
  StatisticsContainer
} from "./Styled";
import html2canvas from "html2canvas";

export default class ReactionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      typeReaction: "percentagelikes"
    };
    console.log("response", this.props.response);
  }
  screenshotComponent() {
    const input = document.getElementById("statistics");
    html2canvas(input, {
      allowTaint: true,
      height: "3000px",
      width: "3000px"
    }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      window.open(imgData);
    });
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
              outline
              color="success"
              onClick={() => this.setReaction("like")}
              //  onClick={() => this.screenshotComponent()}
            >
              Like
            </Button>
            <Button
              className="ReactionButton"
              outline
              color="warning"
              onClick={() => this.setReaction("noreaction")}
            >
              Meh
            </Button>
            <Button
              className="ReactionButton"
              outline
              color="danger"
              onClick={() => this.setReaction("dislike")}
            >
              Dislike
            </Button>
          </ReactionButtonsContainer>
        </Row>
        <Row>
          <div id="statistics">
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
  response: PropTypes.object.isRequired
};
