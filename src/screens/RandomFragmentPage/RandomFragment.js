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
import pdficon from "../../resources/paper_plane.png";

class RandomFragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomfragment: this.props.randomfragment,
      path_image: "https://luckyread-backend.herokuapp.com/api/photo/" + this.props.base64_image
    };
  }



  render() {
    return (

      <FragmentContent>


        <Row>
          <Col md="3">
            <ImageContainer>
              <img src={this.state.path_image} alt="Imagen de referencia" />
            </ImageContainer>
            <FragmentButtons>
              <Button color="info">Leer este fragmento online</Button>{" "}
              <Button color="success">Leer este fragmento en PDF</Button>{" "}
              <Button color="warning">Ver otro fragmento</Button>{" "}
            </FragmentButtons>
          </Col>

          <Col md="9">

            <FragmentTitle>{this.props.randomfragment.title}</FragmentTitle>
            <FragmentText>{this.props.randomfragment.introduction}</FragmentText>

          </Col>
        </Row>
      </FragmentContent>

    );
  }
}

RandomFragment.propTypes = {
  randomfragment: PropTypes.object.isRequired,
};


export default RandomFragment;
