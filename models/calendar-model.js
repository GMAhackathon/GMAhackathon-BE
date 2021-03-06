const db = require("../config/dbConfig.js");

// GET ALL APPOINTMENTS FOR User
const findAllAppointmentsById = id => {
  return db("calendar").where("users_id", id);
};

const getAll = () => {
  return db("calendar");
};

// GET APPOINTMENTS WITHIN A RANGE
const getAppointment = (start, end) => {
  //return db("calendar").where("date").between(start, end)
  //SQL RAW METHOD
  return db.raw(
    `SELECT * FROM calendar WHERE date BETWEEN DATE ${start} AND ${end}`
  );
};

// ADD APPOINTMENT
const addAppointment = appointment => {
  return db("calendar").insert(appointment, "id");
};

// DELETE APPOINTMENT
const deleteAppointment = id => {
  return db("calendar")
    .where("id", id)
    .del();
};

module.exports = {
  findAllAppointmentsById,
  getAppointment,
  addAppointment,
  deleteAppointment,
  getAll
  // findAppointmentById
};
