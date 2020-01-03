exports.up = function(knex, Promise) {
  return knex.schema.createTable("calendar", tbl => {
    tbl.increments();

    tbl
      .integer("users_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // yyyy-mm-dd
    tbl.date("date").notNullable();

    tbl.integer("meals").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("calendar");
};
