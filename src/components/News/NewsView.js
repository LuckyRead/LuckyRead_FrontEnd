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
      height:'30rem'
    };
    var id = 0;
    const domNews = this.state.articles.map(article => {
      id = id + 1;
      return <News
              key = {id}
              source = {article.url}
              title = {article.title}
              description = {article.description}
              date = {article.publishedAt}
            />;
    });

    return(
      <div className= "row justify-content-center">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style = {divStyle}>
          <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card" style={divStyle}>
              <div className="card-body">
                <h5 className="card-title">Noticias</h5>
                <p className="card-text">Mira las noticias del momento</p>
              </div>
            </div>
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
