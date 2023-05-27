const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

//for register user
const register = async (req, res) => {
  try {
    const { fullName, email, password, showPassword } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "user already exist" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({
        fullName,
        email,
        password: hashedPassword,
        showPassword,
      });

      res.status(201).json({ message: "User registered successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to register user." });
  }
};

//for login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //checking user available or not
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password." });
      } else {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, {
          // expires: new Date(Date.now() + 600000),
          httpOnly: true,
          sameSite: "none",
          secure: true,
        });
        res.status(200).json({ message: "Login successful." });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to login." });
  }
};

const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  res.status(200).json("Logout successful");
};

module.exports = { register, login, logout };
