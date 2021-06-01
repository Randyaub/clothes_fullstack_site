import React from "react";
import { Link } from "react-router-dom";

import "./ItemPicture.css";

const ItemPicture = ({ item }) => {
  return (
    <Link to={`Product-Page/${item.sku}`}>
      <div className="c-ItemPicture__wrapper">
        <img
          className="c-ItemPicture"
          src={`https://react-express-clothes.herokuapp.com/public/${item.image}-1.jpg`}
          alt={item.name}
        />
      </div>
    </Link>
  );
};

export default ItemPicture;
