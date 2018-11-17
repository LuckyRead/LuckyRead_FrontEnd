import React, { Component } from "react";

import "./fragmentcontainer.css";
import API from "../../api";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import ReactionButtons from "../../common/LikesPercentageStatistics/ReactionButtons";
import CategoryTag from "../../common/Tags/CategoryTag";
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


class FragmentPage extends Component {
  state = {
    post: null,
    statistic: null,
    base64_image: null,
    topics: []
  };

  componentDidMount() {
    let id = this.props.match.params.fragment_id;
    console.log(id)
    API.get("/api/fragments/" + id).then(res => {
      console.log(res);
      this.setState({
        post: res.data,
        topics: res.data.topics,
        base64_image: ("data:image/png;base64, " + res.data.base64_image)
      });
    });

    API.get("/api/fragments/stat/percentage_reaction_fragments/" + id).then(
      res => {
        console.log(res);
        this.setState({
          statistic: {
            percentagelikes: res.data[0].percentagelikes,
            percentagedislikes: res.data[0].percentagedislikes,
            percentagenoreaction: res.data[0].percentagenoreaction
          }
        });
      }
    );
  }

  renderCategoryTags(categoryArray) {
    let categoryTags = {};
    categoryTags = [];
    categoryArray.forEach(category => {
      categoryTags.push(<CategoryTag name={category.name} />);
    });
    return categoryTags;
  }


  render() {


    const statistic = this.state.statistic;
    const post = this.state.post ? (
      <div className="container" id="container">
        <div className="row" id="container_fragment">
          <Topics>
            <TagsContainer>
              {this.renderCategoryTags(this.state.topics)}
            </TagsContainer>
          </Topics>
          <div className="text-center" id="title_fragment">
            <h2><strong>{this.state.post.title}</strong></h2>

            <div className="row justify-content-center" id="content">
              <div className="col-4" id="image">
                <img
                  src="https://fortunedotcom.files.wordpress.com/2018/07/gettyimages-961697338.jpg"
                  alt="Imagen de referencia"
                />
              </div>

              <div className="col-8" id="text">
                <h4>
                  <strong>Introducción</strong>
                </h4>
                <p className="text-justify">{this.state.post.introduction}</p>
                <br />
                <h4>
                  <strong>Contenido</strong>
                </h4>
                <p className="text-justify">{this.state.post.content}</p>
                <h6>
                  <strong>Fuente</strong>
                </h6>
                <p className="text-center">{this.state.post.source}</p>
                <div>{<ReactionButtons response={this.state.statistic} />}</div>
              </div>

            </div>


            <div className="row justify-content-center">
              <Button color="primary" tag={Link} to="/RandomFragmentPage">
                Volver
              </Button>
            </div>
          </div>
        </div>
      </div>
    ) : (
        <div className="center">
          <Loading />
        </div>
      );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

export default FragmentPage;
