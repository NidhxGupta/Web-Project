import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer';
import Layout from '../../components/Layout'
import banner from "./images/Kids.png";

/**
* @author
* @function GKids
**/

const GKids = (props) => {
    return (
        <Layout>
            <Container>
                <Container>
                    <Col>
                        <br></br>
                        <br></br>
                        <Row>
                            <img
                                className="d-block w-100"
                                src={banner}
                                alt="Banner"
                            />{''}
                        </Row>
                        <Row>
                            <Container>
                                <br></br>
                                <p class="text-center"><h1>TOPS</h1></p>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Col>
                                    {/*Add Kids Top Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Kids Top Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Kids Top Product Card here*/}
                                </Col>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <br></br>
                                <p class="text-center"><h1>BOTTOMS</h1></p>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Col>
                                    {/*Add Kids Bottom Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Kids Bottom Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Kids Bottom Card here*/}
                                </Col>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <br></br>
                                <p class="text-center"><h1>FOOTWEAR</h1></p>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Col>
                                    {/*Add Kids FOOTWEAR Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Kids FOOTWEAR Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Kids FOOTWEAR Product Card here*/}
                                </Col>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <br></br>
                                <p class="text-center"><h1>ACCESSORIES</h1></p>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Col>
                                    {/*Add Kids ACCESSORIES Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Kids ACCESSORIES Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Kids ACCESSORIES Card here*/}
                                </Col>
                            </Container>
                        </Row>
                        <br></br>
                        <br></br>
                    </Col>
                </Container>
            </Container>
            <Footer />
        </Layout>
    )

}

export default GKids