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

import pdficon from "../../resources/paper_plane.png";
import { Link } from "react-router-dom";
import axios from "axios";
import PopUpExample from "../PopUp/PopUpExample";
import CategoryTag from "../../common/Tags/CategoryTag";
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

  //   renderCategoryTags() {
  //     let topicsTags = {};
  //     topicsTags = [];
  //     this.props.topics.forEach((topic, index) => {
  //       topicsTags.push(<CategoryTag name={topic.name} key={index} />);
  //     });
  //     return topicsTags;
  //   }

  render() {
    return (
      <div>
        <MessageFragment>
          <Row>
            <Col>{this.props.fragment.title}</Col>
          </Row>
        </MessageFragment>
        <FragmentContent>
          {/* <Row>
            <TopicsRow>
              <Col>
                <Topics>{this.renderCategoryTags()}</Topics>
              </Col>
            </TopicsRow>
          </Row>*/}
          <Row>
            <Left>
              <ImageContainer>
                <img
                  src={
                    "data:image/png;base64, " + this.props.fragment.base64_image
                  }
                  alt="Imagen de referencia"
                  width="100%"
                />
              </ImageContainer>
              <FragmentButtons>
                <Link to={"/fragment/" + this.props.fragment.id}>
                  <Button color="secondary">Leer este fragmento online</Button>{" "}
                </Link>
                <Button color="secondary" onClick={this.toggle}>
                  Leer este fragmento en PDF
                </Button>{" "}
                <Button color="secondary" onClick={this.props.request}>
                  Ver otro fragmento
                </Button>{" "}
                {this.state.showpopup ? <PopUpExample /> : null}
              </FragmentButtons>

              <FragmentText>{this.props.fragment.introduction}</FragmentText>
            </Left>
          </Row>
        </FragmentContent>
      </div>
    );
  }
}

Fragment.propTypes = {
  fragment: PropTypes.object.isRequired,
  topics: PropTypes.object.isRequired,
  statistic: PropTypes.object.isRequired
};

export default Fragment;
