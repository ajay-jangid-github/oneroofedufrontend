import e from "express";

import { registerUser, loginUser } from "../controllers/authController.js";

const router = e.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;