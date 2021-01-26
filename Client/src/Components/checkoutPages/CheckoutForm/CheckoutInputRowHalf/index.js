import React from "react";

import CheckoutInput from "../CheckoutInput";
import "./CheckoutInputRowHalf.css";

const CheckoutInputRowHalf = (props) => {
  return (
    <div className="c-CheckingInputRowHalf">
      <CheckoutInput
        name={props.name}
        value={props.value}
        setFunction={props.setFunction}
        subInfo={props.subInfo}
        error={props.error}
      />
    </div>
  );
};

export default CheckoutInputRowHalf;
