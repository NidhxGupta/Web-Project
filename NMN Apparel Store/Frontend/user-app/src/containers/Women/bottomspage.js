import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer';
import Layout from '../../components/Layout'
import banner from "./images/Women.png";
import data from '../HomePage/data';
import {NavLink} from 'react-router-dom';

/**
* @author
* @function WBottoms
**/

const WBottoms = (props) => {
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
                    
                        <Col>
                        <ul className="products" >     
                    {data.products.slice(23,24).map((product) => (
            <li key={product._id}>
              <div className="product">
                <NavLink to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </NavLink>
                <div className="product-name">
                  <NavLink to={'/product/' + product._id}>{product.name}</NavLink>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">{product.price}/-</div>
               
              </div>
            </li>
      
          ))}
           </ul>  
                        </Col>
                        <Col>
                        <ul className="products" >     
                    {data.products.slice(24,25).map((product) => (
            <li key={product._id}>
              <div className="product">
                <NavLink to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </NavLink>
                <div className="product-name">
                  <NavLink to={'/product/' + product._id}>{product.name}</NavLink>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">{product.price}/-</div>
               
              </div>
            </li>
      
          ))}
           </ul>  
                        </Col>
                        
                    
                </Row>
                <br></br>
                <br></br>
            </Col>
            <Footer />
        </Layout>
    )

}

export default WBottoms