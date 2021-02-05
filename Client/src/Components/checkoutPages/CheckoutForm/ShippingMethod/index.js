import React from "react";
import "./ShippingMethods.css";

import InputSelect from "../../../common/inputs/InputRadio";

const ShippingMethod = (props) => {
  const selectInputOption = [{ value: "Standard", text: "STANDARD" }];

  return (
    <div className="c-ShippingMethod">
      <InputSelect
        selectedOption={props.formInfo.shippingMethod}
        setSelectedOption={props.formInfo.setShippingMethod}
        options={selectInputOption}
      />
    </div>
  );
};

export default ShippingMethod;
