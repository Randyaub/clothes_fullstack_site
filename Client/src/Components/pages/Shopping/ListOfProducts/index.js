import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import Product from "./Product";

import "./ListOfProducts.css";

const ListOfProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let { url } = useRouteMatch();

  useEffect(() => {
    axios.get(`${url}`).then((result) => {
      setProducts(result.data.products);
      setLoading(false);
    });
  }, [url]);

  return (
    !loading && (
      <section className="c-ListOfProducts">
        {Array.isArray(products) &&
          products.map((product) => {
            return <Product product={product} />;
          })}
      </section>
    )
  );
};

export default ListOfProducts;
