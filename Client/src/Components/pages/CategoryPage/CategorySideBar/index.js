import React, { useEffect } from "react";
import { men, women } from "./categories";
import SideBarItem from "./SideBarItem";

import "./CategorySideBar.css";

const CategorySideBar = (props) => {
  useEffect(() => {
    if (props.type === "men") {
      props.setCategories(men);
    } else if (props.type === "women") {
      props.setCategories(women);
    }
  }, [props.type]);

  return (
    <div className="c-CategorySideBar-container">
      <aside className="c-CategorySideBar">
        <h3 className="c-CategorySideBar__header">Shop by Category</h3>
        <ul>
          {props.categories.map((item) => {
            return (
              <SideBarItem
                key={item.category}
                item={item}
                className={"c-CategorySideBar__item"}
                subMenuClassName={"c-CategorySideBar__subitem"}
              />
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default CategorySideBar;
