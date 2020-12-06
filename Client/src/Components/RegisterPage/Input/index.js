import React from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <div className="c-Input__row">
      <label>
        <div className="c-Input__label">
          {props.name}
          {props.error ? <span className="c-Input__asterix">*</span> : ``}
        </div>
        <input
          className="c-Input__input"
          type={props.pass ? "password" : "text"}
          name="lastName"
          value={props.value}
          onChange={(e) => {
            props.setFunction(e.target.value);
          }}
          autoComplete="off"
        ></input>
        <span className="c-Input__error">{props.error}</span>
      </label>
    </div>
  );
};

export default Input;
