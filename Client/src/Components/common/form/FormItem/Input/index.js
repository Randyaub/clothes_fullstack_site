import React from "react";

import "./Input.css";

const Input = (props) => {
  const inputRegex = (event) => {
    if (props.regex) {
      if (!props.regex.test(event.key)) {
        event.preventDefault();
      }
    }
  };

  return (
    <>
      <input
        onKeyPress={(event) => inputRegex(event)}
        className={`${props.className ? props.className : "c-Input__input"}`}
        type={props.type ? props.type : "text"}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.setFunction(e.target.value);
        }}
        maxLength={props.maxLength && props.maxLength}
      ></input>
      {props.subInfo && <div className="c-Input__subInfo">{props.subInfo}</div>}
      {props.error && <div className="c-Input__error">{props.error}</div>}
    </>
  );
};

export default Input;
