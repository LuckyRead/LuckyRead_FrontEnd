import React, { PureComponent } from "react";
import { Card, CardImg, CardText, CardBody, Button, CardFooter, CardHeader } from "reactstrap";
// import { Cs } from "./Styled";
import { Link } from "react-router-dom";
import  "./UserCard.css";

export default class FragmentCard extends PureComponent {
  render() {
    return (
      <Card

        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#BBBBBB" }}
      >
        {" "}
        <CardHeader tag="h3" className="text-center">
          <strong>{this.props.title}</strong>
        </CardHeader>
        <CardImg
          top
          width="100%"
          src={"data:image/png;base64, " + this.props.image}
          alt="Card image cap"
        />
      <CardBody className="text-center">
          <CardText className="text-justify" id="textfragment">
            <strong>Introducción: </strong>
            {this.props.introduction}
          </CardText>
          <Button color="primary" tag={Link} to={"/fragment/" + this.props.id} size="sm">
            Leer
          </Button>
        </CardBody>
      </Card>
    );
  }
}
