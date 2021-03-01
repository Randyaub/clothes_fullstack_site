import React, { useState } from "react";
import SideBarItem from "../CategorySideBar/SideBarItem";
import "./CategorySubMenu.css";

const CategorySubMenu = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="c-CategorySubMenu">
      <div
        onClick={() => setClicked(!clicked)}
        className="c-CategorySubMenu__selected"
      >
        <span>CATEGORY</span>
        <i className="fas fa-chevron-down"></i>
      </div>
      {clicked && (
        <div className="c-CategorySubMenu__container">
          <ul className="c-CategorySubMenu__list">
            {props.categories.map((item) => {
              return <SideBarItem key={item.category} item={item} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategorySubMenu;