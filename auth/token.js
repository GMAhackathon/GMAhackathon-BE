const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

function generateToken(user) {
  const payload = {
    username: user.email,
    subject: user.id,
    admin: user.admin
  };
  const options = {
    expiresIn: "4d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = generateToken;
