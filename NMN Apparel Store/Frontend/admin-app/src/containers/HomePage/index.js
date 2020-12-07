import React from "react";
import { Card, Image, Jumbotron } from "react-bootstrap";
import { isUserLoggedIn } from "../../actions";
import whiteimg from "./images/White.png";
import Layout from "../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
    const auth = useSelector((state) => state.auth);

    return (
        <Layout sidebar>
            <Container className="px-0 pt-4 pb-0">
                <Jumbotron margin="5rem" className="text-center">
                    <h1>
                        Welcome to the Admin Dashboard{" "}
                        <b>
                            <a className="fullName">{auth.user.fullName}</a>
                        </b>
                    </h1>
                    <Row>
                        <br></br>
                    </Row>
                    <Row>
                        <br></br>
                    </Row>
                    <Col>
                        <Row className="px-5">
                            <Col>
                                <Card className="bg-info text-white" style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Container>
                                            <Image
                                                src={whiteimg}
                                                roundedCircle
                                                className="pl-5 pr-5 pt-1 pb-3"
                                            />
                                        </Container>

                                        <Card.Title style={{ textAlign: "center" }}>
                                            {" "}
                                            <h3> No. of Users</h3>{" "}
                                        </Card.Title>
                                        <Card.Text>
                                            X
                                    </Card.Text>
                                    </Card.Body>

                                </Card>
                            </Col>

                            <Col>
                                <Card className="bg-info text-white" style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Container>
                                            <Image
                                                src={whiteimg}
                                                roundedCircle
                                                className="pl-5 pr-5 pt-1 pb-3"
                                            />
                                        </Container>

                                        <Card.Title style={{ textAlign: "center" }}>
                                            {" "}
                                            <h3> Pending Orders</h3>{" "}
                                        </Card.Title>
                                        <Card.Text>
                                            X
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="bg-info text-white" style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Container>
                                            <Image
                                                src={whiteimg}
                                                roundedCircle
                                                className="pl-5 pr-5 pt-1 pb-3"
                                            />
                                        </Container>

                                        <Card.Title style={{ textAlign: "center" }}>
                                            {" "}
                                            <h3> Orders Completed</h3>{" "}
                                        </Card.Title>
                                        <Card.Text>
                                            X
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <br></br>
                        </Row>
                        <Row>
                            <br></br>
                        </Row>
                        <Row className="px-5">
                            <Col>
                                <Card className="bg-info text-white" style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Container>
                                            <Image
                                                src={whiteimg}
                                                roundedCircle
                                                className="pl-5 pr-5 pt-1 pb-3"
                                            />
                                        </Container>

                                        <Card.Title style={{ textAlign: "center" }}>
                                            {" "}
                                            <h3> No. of Users</h3>{" "}
                                        </Card.Title>
                                        <Card.Text>
                                            X
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="bg-info text-white" style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Container>
                                            <Image
                                                src={whiteimg}
                                                roundedCircle
                                                className="pl-5 pr-5 pt-1 pb-3"
                                            />
                                        </Container>

                                        <Card.Title style={{ textAlign: "center" }}>
                                            {" "}
                                            <h3> Pending Orders</h3>{" "}
                                        </Card.Title>
                                        <Card.Text>
                                            X
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="bg-info text-white" style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Container>
                                            <Image
                                                src={whiteimg}
                                                roundedCircle
                                                className="pl-5 pr-5 pt-1 pb-3"
                                            />
                                        </Container>

                                        <Card.Title style={{ textAlign: "center" }}>
                                            {" "}
                                            <h3> Orders Completed</h3>{" "}
                                        </Card.Title>
                                        <Card.Text>
                                            X
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Jumbotron>
            </Container>
            <Footer />
        </Layout>
    );
};

export default HomePage;
