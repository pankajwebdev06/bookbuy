const express = require("express");
const { getProfile } = require("../controller/profileController");
const authMiddleware = require("../middleWare/authMiddleware");

const router = express.Router();

// Protect the profile route with authentication middleware
router.get("/api/users/profile", authMiddleware, getProfile);

module.exports = router;
