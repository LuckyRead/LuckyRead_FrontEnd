import React, { Component } from 'react';

import '../../styles/fragmentcontainer.css'
import axios from 'axios';
import News from './News';

class NewsView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      articles: []
    }

  }

  componentDidMount(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'language=es&' +
              'apiKey=5f674608ef39470a842f47130f100c37';
      axios({
        method: 'GET', url: url,
      }).then(res =>{
        console.log(res['data']['articles'])
        const articles = res['data']['articles']
        this.setState({articles});
      })
}

  render(){
    const divStyle = {
      width: '18rem',
      height:'30 rem'
    };
    const domNews = this.state.articles.map(article => {
      return <News
              source = {article.url}
              title = {article.title}
              description = {article.description}
              date = {article.publishedAt}
            />;
    });

    return(
      <div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style = {divStyle}>
          <div className="carousel-inner">
            <div class="carousel-item active">
              NOTICIAS
            </div>
          {domNews}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }

}
export default NewsView;
