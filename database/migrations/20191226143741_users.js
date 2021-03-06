exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    //Parent
    tbl.string("firstName").notNullable();
    tbl.string("lastName").notNullable();

    // Login Credentials
    tbl
      .string("email")
      .notNullable()
      .unique();
    tbl.string("password").notNullable();

    tbl.integer("familySize");

    // Admin Role
    tbl.boolean("admin").defaultTo(false);

    // Current Reservation
    tbl.date("current");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
