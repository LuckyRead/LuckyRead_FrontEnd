import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";
import {
  Right,
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer,
  FragmentButtons,
  Topics,
  TopicsText,
  TopicsRow,
  Left,
  WhiteOpacity,
  Reaction
} from "./Styled";

import pdficon from "../../resources/paper_plane.png";
import { Link } from "react-router-dom";
import axios from "axios";
import PopUpExample from "../PopUp/PopUpExample";
import CategoryTag from "../../common/Tags/CategoryTag";
import ReactionButtons from "../../common/LikesPercentageStatistics/ReactionButtons";
class Fragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fragment: this.props.fragment,
      showpopup: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      showpopup: true
    });
  }

  renderTopicsTags() {
    const topics = Object.keys(this.props.topics);
    const topicsTags = [];
    topics.forEach(key => {
      topicsTags.push(
        <CategoryTag name={this.props.topics[key].name} key={key} />
      );
    });

    return topicsTags;
  }

  render() {
    const statistic = this.props.statistic ? (
      <div>
        <MessageFragment>
          <Row>
            <Col>{this.props.fragment.title}</Col>
          </Row>
        </MessageFragment>
        <FragmentContent>
          <WhiteOpacity>
            <Row>
              <TopicsRow>
                <Col>
                  <Topics>{this.renderTopicsTags()}</Topics>
                </Col>
              </TopicsRow>
            </Row>

            <Row>
              <ImageContainer>
                <img
                  src={
                    "data:image/png;base64, " + this.props.fragment.base64_image
                  }
                  alt="Imagen de referencia"
                  width="100%"
                />
              </ImageContainer>

              <FragmentText>{this.props.fragment.content}</FragmentText>
              <Reaction>
                <ReactionButtons response={this.props.statistic} />
              </Reaction>
            </Row>
          </WhiteOpacity>
        </FragmentContent>
      </div>
    ) : (
      <div>Cargando</div>
    );
    return <div>{statistic}</div>;
  }
}

Fragment.propTypes = {
  fragment: PropTypes.object.isRequired,
  topics: PropTypes.object.isRequired,
  statistic: PropTypes.object.isRequired
};

export default Fragment;
