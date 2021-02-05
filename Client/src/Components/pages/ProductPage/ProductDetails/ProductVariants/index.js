import React from "react";

import "./ProductVariants.css";
import { Link } from "react-router-dom";

const ProductVariants = (props) => {
  return (
    <div className="c-ProductVariants">
      {props.variants.item &&
        props.variants.item.map((varient, i) => {
          return (
            <Link
              key={i}
              to={varient.sku}
              className={
                props.product.sku === varient.sku
                  ? "c-ProductVariants-selected"
                  : ""
              }
            >
              <img
                src={`http://localhost:4000/public/${varient.image}-1.jpg`}
                className="c-ProductVariants__image"
                alt={varient.colour}
                onClick={() => {
                  props.setError("");
                  props.setSize("");
                }}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default ProductVariants;
