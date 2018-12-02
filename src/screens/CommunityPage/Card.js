import React, { PureComponent } from 'react'
import { Card, CardHeader, CardTitle, CardImg, CardText, CardBody,Button} from 'reactstrap';
import { Link } from "react-router-dom";

export default class FragmentCard extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        return (
              <Card id="topCard">
                <CardHeader tag="h4" className="text-center"><strong>{this.props.title}</strong></CardHeader>
                <CardImg top width="100%" src={"data:image/png;base64, " + this.props.image} alt="Card image cap" />
                <CardBody id="fragmentcard" className="text-center" >
                  <CardText  className="text-justify" id="textfragment"><strong>Introducción: </strong>{this.props.introduction}</CardText>
                </CardBody>
              </Card>
        )
    }
}
