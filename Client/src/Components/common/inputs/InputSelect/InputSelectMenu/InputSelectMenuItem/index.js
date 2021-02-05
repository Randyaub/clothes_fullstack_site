import React from "react";

import "./InputSelectMenuItem.css";

const InputSelectMenuItem = (props) => {
  return (
    <li
      onClick={() => {
        props.setFunction(props.item);
      }}
      className="c-InputDropDownItem"
    >
      {props.item}
    </li>
  );
};

export default InputSelectMenuItem;
