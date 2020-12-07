import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import banner from "./images/Men.png";
import data from "../HomePage/data";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function GMen
 **/

const GMen = (props) => {
  return (
    <Layout>
      <Container>
        <Container>
          <Col>
            <br></br>
            <br></br>
            <Row>
              <img className="d-block w-100" src={banner} alt="Banner" />
              {""}
            </Row>
            <Row>
              <Container>
                <br></br>
                <p class="text-center">
                  <h1>TOPS</h1>
                </p>
              </Container>
            </Row>
            <Row>
              <Col>
                <ul className="products">
                  {data.products.slice(0, 1).map((product) => (
                    <li key={product._id}>
                      <div className="product">
                        <NavLink to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </NavLink>
                        <div className="product-name">
                          <NavLink to={"/product/" + product._id}>
                            {product.name}
                          </NavLink>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}/-</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col>
                <ul className="products">
                  {data.products.slice(2, 3).map((product) => (
                    <li key={product._id}>
                      <div className="product">
                        <NavLink to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </NavLink>
                        <div className="product-name">
                          <NavLink to={"/product/" + product._id}>
                            {product.name}
                          </NavLink>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}/-</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col>
                <ul className="products">
                  {data.products.slice(1, 2).map((product) => (
                    <li key={product._id}>
                      <div className="product">
                        <NavLink to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </NavLink>
                        <div className="product-name">
                          <NavLink to={"/product/" + product._id}>
                            {product.name}
                          </NavLink>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}/-</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row>
              <Container>
                <br></br>
                <p class="text-center">
                  <h1>BOTTOMS</h1>
                </p>
              </Container>
            </Row>
            <Row>
              <Col>
                <ul className="products">
                  {data.products.slice(21, 22).map((product) => (
                    <li key={product._id}>
                      <div className="product">
                        <NavLink to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </NavLink>
                        <div className="product-name">
                          <NavLink to={"/product/" + product._id}>
                            {product.name}
                          </NavLink>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}/-</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col>
                <ul className="products">
                  {data.products.slice(22, 23).map((product) => (
                    <li key={product._id}>
                      <div className="product">
                        <NavLink to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </NavLink>
                        <div className="product-name">
                          <NavLink to={"/product/" + product._id}>
                            {product.name}
                          </NavLink>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}/-</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row>
              <Container>
                <br></br>
                <p class="text-center">
                  <h1>FOOTWEAR</h1>
                </p>
              </Container>
            </Row>
            <Row>
              <Col>
                <ul className="products">
                  {data.products.slice(8, 9).map((product) => (
                    <li key={product._id}>
                      <div className="product">
                        <NavLink to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </NavLink>
                        <div className="product-name">
                          <NavLink to={"/product/" + product._id}>
                            {product.name}
                          </NavLink>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}/-</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row>
              <Container>
                <br></br>
                <p class="text-center">
                  <h1>ACCESSORIES</h1>
                </p>
              </Container>
            </Row>
            <Row>
              <Col>
                <ul className="products">
                  {data.products.slice(3, 4).map((product) => (
                    <li key={product._id}>
                      <div className="product">
                        <NavLink to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </NavLink>
                        <div className="product-name">
                          <NavLink to={"/product/" + product._id}>
                            {product.name}
                          </NavLink>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}/-</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col>
                <ul className="products">
                  {data.products.slice(4, 5).map((product) => (
                    <li key={product._id}>
                      <div className="product">
                        <NavLink to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </NavLink>
                        <div className="product-name">
                          <NavLink to={"/product/" + product._id}>
                            {product.name}
                          </NavLink>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}/-</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col>
                <ul className="products">
                  {data.products.slice(5, 6).map((product) => (
                    <li key={product._id}>
                      <div className="product">
                        <NavLink to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </NavLink>
                        <div className="product-name">
                          <NavLink to={"/product/" + product._id}>
                            {product.name}
                          </NavLink>
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
      </Container>
      <Footer />
    </Layout>
  );
};

export default GMen;
