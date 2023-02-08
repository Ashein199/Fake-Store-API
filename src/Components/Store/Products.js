import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Products.css";
import { Col, Row } from "antd";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products?limit=10",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <Row className="products-container">
      {products.map((product) => (
        <Col span={12} key={product.id} className="card">
          <div>
            <img src={product.image} alt="#" />
          </div>
          <div className="card-description">
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Des: ${product.description}`}</h6>
          </div>
        </Col>
      ))}
    </Row>
  );
};
export default Products;
