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
          photosrc: "asdasd"
        },
        {
          username: "Daniela",
          nickname: "teamo2829",
          photosrc: "asdasd"
        },
        {
          username: "Camiela",
          nickname: "amor2129",
          photosrc: "asdasd"
        }
      ]
    };
  }
  render() {
    return (
      <div style={{ width: "200px" }}>
        <ProfileLabelMap response={this.state.response} />
      </div>
    );
  }
}
