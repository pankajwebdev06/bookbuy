const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// Define routes
router.get("/", (req, res) => {
  // Handle GET request for '/api'
  res.json("Hello, this is api route");
});

router.post("/api/users/register", authController.register);
router.post("/api/users/login", authController.login);
router.post("/api/users/logout", authController.logout);

module.exports = router;
