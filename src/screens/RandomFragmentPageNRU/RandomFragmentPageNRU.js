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
import RandomFragment from "./RandomFragment";
import axios from "axios";
import Loading from "../../common/Loading/Loading";
import CategoryTag from "../../common/Tags/CategoryTag";
import CommentMap from "../../common/Comment/CommentMap";


class RandomFragmentPageNRU extends React.Component {
  state = {
    randomfragment: [],
    topics: [],
    randomTopic: 0,
  };

  componentDidMount() {
    const preferences = localStorage.preferences.split(',');
    const randomTopic = preferences[Math.floor(Math.random() * preferences.length)];
    this.setState({
      randomTopic: randomTopic
    }, () => {
      this.request()
    })
  }

  request = e => {
    console.log(localStorage.jwtToken);
    axios({
      method: "GET",
      url: "https://luckyread-backend.herokuapp.com/api/fragment/something/" + this.state.randomTopic,
    }).then(
      response => {
        this.setState({
          randomfragment: response.data.Fragment,
          topics: response.data.Fragment.topics
        });
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

export default RandomFragmentPageNRU;
