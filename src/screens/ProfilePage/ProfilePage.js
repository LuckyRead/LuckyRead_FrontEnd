import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  ProfileContainer,
  ProfileCardContainer,
  TabContainer
} from "./Styled.js";
import ProfileCard from "./ProfileCard";
import ProfileTabs from "./ProfileTabs";
import ChangeAvatar from "./ChangeAvatar";

class ProfilePage extends Component {
  render() {
    return (
      <ProfileContainer>
        <Row>
          <Col xs="3">
            <ProfileCardContainer>
              <ProfileCard />
            </ProfileCardContainer>
          </Col>
          <Col xs="9">
            <TabContainer>
              <ProfileTabs />
            </TabContainer>
          </Col>
        </Row>
      </ProfileContainer>
    );
  }
}

export default ProfilePage;
