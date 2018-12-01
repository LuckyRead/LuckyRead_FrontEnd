import React from "react";
import { Link } from "react-router-dom";
//import "./landingpage.css";
import { LandingPageContainer } from "./Styled";
import { Row, Col, Jumbotron, Button } from "reactstrap";

const LandingPage = () => {
  console.log("landing page");
  return (
    <LandingPageContainer>
      <Jumbotron fluid id="Init">
        <Row>
          <Col xs="12" id="InitPanel">
            <strong>
              <h1 id="Init-title">Bienvenido a LuckyRead</h1>
            </strong>
            <hr />
            <h3 className="Init-subtitle">
              <p>
                ¿Quieres leer algo pero no sabes qué? Aquí te ofrecemos textos
                interesantes al azar según tus gustos. ¡Podrás interactuar con
                otros usuarios y aprender algo nuevo cada día!
              </p>
            </h3>
            <Link to="/CategoriesInitPage">
              <Button color="primary" id="Init-button">
                <h4 id="readyText">
                  <strong>Empezar</strong>
                </h4>
              </Button>
            </Link>
          </Col>
        </Row>
      </Jumbotron>
    </LandingPageContainer>
  );
};

export default LandingPage;
