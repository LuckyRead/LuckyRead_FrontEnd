import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";
import {
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer,
  FragmentButtons
} from "./Styled";
import RandomFragmentPage from "./RandomFragmentPage";
import pdficon from "../../resources/paper_plane.png";
import { Link } from "react-router-dom";
import axios from "axios";

class RandomFragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomfragment: this.props.randomfragment
    };
  }

  render() {
    return (
      <FragmentContent>
        <Row>
          <Col md="4">
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
            </FragmentButtons>
          </Col>

          <Col md="8">
            <FragmentTitle>{this.props.randomfragment.title}</FragmentTitle>
            <FragmentText>
              {this.props.randomfragment.introduction}
            </FragmentText>
          </Col>
        </Row>
      </FragmentContent>
    );
  }
}

RandomFragment.propTypes = {
  randomfragment: PropTypes.object.isRequired
};

export default RandomFragment;
