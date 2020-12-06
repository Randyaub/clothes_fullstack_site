import React from "react";
import { formatCategory } from "../../../../utilities";

import "./ProductDescription.css";

const ProductDescription = (props) => {
  return (
    <div className="c-ProductDescription">
      <h3 className="c-ProductDescription__description">
        {props.product.description}
      </h3>
      {props.product.fit && (
        <h4>
          Fit -{" "}
          <span className="c-ProductDescription__lighter">
            {formatCategory(props.product.fit)}
          </span>
        </h4>
      )}
      {props.product.weight && (
        <h4>
          Weight -{" "}
          <span className="c-ProductDescription__lighter">
            {props.product.weight} KG
          </span>
        </h4>
      )}
      {props.product.materials && (
        <h4>
          Materials -
          {props.product.materials.map((mat, i) => {
            return (
              <span key={i} className="c-ProductDescription__lighter">
                {" "}
                {formatCategory(mat.material)} {mat.percent}%
              </span>
            );
          })}
        </h4>
      )}
    </div>
  );
};

export default ProductDescription;
