import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Header from "./Components/common/layouts/Header";
import Footer from "./Components/common/layouts/Footer";
import LogInPage from "./Components/pages/LogInPage";
import RegisterPage from "./Components/pages/RegisterPage";
import CartPage from "./Components/pages/CartPage";
import CategoryPage from "./Components/pages/CategoryPage";
import ProductPage from "./Components/pages/ProductPage";
import NotFoundPage from "./Components/pages/NotFoundPage";
import AccountPage from "./Components/pages/AccountPage";
import MemberOrGuest from "./Components/pages/MemberOrGuestPage";
import GuestOrdersPage from "./Components/pages/GuestOrdersPage";

import ShippingPage from "./Components/pages/checkoutPages/ShippingPage";
import PaymentPage from "./Components/pages/checkoutPages/PaymentPage";
import OrderPage from "./Components/pages/checkoutPages/OrderPage";
import PurchasedPage from "./Components/pages/PurchasedPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);

  //website globals
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
  const [shippingProvince, setShippingProvince] = useState("PROVINCE*");
  const [shippingZipCode, setShippingZipCode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("Standard");

  //Form for Billing
  const [billingFirstName, setBillingFirstName] = useState("");
  const [billingLastName, setBillingLastName] = useState("");
  const [billingAddressLine1, setBillingAddressLine1] = useState("");
  const [billingAddressLine2, setBillingAddressLine2] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingProvince, setBillingProvince] = useState("PROVINCE*");
  const [billingZipCode, setBillingZipCode] = useState("");

  //Form for Payment
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpirationMonth, setCardExpirationMonth] = useState("MONTH*");
  const [cardExpirationYear, setCardExpirationYear] = useState("YEAR*");
  const [cardCVV, setCardCVV] = useState("");

  const shippingInfo = {
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
    shippingMethod: shippingMethod,
    setShippingMethod: setShippingMethod,
  };

  const billingInfo = {
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
  };

  useEffect(() => {
    //Retrieve cart
    if (
      localStorage.getItem("guestCart") !== null &&
      localStorage.getItem("guestCartAmount") !== null &&
      localStorage.getItem("guestCartTotalCost") !== null
    ) {
      setCartItems(JSON.parse(localStorage.getItem("guestCart")));
      setCartCount(JSON.parse(localStorage.getItem("guestCartAmount")));
      setCartCostTotal(JSON.parse(localStorage.getItem("guestCartTotalCost")));
    }

    //Checks if user was logged in before
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
  }, []);

  useEffect(() => {
    localStorage.setItem("guestCart", JSON.stringify(cartItems));
    localStorage.setItem("guestCartAmount", JSON.stringify(cartCount));
    localStorage.setItem("guestCartTotalCost", JSON.stringify(cartCostTotal));
  }, [cartItems, cartCount, cartCostTotal]);

  //Removes token and redirects to home page
  const logOutUser = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
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
  }, [productAdded]);

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
            <Redirect to="/men/Shop-Category/hoodies-and-sweatshirts" />
          </Route>
          <Route path="/checkout/order-submitted">
            <PurchasedPage />
          </Route>
          <Route exact path="/login/checkout">
            <MemberOrGuest setUserLoggedIn={setUserLoggedIn} />
          </Route>
          <Route exact path="/shipping-checkout">
            <ShippingPage
              cartItems={cartItems}
              cartCount={cartCount}
              cartCostTotal={cartCostTotal}
              formInfo={shippingInfo}
            />
          </Route>
          <Route exact path="/billing-checkout">
            <PaymentPage
              cartItems={cartItems}
              cartCount={cartCount}
              cartCostTotal={cartCostTotal}
              formInfo={billingInfo}
              shippingInfo={shippingInfo}
            />
          </Route>
          <Route exact path="/order-checkout">
            <OrderPage
              cartItems={cartItems}
              cartCount={cartCount}
              cartCostTotal={cartCostTotal}
              shippingInfo={shippingInfo}
              billingInfo={billingInfo}
              setCartCount={setCartCount}
              setCartCostTotal={setCartCostTotal}
              setCartItems={setCartItems}
              userLoggedIn={userLoggedIn}
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
              setLoading={setLoading}
              loading={loading}
            />
          </Route>
          <Route exact path="/account/login">
            <LogInPage setUserLoggedIn={setUserLoggedIn} />
          </Route>
          <Route exact path="/account/register">
            <RegisterPage />
          </Route>
          <Route exact path="/account/guest">
            <GuestOrdersPage setLoading={setLoading} loading={loading} />
          </Route>
          <ProtectedRoute
            exact
            path="/account"
            isAuth={userLoggedIn}
            Component={AccountPage}
            properties={{
              logOutUser: logOutUser,
              user: user,
              setLoading: setLoading,
              loading: loading,
            }}
          ></ProtectedRoute>
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
