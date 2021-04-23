import React from "react";
import "./InputOption.css";

const InputOption = ({ text, value, selectedOption, setSelectedOption }) => {
  return (
    <label className="c-InputOption">
      {text}
      <input
        className="c-InputOption__checkbox"
        type="radio"
        value={value}
        checked={selectedOption === `${value}`}
        onChange={(event) => setSelectedOption(event.target.value)}
      ></input>
      <span className="c-InputOption__checkmark"></span>
    </label>
  );
};

export default InputOption;
