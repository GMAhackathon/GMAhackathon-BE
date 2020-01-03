const db = require("../config/dbConfig.js");

// GET ALL APPOINTMENTS FOR SPECIFIC DOCTOR
const findAllAppointmentsById = id => {
  return db("calendar").where("user_id", id);

  //SQL RAW METHOD
  // return db.raw(`SELECT * FROM users
  //                  WHERE id = ${id}`);
};

// ADD APPOINTMENT
const addAppointment = appointment => {
  return db("appointments").insert(appointment, "id");
};

// DELETE APPOINTMENT
const deleteAppointment = id => {
  return db("appointments")
    .where("id", id)
    .del();
};

module.exports = {
  findAllAppointmentsById,
  addAppointment,
  deleteAppointment
};
