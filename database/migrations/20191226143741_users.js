exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    //Parent
    tbl.string("firstName").notNullable();
    tbl.string("lastName").notNullable();

    // Login Credentials
    tbl.string("email").notNullable().uni;
    tbl.string("password").notNullable();

    tbl.integer("familySize");

    // Admin Role
    tbl.boolean("admin").defaultTo(false);

    // Current Reservation
    tbl.string("current");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
