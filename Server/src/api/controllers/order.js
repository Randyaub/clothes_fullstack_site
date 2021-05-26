import pool from "../../db";

//INPUTS shippingInformation, checkoutItems
//Adds the order to orders table and items to order_items table in the order created
const addGuestOrder = async (req, res) => {
  const addOrder = `
  WITH new_address AS (INSERT INTO order_address (line_1, line_2, postal_code, city, province) VALUES ($1, $2, $3, $4, $5) RETURNING id )
  INSERT INTO orders (order_address_id, order_status, order_placed, order_method, email, first_name, last_name) 
  VALUES ((SELECT id from new_address), $6, $7, $8, $9, $10, $11)
  RETURNING id`;
  const addItemToOrder = `INSERT INTO order_item (order_id, name, sku, colour, size, quantity) VALUES ($1, $2, $3, $4, $5, $6)`;

  try {
    //returned object values put in array with other required information
    const info = Object.values(req.body.shippingInformation);
    const { checkoutItems } = req.body;
    info.splice(5, 0, "Processing");
    info.splice(6, 0, new Date());
    //Add Order
    const { rows } = await pool.query(addOrder, info);
    //Add order items
    for (let i in checkoutItems) {
      await pool.query(addItemToOrder, [
        rows[0].id,
        checkoutItems[i].name,
        checkoutItems[i].sku,
        checkoutItems[i].colour,
        checkoutItems[i].size,
        checkoutItems[i].quantity,
      ]);
    }
    res.status(200).json({ message: "Order Successfully added for guest" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    console.log(error.message);
  }
};

//INPUTS user_id, shippingInformation, checkoutItems
//Adds the order to orders table and items to order_items table in the order created
const addUserOrder = async (req, res) => {
  const addOrder = `
  WITH new_address AS 
  (INSERT INTO order_address (line_1, line_2, postal_code, city, province) VALUES ($1, $2, $3, $4, $5) RETURNING id )
  INSERT INTO orders (id, customer_id, order_address_id, order_status, order_placed, order_method, email, first_name, last_name) VALUES (DEFAULT, $6, (SELECT id from new_address), $7, $8, $9, $10, $11, $12)
  RETURNING id`;
  const addItemToOrder = `INSERT INTO order_item (order_id, name, sku, colour, size, quantity) VALUES ($1, $2, $3, $4, $5, $6)`;

  try {
    //returned object values put in array with other required information
    const info = Object.values(req.body.shippingInformation);
    const { checkoutItems } = req.body;
    info.splice(5, 0, req.userData.user_id);
    info.splice(6, 0, "Processing");
    info.splice(7, 0, new Date());
    //Add Order
    const { rows } = await pool.query(addOrder, info);
    //Add order items
    for (let i in checkoutItems) {
      await pool.query(addItemToOrder, [
        rows[0].id,
        checkoutItems[i].name,
        checkoutItems[i].sku,
        checkoutItems[i].colour,
        checkoutItems[i].size,
        checkoutItems[i].quantity,
      ]);
    }
    res.status(200).json({ message: "Order Successfully added for user" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  addGuestOrder,
  addUserOrder,
};
