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
  Left
} from "./Styled";
import RandomFragmentPage from "./RandomFragmentPageNRU";
import pdficon from "../../resources/paper_plane.png";
import { Link } from "react-router-dom";
import axios from "axios";
import PopUpExample from "../PopUp/PopUpExample";
import CategoryTag from "../../common/Tags/CategoryTag";
class RandomFragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomfragment: this.props.randomfragment,
      showpopup: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      showpopup: true
    });
  }

  renderCategoryTags() {
    let topicsTags = {};
    topicsTags = [];
    this.props.topicsArray.forEach((topic, index) => {
      topicsTags.push(<CategoryTag name={topic.name} key={index} />);
    });
    return topicsTags;
  }

  render() {
    return (
      <div>
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
                  <Button color="success">Leer este fragmento online</Button>{" "}
                </Link>
                <Button color="success" onClick={this.toggle}>
                  Leer este fragmento en PDF
                </Button>{" "}
                <Button color="success" onClick={this.props.request}>
                  Ver otro fragmento
                </Button>{" "}
                {this.state.showpopup ? <PopUpExample /> : null}
              </FragmentButtons>
            </Left>

            <Right>
              <FragmentText>
                {this.props.randomfragment.introduction}
              </FragmentText>
            </Right>
          </Row>
        </FragmentContent>
      </div>
    );
  }
}

RandomFragment.propTypes = {
  randomfragment: PropTypes.object.isRequired,
  topicsArray: PropTypes.array.isRequired,
  request: PropTypes.func.isRequired
};

export default RandomFragment;
