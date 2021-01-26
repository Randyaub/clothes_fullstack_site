import React from "react";

import { formatCategory } from "../../../utilities";
import "./ProductDetails.css";

import ProductDescription from "./ProductDescription";
import ProductSizes from "./ProductSizes";
import ProductVariants from "./ProductVariants";
import Button from "../../common/buttons/Button";

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
        <div className="full">
          <Button onClick={props.handleAddItem} buttonText={"ADD"} />
        </div>
      </div>
      <ProductDescription product={props.product} />
    </>
  );
};

export default ProductDetails;
