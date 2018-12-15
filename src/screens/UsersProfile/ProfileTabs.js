import React from "react";
import { TabContainer } from "./Styled";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";
import InformationTab from "./InformationTab";
import FollowedTab from "./FollowedTab";
import FollowersTab from "./FollowersTab";
export default class ProfileTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
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
              Seguidores
            </NavLink>
          </NavItem>

          <NavItem className="itemNav">
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Siguiendo
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row className="divNav">
              <InformationTab />
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="divNav">
              <FollowersTab />
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row className="divNav">
              <FollowedTab />
            </Row>
          </TabPane>
        </TabContent>
      </TabContainer>
    );
  }
}
