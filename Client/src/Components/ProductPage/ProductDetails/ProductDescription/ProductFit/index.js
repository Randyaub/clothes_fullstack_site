import React from "react";

import { formatCategory } from "../../../../../utilities";

const ProductFit = (props) => {
  return props.fit ? (
    <h4>
      Fit - <span className="lighter-font">{formatCategory(props.fit)}</span>
    </h4>
  ) : (
    ""
  );
};

export default ProductFit;
