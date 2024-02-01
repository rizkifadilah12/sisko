import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import banner1 from "../banner/banner1.jpeg";
import banner2 from "../banner/banner2.jpeg";
import banner3 from "../banner/banner3.jpeg";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const HeaderContent = () => {
  return (
    <Container className="mt-5 ">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={banner3} />
          </Card>
        </Col>
       
        <Col md="auto">
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={banner1} />
          </Card>
        </Col>
       
        <Col md="auto">
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={banner2} />
          </Card>
        </Col>
       
      </Row>
    </Container>
  );
};

export default HeaderContent;
