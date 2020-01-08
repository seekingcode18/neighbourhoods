
exports.up = function(knex, promise) {
  return knex.schema.createTable("people", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.integer("age").notNullable();
  })
};

exports.down = function(knex, promise) {
  return knex.schema.dropTable("people");
};
