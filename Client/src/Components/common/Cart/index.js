import React from "react";
import { Link } from "react-router-dom";

import { formatCategory } from "../../../utilities";

import "./Cart.css";

const Cart = (props) => {
  return (
    <>
      <div className={props.productAdded ? "c-Cart show" : "c-Cart hidden"}>
        <div className="l-Cart__products">
          {props.cartCount === 0
            ? "Your Cart Is Empty"
            : props.cartItems.map((item, index) => {
                return (
                  <Link key={index} className="c-Cart__link" to={item.sku}>
                    <div className="c-Cart__product">
                      <img
                        className="c-Cart__image"
                        src={`http://localhost:4000/public/${item.image}-1.jpg`}
                        alt={item.name}
                      />
                      <div className="c-Cart__details">
                        <h4>{item.name}</h4>
                        <h6>COLOUR: {formatCategory(item.colour)}</h6>
                        <h6>QTY: {item.quantity}</h6>
                        <h6>SIZE: {item.size}</h6>
                        <h4>
                          TOTAL: ${(item.price * item.quantity).toFixed(2)}
                        </h4>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>
        {props.cartCount === 0 ? (
          ""
        ) : (
          <div className="c-Cart__checkout">
            <div className="c-Cart__total">
              <h3>TOTAL ({props.cartCount})</h3>
              <h3>${props.cartCostTotal.toFixed(2)}</h3>
            </div>
            <div className="c-Cart__buttons">
              <Link to="/cart">
                <button className="c-Cart__button">CHECKOUT</button>
              </Link>
              <Link to="/cart">
                <button className="c-Cart__button2">VIEW BAG</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
