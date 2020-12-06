import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";

import "./CategoryProducts.css";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  let { url } = useRouteMatch();

  useEffect(() => {
    axios.get(`${url}`).then((result) => {
      setProducts(result.data.products);
      console.log(result.data);
    });
  }, [url]);

  return (
    <section className="c-CategoryProduct">
      {Array.isArray(products) &&
        products.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="c-CategoryProduct__product">
                <Link to={`/Product-Page/${item.SKU}`}>
                  <img
                    className="c-CategoryProduct__image"
                    src={`http://localhost:4000/public/${item.image}-1.jpg`}
                    alt={item.name}
                  ></img>
                </Link>
                <div className="c-CategoryProduct__details">
                  <h4 className="c-CategoryProduct__title">
                    <Link to={`/Product-Page/${item.SKU}`}>{item.name}</Link>
                  </h4>
                  <strong>
                    <span className="c-CategoryProduct__price">
                      ${item.price}
                    </span>
                  </strong>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </section>
  );
};

export default CategoryProduct;
