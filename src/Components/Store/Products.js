import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Products.css";

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
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <div>
            <img src={product.image} alt="#" />
          </div>
          <div className="card-description">
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Des: ${product.description}`}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;
