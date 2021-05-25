import express from "express";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import _ from "./env";

import productRoutes from "./api/routes/products";
import userRoutes from "./api/routes/users";
import orderRoutes from "./api/routes/orders";
import { notFound, errorHandling } from "./api/middlewares/errorHandling";

require("dotenv").config();

const app = express();

app.use("/public", express.static(path.join(__dirname, "../src/public")));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/favicon.ico", (req, res) => {
  res.status(204);
  res.end();
});

//Routes
app.use("/", productRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);

//Error Handling
app.use(notFound);
app.use(errorHandling);

//Listening on
const PORT = process.env.PORT || 2800;
app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
