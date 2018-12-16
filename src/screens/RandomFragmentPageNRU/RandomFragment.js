import React from "react";
import { Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";

import {
  Right,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentText,
  FragmentButtons,
  Topics,
  TopicsRow,
  Left,
  RandomFragmentS
} from "./Styled";
import { Link } from "react-router-dom";
import PopUpExample from "../PopUp/PopUpExample";
import CategoryTag from "../../common/Tags/CategoryTag";
class RandomFragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomfragment: this.props.randomfragment,
      showpopup: false
    };
    this.popUptoggle = this.popUptoggle.bind(this);
  }

  popUptoggle() {
    this.setState({
      showpopup: !this.state.showpopup
    });
  }

  renderCategoryTags() {
    let topicsTags = {};
    topicsTags = [];
    this.props.topicsArray.forEach((topic, index) => {
      topicsTags.push(
        <Link to={"/fragmentsview/" + topic.id}>
          <CategoryTag name={topic.name} key={index} />
        </Link>
      );
    });
    return topicsTags;
  }

  render() {

    return (
      <RandomFragmentS>
        <MessageFragment>
          <Row>
            <Col>{this.props.randomfragment.title}</Col>
          </Row>
        </MessageFragment>
        <FragmentContent>
          <Row>
            <TopicsRow>
              <Col>
                <Topics>{this.renderCategoryTags()}</Topics>
              </Col>
            </TopicsRow>
          </Row>
          <Row>
            <Left>
              <ImageContainer>
                <img
                  src={
                    "data:image/png;base64, " +
                    this.props.randomfragment.base64_image
                  }
                  alt="Imagen de referencia"
                  width="100%"
                />
              </ImageContainer>
              <FragmentButtons>
                <Link to={"/fragment/" + this.props.randomfragment.id}>
                  <Button color="secondary">Leer este fragmento online</Button>
                </Link>
                <Button color="secondary" onClick={this.popUptoggle}>
                  Leer este fragmento en PDF
                </Button>
                <Button color="secondary" onClick={this.props.request}>
                  Ver otro fragmento
                </Button>
                {this.state.showpopup ? (
                  <PopUpExample popUptoggle={this.popUptoggle} modal={true} />
                ) : null}
              </FragmentButtons>
            </Left>

            <Right>
              <FragmentText>
                {this.props.randomfragment.introduction}
              </FragmentText>
            </Right>
          </Row>
        </FragmentContent>
      </RandomFragmentS>
    );
  }
}

RandomFragment.propTypes = {
  randomfragment: PropTypes.object.isRequired,
  topicsArray: PropTypes.object.isRequired,
  request: PropTypes.func.isRequired
};

export default RandomFragment;
