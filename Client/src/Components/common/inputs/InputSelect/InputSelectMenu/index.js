import React from "react";
import "./InputSelectMenu.css";

import InputSelectMenuItem from "./InputSelectMenuItem";

const InputSelectMenu = (props) => {
  return (
    <div className="c-InputDropDownList">
      <ul
        className={`c-InputDropDownList__list ${
          props.isOpen && `c-InputDropDownList-active`
        }`}
      >
        {props.list.map((item, index) => {
          return (
            <InputSelectMenuItem
              key={index}
              item={item}
              setFunction={props.setFunction}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default InputSelectMenu;
