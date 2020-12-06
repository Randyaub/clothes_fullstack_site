import express from "express";
import userController from "../controllers/user";

const router = express.Router();

router.get("/login", userController.user_log_in);
router.get("/register", userController.user_log_in);

export default router;
