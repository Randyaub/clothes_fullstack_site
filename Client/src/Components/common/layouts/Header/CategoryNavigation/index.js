import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./CategoryNavigation.css";

const CategoryNavigation = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <div className="c-CategoryNavigation">
        <NavLink
          isActive={() => pathname.includes("/men")}
          className="c-CategoryNavigation__category c-CategoryNavigation-equal"
          to="/men/Shop-Category/all"
        >
          MEN
        </NavLink>
        <NavLink
          isActive={() => pathname.includes("/women")}
          className="c-CategoryNavigation__category"
          to="/women/Shop-Category/all"
        >
          WOMEN
        </NavLink>
      </div>
    </nav>
  );
};

export default CategoryNavigation;
