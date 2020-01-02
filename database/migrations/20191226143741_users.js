exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl.string("firstName").notNullable();
    tbl.string("lastName").notNullable();
    tbl.string("email").notNullable();
    tbl.string("password").notNullable();
    tbl.integer("familySize");
    tbl.boolean("admin").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
