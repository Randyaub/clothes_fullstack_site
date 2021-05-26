import express from "express";
import checkAuth from "../middlewares/check-auth";
import orderController from "../controllers/order";

const router = express.Router();

router.post("/confirm-order-guest", orderController.addGuestOrder);
router.post("/confirm-order-user", checkAuth, orderController.addUserOrder);

export default router;
