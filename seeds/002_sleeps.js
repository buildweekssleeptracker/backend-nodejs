
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sleeps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        // {
        //   user_Id: 1,
        //   timeInBed: 
        // }
      ]);
    });
};
