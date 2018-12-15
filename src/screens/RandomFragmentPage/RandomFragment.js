import React from "react";
import { Row, Col, Button, FormGroup, Label, CustomInput } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faFrown, faMeh } from "@fortawesome/free-solid-svg-icons";
import {
  Left,
  Right,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentText,
  FragmentButtons,
  Topics,
  TopicsRow,
  RandomFragmentS,
  FilterContainer,
  Reaction,
  ReactionS
} from "./Styled";

import CategoryTag from "../../common/Tags/CategoryTag";

class RandomFragment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomfragment: this.props.randomfragment,
      checkedBoxes: this.checkedBoxes()
    };
    this.userClicked = this.userClicked.bind(this);
    this.lrClicked = this.lrClicked.bind(this);
  }

  checkedBoxes() {
    switch (this.props.mode) {
      case 0:
        return [true, true];
      case 1:
        return [true, false];
      case 2:
        return [false, true];
      default:
        break;
    }
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

  userClicked(e) {
    const newState = Object.assign({}, this.state);
    if (e.target.checked) {
      newState.checkedBoxes[0] = true;
      this.setState(newState);
      this.props.modifyMode(0);
    } else {
      if (newState.checkedBoxes[1] === true) {
        newState.checkedBoxes[0] = false;
        this.setState(newState);
        this.props.modifyMode(2);
      }
    }
  }
  lrClicked(e) {
    const newState = Object.assign({}, this.state);
    if (e.target.checked) {
      newState.checkedBoxes[1] = true;
      this.setState(newState);
      this.props.modifyMode(0);
    } else {
      if (newState.checkedBoxes[0] === true) {
        newState.checkedBoxes[1] = false;
        this.setState(newState);
        this.props.modifyMode(1);
      }
    }
  }
  render() {
    return (
      <RandomFragmentS>
        <MessageFragment>
          <Row>
            <Col lg="12">{this.props.randomfragment.title}</Col>
            <ReactionS>
              <Reaction color="#2baf5f">
                <h6>
                  <FontAwesomeIcon icon={faSmile} />
                  {this.props.randomfragment.likes_number}
                </h6>
              </Reaction>
              <Reaction color="#dfdf3a">
                <h6>
                  <FontAwesomeIcon icon={faMeh} />
                  {this.props.randomfragment.meh_number}
                </h6>
              </Reaction>
              <Reaction color="#df993a">
                <h6>
                  <FontAwesomeIcon icon={faFrown} />
                  {this.props.randomfragment.dislikes_number}
                </h6>
              </Reaction>
            </ReactionS>
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
              <FilterContainer>
                <FormGroup>
                  <Label for="exampleCheckbox">
                    ¿Qué fragmentos quiero ver?
                  </Label>
                  <div>
                    <CustomInput
                      type="checkbox"
                      id="LuckyRead"
                      label="Usuarios"
                      checked={this.state.checkedBoxes[0]}
                      onChange={this.userClicked}
                      inline
                    />
                    <CustomInput
                      type="checkbox"
                      id="Users"
                      label="LuckyRead"
                      checked={this.state.checkedBoxes[1]}
                      onChange={this.lrClicked}
                      inline
                    />
                  </div>
                </FormGroup>
              </FilterContainer>
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
                  <Button color="secondary">Leer este fragmento online</Button>{" "}
                </Link>
                <Link to={"/pdf/" + this.props.randomfragment.id}>
                  <Button color="secondary">Leer este fragmento en PDF</Button>{" "}
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
  randomfragment: PropTypes.object.isRequired,
  modifyMode: PropTypes.func.isRequired,
  mode: PropTypes.number.isRequired
};

export default RandomFragment;
