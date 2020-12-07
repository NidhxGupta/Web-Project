import React from "react";
import { Col, Container, Jumbotron, Card, Button } from "react-bootstrap";
import { isUserLoggedIn } from "../../actions";
import Layout from "../../components/Layout";
import { Carousel, Row } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import mensOffer_image from "./images/Men.png";
import womensOffer_image from "./images/Women.png";
import jockey_men from "./images/Jockey_Men.png"
import addidas_men from "./images/Addidas_Pants.png"
import jockey_tracks from "./images/Jockey_WTracks.png"
import soch_saree from "./images/Soch_WSaree.png"
import fasttrack_watch from "./images/Fasttrack_WWatch.png"
import kids_jumpsuit from "./images/TASLAR_KJumpsuitFlannel.png"
import kids_ethnic from "./images/Soch_KEthnicSet.png"
import kids_winter from "./images/TRENDS_KWinterWear.png"
import puma_men from "./images/Puma_Jacket.png"
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
                            <p class="text-center">
                                <h1>MEN</h1>
                            </p>
                        </Container>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={jockey_men} />
                                <Card.Body>
                                    <Card.Title>Jockey</Card.Title>
                                    <Card.Text>
                                        <p>Men's T-Shirt</p>
                                        <p><b>₹1000</b></p>
                                    </Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={addidas_men} />
                                <Card.Body>
                                    <Card.Title>Addidas</Card.Title>
                                    <Card.Text>
                                        <p>Men's Running Tracks</p>
                                        <p><b>₹700</b></p>
                                    </Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={puma_men} />
                                <Card.Body>
                                    <Card.Title>Puma</Card.Title>
                                    <Card.Text>
                                        <p>Men's Jacket</p>
                                        <p><b>₹700</b></p>
                                    </Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Container>
                            <br></br>
                            <p class="text-center">
                                <h1>WOMEN</h1>
                            </p>
                        </Container>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={jockey_tracks} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card's content.
                  </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={soch_saree} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={fasttrack_watch} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Container>
                            <br></br>
                            <p class="text-center">
                                <h1>KIDS</h1>
                            </p>
                        </Container>
                    </Row>
                    <Row>

                        <Col><Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={kids_winter} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                        <Col><Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={kids_jumpsuit} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                        <Col><Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={kids_ethnic} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>

                    </Row>
                    <Row><br></br>
                        <br></br></Row>
                    <br></br>
                    <br></br>
                </Col>
            </Container>
            <Footer />
        </Layout>
    );
};

export default HomePage;

