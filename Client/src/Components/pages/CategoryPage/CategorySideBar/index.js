import React, { useState, useEffect } from "react";
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
        <h2>Shop by Category</h2>
        <ul>
          {props.categories.map((item) => {
            return <SideBarItem key={item.category} item={item} />;
          })}
        </ul>
      </aside>
    </div>
  );
};

export default CategorySideBar;
