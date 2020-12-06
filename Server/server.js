import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import _ from "./env";

import productRoutes from "./api/routes/products";
import userRoutes from "./api/routes/users";
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

//Routes
app.use("/", productRoutes);
app.use("/user", userRoutes);

//Error Handling
app.use(notFound);
app.use(errorHandling);

//Listening on
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
