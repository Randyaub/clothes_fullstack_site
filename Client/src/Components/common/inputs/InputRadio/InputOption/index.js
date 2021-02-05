import React from "react";
import "./InputOption.css";

const InputOption = (props) => {
  return (
    <label className="c-InputOption">
      {props.text}
      <input
        className="c-InputOption__checkbox"
        type="radio"
        value={props.value}
        checked={props.selectedOption === `${props.value}`}
        onChange={(event) => props.setSelectedOption(event.target.value)}
      ></input>
      <span className="c-InputOption__checkmark"></span>
    </label>
  );
};

export default InputOption;
