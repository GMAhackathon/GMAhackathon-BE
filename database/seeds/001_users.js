exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { firstName: "Bob", lastName: "Ross", email: "bobross@email.com", password: "testingPassword", admin: true},
      ]);
    });
};
