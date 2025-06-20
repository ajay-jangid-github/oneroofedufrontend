import e from "express";

import { inquery } from "../controllers/inquiryController.js";

const router = e.Router();
router.post("/inquiry", inquery);
// http://localhost:5000/api/users/inquiry;
export default router;
