import React from "react";

import "./Label.css";

const Label = ({ className, name, error }) => {
  return (
    <div className={className ? className : "c-Label"}>
      {name}
      {error && <span className="c-Label__error">*</span>}
    </div>
  );
};

export default Label;
