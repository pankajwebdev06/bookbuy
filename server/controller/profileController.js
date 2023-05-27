const User = require("../models/User");

const getProfile = async (req, res) => {
  // console.log(req.cookies.token);
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching profile" });
  }
};

module.exports = {
  getProfile,
};
