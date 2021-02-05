import React from "react";

import "./ProductImage.css";

const ProductImage = (props) => {
  return (
    <img
      className="c-ProductImage"
      alt={props.product.name}
      src={
        props.product.image !== undefined
          ? `http://localhost:4000/public/${props.product.image}-${props.number}.jpg`
          : ""
      }
    />
  );
};

export default ProductImage;
