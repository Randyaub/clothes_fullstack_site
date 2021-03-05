import React from "react";
import { Link } from "react-router-dom";
import "./GuestOrdersNavigationLink.css";

const GuestOrdersNavigationLink = () => {
  return (
    <Link className="c-Header__link" to="/account/guest">
      <i class="fas fa-database"></i>
      <span className="small-phone-hide">Guest Orders</span>
    </Link>
  );
};

export default GuestOrdersNavigationLink;
