import express from "express";
import orderController from "../controllers/order";

const router = express.Router();

router.post("/confirm-order", orderController.order_confirm_order);

export default router;
