import React from "react";
import Label from "../../common/Label";

import "./Input.css";

const Input = (props) => {
  return (
    <div className="c-Input__row">
      <span className="l-Input__label">
        <Label name={props.name} error={props.error} />
      </span>
      <input
        className="c-Input__input"
        type={props.pass ? "password" : "text"}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.setFunction(e.target.value);
        }}
      ></input>
      <span className="c-Input__error">{props.error}</span>
    </div>
  );
};

export default Input;
