import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  ProfileContainer,
  ProfileCardContainer,
  TabContainer
} from "./Styled.js";
import ProfileCard from "./ProfileCard";
import ProfileTabs from "./ProfileTabs";


class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  componentWillMount() {
    let username_n = this.props.match.params.username;
    this.setState({
      username: username_n
    })
  }
  render() {
    return (
      <ProfileContainer>
        <Row>
          <Col xs="3">
            <ProfileCardContainer>
              <ProfileCard username={this.state.username} />
            </ProfileCardContainer>
          </Col>
          <Col xs="9">
            <TabContainer>
              <ProfileTabs username={this.state.username} />
            </TabContainer>
          </Col>
        </Row>
      </ProfileContainer>
    );
  }
}

export default ProfilePage;
