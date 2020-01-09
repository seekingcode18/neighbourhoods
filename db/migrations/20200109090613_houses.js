exports.up = function(knex, promise) {
  return knex.schema.createTable("houses", function(table) {
    table.increments();
    table.string("address_id").notNullable();
    table.integer("number_of_occupants").notNullable();
  });
};

exports.down = function(knex, promise) {
  return knex.schema.dropTable("houses");
};
