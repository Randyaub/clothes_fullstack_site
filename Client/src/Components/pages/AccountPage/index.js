import React, { useState, useEffect } from "react";
import Orders from "../../common/Orders";
import axios from "axios";
import "./AccountPage.css";

const AccountPage = (props) => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    axios({ method: "GET", url: `user/account/user/${props.user.id}` }).then(
      (result) => {
        setUserOrders(result.data.user_orders);
      }
    );
  }, [props.user.id]);

  return (
    <div className="c-AccountPage">
      <div className="c-AccountPage__sidebar">
        <div className="c-AccountPage__user">
          Welcome {props.user.first_name} {props.user.last_name}
        </div>
        <div className="c-AccountPage__container">
          <div className="c-AccountPage__heading">My Account</div>
          <ul>
            <li>
              <div className="c-AccountPage__list">
                <span>Your Orders</span> <i className="fas fa-arrow-right"></i>
              </div>
            </li>
            <li>
              <div className="c-AccountPage__list">
                <span>Settings</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </li>
            <li onClick={() => props.logOutUser()}>Sign Out</li>
          </ul>
        </div>
      </div>
      <div className="c-AccountPage__orders">
        <div>
          <h2>Orders</h2>
          <Orders order={userOrders} />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
