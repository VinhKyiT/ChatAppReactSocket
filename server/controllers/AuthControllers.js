const User = require("../models/User");
const bcrypt = require("bcrypt");
const authMiddleware = require("../middlewares/auth");
const jwt = require("jsonwebtoken");

module.exports.registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(404).json({ message: "User not found" });
    else {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(401).json({ message: "Invalid password" });
      } else {
        const token = jwt.sign(
          { user_id: user._id, email: user.email },
          process.env.JWT_SECRET,
          {
            expiresIn: "2h",
          }
        );
        res
          .cookie("token", token, {
            maxAge: 7200 * 1000, //2 hours
            httpOnly: true,
            secure: true,
          })
          .status(200)
          .json({ message: "Login successful", userId: user._id, token });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
