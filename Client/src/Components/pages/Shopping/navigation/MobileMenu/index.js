import React, { useState } from "react";
import Category from "../Category";

import "./MobileMenu.css";

const MobileMenu = ({ categories }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="c-MobileMenu">
      <div
        onClick={() => setClicked(!clicked)}
        className="c-MobileMenu__selected"
      >
        <span className={clicked && "active"}>CATEGORY</span>
        {clicked ? (
          <i className="fas fa-chevron-up  active"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </div>
      {clicked && (
        <div
          onClick={() => setClicked(!clicked)}
          className="l-MobileMenu__dropdown"
        >
          <ul className="c-MobileMenu__dropdown">
            {categories.map((category) => {
              return (
                <Category
                  key={category.name}
                  category={category}
                  className={"c-MobileMenu__category"}
                  subMenuClassName={"c-MobileMenu__subCategory"}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
