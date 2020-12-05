import React from "react";
import { Col, Container, Jumbotron } from "react-bootstrap";
import { isUserLoggedIn } from "../../actions";
import Layout from "../../components/Layout";
import { Carousel, Row } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import mensOffer_image from "./images/Men.png";
import womensOffer_image from "./images/Women.png";
import kidsOffer_image from "./images/Kids.png";
import carousel from "./images/Carousel.png";
import Footer from "../../components/Footer";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
    return (
        <Layout>
            <Container>
                <Col>
                    <p></p>
                    <Row>
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={mensOffer_image}
                                    alt="First slide"
                                />
                                {/*<Carousel.Caption>
                                    <h3>New Men's Collection</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                                    </p>
                                </Carousel.Caption>*/}
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={womensOffer_image}
                                    alt="Third slide"
                                />
                                {/*<Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                                <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carousel}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>/*/}
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    <Row>
                        <Container>
                            <br></br>
                            <p class="text-center"><h1>MEN</h1></p>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <Col>
                                {/*Add Mens Product Card here*/}
                            </Col>
                            <Col>
                                {/*Add Mens Product Card here*/}
                            </Col>
                            <Col>
                                {/*Add Mens Product Card here*/}
                            </Col>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <br></br>
                            <p class="text-center"><h1>WOMEN</h1></p>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <Col>
                                {/*Add Womens Product Card here*/}
                            </Col>
                            <Col>
                                {/*Add Womens Product Card here*/}
                            </Col>
                            <Col>
                                {/*Add Womens Product Card here*/}
                            </Col>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <br></br>
                            <p class="text-center"><h1>KIDS</h1></p>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <Col>
                                {/*Add Kids Product Card here*/}
                            </Col>
                            <Col>
                                {/*Add Kids Product Card here*/}
                            </Col>
                            <Col>
                                {/*Add Kids Product Card here*/}
                            </Col>
                        </Container>
                    </Row>
                    <br></br>
                    <br></br>
                </Col>
            </Container>
            <Footer />
        </Layout>
    );
};

export default HomePage;
