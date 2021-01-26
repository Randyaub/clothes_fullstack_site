import React from "react";
import CheckoutInputRowHalf from "../CheckoutInputRowHalf";

import "./CheckoutInputRow.css";

const CheckoutInputRow = (props) => {
  return (
    <div className="c-ShippingInputRow">
      {props.rows.map((row, index) => {
        return (
          <CheckoutInputRowHalf
            key={index}
            name={row.name}
            value={row.value}
            setFunction={row.setFunction}
            subInfo={row.subInfo}
            error={row.error}
          />
        );
      })}
    </div>
  );
};

export default CheckoutInputRow;
