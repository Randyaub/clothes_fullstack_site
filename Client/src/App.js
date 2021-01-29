import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
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
import AccountPage from "./Components/AccountPage";
import axios from "axios";
import MemberOrGuest from "./Components/MemberOrGuestPage";

import Shipping from "./Components/checkoutPages/ShippingPage";
import Payment from "./Components/checkoutPages/PaymentPage";
import Order from "./Components/checkoutPages/OrderPage";

function App() {
  let history = useHistory();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartCostTotal, setCartCostTotal] = useState(0);
  const [productAdded, displayMiniCart] = useState(false);

  //Form for shipping
  const [shippingEmail, setShippingEmail] = useState("");
  const [shippingFirstName, setShippingFirstName] = useState("");
  const [shippingLastName, setShippingLastName] = useState("");
  const [shippingAddressLine1, setShippingAddressLine1] = useState("");
  const [shippingAddressLine2, setShippingAddressLine2] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingProvince, setShippingProvince] = useState("");
  const [shippingZipCode, setShippingZipCode] = useState("");

  //Form for Billing
  const [billingFirstName, setBillingFirstName] = useState("");
  const [billingLastName, setBillingLastName] = useState("");
  const [billingAddressLine1, setBillingAddressLine1] = useState("");
  const [billingAddressLine2, setBillingAddressLine2] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingProvince, setBillingProvince] = useState("");
  const [billingZipCode, setBillingZipCode] = useState("");

  //Form for Payment
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpirationMonth, setCardExpirationMonth] = useState("MONTH*");
  const [cardExpirationYear, setCardExpirationYear] = useState("YEAR*");
  const [cardCVV, setCardCVV] = useState("");

  //Retrive cart
  useEffect(() => {
    if (
      localStorage.getItem("guestCart") !== null &&
      localStorage.getItem("guestCartAmount") !== null &&
      localStorage.getItem("guestCartTotalCost") !== null
    ) {
      setCartItems(JSON.parse(localStorage.getItem("guestCart")));
      setCartCount(JSON.parse(localStorage.getItem("guestCartAmount")));
      setCartCostTotal(JSON.parse(localStorage.getItem("guestCartTotalCost")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("guestCart", JSON.stringify(cartItems));
    localStorage.setItem("guestCartAmount", JSON.stringify(cartCount));
    localStorage.setItem("guestCartTotalCost", JSON.stringify(cartCostTotal));
  }, [cartItems, cartCount, cartCostTotal]);

  //inital load
  useEffect(() => {
    getCurrentUser();
  }, []);

  //Check if token and logs user in
  const getCurrentUser = () => {
    if (localStorage.getItem("token")) {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .get("user/account", config)
        .then((res) => {
          setUser(res.data);
          setUserLoggedIn(true);
        })
        .catch(() => {
          setUser("");
          setUserLoggedIn(false);
        });
    }
  };

  //Removes token and redirects to home page
  const logOutUser = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    goToHomePage();
  };

  const goToHomePage = () => {
    history.push("/");
  };

  //cart pop up displays for 3 seconds on add
  //if clicked again resets timer
  useEffect(() => {
    if (productAdded) {
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
          userLoggedIn={userLoggedIn}
          logOutUser={logOutUser}
        />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login/checkout">
            <MemberOrGuest
              goToHomePage={goToHomePage}
              setUserLoggedIn={setUserLoggedIn}
            />
          </Route>
          <Route exact path="/shipping-checkout">
            <Shipping
              cartItems={cartItems}
              cartCount={cartCount}
              cartCostTotal={cartCostTotal}
              formInfo={{
                email: shippingEmail,
                setEmail: setShippingEmail,
                firstName: shippingFirstName,
                setFirstName: setShippingFirstName,
                lastName: shippingLastName,
                setLastName: setShippingLastName,
                addressLine1: shippingAddressLine1,
                setAddressLine1: setShippingAddressLine1,
                addressLine2: shippingAddressLine2,
                setAddressLine2: setShippingAddressLine2,
                city: shippingCity,
                setCity: setShippingCity,
                province: shippingProvince,
                setProvince: setShippingProvince,
                zipCode: shippingZipCode,
                setZipCode: setShippingZipCode,
              }}
            />
          </Route>
          <Route exact path="/billing-checkout">
            <Payment
              cartItems={cartItems}
              cartCount={cartCount}
              cartCostTotal={cartCostTotal}
              formInfo={{
                firstName: billingFirstName,
                setFirstName: setBillingFirstName,
                lastName: billingLastName,
                setLastName: setBillingLastName,
                addressLine1: billingAddressLine1,
                setAddressLine1: setBillingAddressLine1,
                addressLine2: billingAddressLine2,
                setAddressLine2: setBillingAddressLine2,
                city: billingCity,
                setCity: setBillingCity,
                province: billingProvince,
                setProvince: setBillingProvince,
                zipCode: billingZipCode,
                setZipCode: setBillingZipCode,
                nameOnCard: nameOnCard,
                setNameOnCard: setNameOnCard,
                cardNumber: cardNumber,
                setCardNumber: setCardNumber,
                cardExpirationMonth: cardExpirationMonth,
                setCardExpirationMonth: setCardExpirationMonth,
                cardExpirationYear: cardExpirationYear,
                setCardExpirationYear: setCardExpirationYear,
                cardCVV: cardCVV,
                setCardCVV: setCardCVV,
              }}
            />
          </Route>
          <Route exact path="/order-checkout">
            <Order
              cartItems={cartItems}
              cartCount={cartCount}
              cartCostTotal={cartCostTotal}
            />
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
            <LogInPage
              goToHomePage={goToHomePage}
              setUserLoggedIn={setUserLoggedIn}
            />
          </Route>
          <Route exact path="/account/register">
            <RegisterPage />
          </Route>
          <Route exact path="/account">
            <AccountPage logOutUser={logOutUser} user={user} />
          </Route>
          <Route exact path="/cart">
            <CartPage
              cartItems={cartItems}
              setCartItems={setCartItems}
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartCostTotal={cartCostTotal}
              setCartCostTotal={setCartCostTotal}
              userLoggedIn={userLoggedIn}
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
