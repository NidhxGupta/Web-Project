import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import { isUserLoggedIn } from '../../actions';
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {


    return (
        <Layout sidebar>

            {/*<Jumbotron margin='5rem' className="text-center">
                <h1>Welcome to Admin Dashboard</h1>
    </Jumbotron>*/}
        </Layout>
    )

}

export default HomePage