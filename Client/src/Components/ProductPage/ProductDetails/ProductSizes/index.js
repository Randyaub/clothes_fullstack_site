import React from "react";

import "./ProductSizes.css";

const ProductSizes = (props) => {
  return (
    <div>
      Size:
      <div className="c-ProductSizes-error">
        <h4>{!props.error ? "" : props.error}</h4>
      </div>
      <ul className="c-ProductSizes">
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
