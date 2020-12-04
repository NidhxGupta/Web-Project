import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import banner from "./images/Men.png";

/**
* @author
* @function GMen
**/

const GMen = (props) => {
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
                                    {/*Add Mens Top Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Mens Top Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Mens Top Product Card here*/}
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
                                    {/*Add Mens Bottom Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Mens Bottom Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Mens Bottom Card here*/}
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
                                    {/*Add Mens FOOTWEAR Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Mens FOOTWEAR Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Mens FOOTWEAR Product Card here*/}
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
                                    {/*Add Mens ACCESSORIES Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Mens ACCESSORIES Card here*/}
                                </Col>
                                <Col>
                                    {/*Add Mens ACCESSORIES Card here*/}
                                </Col>
                            </Container>
                        </Row>
                    </Col>
                </Container>
            </Container>
        </Layout>
    )

}

export default GMen