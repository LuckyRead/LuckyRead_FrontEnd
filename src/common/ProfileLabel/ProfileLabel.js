import React from "react";
import PropTypes from "prop-types";
import {
  ProfileLabelContainer,
  PhotoContainer,
  FollowContainer
} from "./Styled";
import { Row, Col, Button } from "reactstrap";
import StringLabel from "./StringLabel";
import axios from "axios";

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
    if (newState.followed === true) {
      console.log("entra aquí");
      axios({
        method: "POST",
        url: "https://luckyread-backend.herokuapp.com/api/friend/follow",
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        },
        data: {
          username: this.props.nickname
        }
      }).then(
        response => {
          console.log(response);
        },
        err => {
          console.log("no se pudo seguir a la persona");
        }
      );
    } else {
      axios({
        method: "POST",
        url: "https://luckyread-backend.herokuapp.com/api/friend/unfollow",
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        },
        data: {
          username: this.props.nickname
        }
      }).then(
        response => {
          console.log(response);
        },
        err => {
          console.log("no se pudo dar unfollow a la persona");
        }
      );
    }
  }

  render() {
    console.log(this.state.followed);
    return (
      <ProfileLabelContainer>
        <Row>
          <Col xs="4">
            <PhotoContainer>
              <img src={this.props.photosrc} alt="Imagen de perfil" />
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
