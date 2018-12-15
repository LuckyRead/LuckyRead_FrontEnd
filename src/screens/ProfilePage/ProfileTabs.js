import React from "react";
import axios from "axios";
import { TabContainer } from "./Styled";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import { InformationTab } from "./InformationTab";
import FollowedTab from "./FollowedTab";
import FollowersTab from "./FollowersTab";
import FragmentTab from "./FragmentTab";
export default class ProfileTabs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      citiesList: {},
    };
  }

  componentDidMount() {
    this.renderCities();
  }

  renderCities() {
    axios({
      method: "GET",
      url: "https://luckyread-backend.herokuapp.com/api/cities/get_all",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(response => {
      console.log('cities')
      this.setState({
        citiesList: response.data.all_cities
      }, () => console.log("nuevo estado cities", this.state.citiesList))
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {

    return (
      <TabContainer>
        <Nav tabs>
          <NavItem className="itemNav">
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Informacion
            </NavLink>
          </NavItem>
          <NavItem className="itemNav">
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Fragmentos
            </NavLink>
          </NavItem>


          <NavItem className="itemNav">
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Seguidores
            </NavLink>
          </NavItem>

          <NavItem className="itemNav">
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              Siguiendo
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row className="divNav">
              <InformationTab citiesList={this.state.citiesList} />
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="divNav">
              <FragmentTab />
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row className="divNav">
              <Col sm="12">
                <h4>Tab 3 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row className="divNav">
              <FollowersTab />
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row className="divNav">
              <FollowedTab />
            </Row>
          </TabPane>
        </TabContent>
      </TabContainer>
    );
  }
}
