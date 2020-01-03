exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("calendar")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("calendar").insert([
        { users_id: 2, date: "2020-01-06", meals: 3 },
      ]);
    });
};
