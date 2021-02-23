import React from "react";
import { Link } from "react-router-dom";
import "./StoreLogo.css";

const StoreLogo = () => {
  return (
    <Link className="c-StoreLogo" to="/">
      <img
        className="c-StoreLogo__image"
        src={`/store-logo.png`}
        alt="logo"
      ></img>
    </Link>
  );
};

export default StoreLogo;
