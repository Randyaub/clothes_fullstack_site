import React, { useEffect } from "react";
import { men, women } from "./data";
import Category from "../Category";

import "./SideBar.css";

const SideBar = ({ gender, categories, setCategories }) => {
  useEffect(() => {
    if (gender === "men") {
      setCategories(men);
    } else if (gender === "women") {
      setCategories(women);
    }
  }, [gender, setCategories]);

  return (
    <aside className="c-SideBar">
      <h3 className="c-SideBar__h">Shop by Category</h3>
      <ul>
        {categories.map((category) => {
          return (
            <Category
              key={category.name}
              category={category}
              className={"c-SideBar__category"}
              subMenuClassName={"c-SideBar__subCategory"}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
