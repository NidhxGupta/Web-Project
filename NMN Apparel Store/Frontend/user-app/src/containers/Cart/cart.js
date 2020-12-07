import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import Shopping_bag from './images/Shopping_bag.png';

/**
* @author
* @function Cart
**/

const Cart = (props) => {
    return (
        <Layout>
            <Container className="pt-5 pb-5">
                <Col>
                    <Row>
                        <h3><b>Cart</b></h3>
                        <Container style={{ background: "#000", height: '1px' }}></Container>
                        <br></br>
                        Nothing to show!
                    </Row>
                    <br></br>
                    <Row>
                        <h3><b>Current Orders</b></h3>
                        <Container style={{ background: "#000", height: '1px' }}></Container>
                        <br></br>
                        All Orders Completed!
                    </Row>
                    <br></br>
                    <Row>
                        <h3><b>Past Orders</b></h3>
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
                                    <td>#2985</td>
                                    <td>Kurta</td>
                                    <td rowSpan="3"><img
                                        alt="product image"
                                        src={Shopping_bag}
                                        width="104"
                                        height="60"
                                        className="d-inline-block align-top"
                                    />{''}</td>
                                    <Button variant="link">Return</Button>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Button variant="link">Reorder</Button>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Button variant="link">Review Product</Button>
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
                                    <Button variant="link">Return</Button>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Button variant="link">Reorder</Button>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Button variant="link">Review Product</Button>
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
                                    <Button variant="link">Return</Button>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Button variant="link">Reorder</Button>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Button variant="link">Review Product</Button>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <br></br>
                    <br></br>
                </Col>
            </Container>
            <Footer />
        </Layout>
    )

}

export default Cart