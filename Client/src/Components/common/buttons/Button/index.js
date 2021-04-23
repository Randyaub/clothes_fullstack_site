import React from "react";

const Button = ({ onClick, className, buttonText }) => {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : "default-btn"} `}
    >
      {buttonText}
    </button>
  );
};

export default Button;
