import React from "react";

import "./ShippingInput.css";

const ShippingInput = (props) => {
  return (
    <label>
      <div className="c-ShippingInput__label">
        {props.name}
        {props.error && <span className="c-ShippingInput__asterix">*</span>}
      </div>
      <input
        className="c-ShippingInput__input"
        type="text"
        name="firstName"
        value={props.value}
        autoComplete="off"
        onChange={(e) => props.setFunction(e.target.value)}
      />
      {props.subInfo && (
        <div className="c-ShippingInput__subInfo">{props.subInfo}</div>
      )}
      {props.error && (
        <span className="c-ShippingInput__error">{props.error}</span>
      )}
    </label>
  );
};

export default ShippingInput;
