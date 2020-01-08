
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert({
        id: 1,
        name: 'Smith',
        age: 30
      });
    });
};
