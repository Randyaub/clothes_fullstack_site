import React, { useState, useEffect } from "react";
import { men, women } from "./categories";
import SideBarItem from "./SideBarItem";

import "./CategorySideBar.css";

const CategorySideBar = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (props.type === "men") {
      setCategories(men);
    } else if (props.type === "women") {
      setCategories(women);
    }
  }, [props.type]);

  return (
    <aside className="c-CategorySideBar">
      <h2>Shop by Category</h2>
      <ul>
        {categories.map((item) => {
          return <SideBarItem key={item.category} item={item} />;
        })}
      </ul>
    </aside>
  );
};

export default CategorySideBar;
