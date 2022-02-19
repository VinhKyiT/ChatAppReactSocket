const { signedCookies } = require("cookie-parser");
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.signedCookies;
  console.log(signedCookies);
};

module.exports = authentication;
