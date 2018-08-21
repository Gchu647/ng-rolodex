
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {    
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {id: 1, username: 'user1', name: 'monkey', email: 'monkey@zoo.com', address:'151 Kapahulu Ave, Honolulu, HI 96815'},
          {id: 2, username: 'user2', name: 'kangaroo', email: 'kangaroo@zoo.com', address:'151 Kapahulu Ave, Honolulu, HI 96815'},
          {id: 3, username: 'user3', name: 'turtle', email: 'turtle@zoo.com', address:'151 Kapahulu Ave, Honolulu, HI 96815'},
        ]);
    });
  });
};
