import React from "react";
import PropTypes from "prop-types";
import {
  ProfileLabelContainer,
  PhotoContainer,
  FollowContainer,
  Palette
} from "./Styled";
import { Row, Col, Button } from "reactstrap";
import StringLabel from "./StringLabel";
export default class ProfileLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: this.props.followed
    };
  }

  changeFollow() {
    let newState = Object.assign({}, this.state);
    newState.followed = !newState.followed;
    this.setState(newState);
  }

  render() {
    console.log(this.state.followed);
    return (
      <ProfileLabelContainer>
        <Row>
          <Col xs="4">
            <PhotoContainer>
              <img
                src={require("../../resources/avatar.png")}
                //  src={this.props.photosrc}
                alt="Imagen de perfil"
              />
            </PhotoContainer>
          </Col>
          <Col xs="6">
            <StringLabel content={this.props.username} username={true} />
            <StringLabel content={"@" + this.props.nickname} username={false} />
          </Col>
          <Col xs="2">
            <FollowContainer>
              {this.state.followed ? (
                <Button color="success" onClick={() => this.changeFollow()}>
                  <img
                    src={require("../../resources/Check_green_icon.png")}
                    alt="Follow button"
                  />
                </Button>
              ) : (
                <Button color="secondary" onClick={() => this.changeFollow()}>
                  <img
                    src={require("../../resources/Check_gray_icon.png")}
                    alt="Unfollow button"
                  />
                </Button>
              )}
            </FollowContainer>
          </Col>
        </Row>
      </ProfileLabelContainer>
    );
  }
}
ProfileLabel.propTypes = {
  username: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  photosrc: PropTypes.string.isRequired,
  followed: PropTypes.bool
};
