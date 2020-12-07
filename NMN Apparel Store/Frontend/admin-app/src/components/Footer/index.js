import React from 'react'
import { Navbar, Container, NavbarBrand } from 'react-bootstrap'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <div className="fixed-bottom">
            <Navbar bg="dark">
                <Container>
                    <NavbarBrand >
                        <Container style={{ textAlign: "center", color: "#fff" }}>
                            Copyright © 2020 NMN Store 2020. All Rights Reserved.
                        </Container>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>
    )

}

export default Footer