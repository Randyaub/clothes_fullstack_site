import React from "react";
import { Link } from "react-router-dom";

import "./BackButton.css";

const BackButton = (props) => {
  return (
    <Link to={props.url}>
      <button className="default-btn">
        <i className="fas fa-arrow-left c-BackButton__arrow"></i>
        {props.buttonText}
      </button>
    </Link>
  );
};

export default BackButton;
