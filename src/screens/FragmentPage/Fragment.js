import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faFrown, faMeh } from "@fortawesome/free-solid-svg-icons";
import {
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentText,
  Topics,
  TopicsRow,
  Content,
  Reaction,
  Comments,
  Reactionc,
  ReactionS
} from "./Styled";
import { Button } from "reactstrap";
import { history } from "../../_helpers";
import CommentMap from "../../common/Comment/CommentMap";
import CategoryTag from "../../common/Tags/CategoryTag";
import ReactionButtons from "../../common/LikesPercentageStatistics/ReactionButtons";
import MakeComment from "../../common/Comment/MakeComment";
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

  handleClick() {
    history.goBack();
  }

  renderTopicsTags() {
    const topics = Object.keys(this.props.topics);
    const topicsTags = [];
    topics.forEach(key => {
      topicsTags.push(
        <Link to={"/fragmentsview/" + this.props.topics[key].id}>
          <CategoryTag name={this.props.topics[key].name} key={key} />
        </Link>
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
            <ReactionS>
              <Reactionc color="#2baf5f">
                <h6>
                  <FontAwesomeIcon icon={faSmile} />
                  {this.props.fragment.likes_number}
                </h6>
              </Reactionc>
              <Reactionc color="#dfdf3a">
                <h6>
                  <FontAwesomeIcon icon={faMeh} />
                  {this.props.fragment.meh_number}
                </h6>
              </Reactionc>
              <Reactionc color="#df993a">
                <h6>
                  <FontAwesomeIcon icon={faFrown} />
                  {this.props.fragment.dislikes_number}
                </h6>
              </Reactionc>
            </ReactionS>
          </Row>
        </MessageFragment>
        <FragmentContent>
          <Content>
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
                <ReactionButtons
                  response={this.props.statistic}
                  id_fragment={this.state.fragment.id}
                />
              </Reaction>
            </Row>
            <br />
            <Button onClick={this.handleClick}>Volver</Button>
          </Content>
          <Row>
            <MakeComment type="comment" />
          </Row>
          <Comments>
            <Row>
              <Col>
                <CommentMap fragmentid={this.state.fragment.id} />
              </Col>
            </Row>
          </Comments>
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
