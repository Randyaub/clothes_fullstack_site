import React from "react";

import { formatCategory } from "../../../../../../utility/utilities";

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
