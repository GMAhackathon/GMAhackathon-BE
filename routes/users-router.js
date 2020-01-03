const router = require("express").Router();

const usersDB = require("../models/users-model.js");
const calendarDB = require("../models/calendar-model.js");
const studentDB = require("../models/student-model.js");

// Middleware
const protected = require("../auth/restricted-middleware.js");

// GET ALL USERS
router.get("/", protected, async (req, res) => {
  try {
    const users = await usersDB.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

// GET USER AND STUDENTS BY ID
router.get("/:id", protected, async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await usersDB.findById(userId);
    const students = await studentDB.getParentsStudents(userId);
    res.status(200).json({ user, students: students });
    if (!user) {
      res
        .status(404)
        .json({ err: "The user with the specified id does not exist" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status({ err: "The user information could not be retrieved" });
  }
});

// INSERT USER INTO DB
router.post("/", protected, async (req, res) => {
  const newUser = req.body;
  try {
    const user = await usersDB.addUser(newUser);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ err: "Error in adding user" });
  }
});

// UPDATE USER
router.put("/:id", protected, async (req, res) => {
  const userId = req.params.id;
  const newChanges = req.body;

  try {
    const addChanges = await usersDB.updateUser(userId, newChanges);
    res.status(200).json(addChanges);
  } catch (err) {
    res.status(500).json({ err: "Error in updating user" });
  }
});

// DELETE USER
router.delete("/:id", protected, async (req, res) => {
  const userId = req.params.id;
  try {
    const deleting = await usersDB.removeUser(userId);
    res.status(204).json(deleting);
  } catch (err) {
    res.status(500).json({ err: "Error in deleting user" });
  }
});

// Get appointment for user
router.get("/:id/appointments", protected, async (req, res) => {
  const userId = req.params.id;
  try {
    const getAppt = await calendarDB.findAllAppointmentsById(userId);
    res.status(200).json(getAppt);
  } catch (err) {
    res.status(500).json({ err: "Error in user appointment" });
  }
});

// Get students by userid
router.get("/:id/students", protected, async (req, res) => {
  const userId = req.params.id;
  console.log(userId);

  try {
    const getStudents = await studentDB.getParentsStudents(userId);
    res.status(200).json(getStudents);
  } catch (err) {
    res.status(500).json({ err: "Error in retrieving students" });
  }
});

module.exports = router;
