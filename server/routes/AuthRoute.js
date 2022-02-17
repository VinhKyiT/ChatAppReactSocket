const router = require("express").Router();
const AuthController = require("../controllers/AuthControllers");

//Register
router.post("/register", AuthController.registerUser);
//Login
router.post("/login", AuthController.loginUser);

module.exports = router;
