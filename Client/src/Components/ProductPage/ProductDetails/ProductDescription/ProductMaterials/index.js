import React from "react";

import { formatCategory } from "../../../../../utilities";

const ProductMaterials = (props) => {
  return props.product.materials ? (
    <h4>
      Materials -
      {props.product.materials.map((cloth, i) => {
        return (
          <span key={i} className="lighter-font">
            {" "}
            {formatCategory(cloth.material)} {cloth.percent}%
          </span>
        );
      })}
    </h4>
  ) : (
    ""
  );
};

export default ProductMaterials;
