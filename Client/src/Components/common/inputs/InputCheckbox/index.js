import React from "react";
import "./InputCheckbox.css";

const InputCheckbox = ({ labelText, handleChange }) => {
  return (
    <label className="c-InputCheckbox">
      {labelText}
      <input
        className="c-InputCheckbox__checkbox"
        type="checkbox"
        onChange={(event) => handleChange(event)}
      ></input>
      <span className="c-InputCheckbox__checkmark"></span>
    </label>
  );
};

export default InputCheckbox;
