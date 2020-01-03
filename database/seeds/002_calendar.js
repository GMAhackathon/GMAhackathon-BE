
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('calendar')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('calendar').insert([
        {users_id: 1, date: '2020-01-02', meals: 5},
        {users_id: 1, date: '2020-01-03', meals: 3},
        {users_id: 1, date: '2020-01-04', meals: 2},
        {users_id: 1, date: '2020-01-05', meals: 6},
      ]);
    });
};
