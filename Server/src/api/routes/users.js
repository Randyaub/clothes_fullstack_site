import express from "express";
import checkAuth from "../middlewares/check-auth";
import userController from "../controllers/users";

const router = express.Router();

router.post("/login", userController.logIn);
router.get("/account", checkAuth, userController.getSpecificUser);
router.get("/account/guest", userController.getGuestOrders);
router.get("/account/user/:id", userController.getUserOrders);
router.post("/register", userController.createAccount);

export default router;
