import React from "react";

import { formatCategory } from "../../../utilities";
import "./ProductDetails.css";

import ProductDescription from "./ProductDescription";
import ProductSizes from "./ProductSizes";
import ProductVariants from "./ProductVariants";

const ProductDetails = (props) => {
  return (
    <>
      <div className="c-ProductDetails">
        <h1 className="c-ProductDetails__title">{props.product.name}</h1>
        <h2 className="c-ProductDetails__price">${props.product.price}</h2>
        <h3 className="c-ProductDetails__colour">
          {props.product.colour && formatCategory(props.product.colour)}
        </h3>
        <ProductVariants
          product={props.product}
          setSize={props.setSize}
          variants={props.variants}
          setError={props.setError}
        />
        <ProductSizes
          product={props.product}
          setSize={props.setSize}
          error={props.error}
          size={props.size}
        />
        <button
          onClick={props.handleAddItem}
          className="c-ProductDetails__button"
        >
          ADD
        </button>
      </div>
      <ProductDescription product={props.product} />
    </>
  );
};

export default ProductDetails;
