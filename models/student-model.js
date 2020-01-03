const db = require("../config/dbConfig.js");

// GET ALL STUDENTS
const find = () => {
  return db("students");
};

// GET SPECIFIC STUDENT BY ID
const findById = id => {
  return db("students").where("id", id);

  //SQL RAW METHOD
  // return db.raw(`SELECT * FROM students
  //                  WHERE id = ${id}`);
};

// GET SPECIFIC STUDENT BY FILTER
const findByFilter = filter => {
  return db("students")
    .first()
    .where(filter);
};

// ADD A STUDENT
const addStudent = student => {
  return db("students").insert(student, "id");
};

// ADD MULTIPLE STUDENTS
// students is an arr of objects
const addStudents = students => {
  return db("students").insert(students);
};

// UPDATE STUDENT
const updateStudent = (id, post) => {
  return db("students")
    .where("id", id)
    .update(post);
};

// REMOVE STUDENT
const removeStudent = id => {
  return db("students")
    .where("id", id)
    .del();
};

// Get all students under user
const getParentsStudents = id => {
  return db("students").where("users_id", id);
};

module.exports = {
  find,
  findById,
  addStudent,
  updateStudent,
  removeStudent,
  findByFilter,
  addStudents,
  getParentsStudents
};
