import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
      <div>
          <footer className="py-1">
              <Container className="py-1">
                  <Row>
                      <Col className="text-center py-3">
                          © Knaek 2019. All Rights Reserved.
                      </Col>
                      <Col>
                          <FaFacebook
                              style={{ color: "gray", fontSize: "30px" }}
                              onMouseOver={({ target }) =>
                                  (target.style.color = "blue")
                              }
                              onMouseOut={({ target }) =>
                                  (target.style.color = "gray")
                              }
                          />
                          <FaInstagram
                              style={{ color: "gray", fontSize: "30px" }}
                              onMouseOver={({ target }) =>
                                  (target.style.color = "red")
                              }
                              onMouseOut={({ target }) =>
                                  (target.style.color = "gray")
                              }
                          />
                      </Col>
                  </Row>
              </Container>
          </footer>
      </div>
  );
}

export default Footer;
