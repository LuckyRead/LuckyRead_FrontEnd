import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import { Palette, TabContent, TrophyS } from "./Styled";
import StatisticLabel from "./StatisticLabel";
import ProfileLabelMap from "../../common/ProfileLabel/ProfileLabelMap";

//  Nada mas es borrar el state y cambiar el contenido a que lea de props
export default class TopUsersTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [
        {
          username: "camiela2121",
          name: "Camilo",
          lastname: "Sanchez",
          profile_photo: "asdasd",
          followed: true
        },
        {
          username: "danicastel2829",
          name: "Daniela",
          lastname: "Castellanos",
          profile_photo: "asdasd",
          followed: true
        },
        {
          username: "gdgarcia1235",
          name: "German",
          lastname: "Garcia",
          profile_photo: "asdasd",
          followed: false
        },
        {
          username: "salcq2135",
          name: "Samael",
          lastname: "Sacedo",
          profile_photo: "asdasd",
          followed: false
        },
        {
          username: "lm2315",
          name: "Laura",
          lastname: "Molina",
          profile_photo: "asdasd",
          followed: true
        }
      ]
    };
  }
  render() {
    return (
      <TabContent>
        <Row
          style={{
            backgroundColor: "backgroundColor: rgba(0, 0, 0, 0.4);",
            padding: "2%"
          }}
        >
          <Col sm="4">
            <TrophyS>
              <img src={require("../../resources/trophy.png")} alt="Trofeo" />
            </TrophyS>
          </Col>
          <Col sm="8">
            <div style={{ width: "400px", margin: "auto" }}>
              <ProfileLabelMap response={this.state.response} />
            </div>
          </Col>
        </Row>
      </TabContent>
    );
  }
}

TopUsersTab.propTypes = {
  response: PropTypes.array.isRequired
};
