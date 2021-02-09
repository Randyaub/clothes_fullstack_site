import React from "react";
import "./InputCheckbox.css";

const InputCheckbox = (props) => {
  return (
    <label className="c-InputCheckbox">
      {props.labelText}
      <input
        className="c-InputCheckbox__checkbox"
        type="checkbox"
        onChange={(event) => props.handleChange(event)}
      ></input>
      <span class="c-InputCheckbox__checkmark"></span>
    </label>
  );
};

export default InputCheckbox;
