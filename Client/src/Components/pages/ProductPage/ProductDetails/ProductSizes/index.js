import React from "react";

import "./ProductSizes.css";

const ProductSizes = (props) => {
  return (
    <div className="c-ProductSizes">
      <span>Size:</span>
      <h5 className="c-ProductSizes-error">{props.error ? props.error : ""}</h5>
      <ul className="c-ProductSizes__list flex">
        {props.product.available &&
          props.product.available.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  item.quantity === 0
                    ? "c-ProductSizes-unavailable"
                    : "c-ProductSizes-available" &&
                      props.size === item.size.toUpperCase()
                    ? "c-ProductSizes-active"
                    : "c-ProductSizes-available"
                }
                onClick={(e) => props.setSize(e.target.innerHTML)}
              >
                {item.size.toUpperCase()}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductSizes;
