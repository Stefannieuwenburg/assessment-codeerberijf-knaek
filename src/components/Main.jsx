import React from 'react'
import { Container, Carousel, Col, Row,Image } from "react-bootstrap";
import logo from "../image/logo.png";
import cardlogo1 from "../image/greetz.png";
import cardlogo2 from "../image/media.png";
import cardlogo3 from "../image/perry.png";
const Main = () => {
  return (
      <>
          <Container className="text-center">
              <Row className="px-3 my-5 mx-auto">
                  <Col>
                      <Image src={logo} fluid rounded />
                  </Col>
              </Row>
              <Row>
                  <Carousel className="mx-center">
                      <Carousel.Item interval={3000}>
                          <img
                              className="d-block w-80"
                              src={cardlogo1}
                              alt="First slide"
                          />
                          <Carousel.Caption>
                              <h3>Greetz</h3>
                              <p>KORTING:TOT 20%</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={3000}>
                          <img
                              className="d-block w-80"
                              src={cardlogo2}
                              alt="Second slide"
                          />
                          <Carousel.Caption>
                              <h3>MediaMarket</h3>
                              <p>MEGA DEALS:TOT 30% KORTING</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={3000}>
                          <img
                              className="d-block w-80"
                              src={cardlogo3}
                              alt="Third slide"
                          />
                          <Carousel.Caption>
                              <h3>Perry</h3>
                              <p>SALE:TOT 70% KORTING</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                  </Carousel>
              </Row>
          </Container>
      </>
  );
}

export default Main;
