const router = require("express").Router();

const protected = require("../auth/restricted-middleware.js");

const calendarDB = require("../models/calendar-model.js");
const usersDB = require("../models/users-model.js");

//  ADD APPOINTMENT
router.post("/appointments", protected, async (req, res) => {
  const user_id = req.user_id;
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
