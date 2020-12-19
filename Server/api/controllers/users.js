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

exports.user_account = (req, res) => {};

exports.user_create_account = (req, res) => {
  const { email, password } = req.body;
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
                  "INSERT INTO customer (email, password, date_joined) VALUES ($1, $2, $3)",
                  [email, hash, currentTime]
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
