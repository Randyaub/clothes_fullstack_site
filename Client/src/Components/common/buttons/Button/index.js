import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className ? props.className : "default-btn"} `}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
