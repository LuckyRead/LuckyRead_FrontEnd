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
  FragmentButtons,
  TagsContainer
} from "./Styled";
import CategoryTag from "./CategoryTag";
import pdficon from "../../resources/paper_plane.png";

class RandomFragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomfragment: this.props.randomfragment,
    };
  }
  renderCategoryTags(categoryArray) {
    let categoryTags = {};
    categoryTags = [];
    categoryArray.forEach(category => {
      categoryTags.push(<CategoryTag name={category.name} />);
    });
    return categoryTags;
  }
  render() {
    return (
      <FragmentContent>
        <Row>
          <Col md="4">
            <ImageContainer>
              <img src={"data:image/png;base64, " + this.props.randomfragment.base64_image} alt="Imagen de referencia" width= "100%" />
            </ImageContainer>
            <FragmentButtons>
              <Button color="info">Leer este fragmento online</Button>{" "}
              <Button color="success">Leer este fragmento en PDF</Button>{" "}
              <Button color="warning">Ver otro fragmento</Button>{" "}
            </FragmentButtons>
          </Col>

          <Col md="8">
            <FragmentTitle>{this.props.randomfragment.title}</FragmentTitle>
            <FragmentText>
              {this.props.randomfragment.introduction}
            </FragmentText>
            <TagsContainer>
              {this.renderCategoryTags(this.state.randomfragment)}
            </TagsContainer>
          </Col>
        </Row>
      </FragmentContent>
    );
  }
}

RandomFragment.propTypes = {
  randomfragment: PropTypes.array.isRequired
};

export default RandomFragment;
