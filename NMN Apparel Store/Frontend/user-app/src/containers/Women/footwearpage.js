import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import banner from "./images/Women.png";

/**
* @author
* @function WFootwear
**/

const WFootwear = (props) => {
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
                            {/*Add WoMens FOOTWEAR Product Card here*/}
                        </Col>
                        <Col>
                            {/*Add WoMens FOOTWEAR Product Card here*/}
                        </Col>
                        <Col>
                            {/*Add WoMens FOOTWEAR Product Card here*/}
                        </Col>
                    </Container>
                </Row>
            </Col>
        </Layout>
    )

}

export default WFootwear