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
        },
        {
          firstName: "Joe",
          lastName: "Ross",
          email: "test1@email.com",
          password: hash
        },
        {
          firstName: "Toe",
          lastName: "Ross",
          email: "test2@email.com",
          password: hash
        },
        {
          firstName: "Man",
          lastName: "Ross",
          email: "test3@email.com",
          password: hash
        },
        {
          firstName: "Laugh",
          lastName: "Ross",
          email: "test4@email.com",
          password: hash
        },
        {
          firstName: "New",
          lastName: "Ross",
          email: "test5@email.com",
          password: hash
        },
        {
          firstName: "Lorry",
          lastName: "Ross",
          email: "test6@email.com",
          password: hash
        },
        {
          firstName: "Feeny",
          lastName: "Ross",
          email: "test7@email.com",
          password: hash
        }
      ]);
    });
};
