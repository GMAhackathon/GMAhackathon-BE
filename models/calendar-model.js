const db = require("../config/dbConfig.js");

// GET ALL APPOINTMENTS FOR SPECIFIC DOCTOR
const findAllAppointmentsById = id => {
  return db("calendar").where("user_id", id);

  //SQL RAW METHOD
  // return db.raw(`SELECT * FROM users
  //                  WHERE id = ${id}`);
};

<<<<<<< HEAD
const getAll = () => {
  return db("calendar");
};
=======
// GET APPOINTMENTS WITHIN A RANGE
const getAppointment = (start, end) => {
  //return db("calendar").where("date").between(start, end)
  //SQL RAW METHOD
  return db.raw(`SELECT * FROM calendar WHERE date BETWEEN DATE ${start} AND ${end}`);
}
>>>>>>> f9bab802864eedb0143c81c469bffee4df4280aa

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
  getAppointment,
  addAppointment,
  deleteAppointment,
  getAll
};
