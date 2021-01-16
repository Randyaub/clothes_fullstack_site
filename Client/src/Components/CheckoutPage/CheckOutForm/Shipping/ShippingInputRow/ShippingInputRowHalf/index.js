import React from "react";

import ShippingInput from "../ShippingInput";
import "./ShippingInputRowHalf.css";

const ShippingInputRowHalf = (props) => {
  return (
    <div className="c-ShippingInputRowHalf">
      <ShippingInput
        name={props.name}
        value={props.value}
        setFunction={props.setFunction}
        subInfo={props.subInfo}
      />
    </div>
  );
};

export default ShippingInputRowHalf;
