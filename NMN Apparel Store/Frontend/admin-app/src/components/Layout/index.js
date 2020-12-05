import React from 'react'
import { Col, Container, Row, NavDropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../Header';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <>
            <Header />
            {
                props.sidebar ?
                    <Container fluid>
                        <Row>
                            <Col md={2} className="sidebar">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <div style={{ background: "#000", height: '1px' }}></div>
                                    <br></br>
                                    <NavLink to={'/'} style={{ textAlign: "center" }}>Dashboard</NavLink>
                                    <br></br>
                                    <Container style={{ background: "#000", height: '1px' }}></Container>
                                    <br></br>
                                    <NavLink to={'/products'} style={{ textAlign: "center" }}>Products</NavLink>
                                    <br></br>
                                    <Container style={{ background: "#000", height: '1px' }}></Container>
                                    <br></br>
                                    <NavLink to={'/orders'} style={{ textAlign: "center" }}>Manage Orders</NavLink>
                                    <br></br>
                                    <Container style={{ background: "#000", height: '1px' }}></Container>
                                    <br></br>
                                    <NavLink to={'/createproduct'} style={{ textAlign: "center" }}>Create Product</NavLink>
                                    <br></br>
                                    <Container style={{ background: "#000", height: '1px' }}></Container>
                                    <br></br>
                                    <NavLink to={'/completedorders'} style={{ textAlign: "center" }}>Completed Orders</NavLink>
                                    <br></br>
                                    <Container style={{ background: "#000", height: '1px' }}></Container>
                                    <br></br>
                                    <Nav.Link eventKey="disabled" disabled style={{ textAlign: "center" }}>
                                        Disabled Link
                                    </Nav.Link>
                                </Nav>
                            </Col>
                            <Col md={10} style={{ marginLeft: 'auto' }}>
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                    :
                    props.children
            }


        </>
    );

}

export default Layout
