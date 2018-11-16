import React from "react";
import ProfileLabelMap from "../common/ProfileLabel/ProfileLabelMap";

export default class ProfileLabelMapTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [
        {
          username: "Camilo",
          nickname: "camiela2121",
          photosrc: "asdasd",
          followed: true
        },
        {
          username: "Daniela",
          nickname: "teamo2829",
          photosrc: "asdasd",
          followed: false
        },
        {
          username: "Camiela",
          nickname: "amor2129",
          photosrc: "asdasd",
          followed: true
        }
      ]
    };
  }
  render() {
    return (
      <div style={{ width: "300px" }}>
        <ProfileLabelMap response={this.state.response} />
      </div>
    );
  }
}
