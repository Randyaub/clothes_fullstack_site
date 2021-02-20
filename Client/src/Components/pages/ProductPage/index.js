import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ProductPage.css";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

const ProductPage = (props) => {
  const [product, setProduct] = useState([]);
  const [variants, setVariants] = useState([{}]);
  const [error, setError] = useState("");
  const [size, setSize] = useState("");

  const { sku } = useParams();

  useEffect(() => {
    //retrieve selected product and its variations
    axios.get(`http://localhost:4000/Product-Page/${sku}`).then((result) => {
      setProduct(result.data.product_information);
      setVariants(result.data.product_variants);
    });
  }, [sku]);

  const addDuplicateToCart = (product) => {
    product.quantity += 1;
    props.setCartCount(props.cartCount + 1);
    props.setCartCostTotal(props.cartCostTotal + parseFloat(product.price));
  };

  const addItemToCart = (product) => {
    props.setCartCount(props.cartCount + 1);
    props.setCartItems([product, ...props.cartItems]);
    props.setCartCostTotal(props.cartCostTotal + parseFloat(product.price));
  };

  const handleAddItem = () => {
    if (size) {
      setError("");
      const itemToBeAdded = { ...product, size: size, quantity: 1 };
      props.displayMiniCart(true);
      const isItemInCart = props.cartItems.some((item) => {
        if (item.sku === product.sku && item.size === size) {
          addDuplicateToCart(item);
          return true;
        } else {
          return false;
        }
      });
      if (isItemInCart !== true) {
        addItemToCart(itemToBeAdded);
      }
    } else {
      setError("Please select a size");
    }
  };

  return (
    <section className="c-ProductPage container">
      <div className="l-ProductPage__images">
        <ProductImage product={product} number={"1"} />
        <ProductImage product={product} number={"2"} />
      </div>
      <ProductDetails
        variants={variants}
        product={product}
        setError={setError}
        setSize={setSize}
        size={size}
        error={error}
        handleAddItem={handleAddItem}
      />
    </section>
  );
};

export default ProductPage;
