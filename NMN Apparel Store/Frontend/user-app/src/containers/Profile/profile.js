import React from 'react'
import { Col, Container, Row, Image, Table, Button } from 'react-bootstrap'
import { shallowEqual, useSelector } from 'react-redux';
import { authConstants } from '../../actions/constants';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout'
import profilepic from "./images/Profile_Pic.png";


/**
* @author
* @function Profile
**/

const Profile = (props) => {
    const auth = useSelector(state => state.auth);
    return (
        <Layout>
            <br></br>
            <br></br>
            <Container>
                <Col>
                    <Row>
                        <Container>
                            <Image src={profilepic} rounded />
                        </Container>
                    </Row>
                    <Row><br></br></Row>
                    <Row>

                        <Container>
                            <h2><b><a className="fullName">{auth.user.fullName}</a></b></h2>
                        </Container>
                        <Container style={{ background: "#000", height: '1px' }}></Container>
                        <Container>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas efficitur augue ac consectetur. Quisque eget nulla enim. Nunc sollicitudin vulputate nisi in sollicitudin. Proin nec ante facilisis, mollis nibh a, iaculis urna. Vivamus non dapibus leo, at fermentum dui. Morbi lorem elit, semper eu commodo suscipit, ornare vitae dolor. Duis nec nibh in sapien vestibulum suscipit. Duis porttitor ipsum a dolor accumsan eleifend. Vivamus blandit volutpat nunc, feugiat sodales ante volutpat sit amet. Maecenas vestibulum ullamcorper lorem. Duis ultricies urna ut urna vulputate sollicitudin. Proin aliquam maximus elit, at sagittis lorem convallis condimentum.</p>

                            <p>Praesent eu finibus purus, posuere vestibulum augue. Aenean ac aliquet erat. Curabitur sodales sit amet sapien quis vestibulum. Phasellus suscipit aliquet dolor, vel porta eros vulputate ac. Vivamus sed nunc vitae arcu accumsan fermentum in et odio. Suspendisse sollicitudin velit vitae pellentesque consequat. Donec vulputate metus pretium est ullamcorper ornare. Aenean consectetur ut ante eu interdum.</p>

                            <p>Vivamus auctor nisi nisl, vel lobortis velit porta in. Duis eu tellus metus. Phasellus pulvinar convallis nisl pulvinar efficitur. Sed congue maximus felis a sollicitudin. Sed porta tortor eu vestibulum pharetra. Maecenas eu bibendum arcu. Pellentesque molestie, sem ornare placerat ultrices, nunc leo rhoncus quam, quis interdum urna turpis luctus mauris. Nam commodo accumsan neque, gravida feugiat mauris vehicula id. Pellentesque volutpat vestibulum mauris, sollicitudin hendrerit massa congue eget. Nam interdum ultricies sodales. Etiam quis porta ligula. Donec maximus iaculis odio eu accumsan.</p>
                            <br></br>
                            <br></br>
                        </Container>

                    </Row>
                    <br></br>
                </Col>
            </Container>
            <Footer>

            </Footer>
        </Layout>

    )

}

export default Profile