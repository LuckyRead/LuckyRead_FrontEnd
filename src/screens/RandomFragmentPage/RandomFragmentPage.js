import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer,
  TagsContainer,
  Topics
} from "./Styled";
import pdficon from "../../resources/paper_plane.png";
import RandomFragment from "../RandomFragmentPage/RandomFragment";
import axios from "axios";
import Loading from "../../common/Loading/Loading";
import CategoryTag from "../../common/Tags/CategoryTag";
import CommentMap from "../../common/Comment/CommentMap";


class RandomFragmentPage extends React.Component {
  state = {
    randomfragment: [],
    topics: []
  };

  componentDidMount() {
    this.request()
  }

  request = e => {
    console.log(localStorage.jwtToken);
    axios({
      method: "GET",
      url: "https://luckyread-backend.herokuapp.com/api/fragments/something/2",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(
      response => {
        console.log(response);
        this.setState({
          randomfragment: response["data"],
          topics: response["data"].topics
        });
        console.log(this.state.randomfragment);
      },
      err => {
        console.log("el error es pidiendo fragmento random");
      }
    );
    return
  }

  renderCategoryTags(categoryArray) {
    let categoryTags = {};
    categoryTags = [];
    categoryArray.forEach((category, index) => {
      categoryTags.push(<CategoryTag name={category.name} key={index} />);
    });
    return categoryTags;
  }



  render() {
    console.log(rf);
    console.log("aqui");
    console.log("id");
    console.log(this.state.randomfragment.id)
    console.log(this.state.topics[0])


    const rf = this.state.randomfragment ?
      (<PageContainer>
        <MessageFragment>
          <Row>
            <Col>Tenemos un fragmento para ti</Col>
          </Row>
        </MessageFragment>

        <Row>
          <Col>
            <Topics>
              <TagsContainer>
                {this.renderCategoryTags(this.state.topics)}
              </TagsContainer>
            </Topics>
          </Col>

        </Row>

        <RandomFragment randomfragment={this.state.randomfragment} />
        <Button color="warning" onClick={this.request}>Ver otro fragmento</Button>{" "}
      </PageContainer>
      ) : <div className="center">
        <Loading />
      </div>
    return (
      <Container>
        {rf}
      </Container>
    );
  }
}

export default RandomFragmentPage;
