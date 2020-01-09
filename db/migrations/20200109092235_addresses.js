exports.up = function(knex, promise) {
  return knex.schema.createTable("addresses", function(table) {
    table.increments();
    table.integer("flat_number");
    table.integer("street_number").notNullable();
    table.string("building_name");
    table.string("street_name").notNullable();
    table.string("postcode").notNullable();
  });
};

exports.down = function(knex, promise) {
  return knex.schema.dropTable("addresses");
};
