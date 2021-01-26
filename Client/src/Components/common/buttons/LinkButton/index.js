import React from "react";
import { Link } from "react-router-dom";

import "./LinkButton.css";

const LinkButton = (props) => {
  return (
    <Link to={props.url}>
      <button
        className={`${props.className ? props.className : "default-btn"} `}
      >
        {props.leftArrow === true && (
          <i className="fas fa-arrow-left c-LinkButton__arrow"></i>
        )}
        {props.buttonText}
      </button>
    </Link>
  );
};

export default LinkButton;
