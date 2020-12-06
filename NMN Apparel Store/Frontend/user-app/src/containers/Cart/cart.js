import React from 'react'
import { Col, Container, Row, Image, Table, Button } from 'react-bootstrap'
import { shallowEqual } from 'react-redux';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Shopping_bag from './images/Shopping_bag.png';

/**
* @author
* @function Cart
**/

const Cart = (props) => {
    return (
        <Layout>
            <br></br>
            <br></br>
            <Container>
                <Col>
                    <Row>
                        <Col>
                            <Image src={Shopping_bag} rounded />
                        </Col>
                        <Col>
                            <Container>
                                <h2><b>Cart</b></h2>
                            </Container>
                            <Container style={{ background: "#000", height: '1px' }}></Container>
                        </Col>
                    </Row>
                    <Row>
                        <Container style={{ background: "#000", height: '1px' }}></Container>
                        <br></br>
                    </Row>
                    <br></br>
                    <Row>
                        <Container style={{ background: "#000", height: '1px' }}></Container>
                        <br></br>
                    </Row>
                    <Row>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Order Id</th>
                                    <th>Product</th>
                                    <th>Product Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>#128</td>
                                    <td>Kurta</td>
                                    <td rowSpan="3"><img
                                        alt="product image"
                                        src={Shopping_bag}
                                        width="104"
                                        height="60"
                                        className="d-inline-block align-top"
                                    />{''}</td>
                                    <Button variant="link">Remove</Button>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Button variant="link">Order</Button>
                                </tr>
                                <tr><td></td></tr>
                                <tr>
                                    <td>2</td>
                                    <td>#5367</td>
                                    <td>Socks</td>
                                    <td rowSpan="3"><img
                                        alt="product image"
                                        src={Shopping_bag}
                                        width="104"
                                        height="60"
                                        className="d-inline-block align-top"
                                    />{''}</td>
                                    <Button variant="link">Remove</Button>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Button variant="link">Order</Button>
                                </tr>
                                <tr><td></td></tr>
                                <tr>
                                    <td>3</td>
                                    <td>#8723</td>
                                    <td>Jacket</td>
                                    <td rowSpan="3"><img
                                        alt="product image"
                                        src={Shopping_bag}
                                        width="104"
                                        height="60"
                                        className="d-inline-block align-top"
                                    />{''}</td>
                                    <Button variant="link">Remove</Button>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Button variant="link">Order</Button>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <br></br>
                    <br></br>
                </Col>
            </Container>
            <Footer>

            </Footer>
        </Layout>

    )

}

export default Cart