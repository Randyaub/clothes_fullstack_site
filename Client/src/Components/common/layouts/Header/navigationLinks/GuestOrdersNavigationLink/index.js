import React from "react";
import { Link } from "react-router-dom";

const GuestOrdersNavigationLink = () => {
  return (
    <Link className="c-Header__link" to="/account/guest">
      <span>GUEST ORDERS</span>
    </Link>
  );
};

export default GuestOrdersNavigationLink;
