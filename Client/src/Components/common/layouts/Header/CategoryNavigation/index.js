import React from "react";
import { NavLink } from "react-router-dom";

import "./CategoryNavigation.css";

const CategoryNavigation = () => {
  return (
    <nav>
      <div className="c-CategoryNavigation">
        <NavLink
          className="c-CategoryNavigation__category c-CategoryNavigation-equal"
          to="/men/Shop-Category/all"
        >
          MEN
        </NavLink>
        <NavLink
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
