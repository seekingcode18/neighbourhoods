exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("addresses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("addresses").insert({
        id: 1,
        flat_number: 1,
        street_number: 43,
        building_name: "the ministry",
        street_name: "bourough road",
        postcode: "se1 2tf"
      });
    });
};
