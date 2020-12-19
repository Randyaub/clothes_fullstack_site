import express from "express";
import checkAuth from "../middlewares/check-auth";
import userController from "../controllers/users";

const router = express.Router();

router.post("/login", userController.user_log_in);
router.get("/account", checkAuth, userController.user_account);
router.post("/register", userController.user_create_account);

export default router;
