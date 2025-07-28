const express = require("express");

const userModel = require("../models/user.model");

const router = express.Router();

// regiter routes for user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username,
    password,
  });

  res.status(201).json({
    message: "User Registered Successfully",
    user,
  });
});

module.exports = router;
