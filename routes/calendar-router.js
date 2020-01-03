const router = require("express").Router();

const protected = require("../auth/restricted-middleware.js");

const calendarDB = require("../models/calendar-model.js");
const usersDB = require("../models/users-model.js");

// GET ALL APPOINTMENTS
router.get("/", protected, async (req, res) => {
  try {
    const allAppointments = await calendarDB.getAll();
    res.status(200).json(allAppointments);
  } catch (err) {
    res.status(500).json({ err: err });
  }
})

// GET APPOINTMENT
router.get("/appointments", protected, async (req, res) => {
  let start = req.body.start,
    end = req.body.end;
  try {
    const appointments = await calendarDB.getAppointment(start, end);
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

//  ADD APPOINTMENT
router.post("/appointments", protected, async (req, res) => {
  const user_id = req.body.user_id;
  let newAppointment = req.body;
  console.log(newAppointment);

  try {
    const addAppointment = await calendarDB.addAppointment(newAppointment);
    const updateCurrentRes = await usersDB.updateUser(user_id, {
      current: newAppointment.date
    });
    if (addAppointment && updateCurrentRes) {
      res.status(201).json({ success: "You reservation has been added" });
    }
  } catch (err) {
    res.status(500).json({ err: "Error in adding appointment" });
  }
});

// DELETE APPOINTMENT
router.delete("/appointments/:id", async (req, res) => {
  const appointmentId = req.params.id;
  try {
    const deleting = await calendarDB.deleteAppointment(appointmentId);
    res.status(204).json(deleting);
  } catch (err) {
    res.status(500).json({ err: "Error in deleting appointment" });
  }
});

module.exports = router;
