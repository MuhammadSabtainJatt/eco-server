const express = require("express");
const router = express.Router();
const User = require("../Models/AuthUserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const userData = new User({
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await userData.save();
    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    console.error("Registration failed:", error.message);
    res.status(400).json({ message: "Registration failed. Please try again." });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "Authentication failed" });
    }

    const passwordMatched = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatched) {
      return res.status(404).json({ message: "Authentication failed" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "User logged in!", token });
  } catch (error) {
    console.error("Login failed:", error.message);
    res.status(500).json({ message: "Login failed. Please try again." });
  }
});

module.exports = router;
