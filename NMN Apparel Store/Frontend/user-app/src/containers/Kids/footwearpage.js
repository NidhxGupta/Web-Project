import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import banner from "./images/Kids.png";

/**
* @author
* @function KFootwear
**/

const KFootwear = (props) => {
    return (
        <Layout>
            <Col>
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
            </Col>
        </Layout>
    )

}

export default KFootwear