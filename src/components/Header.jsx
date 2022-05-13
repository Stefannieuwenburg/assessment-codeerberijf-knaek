import React from "react";
import { Button,Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import "../App.css"
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="myColor" variant="dark">
            <Container>
                <Navbar.Brand href="#home">KnaeK.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#store">in-store korting</Nav.Link>
                        <Nav.Link href="#webshop">webshop kortingen</Nav.Link>
                        <NavDropdown title="meer" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                DE KNEAK-APP
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                PARTNERS VAN KNAEK
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                VEELGESTELDE VRAGEN
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                VOOR BEDRIJVEN
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">
                                WERKEN BIJ KNAEK
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">
                                CONTACT
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#registeren">registeren</Nav.Link>
                        <br />
                        <NavDropdown title="" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                flag
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                flag
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                flag
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                        >
                            <button
                                type="button"
                                class="btn btn-labeled btn-default"
                            >
                                <span class="btn-label">
                                    <i class="fa fa-chevron-right"></i>
                                </span>
                            </button>
                            <button
                                type="button"
                                class="btn btn-labeled btn-default"
                            >
                                <span class="btn-label">
                                    <i class="fa fa-chevron-right"></i>
                                </span>
                            </button>
                        </div>

                        <Button variant="outline" href="#">
                            INLOGGEN
                        </Button>
                        <Button variant="outline" href="#">
                            kneak bestellen
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;
