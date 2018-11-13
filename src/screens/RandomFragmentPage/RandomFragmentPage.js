import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer
} from "./Styled";
import pdficon from "../../resources/paper_plane.png";

class RandomFragmentPage extends React.Component {
  render() {
    return (
      <Container>
        <PageContainer>
          <MessageFragment>
            <Row>
              <Col>Tenemos un fragmento para ti</Col>
            </Row>
          </MessageFragment>

          <Row>
            <Col md="3">
              <ImageContainer>Aqui va la imagen</ImageContainer>
              <Button color="info">Leer este fragmento online</Button>{" "}
              <Button color="success">Leer este fragmento en PDF</Button>{" "}
              <Button color="warning">warning</Button>{" "}
            </Col>

            <Col md="9">
              <FragmentContent>
                <FragmentTitle>Titulo de fragmento</FragmentTitle>
                <FragmentText>asdasd</FragmentText>
              </FragmentContent>
            </Col>
          </Row>
        </PageContainer>
      </Container>
    );
  }
}

export default RandomFragmentPage;
