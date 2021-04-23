import React from "react";
import { Link } from "react-router-dom";

import "./LinkButton.css";

const LinkButton = ({ className, url, leftArrow, buttonText }) => {
  return (
    <Link to={url}>
      <button className={`${className ? className : "default-btn"} `}>
        {leftArrow === true && (
          <i className="fas fa-arrow-left c-LinkButton__arrow" />
        )}
        {buttonText}
      </button>
    </Link>
  );
};

export default LinkButton;
