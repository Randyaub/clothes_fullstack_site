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
import useToken from "./utility/useToken";
import useLocalStorageCart from "./utility/useLocalStorageCart";
import Button from "./Components/common/buttons/Button";

function App() {
  let history = useHistory();
  const { token, setToken } = useToken();
  const { localStorageCart, setLocalStorageCart } = useLocalStorageCart();

  const [hasVisitedShipping, setHasVisitedShipping] = useState();
  const [hasVisitedPayment, setHasVisitedPayment] = useState();
  const [hasCompletedOrder, setHasCompletedOrder] = useState();
  const [isDisclaimerClicked, setIsDisclaimerClicked] = useState(false);

  //website globals
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);
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

  //Retrieves the users previous cart
  useEffect(() => {
    if (localStorageCart) {
      const parsedCart = JSON.parse(localStorageCart);
      setCartItems(parsedCart.cartItems);
      setCartCount(parsedCart.cartCount);
      setCartCostTotal(parsedCart.cartCostTotal);
      // eslint-disable-next-line
    }
  }, []);

  //Checks if the user was logged in previously
  useEffect(() => {
    if (token) {
      axios({
        method: "GET",
        url: "user/account",
        headers: { Authorization: "Bearer " + token },
      })
        .then((res) => {
          setUser(res.data);
          setLoggedIn(true);
          setInitialLoad(true);
        })
        .catch(() => {
          setUser("");
          setLoggedIn(false);
          setInitialLoad(true);
          setToken();
        });
    } else {
      setInitialLoad(true);
    }
  }, [token]);

  //Sets localstorage when ever an item is added
  useEffect(() => {
    setLocalStorageCart(cartItems, cartCount, cartCostTotal);
  }, [setLocalStorageCart, cartItems, cartCount, cartCostTotal]);

  //Removes token and redirects to home page
  const logOutUser = () => {
    setToken();
    setLoggedIn(false);
    history.push("/");
  };

  //if disclaimer is accepted dont show again
  useEffect(() => {
    let isClicked = sessionStorage.getItem("disclaimerClicked");
    if (isClicked === "true") {
      setIsDisclaimerClicked(true);
    }
  }, []);

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
    initialLoad && (
      <>
        <div className="App">
          <div
            className={
              isDisclaimerClicked === false
                ? "heroku__disclaimer"
                : "heroku__disclaimer disclaimer-hidden"
            }
          >
            <div className="disclaimer__box">
              <h3>This Is A Heroku Hobby App</h3>
              <img
                src={window.location.origin + "/loading.svg"}
                alt="loading"
              ></img>
              <div>
                If you wish to view this page correctly, please wait around 15
                seconds for the Heroku Dyno to wake up.
              </div>
              <h4>Thank you for your patience.</h4>
              <Button
                buttonText={"I Understand"}
                onClick={() => {
                  setIsDisclaimerClicked(true);
                  sessionStorage.setItem("disclaimerClicked", "true");
                }}
              />
            </div>
          </div>
          <div className="l-main">
            <Header
              cartCount={cartCount}
              cartItems={cartItems}
              cartCostTotal={cartCostTotal}
              productAdded={productAdded}
              displayMiniCart={displayMiniCart}
              isLoggedIn={isLoggedIn}
              logOutUser={logOutUser}
              user={user}
            />
            <div className="switch-container">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/men/Shop-Category/all" />
                </Route>
                <Route path="/checkout/order-submitted">
                  <PurchasedPage hasCompletedOrder={hasCompletedOrder} />
                </Route>
                <Route exact path="/login/checkout">
                  <MemberOrGuest
                    setLoggedIn={setLoggedIn}
                    setUser={setUser}
                    isLoggedIn={isLoggedIn}
                    cartCount={cartCount}
                  />
                </Route>
                <Route exact path="/shipping-checkout">
                  <ShippingPage
                    cartItems={cartItems}
                    cartCount={cartCount}
                    cartCostTotal={cartCostTotal}
                    formInfo={shippingInfo}
                    setHasVisitedShipping={setHasVisitedShipping}
                  />
                </Route>
                <Route exact path="/billing-checkout">
                  <PaymentPage
                    cartItems={cartItems}
                    cartCount={cartCount}
                    cartCostTotal={cartCostTotal}
                    formInfo={billingInfo}
                    shippingInfo={shippingInfo}
                    hasVisitedShipping={hasVisitedShipping}
                    setHasVisitedPayment={setHasVisitedPayment}
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
                    isLoggedIn={isLoggedIn}
                    hasVisitedShipping={hasVisitedShipping}
                    hasVisitedPayment={hasVisitedPayment}
                    setHasCompletedOrder={setHasCompletedOrder}
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
                    setLoggedIn={setLoggedIn}
                    setUser={setUser}
                    isLoggedIn={isLoggedIn}
                  />
                </Route>
                <Route exact path="/account/register">
                  <RegisterPage />
                </Route>
                <Route exact path="/account/guest">
                  <GuestOrdersPage />
                </Route>
                <ProtectedRoute
                  path="/account"
                  isAuth={isLoggedIn}
                  Component={AccountPage}
                  properties={{
                    logOutUser: logOutUser,
                    user: user,
                  }}
                />
                <Route exact path="/cart">
                  <CartPage
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                    cartCostTotal={cartCostTotal}
                    setCartCostTotal={setCartCostTotal}
                    isLoggedIn={isLoggedIn}
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
          </div>
          <div className="l-footer">
            <Footer />
          </div>
        </div>
      </>
    )
  );
}

export default App;
