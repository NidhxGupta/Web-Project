import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import banner from "./images/Men.png";

/**
* @author
* @function MBottoms
**/

const MBottoms = (props) => {
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
                        <p class="text-center"><h1>BOTTOMS</h1></p>
                    </Container>
                </Row>
                <Row>
                    <Container fluid>
                        <Col>
                            {/*Add Mens BOTTOMS Product Card here*/}
                        </Col>
                        <Col>
                            {/*Add Mens BOTTOMS Product Card here*/}
                        </Col>
                        <Col>
                            {/*Add Mens BOTTOMS Product Card here*/}
                        </Col>
                    </Container>
                </Row>
            </Col>
        </Layout>
    )

}

export default MBottoms