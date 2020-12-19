import React from "react";
import "./Header.css";
import Cart from "../Cart";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="c-Header">
      <div className="c-Header__bar">
        <span className="c-Header__promotion">
          Register For <strong className="c-Header__bold">FREE</strong> Shipping
          on Your 1st Order
        </span>
        <div>
          <span className="c-Header__lrc">
            {props.userLoggedIn ? (
              <Link className="c-Header__lr" to="/account">
                {" "}
                <i className="fas fa-user"></i> ACCOUNT
              </Link>
            ) : (
              <Link className="c-Header__lr" to="/account/login">
                {" "}
                <i className="fas fa-user"></i> LOG IN / REGISTER
              </Link>
            )}
          </span>
          <span className="c-Header__lrcB">
            <Link className="c-Header__lr" to="/cart">
              {" "}
              <i className="fas fa-shopping-cart">
                <span>{props.cartCount}</span>
              </i>{" "}
              CART
            </Link>
            <Cart
              setProductAdded={props.setProductAdded}
              productAdded={props.productAdded}
              cartCount={props.cartCount}
              cartItems={props.cartItems}
              cartCostTotal={props.cartCostTotal}
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
