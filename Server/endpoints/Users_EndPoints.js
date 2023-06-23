const express = require("express");
const router = express.Router();

// Models
const userModel = require("../models/Users");
// Middlewares

const auth = require("../middlewares/AuthMiddleware");

router.get("/users", auth, async (req, res, next) => {
  const allUsers = await UserModel.find();
  return res.status(200).json(allUsers);
});

module.exports = router;
