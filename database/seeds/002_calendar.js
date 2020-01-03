exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("calendar")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("calendar").insert([
        { users_id: 2, date: "2020-01-02", meals: 5 },
        { users_id: 3, date: "2020-01-03", meals: 3 },
        { users_id: 4, date: "2020-01-06", meals: 2 },
        { users_id: 5, date: "2020-01-07", meals: 6 },
        { users_id: 6, date: "2020-01-08", meals: 6 },
        { users_id: 7, date: "2020-01-09", meals: 6 },
        { users_id: 8, date: "2020-01-13", meals: 6 },
        { users_id: 9, date: "2020-01-14", meals: 6 },
        { users_id: 2, date: "2020-01-15", meals: 6 }
      ]);
    });
};
