import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import "./news.css";

class News extends Component {
  render() {
    return (
      <div className="carousel-item">
        <Card id="NewsCard">
          <CardImg
            top
            width="100%"
            src={this.props.image}
            alt="Card image cap"
            id="image"
          />
          <CardBody id="NewsCardBody">
            <CardTitle>
              <h4>
                <strong>{this.props.title}</strong>
              </h4>
            </CardTitle>
            <CardSubtitle>
              <p id="date">{this.props.date}</p>
            </CardSubtitle>
            <CardText>
              <p className="text-justify">{this.props.description}</p>
            </CardText>
            <div className="row justify-content-center">
              <a href={this.props.source} target="_blank"><small>
                Ver más...
              </small></a>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default News;
