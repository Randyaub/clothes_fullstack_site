import pool from "../../db";

exports.order_confirm_order_guest = (req, res) => {
  const currentTime = new Date();
  const {
    addressLine1,
    addressLine2,
    zipCode,
    city,
    province,
    shippingMethod,
    email,
    firstName,
    lastName,
  } = req.body.shippingInformation;

  pool
    .query(
      `WITH new_address AS (INSERT INTO order_address (line_1, line_2, postal_code, city, province) VALUES ($1, $2, $3, $4, $5) returning id )
       INSERT INTO orders (order_address_id, order_status, order_placed, order_method, email, first_name, last_name) 
       VALUES ((SELECT id from new_address), $6, $7, $8, $9, $10, $11)
       RETURNING id`,
      [
        addressLine1,
        addressLine2,
        zipCode,
        city,
        province,
        "Processing",
        currentTime,
        shippingMethod,
        email,
        firstName,
        lastName,
      ]
    )
    .then((orders) => {
      for (let i in req.body.checkoutItems) {
        pool
          .query(
            "INSERT INTO order_item (order_id, name, sku, colour, size, quantity) VALUES ($1, $2, $3, $4, $5, $6)",
            [
              orders.rows[0].id,
              req.body.checkoutItems[i].name,
              req.body.checkoutItems[i].sku,
              req.body.checkoutItems[i].colour,
              req.body.checkoutItems[i].size,
              req.body.checkoutItems[i].quantity,
            ]
          )
          .then(() => {
            console.log("Order Added to guest");
          })
          .catch((err) => {
            res
              .status(500)
              .json({ error: err.message, message: "Adding Items Failed" });
          });
      }
      res.json({ message: "Order Successfully added for user" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.order_confirm_order_user = (req, res) => {
  const { user_id } = req.userData;
  const currentTime = new Date();
  const {
    addressLine1,
    addressLine2,
    zipCode,
    city,
    province,
    shippingMethod,
    email,
    firstName,
    lastName,
  } = req.body.shippingInformation;

  pool
    .query(
      `WITH new_address AS (INSERT INTO order_address (line_1, line_2, postal_code, city, province) VALUES ($1, $2, $3, $4, $5) returning id )
     INSERT INTO orders (id, customer_id, order_address_id, order_status, order_placed, order_method, email, first_name, last_name) 
     VALUES (DEFAULT, $6, (SELECT id from new_address), $7, $8, $9, $10, $11, $12)
     RETURNING id`,
      [
        addressLine1,
        addressLine2,
        zipCode,
        city,
        province,
        user_id,
        "Processing",
        currentTime,
        shippingMethod,
        email,
        firstName,
        lastName,
      ]
    )
    .then((orders) => {
      for (let i in req.body.checkoutItems) {
        pool
          .query(
            "INSERT INTO order_item (order_id, name, sku, colour, size, quantity) VALUES ($1, $2, $3, $4, $5, $6)",
            [
              orders.rows[0].id,
              req.body.checkoutItems[i].name,
              req.body.checkoutItems[i].sku,
              req.body.checkoutItems[i].colour,
              req.body.checkoutItems[i].size,
              req.body.checkoutItems[i].quantity,
            ]
          )
          .then(() => {
            console.log("Order Added to User");
          })
          .catch((err) => {
            return res
              .status(500)
              .json({ error: err.message, message: "Adding Items Failed" });
          });
      }
      res.status(200).json({ message: "Order Successfully added for user" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
