import e from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import connectDB from "./config/db.js";
import RegisterUser from "./routes/authRoutes.js";
import InquiryUser from "./routes/inquiryRoutes.js";

dotenv.config();
connectDB();
const app = e();
app.use(bodyParser.json());

app.use(cors());
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Welcome to the User Registration API");
});
app.use("/api/users", RegisterUser);
app.use("/api/users", InquiryUser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port "http:/localhost/${PORT}"`);
});
