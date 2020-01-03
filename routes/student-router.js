const router = require("express").Router();

const usersDB = require("../models/users-model.js");
const studentDB = require("../models/student-model.js");

// Middleware
const protected = require("../auth/restricted-middleware.js");

// GET ALL STUDENTS
router.get("/", protected, async (req, res) => {
  try {
    const students = await studentDB.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

module.exports = router;
