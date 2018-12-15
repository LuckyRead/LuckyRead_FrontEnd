import React from "react";
import { Link } from "react-router-dom";

import { PageContainer } from "./Styled";
import RandomFragment from "./RandomFragment";
import axios from "axios";
import CategoryTag from "../../common/Tags/CategoryTag";

class RandomFragmentPageNRU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomfragment: [],
      topics: [],
      randomTopic: 0
    };
    this.request = this.request.bind(this);
  }

  componentDidMount() {
    const preferences = localStorage.preferences.split(",");
    const randomTopic =
      preferences[Math.floor(Math.random() * preferences.length)];
    console.log("topico random", randomTopic);
    this.setState(
      {
        randomTopic: randomTopic
      },
      () => {
        this.request();
      }
    );
  }

  request = e => {
    console.log(localStorage.jwtToken);
    axios({
      method: "GET",
      url:
        "https://luckyread-backend.herokuapp.com/api/fragment/something/" +
        this.state.randomTopic
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
    return;
  };

  renderCategoryTags(categoryArray) {
    let categoryTags = {};
    categoryTags = [];
    categoryArray.forEach((category, index) => {
      categoryTags.push(
        <Link to={"/fragmentsview/" + category.id}>
          <CategoryTag name={category.name} key={index} />
        </Link>
      );
    });
    return categoryTags;
  }

  render() {
    const rf = this.state.randomfragment ? (
      <PageContainer>
        <RandomFragment
          randomfragment={this.state.randomfragment}
          topicsArray={this.state.topics}
          request={this.request}
        />
      </PageContainer>
    ) : (
      <div className="center">Cargando</div>
    );
    return <div>{rf}</div>;
  }
}

export default RandomFragmentPageNRU;
