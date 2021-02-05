import React from "react";
import { Link } from "react-router-dom";
import "./FooterCategory.css";

const FooterCategory = (props) => {
  return (
    <nav>
      <h4 className="c-FooterCategory__title">{props.info.title}</h4>
      <div>
        {props.info.category.map((item) => {
          return (
            <div key={item.url} className="c-FooterCategory__item">
              <Link to={item.url}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default FooterCategory;
