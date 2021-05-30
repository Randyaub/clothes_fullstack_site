import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { formatCategory } from "../../../../../utility/utilities";

import "./Category.css";

const Category = ({ category, className, subMenuClassName }) => {
  let { url } = useRouteMatch();

  return (
    <li>
      <NavLink
        to={`${url}/Shop-Category/${category.name}`}
        className={
          className ? `${className} c-Category__link` : "c-Category__link"
        }
        activeClassName="c-Category-active"
      >
        {formatCategory(category.name)}
      </NavLink>
      {category.subcategories && (
        <ul className="c-Category__submenu">
          {category.subcategories.map((subcategory) => {
            return (
              <NavLink
                key={subcategory}
                to={`${url}/Shop-Category/${category.name}/${subcategory}`}
                className={
                  subMenuClassName
                    ? `${subMenuClassName} c-Category__sublink`
                    : "c-Category__sublink"
                }
                activeClassName="c-Category__sublink-active"
              >
                {formatCategory(subcategory)}
              </NavLink>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default Category;
