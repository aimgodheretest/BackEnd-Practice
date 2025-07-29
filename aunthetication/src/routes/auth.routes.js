const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// regiter routes for user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username,
    password,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.status(201).json({
    message: "User Registered Successfully",
    user,
    token,
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userExist = await userModel.findOne({
    username: username,
  });

  if (!userExist) {
    return res.status(401).json({
      message: "Invalid User",
    });
  }

  const isPasswordValid = password == userExist.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  }

  res.status(200).json({
    message: "User Login Successfully",
  });
});

module.exports = router;
