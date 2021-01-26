import React from "react";

import "./BreadCrumbIndicator.css";

const BreadCrumbIndicator = (props) => {
  return (
    <div className="c-BreadCrumbIndicator">
      <div
        className={`c-BreadCrumbIndicator__crumb ${
          props.checkoutPosition === "shipping" &&
          "c-BreadCrumbIndicator-active"
        }`}
      >
        SHIPPING INFO
      </div>
      <div
        className={`c-BreadCrumbIndicator__crumb ${
          props.checkoutPosition === "payment" && "c-BreadCrumbIndicator-active"
        }`}
      >
        PAYMENT INFO
      </div>
      <div
        className={`c-BreadCrumbIndicator__crumb ${
          props.checkoutPosition === "order" && "c-BreadCrumbIndicator-active"
        }`}
      >
        PLACE ORDER
      </div>
    </div>
  );
};

export default BreadCrumbIndicator;
