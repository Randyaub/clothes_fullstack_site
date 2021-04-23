import React from "react";

const SubmitButton = ({ className, buttonText }) => {
  return (
    <input
      className={`${className ? className : "default-btn"} `}
      type="submit"
      value={buttonText}
    ></input>
  );
};

export default SubmitButton;
