import React from "react";

import "./CheckoutInput.css";

const CheckoutInput = (props) => {
  return (
    <label>
      <div className="c-CheckingInput__label">
        {props.name}
        {props.error && <span className="c-CheckingInput__asterix">*</span>}
      </div>
      <input
        className="c-CheckingInput__input"
        type="text"
        name="firstName"
        value={props.value}
        autoComplete="off"
        onChange={(e) => props.setFunction && props.setFunction(e.target.value)}
      />
      {props.subInfo && (
        <div className="c-CheckingInput__subInfo">{props.subInfo}</div>
      )}
      {props.error && (
        <span className="c-CheckingInput__error">{props.error}</span>
      )}
    </label>
  );
};

export default CheckoutInput;
