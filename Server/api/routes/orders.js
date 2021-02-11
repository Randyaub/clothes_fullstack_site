import express from "express";
import checkAuth from "../middlewares/check-auth";
import orderController from "../controllers/order";

const router = express.Router();

router.post("/confirm-order-guest", orderController.order_confirm_order_guest);
router.post(
  "/confirm-order-user",
  checkAuth,
  orderController.order_confirm_order_user
);

export default router;
