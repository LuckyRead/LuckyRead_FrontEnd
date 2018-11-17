import React from "react";
import PropTypes from "prop-types";
import { ProfileMapContainer } from "./Styled";
import { Row, Col } from "reactstrap";
import ProfileLabel from "./ProfileLabel";

export default class ProfileLabelMap extends React.Component {
  renderProfileLabels(data) {
    let profiles = {};
    profiles = [];
    data.forEach(profile => {
      profiles.push(
        <ProfileLabel
          username={profile.name + " " + profile.lastname}
          nickname={profile.username}
          photosrc={"data:image/png;base64, " + profile.profile_photo}
          followed={profile.followed}
        />
      );
    });
    return profiles;
  }
  render() {
    return (
      <ProfileMapContainer>
        {this.renderProfileLabels(this.props.response)}
      </ProfileMapContainer>
    );
  }
}

ProfileLabelMap.propTypes = {
  response: PropTypes.array.isRequired
};
