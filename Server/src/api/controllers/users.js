import pool from "../../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//INPUT: email, password from req.body
//Checks for correct email and password and returns a JWT
const logIn = async (req, res) => {
  const selectEmailQuery = "SELECT password, id FROM customer WHERE email = $1";

  try {
    const { email, password } = req.body;
    const { rows, rowCount } = await pool.query(selectEmailQuery, [email]);
    if (rowCount < 1) {
      return res.status(401).json({
        message: "Auth Failed",
      });
    } else {
      const match = await bcrypt.compare(password, rows[0].password);
      if (match) {
        const token = jwt.sign({ user_id: rows[0].id }, process.env.JWT_KEY, {
          expiresIn: "1h",
        });
        return res.status(200).json({ message: "Auth Successful", JWT: token });
      }
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//INPUTS: userData (user_id) retrieved from check-auth middleware
//Returns an object for the specific user
const getSpecificUser = async (req, res) => {
  const selectUserQuery = `SELECT * FROM customer WHERE id = $1`;

  try {
    const { user_id } = req.userData;
    const { rows, rowCount } = await pool.query(selectUserQuery, [user_id]);
    if (rowCount !== 0) {
      res.status(200).json({
        id: rows[0].id,
        first_name: rows[0].first_name,
        last_name: rows[0].last_name,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//INPUTS: email, password, firstName, lastName from req.body
//Create a user account in the database
const createAccount = async (req, res) => {
  const selectEmailQuery = `SELECT email FROM customer WHERE email = $1`;
  const insertQuery = `INSERT INTO customer (email, password, first_name, last_name, date_joined) VALUES ($1, $2, $3, $4, $5)`;

  try {
    const currentTime = new Date();
    const { email, password, firstName, lastName } = req.body;

    if (password.length > 7) {
      const { rowCount } = await pool.query(selectEmailQuery, [email]);
      if (rowCount > 0) {
        return res.status(409).json({ message: "User already exists" });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query(insertQuery, [
          email,
          hashedPassword,
          firstName,
          lastName,
          currentTime,
        ]);
        res.status(200).json({
          message: "User account was created",
        });
      }
    } else {
      res.status(500).json({
        error: "Password was not greater or equal to 8",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//INPUTS: NULL
//Returns the 10 most recent guest orders and their items
const getGuestOrders = async (req, res) => {
  const selectGuestOrders = `SELECT * FROM orders WHERE orders.customer_id IS NULL ORDER BY orders.order_placed DESC LIMIT 10`;
  const selectItem = `SELECT * FROM order_item WHERE order_item.order_id IN ($1)`;

  try {
    const { rows } = await pool.query(selectGuestOrders);

    const guest_orders = await Promise.all(
      rows.map(async (order) => {
        //Query for orders items
        const { rows } = await pool.query(selectItem, [order.id]);

        const guest_order = {
          order_number: order.id,
          status: order.order_status,
          method: order.order_method,
          placed: order.order_placed,
          //Goes through all the items in this order
          items: rows.map((item) => {
            return {
              name: item.name,
              sku: item.sku,
              colour: item.colour,
              size: item.size,
              quantity: item.quantity,
            };
          }),
        };
        return guest_order;
      })
    );
    res.status(200).json({ guest_orders });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//INPUT and id is passed though URL parameter
//Selects all the users orders and lists the items in the order
const getUserOrders = async (req, res) => {
  const selectUserOrders = `SELECT * FROM orders WHERE orders.customer_id = $1 ORDER BY orders.order_placed DESC LIMIT 10`;
  const selectItem = `SELECT * FROM order_item WHERE order_item.order_id IN ($1)`;

  try {
    const { id } = req.params;
    const { rows } = await pool.query(selectUserOrders, [id]);

    const user_orders = await Promise.all(
      rows.map(async (order) => {
        //Query for orders items
        const { rows } = await pool.query(selectItem, [order.id]);

        const user_order = {
          order_number: order.id,
          status: order.order_status,
          method: order.order_method,
          placed: order.order_placed,
          //Goes through all the items in this order
          items: rows.map((item) => {
            return {
              name: item.name,
              sku: item.sku,
              colour: item.colour,
              size: item.size,
              quantity: item.quantity,
            };
          }),
        };
        return user_order;
      })
    );
    res.status(200).json({ user_orders });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  logIn,
  getSpecificUser,
  createAccount,
  getUserOrders,
  getGuestOrders,
};
