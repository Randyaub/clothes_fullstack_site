import React from "react";

import "./Label.css";

const Label = (props) => {
  return (
    <div className="c-Label">
      {props.name}
      {props.error && <span className="c-Label__error">*</span>}
    </div>
  );
};

export default Label;
