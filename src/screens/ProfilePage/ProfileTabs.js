import React from "react";
import { Palette, TabContainer } from "./Styled";
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
import InformationTab from "./InformationTab";

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
              Fragmentos
            </NavLink>
          </NavItem>

          <NavItem className="itemNav">
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Favoritos
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
              <InformationTab />
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="divNav">
              <Col sm="12">
                <h4>Tab 2 Contents</h4>
              </Col>
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
              <Col sm="12">
                <h4>Tab 4 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row className="divNav">
              <Col sm="12">
                <h4>Tab 5 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </TabContainer>
    );
  }
}
