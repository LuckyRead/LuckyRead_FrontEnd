import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import { TabContent, TrophyS } from "./Styled";
import ProfileLabelMap from "../../common/ProfileLabel/ProfileLabelMap";
import axios from "axios";

//  Nada mas es borrar el state y cambiar el contenido a que lea de props
export default class TopUsersTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
  }

  componentDidMount() {

    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/users/best",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(response => {

      this.setState({
        response: response.data
      })
    })

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
