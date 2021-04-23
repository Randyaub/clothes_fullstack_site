import React from "react";
import "./InputSelectMenu.css";

import InputSelectMenuItem from "./InputSelectMenuItem";

const InputSelectMenu = ({ isOpen, list, setFunction }) => {
  return (
    <div className="c-InputDropDownList">
      <ul
        className={`c-InputDropDownList__list ${
          isOpen && `c-InputDropDownList-active`
        }`}
      >
        {list.map((item, index) => {
          return (
            <InputSelectMenuItem
              key={index}
              item={item}
              setFunction={setFunction}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default InputSelectMenu;
