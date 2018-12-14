import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Left,
  Right,
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer,
  FragmentButtons,
  CategoryTagContainer,
  Topics,
  TopicsText,
  TopicsRow,
  RandomFragmentS
} from "./Styled";
import RandomFragmentPage from "./RandomFragmentPage";
import pdficon from "../../resources/paper_plane.png";

import axios from "axios";
import CategoryTag from "../../common/Tags/CategoryTag";

class RandomFragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomfragment: this.props.randomfragment
    };
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
                  <Button color="info">Leer este fragmento online</Button>{" "}
                </Link>
                <Link to={"/pdf/" + this.props.randomfragment.id}>
                  <Button color="info">Leer este fragmento en PDF</Button>{" "}
                </Link>
                <Button color="secondary" onClick={this.props.request}>
                  Ver otro fragmento
              </Button>

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
  randomfragment: PropTypes.object.isRequired
};

export default RandomFragment;
