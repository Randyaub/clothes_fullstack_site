import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GuestOrdersPage.css";
import Button from "../../common/buttons/Button";

const GuestOrdersPage = () => {
  const [guestOrders, setGuestOrders] = useState([]);

  useEffect(() => {
    axios({ method: "GET", url: "user/account/guest" }).then((result) => {
      setGuestOrders(result.data.guest_orders);
    });
  }, []);

  return (
    <div>
      <h1>THE 10 MOST RECENT GUEST ORDERS</h1>
      {Array.isArray(guestOrders) &&
        guestOrders.map((order) => {
          return (
            <div className="c-GuestOrderPage" key={order.order_number}>
              <div className="c-GuestOrderPage__details">
                <div>
                  <h4>ORDER NUMBER</h4>
                  <span>{order.order_number}</span>
                </div>
                <div>
                  <h4>DATE</h4>
                  <span>
                    {order.placed.replace(/-/g, "/").substring(0, 10)}
                  </span>
                </div>
                <div>
                  <h4>STATUS</h4>
                  <span>{order.status}</span>
                </div>
                <div>
                  <h4>METHOD</h4>
                  <span>{order.method}</span>
                </div>
                <Button
                  buttonText={"VIEW ORDER ITEMS"}
                  className="small-btn default-btn c-GuestOrderPage-btn"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GuestOrdersPage;
