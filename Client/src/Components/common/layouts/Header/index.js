import React from "react";
import "./Header.css";
import CartDropDown from "./CartDropDown";
import { NavLink, Link } from "react-router-dom";
import UserDropDownMenu from "./UserDropDownMenu";

const Header = (props) => {
  return (
    <header className="c-Header">
      <div className="c-Header__bar">
        <span className="c-Header__promotion">
          Register For <strong className="c-Header__bold">FREE</strong> Shipping
          on Your 1st Order
        </span>
        <div>
          <span className="c-Header__lrcB">
            <Link className="c-Header__link" to="/account/guest">
              <span>GUEST ORDERS</span>
            </Link>
          </span>
          <span className="c-Header__lrcB">
            {props.userLoggedIn ? (
              <UserDropDownMenu logOutUser={props.logOutUser} />
            ) : (
              <Link className="c-Header__link" to="/account/login">
                {" "}
                <i className="fas fa-user"></i> LOG IN / REGISTER
              </Link>
            )}
          </span>
          <span className="c-Header__lrcB">
            <Link className="c-Header__link" to="/cart">
              {" "}
              <i className="fas fa-shopping-cart">
                <span>{props.cartCount}</span>
              </i>{" "}
              CART
            </Link>
            <CartDropDown
              setProductAdded={props.setProductAdded}
              productAdded={props.productAdded}
              cartCount={props.cartCount}
              cartItems={props.cartItems}
              cartCostTotal={props.cartCostTotal}
              userLoggedIn={props.userLoggedIn}
            />
          </span>
        </div>
      </div>
      <Link className="c-Header__logo" to="/">
        <img
          className="c-Header__image"
          src={`/store-logo.png`}
          alt="logo"
        ></img>
      </Link>
      <nav className="c-Header__navigation">
        <ul className="c-Header__list">
          <NavLink className="c-Header__item c-Header__item--equal" to="/men">
            MEN
          </NavLink>
          <NavLink className="c-Header__item" to="/women">
            WOMEN
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
