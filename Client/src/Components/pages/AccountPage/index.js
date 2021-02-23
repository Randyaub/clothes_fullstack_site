import React, { useState, useEffect } from "react";
import Orders from "../../common/Orders";
import axios from "axios";
import "./AccountPage.css";

const AccountPage = ({ user, logOutUser, loading, setLoading }) => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({ method: "GET", url: `user/account/user/${user.id}` }).then(
      (result) => {
        setUserOrders(result.data.user_orders);
        setLoading(false);
      }
    );
  }, [user.id, setLoading]);

  return loading ? (
    ""
  ) : (
    <div className="c-AccountPage">
      <div className="c-AccountPage__sidebar">
        <div className="c-AccountPage__user">
          Welcome {user.first_name} {user.last_name}
        </div>
        <div className="c-AccountPage__container">
          <div className="c-AccountPage__heading">My Account</div>
          <ul>
            <li>
              <div className="c-AccountPage__list">
                <span>Your Orders</span> <i className="fas fa-arrow-right"></i>
              </div>
            </li>
            {/* <li>
              <div className="c-AccountPage__list">
                <span>Settings</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </li> */}
            <li onClick={() => logOutUser()}>Sign Out</li>
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
