import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Row, Col } from 'react-bootstrap';
import logo from './Logo.png';
import Search_icon from './Search_icon.png';

/**
* @author
* @function Header2
**/

const Header2 = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <Row>
                    <img
                        alt="logo"
                        src={logo}
                        width="104"
                        height="60"
                        className="d-inline-block align-top"
                    />{''}
                    <Col className="mt-auto mb-auto pl-0 pr-10">
                        Apparel Store
                    </Col>
                </Row>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ml-auto ">
                    <Nav.Link href="#deets" className="px-4">Home</Nav.Link>
                    <Nav className="md-center px-4">

                        <NavDropdown title="Men" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Footwear</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Accessories</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="md-center px-4">

                        <NavDropdown title="Women" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Footwear</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Accessories</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="md-center px-4">

                        <NavDropdown title="Kids" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Footwear</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Accessories</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2 px-4" />
                        <Button type="submit"><img
                            alt="logo"
                            src={Search_icon}
                            width="25"
                            height="25"
                            className="d-inline-block align-top"
                        />{''}</Button>

                    </Form>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Sign In</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header2