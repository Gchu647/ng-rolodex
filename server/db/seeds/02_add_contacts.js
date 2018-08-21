
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {name: 'turtle', address:'151 Kapahulu Ave, Honolulu, HI 96815', mobile: '(808) 971-7171', email: 'turtle@zoo.com', created_by: '1'},
        {name: 'lion', address:'151 Kapahulu Ave, Honolulu, HI 96815', mobile: '(808) 971-7171', email: 'lion@zoo.com', created_by: '1'},
        {name: 'rabbit', address:'151 Kapahulu Ave, Honolulu, HI 96815', mobile: '(808) 971-7171', email: 'rabbit@zoo.com', created_by: '2'},
        {name: 'kingkong', address:'151 Kapahulu Ave, Honolulu, HI 96815', mobile: '(808) 971-7171', email: 'kingkong@zoo.com', created_by: '2'},
      ]);
    });
};
