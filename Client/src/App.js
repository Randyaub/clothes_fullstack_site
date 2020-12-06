import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/common/Header";
import HomePage from "./Components/HomePage";
import LogInPage from "./Components/LogInPage";
import RegisterPage from "./Components/RegisterPage";
import CartPage from "./Components/CartPage";
import CategoryPage from "./Components/CategoryPage";
import ProductPage from "./Components/ProductPage";
import NotFoundPage from "./Components/NotFoundPage";
import Footer from "./Components/common/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartCostTotal, setCartCostTotal] = useState(0);
  const [productAdded, displayMiniCart] = useState(false);

  //Load guest cart on load
  // useEffect(() => {
  //     if (localStorage.getItem("guestCart") !== null &&
  //         localStorage.getItem("guestCartAmount") !== null) {
  //         setCartItems(JSON.parse(localStorage.getItem('guestCart')))
  //         setCartCount(JSON.parse(localStorage.getItem('guestCartAmount')))
  //     }
  // }, [])

  //cart pop up displays for 3 seconds on add
  //if clicked again resets timer
  useEffect(() => {
    if (productAdded) {
      console.log(productAdded);
      let timer = setTimeout(() => {
        displayMiniCart(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="App">
      <div className="l-main">
        <Header
          cartCount={cartCount}
          cartItems={cartItems}
          cartCostTotal={cartCostTotal}
          productAdded={productAdded}
          displayMiniCart={displayMiniCart}
        />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Product-Page/:sku">
            <ProductPage
              productAdded={productAdded}
              displayMiniCart={displayMiniCart}
              setCartCount={setCartCount}
              cartCount={cartCount}
              setCartItems={setCartItems}
              cartItems={cartItems}
              setCartCostTotal={setCartCostTotal}
              cartCostTotal={cartCostTotal}
            />
          </Route>
          <Route exact path="/account/login">
            <LogInPage />
          </Route>
          <Route exact path="/account/register">
            <RegisterPage />
          </Route>
          <Route exact path="/cart">
            <CartPage
              setCartItems={setCartItems}
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartItems={cartItems}
              setCartCostTotal={setCartCostTotal}
              cartCostTotal={cartCostTotal}
            />
          </Route>
          <Route path="/:type">
            <CategoryPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
      <div className="l-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
