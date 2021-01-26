import React from "react";

const SubmitButton = (props) => {
  return (
    <input
      className="default-btn"
      type="submit"
      value={props.buttonText}
    ></input>
  );
};

export default SubmitButton;
