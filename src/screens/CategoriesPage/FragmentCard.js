import React, { PureComponent } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class FragmentCard extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        return (
          <div>
            <Card>
              <CardImg top width="100%" src={"data:image/png;base64, " + this.props.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{this.props.introduction}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        )
    }
}
