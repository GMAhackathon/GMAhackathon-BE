exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        {
          firstName: "Bob",
          lastName: "Ross",
          users_id: 1
        },
        {
          firstName: "John",
          lastName: "Ross",
          users_id: 1
        }
      ]);
    });
};
