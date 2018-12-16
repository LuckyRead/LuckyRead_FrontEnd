import React, { Component } from "react";
import "./news.css";
import axios from "axios";
import News from "./News";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class NewsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "language=es&" +
      "apiKey=5f674608ef39470a842f47130f100c37";
    axios({
      method: "GET",
      url: url
    }).then(res => {

      const articles = res["data"]["articles"];
      this.setState({ articles });
    });
  }

  render() {
    var id = 0;
    const domNews = this.state.articles.map(article => {
      id = id + 1;
      return (
        <News
          key={id}
          source={article.url}
          title={article.title}
          description={article.description}
          date={article.publishedAt}
          image={article.urlToImage}
        />
      );
    });

    return (
      <div className="col-sm-12">
        <br />
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Card id="NewsCard">
                    <CardImg
                      top
                      width="100%"
                      src="http://sharepoint.ncssma.org/dailynewsbundle/Pictures/News%20Collage.jpg"
                      alt="Card image cap"
                    />
                    <CardBody id="CoverPage" className="text-center">
                      <CardTitle className="text-center">
                        <h1>
                          <strong>Noticias</strong>
                        </h1>
                      </CardTitle>
                      <CardSubtitle>
                        <p className="text-justify">
                          Enterate aquí de las noticias más importantes
                          actualmente, al darle en <strong>"Ver más..."</strong>{" "}
                          te va a redirigir a la página original dónde se
                          encuentra alojada la noticia.
                        </p>
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </div>
                {domNews}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsView;
