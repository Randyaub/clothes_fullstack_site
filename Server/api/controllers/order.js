import pool from "../../db";

exports.order_confirm_order = (req, res) => {
  const currentTime = new Date();
  console.log(req.body);
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
       VALUES ((SELECT id from new_address), $6, $7, $8, $9, $10, $11)`,
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
    .then((query) => {
      for (let i in req.body.checkoutItems) {
        pool.query(
          "INSERT INTO order_item (sku, colour, size, quantity) VALUES ($1, $2, $3, $4)",
          [
            req.body.checkoutItems[i].sku,
            req.body.checkoutItems[i].colour,
            req.body.checkoutItems[i].size,
            req.body.checkoutItems[i].quantity,
          ]
        );
      }
      return res.status(200).json({ message: "Order Added" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
