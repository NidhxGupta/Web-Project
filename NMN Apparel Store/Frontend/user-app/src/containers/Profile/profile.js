import React from 'react'
import { Col, Container, Row, Image, Table, Button } from 'react-bootstrap'
import { shallowEqual } from 'react-redux';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout'
import profilepic from "./images/Profile_Pic.png";
import Shopping_bag from './images/Shopping_bag.png';

/**
* @author
* @function Profile
**/

const Profile = (props) => {
    return (
        <Layout>
            <br></br>
            <br></br>
            <Container>
                <Col>
                    <Row>
                        <Col>
                            <Image src={profilepic} rounded />
                        </Col>
                        <Col>
                            <Container>
                                <h2><b>User Name</b></h2>
                            </Container>
                            <Container style={{ background: "#000", height: '1px' }}></Container>
                            <Container>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est nulla, pharetra id pretium at, elementum eget eros. Nullam a nibh rhoncus, tempor ligula eget, ornare eros. Aliquam ut lacus ipsum. Curabitur sed erat auctor, condimentum justo vitae, sagittis mauris. Phasellus eros eros, mollis eget dignissim sed, euismod vitae est. Quisque lacinia massa quis ultrices gravida. Fusce hendrerit felis id maximus dignissim.
                            </Container>
                        </Col>
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
            <Footer>

            </Footer>
        </Layout>

    )

}

export default Profile