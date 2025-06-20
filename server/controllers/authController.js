import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Registering user:");
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all the fields." });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("Please enter correct email");
    return res.status(400).json({ message: "Please enter correct email" });
  }
  const alreadyExist = await UserModel.findOne({ email });
  if (alreadyExist) {
    console.log("user is already restered");
    return res.status(400).json({ message: "The user is already registered." });
  }

  try {
    console.log("Password type:", typeof password, "value:", password);

    const cryptedpassword = await bcrypt.hash(String(password), 10);

    console.log("original:", password);
    console.log("cryptedP:", cryptedpassword);
    const data = await UserModel.create({
      name,
      email,
      password: cryptedpassword,
    });
    console.log("User created successfully!");

    const token = jwt.sign(
      { id: data._id, email: data.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    return res
      .status(200)
      .json({ data: data, token, message: "User created successfully!" });
  } catch (error) {
    console.log("Error registering user:", error);
    return res.status(500).json({ message: "Server error!" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Both fields are required");
    return res.status(400).json({ message: "Both fields are required" });
  }

  try {
    const user = await UserModel.findOne({ email });
    // console.log(user);
    if (!user) {
      console.log("user not found");
      return res.status(400).json({ message: "User Not found!" });
    }

    const matchPassword = await bcrypt.compare(String(password), user.password);
    console.log("password matched:", matchPassword);

    if (!matchPassword) {
      console.log("wrong password is entered.");
      return res.status(400).json({ message: "Password does not match!" });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    console.log("Login successfully!");
    return res.status(200).json({
      message: "Login Succsfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error while Login:", error);
    return res.status(500).json({ message: "server errssssssor" });
  }
};

export { registerUser, loginUser };
