import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";

const Product = ({ product }) => {
  return (
    <div key={product.SKU} className="c-Product">
      <div className="l-Product__image">
        <Link to={`/Product-Page/${product.SKU}`}>
          <img
            className="c-Product__image"
            src={`https://react-express-clothes.herokuapp.com/public/${product.image}-1.jpg`}
            alt={product.name}
          />
        </Link>
      </div>
      <div className="c-Product__details">
        <h4 className="c-Product__title">
          <Link to={`/Product-Page/${product.SKU}`}>{product.name}</Link>
        </h4>
        <span className="c-Product__price">${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
