import React from "react";

import "./ProductImage.css";

const ProductImage = (props) => {
  return (
    <img
      src={
        props.product.image !== undefined
          ? `http://localhost:4000/public/${props.product.image}-${props.number}.jpg`
          : ""
      }
      alt={props.product.name}
      className="c-ProductImage"
    />
  );
};

export default ProductImage;
