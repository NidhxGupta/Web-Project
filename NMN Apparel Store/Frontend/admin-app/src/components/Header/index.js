import React from 'react'
import { Navbar, Nav, Row, Col, NavDropdown, Container } from 'react-bootstrap';
import user_icon from './User_icon.png';
import logo from './Logo.png';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions';

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
                <Container style={{ textAlign: "left" }}>
                    Admin Dashboard
                </Container>
                <li className="nav-item">
                    <span to="/signup" className="nav-link" onClick={logout}>Signout</span>
                </li>
            </Nav>
        );
    }

    //Function to render diff navbar if user is logged out
    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">SignIn</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                </li>
            </Nav>
        );
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" style={{ zIndex: 1 }}>
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
                <Nav className="mr-auto">
                </Nav>
                {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                {/*
                <Nav>
                    <Nav.Link href="#deets" className="px-5">Admin Panel</Nav.Link>
                    <Row className="pl-5">
                        <img
                            alt="logo"
                            src={user_icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{''}
                    </Row>

                     
                    <NavDropdown title="Profile" id="collasible-nav-dropdown" className="pl-3 pr-5">
                        <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                */}
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header