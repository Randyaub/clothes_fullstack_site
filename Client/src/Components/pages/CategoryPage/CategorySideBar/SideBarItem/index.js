import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import "./SideBarItem.css";

import { formatCategory } from "../../../../../utility/utilities";

const SideBarItem = (props) => {
  let { url } = useRouteMatch();

  return (
    <React.Fragment>
      <NavLink
        to={`${url}/Shop-Category/${props.item.category}`}
        className={
          props.className
            ? `${props.className} c-SideBarItem__link`
            : "c-SideBarItem__link"
        }
        activeClassName="c-SideBarItem-active"
      >
        {formatCategory(props.item.category)}
      </NavLink>
      {props.item.subcategories && (
        <ul className="c-SideBarItem__submenu">
          {props.item.subcategories.map((subitem) => {
            return (
              <NavLink
                key={subitem}
                to={`${url}/Shop-Category/${props.item.category}/${subitem}`}
                className={
                  props.subMenuClassName
                    ? `${props.subMenuClassName} c-SideBarItem__sublink`
                    : "c-SideBarItem__sublink"
                }
                activeClassName="c-SideBarItem__sublink-active"
              >
                {formatCategory(subitem)}
              </NavLink>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
};

export default SideBarItem;
