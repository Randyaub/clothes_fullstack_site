import pool from "../../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

exports.user_log_in = (req, res) => {
  const { email, password } = req.body;

  pool
    .query("SELECT * FROM customer WHERE email = $1", [email])
    .then((user) => {
      if (user.rowCount < 1) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      } else {
        bcrypt.compare(password, user.rows[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth Failed",
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                user_id: user.rows[0].id,
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h",
              }
            );
            return res.status(200).json({
              message: "Auth Successful",
              JWT: token,
            });
          }
          return res.status(401).json({
            message: "Auth Failed",
          });
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        error: error.message,
      });
    });
};

exports.user_account = (req, res) => {
  const { user_id } = req.userData;
  pool
    .query("SELECT * FROM customer WHERE id = $1", [user_id])
    .then((user) => {
      if (user.rowCount !== 0) {
        return res.status(200).json({
          id: user.rows[0].id,
          first_name: user.rows[0].first_name,
          last_name: user.rows[0].last_name,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.user_create_account = (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const currentTime = new Date();

  if (password.length > 7) {
    pool
      .query("SELECT email FROM customer WHERE email = $1", [email])
      .then((table) => {
        if (table.rowCount > 0) {
          return res.status(409).json({
            Message: "User already exists",
          });
        } else {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err,
              });
            } else {
              pool
                .query(
                  "INSERT INTO customer (email, password, first_name, last_name, date_joined) VALUES ($1, $2, $3, $4, $5)",
                  [email, hash, firstName, lastName, currentTime]
                )
                .then(() => {
                  res.status(200).json({
                    message: "User was created",
                  });
                })
                .catch((err) => {
                  console.log(err.message);
                  res.status(500).json({
                    error: err,
                  });
                });
            }
          });
        }
      });
  } else {
    res.status(500).json({
      error: "Password was not greater or equal to 8",
    });
  }
};

//RETURNS THE 10 MOST RECENT GUEST ORDERS AND THE ORDERS ITEMS
exports.user_guest_orders = (req, res) => {
  //Select the 10 most recent guest orders
  let response = [];

  pool
    .query(
      `
      SELECT 
        * 
      FROM 
        orders     
      WHERE orders.customer_id IS NULL
      ORDER BY orders.order_placed DESC LIMIT 10     
      `
    )
    .then((orders) => {
      //Iterate through all orders
      orders.rows.map((order, index) => {
        //Find all items that has order_id equal to orders id
        pool
          .query(
            `
            SELECT
              * 
            FROM order_item
            WHERE order_item.order_id IN ($1)`,
            [order.id]
          )
          //Return the order and map out the orders items
          .then((items) => {
            //guest order details
            let guest_order = {
              order_number: order.id,
              status: order.order_status,
              method: order.order_method,
              placed: order.order_placed,
              items: items.rows.map((item) => {
                return {
                  name: item.name,
                  sku: item.sku,
                  colour: item.colour,
                  size: item.size,
                  quantity: item.quantity,
                };
              }),
            };
            //Append order to end of response
            response.push(guest_order);
          })
          //return response when all orders iterated through
          .then(() => {
            if (orders.rowCount === index + 1) {
              res.status(200).json({ guest_orders: response });
            }
          });
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error: error.message,
      });
    });
};

exports.user_user_orders = (req, res) => {
  //Select the 10 most recent guest orders
  const { id } = req.params;
  let response = [];

  pool
    .query(
      `
      SELECT 
        * 
      FROM 
        orders     
      WHERE orders.customer_id = $1
      ORDER BY orders.order_placed DESC LIMIT 10     
      `,
      [id]
    )
    .then((orders) => {
      //Iterate through all orders
      orders.rows.map((order, index) => {
        //Find all items that has order_id equal to orders id
        pool
          .query(
            `
            SELECT
              * 
            FROM order_item
            WHERE order_item.order_id IN ($1)`,
            [order.id]
          )
          //Return the order and map out the orders items
          .then((items) => {
            //user order details
            let user_order = {
              order_number: order.id,
              status: order.order_status,
              method: order.order_method,
              placed: order.order_placed,
              items: items.rows.map((item) => {
                return {
                  name: item.name,
                  sku: item.sku,
                  colour: item.colour,
                  size: item.size,
                  quantity: item.quantity,
                };
              }),
            };
            //Append order to end of response
            response.push(user_order);
          })
          //return response when all orders iterated through
          .then(() => {
            if (orders.rowCount === index + 1) {
              res.status(200).json({ user_orders: response });
            }
          });
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error: error.message,
      });
    });
};
