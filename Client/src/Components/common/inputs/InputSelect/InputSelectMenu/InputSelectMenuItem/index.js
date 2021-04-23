import React from "react";

import "./InputSelectMenuItem.css";

const InputSelectMenuItem = ({ setFunction, item }) => {
  return (
    <li
      onClick={() => {
        setFunction(item);
      }}
      className="c-InputDropDownItem"
    >
      {item}
    </li>
  );
};

export default InputSelectMenuItem;
