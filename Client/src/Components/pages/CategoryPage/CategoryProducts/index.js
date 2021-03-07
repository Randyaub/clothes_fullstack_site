import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";

import "./CategoryProducts.css";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let { url } = useRouteMatch();

  useEffect(() => {
    axios.get(`${url}`).then((result) => {
      setProducts(result.data.products);
      setLoading(false);
    });
  }, [url]);

  return loading ? (
    ""
  ) : (
    <section className="c-CategoryProduct">
      {Array.isArray(products) &&
        products.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="c-CategoryProduct__product">
                <div className="c-CategoryProduct__wrapper">
                  <Link to={`/Product-Page/${item.SKU}`}>
                    <img
                      className="c-CategoryProduct__image"
                      src={`https://react-express-clothes.herokuapp.com/public/${item.image}-1.jpg`}
                      alt={item.name}
                    ></img>
                  </Link>
                </div>
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
