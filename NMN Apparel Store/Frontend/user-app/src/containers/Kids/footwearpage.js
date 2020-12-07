import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer';
import Layout from '../../components/Layout'
import banner from "./images/Kids.png";
import data from '../HomePage/data';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function KFootwear
**/

const KFootwear = (props) => {
  return (
    <Layout>
      <Container>
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

            <Col>
              <ul className="products" >
                {data.products.slice(20, 21).map((product) => (
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
                {data.products.slice(11, 12).map((product) => (
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
          <br></br>
          <br></br>
        </Col>
      </Container>
      <Footer />
    </Layout>
  )

}

export default KFootwear