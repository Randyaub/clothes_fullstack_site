import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import _ from "./env";

import productRoutes from "./api/routes/products";
import userRoutes from "./api/routes/users";
import orderRoutes from "./api/routes/orders";
import { notFound, errorHandling } from "./api/middlewares/errorHandling";

require("dotenv").config();

const app = express();

app.use("/public", express.static("public"));
app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

//Routes
app.use("/", productRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);

//Error Handling
app.use(notFound);
app.use(errorHandling);

//Listening on
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
