import React, { PureComponent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardText,
  CardBody,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import "./preferences.css";

export default class FragmentCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#BBBBBB" }}>
        <CardHeader tag="h3" className="text-center">
          <strong>{this.props.title}</strong>
        </CardHeader>
        <CardImg
          top
          width="100%"
          src={"data:image/png;base64, " + this.props.image}
          alt="Card image cap"
        />
        <CardBody id="fragmentcard" className="text-center">
          <CardText id="cardtext" className="text-justify">
            {this.props.introduction}
          </CardText>
          <Button color="primary" tag={Link} to={"/fragment/" + this.props.id}>
            Leer
          </Button>
        </CardBody>
      </Card>
    );
  }
}
