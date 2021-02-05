import React from "react";

import "./ProductDescription.css";
import ProductFit from "./ProductFit";
import ProductMaterials from "./ProductMaterials";
import ProductWeight from "./ProductWeight";

const ProductDescription = (props) => {
  return (
    <div className="c-ProductDescription">
      <h3 className="c-ProductDescription__description">
        {props.product.description}
      </h3>
      <ProductFit fit={props.product.fit} />
      <ProductWeight weight={props.product.weight} />
      <ProductMaterials product={props.product} />
    </div>
  );
};

export default ProductDescription;
