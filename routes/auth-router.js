const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../models/users-model.js");

const generateToken = require("../auth/token.js");

/**
 * Method: POST
 * Endpoint: /api/auth/register
 * Requires: `req.body: email`, `req.body: password`
 * Returns: 200
 */

router.post("/register", async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  try {
    let addUser = await User.addUser(user);
    res.status(201).json(addUser);
  } catch (err) {
    res.status(500).json({ message: "Error registering user: " + err });
  }
});

/**
 * Method: POST
 * Endpoint: /api/volunteer/login
 * Requires: `req.body: email`, `req.body: password`
 * Returns: Json Token if user logs in successfully
 */
router.post("/login", (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  if (!email && !password) {
    res.status(401).json({ error: "Wrong password or username" });
  } else {
    User.findByFilter({ email })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          console.log(token);

          res.status(200).json({
            message: `Welcome ${user.firstName}!!`,
            token,
            id: user.id,
            admin: user.admin
          });
        } else {
          res.status(400).json({ error: "please provide credentials" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
});

// For Hash
router.get("/hash", (req, res) => {
  const password = req.headers.authorization;

  if (password) {
    const hash = bcrypt.hashSync(password, 10);
    res.status(200).json({ hash });
  } else {
    res.status(400).json({ error: "Please provide credentials" });
  }
});

module.exports = router;
