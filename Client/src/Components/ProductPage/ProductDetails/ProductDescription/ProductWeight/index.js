import React from "react";

const ProductWeight = (props) => {
  return props.weight ? (
    <h4>
      Weight - <span className="lighter-font">{props.weight} KG</span>
    </h4>
  ) : (
    ""
  );
};

export default ProductWeight;
