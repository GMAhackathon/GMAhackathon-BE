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

// INSERT Student INTO DB
router.post("/", protected, async (req, res) => {
  const newStudent = req.body;
  try {
    const student = await studentDB.addStudent(newStudent);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ err: "Error in adding student" });
  }
});

router.delete("/:id", protected, async (req, res) => {
  const studentId = req.params.id;
  try {
    const deleting = await studentDB.removeStudent(studentId);
    res.status(204).json(deleting);
  } catch (err) {
    res.status(500).json({ err: "Error in deleting student" });
  }
});

module.exports = router;
