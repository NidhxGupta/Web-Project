import React from "react";
import { Col, Container, Jumbotron, Card, Button } from "react-bootstrap";
import { isUserLoggedIn } from "../../actions";
import Layout from "../../components/Layout";
import { Carousel, Row } from "react-bootstrap";
import "./style.css";
import { NavLink, Link } from "react-router-dom";
import mensOffer_image from "./images/Men.png";
import womensOffer_image from "./images/Women.png";
import jockey_men from "./images/Jockey_Men.png";
import addidas_men from "./images/Addidas_Pants.png";
import jockey_tracks from "./images/Jockey_WTracks.png";
import soch_saree from "./images/Soch_WSaree.png";
import fasttrack_watch from "./images/Fasttrack_WWatch.png";
import kids_jumpsuit from "./images/TASLAR_KJumpsuitFlannel.png";
import kids_ethnic from "./images/Soch_KEthnicSet.png";
import kids_winter from "./images/TRENDS_KWinterWear.png";
import puma_men from "./images/Puma_Jacket.png";
import kidsOffer_image from "./images/Kids.png";
import carousel from "./images/Carousel.png";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import data from "./data";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  const productList = useSelector((state) => state.productList || {});
  const { products } = productList;

  return (
    <Layout>
      <Container>
        <Col>
          <p></p>
          <Row>
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={mensOffer_image}
                  alt="First slide"
                />
                {/*<Carousel.Caption>
                                    <h3>New Men's Collection</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                                    </p>
                                </Carousel.Caption>*/}
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={womensOffer_image}
                  alt="Third slide"
                />
                {/*<Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                                <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carousel}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>/*/}
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row>
            <Container>
              <br></br>
              <p class="text-center">
                <h1>MEN</h1>
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
              </ul>{" "}
            </Col>
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
                <h1>WOMEN</h1>
              </p>
            </Container>
          </Row>
          <Row>
            <Col>
              <ul className="products">
                {data.products.slice(6, 7).map((product) => (
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
                {data.products.slice(13, 14).map((product) => (
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
                {data.products.slice(14, 15).map((product) => (
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
                <h1>KIDS</h1>
              </p>
            </Container>
          </Row>
          <Row>
            <Col>
              <ul className="products">
                {data.products.slice(12, 13).map((product) => (
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
                {data.products.slice(10, 11).map((product) => (
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
                {data.products.slice(11, 12).map((product) => (
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
            <br></br>
          </Row>
          <br></br>
          <br></br>
        </Col>
      </Container>
      <Footer />
    </Layout>
  );
};

export default HomePage;
