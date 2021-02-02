import React from "react";
import "./InputDropDownList.css";

import InputDropDownMenuItem from "./InputDropDownItem";

const InputDropDownList = (props) => {
  return (
    <div className="c-InputDropDownList">
      <ul
        className={`c-InputDropDownList__list ${
          props.isOpen && `c-InputDropDownList-active`
        }`}
      >
        {props.list.map((item, index) => {
          return (
            <InputDropDownMenuItem
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

export default InputDropDownList;
