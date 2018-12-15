import React from "react";
import { NotFoundS } from "./Styled";
import { Row, Col } from "reactstrap";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <Row>
        <NotFoundS>
          <Col>
            <h1 className="number">404</h1>

            <h1>Página no encontrada</h1>
          </Col>
        </NotFoundS>
      </Row>
    );
  }
}
