import React from "react";

import "./ShippingInput.css";

const ShippingInput = (props) => {
  return (
    <label>
      <div className="c-ShippingInput__label">{props.name}</div>
      <input
        className="c-ShippingInput__input"
        type="text"
        name="firstName"
        value={props.value}
        autoComplete="off"
        onChange={(e) => props.setFunction(e.target.value)}
      />
      {props.subInfo && (
        <span className="c-ShippingInput__subInfo">{props.subInfo}</span>
      )}
    </label>
  );
};

export default ShippingInput;
