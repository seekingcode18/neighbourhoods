exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("houses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("houses").insert({
        id: 1,
        address_id: 1,
        number_of_occupants: 4
      });
    });
};
