import React from 'react'
import { Navbar, Nav, Row, Col, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from './Logo.png';
import Search_icon from './Search_icon.png';
import Shopping_bag from './Shopping_bag.png';
import user_icon from './User_icon.png';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions/auth.actions';

/**
* @author
* @function Header
**/

const Header = (props) => {


    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }

    //Function to render diff navbar if user is logged in
    const renderLoggedInLinks = () => {
        return (

            <Nav>
                <Nav.Link href="#deets" className="px-5">
                    <img
                        alt="logo"
                        src={Shopping_bag}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{''}
                </Nav.Link>
                <Col md={1}></Col>
                <Nav.Link href="#deets" className="px-5">
                    <img
                        alt="logo"
                        src={user_icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{''}
                </Nav.Link>


                <NavDropdown title="Profile" id="collasible-nav-dropdown" className="pl-3 pr-5">
                    <NavDropdown.Item href="/profile">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/signup" onClick={logout}>Signout
                    </NavDropdown.Item>
                </NavDropdown>

            </Nav>

        );
    }

    //Function to render diff navbar if user is logged out
    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                <Col>
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
                </Col>
                <Nav>
                    <li className="nav-item">
                        <NavLink to="signin" className="nav-link">SignIn</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="signup" className="nav-link">SignUp</NavLink>
                    </li>
                </Nav>
            </Nav>
        );
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <Row>
                    <Link to="/" className="navbar-brand">
                        <img
                            alt="logo"
                            src={logo}
                            width="104"
                            height="60"
                            className="d-inline-block align-top"
                        />{''}
                    </Link>
                    <Col className="mt-auto mb-auto pl-0 pr-10">
                        <Link to="/" className="navbar-brand">
                            Apparel Store
                        </Link>
                    </Col>

                </Row>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ml-auto ">
                    <Nav.Link href="/" className="px-4">Home</Nav.Link>
                    <Nav className="md-center px-4">

                        <NavDropdown title="Men" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="Men/Tops">
                                <NavLink to="/Men/Tops" className="nav-link">Tops</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="Men/Bottoms">
                                <NavLink to="/Men/Bottoms" className="nav-link">Bottoms</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="Men/Footwear">
                                <NavLink to="/Men/Footwear" className="nav-link">Footwear</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                <NavLink to="/Men/Accessories" className="nav-link">Accessories</NavLink>
                            </NavDropdown.Item>
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

                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header