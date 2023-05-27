const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      req.userId = decoded.userId;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = authMiddleware;
