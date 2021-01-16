import React from "react";
import ShippingRowHalf from "./ShippingInputRowHalf";

import "./ShippingInputRow.css";

const ShippingInputRow = (props) => {
  return (
    <div className="c-ShippingInputRow">
      {props.rows.map((row) => {
        return (
          <ShippingRowHalf
            name={row.name}
            value={row.value}
            setFunction={row.setFunction}
            subInfo={row.subInfo}
          />
        );
      })}
    </div>
  );
};

export default ShippingInputRow;
