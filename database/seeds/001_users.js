const bcrypt = require("bcryptjs");
let hash = bcrypt.hashSync("password", 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstName: "Bob",
          lastName: "Ross",
          email: "admin@email.com",
          password: hash,
          admin: true
        },
        {
          firstName: "Bob",
          lastName: "Ross",
          email: "test@email.com",
          password: hash
        }
      ]);
    });
};
