import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GuestOrdersPage.css";

import Orders from "../../common/Orders";

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
      <Orders order={guestOrders} />
    </div>
  );
};

export default GuestOrdersPage;
